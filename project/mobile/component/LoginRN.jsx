import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { PSCheckboxMobil, PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { text_to_aes } from '@utils/passwordHasher';
import {
  LoginUserAction,
  LoginUserResetAction,
  ResendMailAction,
} from '@service/actions/F_Actions';
import { Ui_LoginAction } from '@service/actions/Ui_F_Actions';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { phoneNumberControl } from '@f/utils/phoneNumberControl';
import _styles from '../src/styles/registerStyle';
import { tcNumberControl } from '@f/utils/tcNumberControl.util';
const GetEnv = require('@envFile');

const LoginRN = ({
  loginReducer,
  bottomMessageIsOpen,
  bottomMessage,
  buttonState,
  bottomMessageType,
  LoginUserReset,
  token,
  userName,
  pass,
  checkRememberMe,
  ticketChecks,
  UiLoginAction,
  ResendMailA,
  resendMessage,
  resendMainState,
  resendMessageType,
  resendIsOpen,
  resendCurrentStatus,
  navigation,
}) => {
  const { t } = useTranslation();
  const [emailConst, setEmailConst] = useState('');
  const [resendMail, setResendMail] = useState(false);
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const initialValues = {
    username: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.lazy((value) => {
        if (value) {
          const splitVal = value.toString().split('');

          if (splitVal.includes('@')) {
            return Yup.string().email(t('Register_Error_Text_5'));
          }

          if (!isCyprus) {
            if (splitVal.length === 11) {
              if (value.toString().charAt(0) === '0') {
                return Yup.mixed().test(
                  'tcNumber',
                  t('Register_Error_Text_17'),
                  (item) => tcNumberControl(item)
                );
              }

              return Yup.mixed().test(
                'tcNumber',
                t('Register_Error_Text_12'),
                (item) => tcNumberControl(item)
              );
            }
          }

          if (splitVal.length === 10) {
            return Yup.mixed().test(
              'telefon',
              t('Login_Error_Text_1'),
              (item) => phoneNumberControl(item)
            );
          }
        }

        return Yup.string()
          .min(3, t('Login_Error_Text_2'))
          .required(t('Register_Field_Text_9'));
      }),
      password: Yup.string()
        .min(8, t('Register_Error_Text_7'))
        .max(50, t('Register_Error_Text_13'))
        .required(t('Register_Field_Text_9')),
      rememberMe: Yup.string(),
    });
  };

  const loginReducerApi = (body) => {
    setEmailConst(body.username);

    const pass = text_to_aes(body.password);

    return loginReducer({
      username: body.username,
      hashedPassword: `${pass.iv}.${pass.hash}`,
      langID: 1,
      rememberMe: body.rememberMe,
    });
  };

  useEffect(() => {
    if (bottomMessage == '-450') {
      return setResendMail(true);
    }

    return setResendMail(false);
  }, [bottomMessage]);

  useEffect(() => {
    if (token !== '') {
      return console.log('sad');
    }

    LoginUserReset();
  }, []);

  useEffect(() => {
    if (bottomMessageType === 'success') {
      UiLoginAction({
        isOpen: false,
        message: '',
        messageType: '',
        mainState: 'initial',
      });
    }
  }, [bottomMessageType]);

  return (
    <View style={[_styles.loginRN]}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return loginReducerApi(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <View style={_styles.formContainer}>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Register_Title_1')}</Text>
            </View>
            <Field
              name="username"
              label={t(
                isCyprus ? 'Register_Field_Text_5.1' : 'Register_Field_Text_5'
              )}
              placeholder={t(
                isCyprus ? 'Register_Field_Text_5.1' : 'Register_Field_Text_5'
              )}
              type="text"
              component={PSInputMobil}
              value={values.username}
              onChange={(value) => setFieldValue('username', value)}
            />
            <Field
              name="password"
              secureTextEntry
              label={t('Register_Field_Text_7')}
              placeholder={t('Register_Field_Text_7')}
              component={PSInputMobil}
              value={values.password}
              onChange={(value) => setFieldValue('password', value)}
            />
            <View style={_styles.inputSub}>
              <Text
                style={_styles.inputLinkText}
                onPress={() => navigation.navigate('forgetPassword')}
              >
                {t('forgetMyPassword')}
              </Text>
              <Text
                style={_styles.inputLinkText}
                onPress={() => navigation.navigate('register')}
              >
                {t('clickForRegister')}
              </Text>
            </View>
            <Field
              name="rememberMe"
              label={`${t('Register_Field_Text_17')}`}
              component={PSCheckboxMobil}
              value={values.rememberMe}
              onChange={(value) => setFieldValue('rememberMe', value)}
            />
            <ButtonCLR
              tText="Register_Button_2"
              mainState={buttonState}
              whenResultCameSuccessDisabled
              onPressF={handleSubmit}
            />
            {bottomMessageIsOpen ? (
              <MessagesUtil
                messageType={bottomMessageType}
                tText={
                  isCyprus && bottomMessage === -450 ? -450.1 : bottomMessage
                }
                isShow={bottomMessageIsOpen}
                pageName="login"
              />
            ) : (
              <View />
            )}
          </View>
        )}
      </Formik>
    </View>
  );
};

LoginRN.propTypes = exact({
  bottomMessageIsOpen: PropTypes.bool,
  bottomMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  buttonState: PropTypes.string,
  bottomMessageType: PropTypes.string,
  loginReducer: PropTypes.func,
  UiLoginAction: PropTypes.func,
  LoginUserReset: PropTypes.func.isRequired,
  token: PropTypes.string,
  userName: PropTypes.string,
  pass: PropTypes.string,
  checkRememberMe: PropTypes.bool,
  ticketChecks: PropTypes.bool,
  resendIsOpen: PropTypes.bool,
  resendMainState: PropTypes.string,
  resendMessageType: PropTypes.string,
  resendMessage: PropTypes.string,
  resendCurrentStatus: PropTypes.string,
  ResendMailA: PropTypes.func,
});

LoginRN.defaultProps = {
  bottomMessageIsOpen: false,
  bottomMessage: 0,
  buttonState: 'initial',
  bottomMessageType: '',
  loginReducer: () => {},
  UiLoginAction: () => {},
  token: '',
  userName: '',
  pass: '',
  checkRememberMe: false,
  ticketChecks: false,
  resendIsOpen: false,
  resendMainState: 'initial',
  resendCurrentStatus: '',
  resendMessage: '',
  resendMessageType: '',
  ResendMailA: () => {},
};

const mapStateToProps = (state) => {
  return {
    bottomMessageIsOpen: state.Ui_F_LoginReducer.isOpen,
    bottomMessage: state.Ui_F_LoginReducer.message,
    bottomMessageType: state.Ui_F_LoginReducer.messageType,
    buttonState: state.Ui_F_LoginReducer.mainState,
    token: state.UserReducer.token,
    userName: state.UserReducer.userName,
    pass: state.UserReducer.pass,
    checkRememberMe: state.UserReducer.rememberMe,
    resendIsOpen: state.Ui_F_ResendMailReducer.isOpen,
    resendMessage: state.Ui_F_ResendMailReducer.message,
    resendMessageType: state.Ui_F_ResendMailReducer.messageType,
    resendMainState: state.Ui_F_ResendMailReducer.mainState,
    resendCurrentStatus: state.Ui_F_ResendMailReducer.currentStatus,
  };
};

const mapDispatchToProps = {
  loginReducer: LoginUserAction,
  LoginUserReset: LoginUserResetAction,
  UiLoginAction: Ui_LoginAction,
  ResendMailA: ResendMailAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRN);
