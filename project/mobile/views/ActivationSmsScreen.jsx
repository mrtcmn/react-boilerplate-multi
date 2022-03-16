import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import {
  Ui_ResendSmsAction,
  Ui_ResendSmsButtonAction,
  Ui_SmsVerifyAction,
  Ui_SmsVerifyButtonAction,
} from '@service/actions/Ui_F_Actions';
import {
  ResendSmsAction,
  SignOutAction,
  SmsVerifyAction,
} from '@service/actions/F_Actions';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import { StackActions } from '@react-navigation/native';
import _styles from '../src/styles/common';

const initialValues = {
  activationCode: '',
};

const validationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    activationCode: Yup.number().required(t('Register_Field_Text_9')),
  });
};

let routeTimeOut;
const ActivationSmsScreen = ({
  postSmsVerify,
  getResendSms,
  isOpenV,
  messageV,
  messageTypeV,
  mainStateV,
  isOpenR,
  messageR,
  messageTypeR,
  mainStateR,
  Ui_SmsVerify,
  Ui_SmsVerifyButton,
  Ui_ResendSms,
  Ui_ResendSmsButton,
  SignOut,
  isOpen,
  message,
  messageType,
  mainState,
  userReducer,
  navigation,
}) => {
  const { t } = useTranslation();
  // const history = useHistory();
  // const location = useLocation();
  const [timeLeft, setTimeLeft] = useState(0);
  const clickResendSms = () => {
    return getResendSms();
  };

  const signOutButton = () => {
    return SignOut();
  };

  useEffect(() => {
    if (!(userReducer && userReducer.token)) {
      navigation.navigate('homepage');
      // return history.push(RouterPathsConst.root);
    }
  }, []);

  useEffect(() => {
    if (messageType === 'success') {
      navigation.dispatch(StackActions.replace('login'));
    }
  }, [messageType]);

  useEffect(() => {
    if (messageTypeV === 'success') {
      routeTimeOut = setTimeout(() => {
        Ui_SmsVerify({ isOpen: false, message: '', messageType: '' });
        Ui_SmsVerifyButton({ mainState: 'initial' });
        navigation.navigate('profileMenu');
        // return history.push({
        //   pathname: RouterPathsConst.root,
        //   state: { smsActivation: 1 },
        // });
      }, 2000);
    }

    return () => {
      clearTimeout(routeTimeOut);
    };
  }, [messageTypeV]);

  useEffect(() => {
    // exit early when we reach 0
    if (mainStateR === 'res-success') {
      if (!timeLeft) {
        Ui_ResendSmsButton({ mainState: 'initial' });

        Ui_ResendSms({
          isOpen: false,
          message: '',
          messageType: '',
        });

        return;
      }

      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }
  }, [timeLeft]);

  useEffect(() => {
    if (mainStateR === 'res-success') {
      setTimeLeft(180);
    }
  }, [mainStateR]);

  return (
    <ScrollView>
      <View style={_styles.activationSms}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema()}
          onSubmit={(values) => {
            Ui_ResendSms({ isOpen: false, message: '', messageType: '' });

            return postSmsVerify({
              smsCode: values.activationCode,
            });
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <View style={_styles.formContainer}>
              <View style={_styles.subtitle}>
                <Text style={_styles.subtitleText}>
                  {t('Activation_Sms_Title_1')}
                </Text>
              </View>
              <MessagesUtil tText="1" messageType="info" pageName="sms" />
              <View style={_styles.inputSub}>
                <Text style={_styles.inputSubText}>
                  {t('Activation_Sms_Text_1')}
                </Text>
              </View>
              <Field
                name="activationCode"
                label={t('Activation_Field_Text_1')}
                placeholder={t('Activation_Field_Text_1')}
                type="number"
                component={PSInputMobil}
                // maxLength="32"
                value={values.activationCode}
                onChange={(e) => setFieldValue('activationCode', e)}
              />
              <ButtonCLR
                tText="Activation_Button_2"
                mainState={mainStateR}
                whenResultCameSuccessDisabled
                onPressF={() => clickResendSms()}
                disabled={
                  mainStateV === 'loading' || mainStateV === 'res-success'
                }
                timer={timeLeft}
              />
              <ButtonCLR
                tText="Activation_Button_1"
                mainState={mainStateV}
                whenResultCameSuccessDisabled
                onPressF={handleSubmit}
              />
              <ButtonCLR
                tText="Activation_Button_3"
                mainState={mainState}
                whenResultCameSuccessDisabled
                onPressF={() => {
                  signOutButton();
                }}
              />
              {isOpen && messageType === 'warning' ? (
                <MessagesUtil
                  isShow={isOpen}
                  tText={message}
                  messageType={messageType}
                />
              ) : null}
              {isOpenV && messageTypeR === '' ? (
                <MessagesUtil
                  isShow={isOpenV}
                  tText={messageV}
                  messageType={messageTypeV}
                  pageName="smsVerify"
                />
              ) : null}
              {isOpenR && messageTypeV !== 'success' ? (
                <MessagesUtil
                  isShow={isOpenR}
                  tText={messageR}
                  messageType={messageTypeR}
                  pageName="resendSms"
                />
              ) : null}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

ActivationSmsScreen.propTypes = exact({
  postSmsVerify: PropTypes.func,
  getResendSms: PropTypes.func,
  isOpenV: PropTypes.bool,
  messageV: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  messageTypeV: PropTypes.string,
  mainStateV: PropTypes.string,
  isOpenR: PropTypes.bool,
  messageR: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  messageTypeR: PropTypes.string,
  mainStateR: PropTypes.string,
  Ui_SmsVerify: PropTypes.func.isRequired,
  Ui_SmsVerifyButton: PropTypes.func.isRequired,
  Ui_ResendSms: PropTypes.func,
  Ui_ResendSmsButton: PropTypes.func,
  SignOut: PropTypes.func,
  isOpen: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  messageType: PropTypes.string,
  mainState: PropTypes.string,
  userReducer: PropTypes.object,
});
ActivationSmsScreen.defaultProps = {
  isOpenV: false,
  messageV: '',
  messageTypeV: '',
  mainStateV: '',
  isOpenR: false,
  messageR: '',
  messageTypeR: '',
  mainStateR: '',
  postSmsVerify: () => {},
  getResendSms: () => {},
  Ui_ResendSmsButton: () => {},
  Ui_ResendSms: () => {},
  SignOut: () => {},
  isOpen: false,
  message: 0,
  messageType: 'initial',
  mainState: 'initial',
  userReducer: {},
};

const mapStateToProps = (state) => {
  return {
    isOpenV: state.Ui_F_SmsVerifyReducer.isOpen,
    messageV: state.Ui_F_SmsVerifyReducer.message,
    messageTypeV: state.Ui_F_SmsVerifyReducer.messageType,
    mainStateV: state.Ui_F_SmsVerifyButtonReducer.mainState,
    isOpenR: state.Ui_F_ResendSmsReducer.isOpen,
    messageR: state.Ui_F_ResendSmsReducer.message,
    messageTypeR: state.Ui_F_ResendSmsReducer.messageType,
    mainStateR: state.Ui_F_ResendSmsButtonReducer.mainState,
    userReducer: state.UserReducer,
    isOpen: state.Ui_F_SignOutReducer.isOpen,
    message: state.Ui_F_SignOutReducer.message,
    messageType: state.Ui_F_SignOutReducer.messageType,
    mainState: state.Ui_F_SignOutReducer.mainState,
  };
};

const mapDispatchToProps = {
  postSmsVerify: SmsVerifyAction,
  getResendSms: ResendSmsAction,
  Ui_SmsVerify: Ui_SmsVerifyAction,
  Ui_SmsVerifyButton: Ui_SmsVerifyButtonAction,
  Ui_ResendSms: Ui_ResendSmsAction,
  Ui_ResendSmsButton: Ui_ResendSmsButtonAction,
  SignOut: SignOutAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivationSmsScreen);
