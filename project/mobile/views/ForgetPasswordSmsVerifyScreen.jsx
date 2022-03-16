import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { Field, Formik } from 'formik';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import _styles from '@mobile/src/styles/registerStyle';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { utf8_to_b64, text_to_aes } from '@utils/passwordHasher';
import { connect } from 'react-redux';
import {
  ForgetPasswordSmsResendAction,
  ForgetPasswordSmsVerifyAction,
  ResetForgetPasswordReducerAction,
} from '@service/actions/F_Actions';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';

const initialValues = {
  activationCode: '',
  password: '',
  tryPassword: '',
};

const validationSchema = () => {
  const { t } = useTranslation();
  const strongRegex = RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/&*()\\-.+[\\]:;,?=<>%_])(?=.{8,})'
  );

  return Yup.object().shape({
    activationCode: Yup.number().required(t('Register_Field_Text_9')),
    password: Yup.string()
      .min(8, t('Register_Error_Text_7'))
      .max(50, t('Register_Error_Text_13'))
      .matches(strongRegex, t('Register_Error_Text_8'))
      .required(t('Register_Field_Text_9')),
    tryPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('Register_Error_Text_9'))
      .required(t('Register_Field_Text_9')),
  });
};

let timer;
const ForgetPasswordSmsVerifyScreen = ({
  smsButtonState,
  smsBottomMessageCode,
  smsBottomMessageIsOpen,
  smsBottomMessageType,
  FnForgetPasswordSmsVerify,
  ForgetPasswordSmsResend,
  forgetPassUserInfo,
  resendButtonState,
  ResetForgetPasswordReducer,
  navigation,
}) => {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(true);
  const [showTryPass, setShowTryPass] = useState(true);

  useEffect(() => {
    if (smsButtonState === 'res-success') {
      timer = setTimeout(() => {
        navigation.navigate('profileMenu');
      }, 3000);
    }

    if (!forgetPassUserInfo.CustomerId) {
      return navigation.navigate('forgetPassword');
    }
  }, [smsButtonState]);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
      ResetForgetPasswordReducer();
    };
  }, []);

  return (
    <ScrollView>
      <View style={[_styles.loginRN]}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema()}
          onSubmit={(values) => {
            const pass = text_to_aes(values.password);

            FnForgetPasswordSmsVerify({
              customerId: forgetPassUserInfo.CustomerId,
              smsCode: values.activationCode,
              newPass: `${pass.iv}.${pass.hash}`,
            });
          }}
        >
          {({ values, handleSubmit, touched, errors, setFieldValue }) => (
            <View>
              <View className="subtitle">
                <Text>{t('Forget_Password_1')}</Text>
              </View>
              <View className="sl-padding sl-padding-v-5">
                <Text>{t('forget_password_sms_verify_text_1')}</Text>
              </View>
              <Field
                name="activationCode"
                label={t('Forget_Password_2')}
                placeholder={t('Forget_Password_2')}
                type="number"
                component={PSInputMobil}
                // maxLength="32"
                value={values.activationCode}
                onChange={(val) => setFieldValue('activationCode', val)}
              />
              <View className="subtitle">
                <Text>{t('Register_Title_4')}</Text>
              </View>
              <Field
                name="password"
                label={t('Register_Field_Text_7')}
                placeholder={t('Register_Field_Text_7')}
                component={PSInputMobil}
                value={values.password}
                rightIcon={
                  <TextInput.Icon
                    name={showPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                secureTextEntry={showPass}
                onChange={(val) => setFieldValue('password', val)}
              />
              <View style={_styles.inputSub}>
                <Text style={_styles.inputSubText}>
                  {t('Register_Password_1')}
                </Text>
                <Text style={_styles.inputSubText}>
                  {t('Register_Password_2')}
                </Text>
                <Text style={_styles.inputSubText}>
                  {t('Register_Error_Text_7')}
                </Text>
                <Text style={_styles.inputSubText}>
                  {t('Register_Password_3')}
                </Text>
              </View>
              <Field
                name="tryPassword"
                label={t('Register_Field_Text_8')}
                placeholder={t('Register_Field_Text_8')}
                type={showTryPass ? 'text' : 'password'}
                component={PSInputMobil}
                // maxLength="50"
                value={values.tryPassword}
                // disabled={!(touched.password && !errors.password)}
                rightIcon={
                  <TextInput.Icon
                    name={showTryPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowTryPass(!showTryPass)}
                  />
                }
                onChange={(val) => setFieldValue('tryPassword', val)}
                secureTextEntry={showTryPass}
              />
              <View className="button-group sl-spacing spacing-2">
                <ButtonCLR
                  type="button"
                  tText="Activation_Button_2"
                  mainState={resendButtonState}
                  disabled={smsButtonState === 'res-success'}
                  whenResultCameSuccessDisabled
                  onClick={() =>
                    ForgetPasswordSmsResend({
                      phoneNumber: forgetPassUserInfo.phoneNumber,
                      idNumber: forgetPassUserInfo.tcNo,
                    })
                  }
                />

                <ButtonCLR
                  tText="Activation_Button_1"
                  mainState={smsButtonState}
                  whenResultCameSuccessDisabled
                  type="submit"
                  onPressF={handleSubmit}
                />
              </View>
              {smsBottomMessageIsOpen ? (
                <MessagesUtil
                  isShow={smsBottomMessageIsOpen}
                  tText={smsBottomMessageCode}
                  messageType={smsBottomMessageType}
                  pageName="forgetPasswordSmsVerify"
                />
              ) : null}
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

ForgetPasswordSmsVerifyScreen.defaultProps = {
  smsButtonState: 'initial',
  smsBottomMessageCode: 0,
  smsBottomMessageIsOpen: false,
  smsBottomMessageType: '',
  resendButtonState: 'initial',
};

ForgetPasswordSmsVerifyScreen.propTypes = {
  smsButtonState: PropTypes.string,
  smsBottomMessageCode: PropTypes.number,
  smsBottomMessageIsOpen: PropTypes.bool,
  smsBottomMessageType: PropTypes.string,
  resendButtonState: PropTypes.string,
  FnForgetPasswordSmsVerify: PropTypes.func.isRequired,
  ForgetPasswordSmsResend: PropTypes.func.isRequired,
  forgetPassUserInfo: PropTypes.object.isRequired,
  ResetForgetPasswordReducer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    smsButtonState: state.ForgetPasswordReducer.smsButtonState,
    smsBottomMessageCode: state.ForgetPasswordReducer.smsBottomMessageCode,
    smsBottomMessageIsOpen: state.ForgetPasswordReducer.smsBottomMessageIsOpen,
    smsBottomMessageType: state.ForgetPasswordReducer.smsBottomMessageType,
    resendButtonState: state.ForgetPasswordReducer.smsResendButtonState,
    forgetPassUserInfo: state.ForgetPasswordUserInfoReducer,
  };
};

const mapDispatchToProps = {
  FnForgetPasswordSmsVerify: ForgetPasswordSmsVerifyAction,
  ForgetPasswordSmsResend: ForgetPasswordSmsResendAction,
  ResetForgetPasswordReducer: ResetForgetPasswordReducerAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordSmsVerifyScreen);
