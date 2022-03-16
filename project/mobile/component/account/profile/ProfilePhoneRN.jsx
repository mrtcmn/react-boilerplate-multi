import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import * as DateFns from 'date-fns';
import { Formik, Field } from 'formik';
import { PSInputMaskMobil, PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';
import {
  HashCodeVerifyAction,
  PhoneChangeAction,
  PhoneDefaultAction,
  UserInfoAction,
} from '@service/actions/F_Actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

let timerConst;
const ProfilePhoneRN = ({
  PhoneChange,
  phoneState,
  phoneMessage,
  userData,
  phoneVerifyCodeSendSuccess,
  phoneIsResendSms,
  HashCodeVerify,
  isHashCodeVerifySucess,
  isHashCall,
  hashCodeErrorMessage,
  UserInfo,
  phoneButtonMessageIsOpen,
  phoneButtonMessageType,
  PhoneDefaultA,
  formReset,
}) => {
  const { t } = useTranslation();
  const [disableTField, setDisableTField] = useState(true);
  const [time, setTime] = useState('');
  const [resendSms, setResendSms] = useState(false);
  const [totalTime, setTotalTime] = useState(1);
  const formikRef = useRef();

  const Timer = (countDownMinute) => {
    const countDownDate = DateFns.addMinutes(
      new Date(),
      countDownMinute
    ).getTime();

    timerConst = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(
        `${minutes.toString().length === 1 ? `0${minutes}` : minutes}:${
          seconds.toString().length === 1 ? `0${seconds}` : seconds
        }`
      );
      setTotalTime(minutes + seconds);

      if (minutes + seconds <= 0) {
        clearInterval(timerConst);
      }
    }, 1000);
  };

  // #region useEffects
  useEffect(() => {
    if (phoneVerifyCodeSendSuccess) {
      Timer(3);
      setResendSms(false);
    }

    return () => clearInterval(timerConst);
  }, [phoneVerifyCodeSendSuccess, phoneIsResendSms]);

  useEffect(() => {
    if (isHashCodeVerifySucess) {
      setDisableTField(true);
      UserInfo();
    }
  }, [isHashCodeVerifySucess]);

  useEffect(() => {
    return () => PhoneDefaultA();
  }, []);

  useEffect(() => {
    if (formReset === 'hashCode') {
      formikRef.current.setFieldValue('telephoneNumber', '');
      formikRef.current.setFieldValue('txtConfirmationCode', '');
    }
  }, [formReset]);
  // #endregion

  return (
    <Formik
      enableReinitialize
      innerRef={formikRef}
      initialValues={{
        telephoneNumber: '',
        oldPhone: userData.PhoneNumber,
        txtConfirmationCode: '',
      }}
      validationSchema={() =>
        Yup.object().shape({
          telephoneNumber: Yup.lazy((value) => {
            if (value) {
              if (value.toString().length === 15) {
                return Yup.mixed().test(
                  'telephoneNumber',
                  t('message_ui_util_Sms_telephone'),
                  (item) =>
                    item.replace(/[^\d]/g, '') !== Number(userData.PhoneNumber)
                );
              }

              return Yup.mixed().test(
                'telephoneNumber',
                t('message_ui_util_telephone_length'),
                (item) => item.replace(/[^\d]/g, '').length === 10
              );
            }

            return Yup.number().required(t('Register_Field_Text_9'));
          }),
        })
      }
      onSubmit={(values) => {
        clearInterval(timerConst);
        if (phoneVerifyCodeSendSuccess) {
          HashCodeVerify({
            newValue: values.telephoneNumber.replace(/[^\d]/g, ''),
            hasCode: values.txtConfirmationCode,
            activityCode: 1,
          });
        } else {
          PhoneChange({
            newValue: values.telephoneNumber.replace(/[^\d]/g, ''),
            activityCode: 1,
            isResendSms: false,
          });
        }
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <View>
          <Field
            name="oldPhone"
            component={PSInputMaskMobil}
            value={values.oldPhone}
            disabled
            mask="([000]) [000] [00] [00]"
          />
          {!disableTField ? (
            <Field
              name="telephoneNumber"
              label={t('Profile_Contact_Field_Text_1_1')}
              placeholder="(555) 555-55-55"
              component={PSInputMaskMobil}
              value={values.telephoneNumber}
              disabled={phoneVerifyCodeSendSuccess || resendSms}
              mask="([000]) [000] [00] [00]"
              onChange={(value) => setFieldValue('telephoneNumber', value)}
            />
          ) : null}
          {phoneVerifyCodeSendSuccess || resendSms ? (
            <Field
              name="txtConfirmationCode"
              label={`${t('confirmation_code')} - ${time}`}
              placeholder={t('confirmation_code')}
              component={PSInputMobil}
              // maxLength="50"
              value={values.txtConfirmationCode}
              disabled={totalTime <= 0}
              onChange={(value) => setFieldValue('txtConfirmationCode', value)}
            />
          ) : null}
          <View>
            {disableTField ? (
              <ButtonCLR
                onPressF={() => setDisableTField(false)}
                tText="Profile_Contact_Button_3"
              />
            ) : (
              <ButtonCLR
                onPressF={handleSubmit}
                mainState={phoneState}
                tText={
                  phoneVerifyCodeSendSuccess ? 'enter_confirmation_code' : ''
                }
                disabled={totalTime <= 0}
              />
            )}
            {phoneButtonMessageIsOpen ? (
              <View>
                <MessagesUtil
                  isShow={phoneButtonMessageIsOpen}
                  tText={phoneMessage}
                  messageType={phoneButtonMessageType}
                  pageName="Sms"
                />{' '}
              </View>
            ) : null}
          </View>
          <View>
            {phoneVerifyCodeSendSuccess ? (
              <ButtonCLR
                mainState="initial"
                tText="resend"
                onPressF={() => {
                  setResendSms(true);
                  clearInterval(timerConst);
                  PhoneChange({
                    newValue: values.telephoneNumber.toString(),
                    activityCode: 1,
                    isResendSms: true,
                  });
                }}
              />
            ) : null}
          </View>
          {isHashCodeVerifySucess && disableTField ? (
            <MessagesUtil
              isShow
              tText="100"
              messageType="success"
              pageName="Sms"
            />
          ) : null}
          {isHashCall && !isHashCodeVerifySucess ? (
            <MessagesUtil
              isShow
              tText={hashCodeErrorMessage}
              messageType="warning"
              pageName="Sms"
            />
          ) : null}
        </View>
      )}
    </Formik>
  );
};

ProfilePhoneRN.propTypes = exact({
  userData: PropTypes.object,
  phoneState: PropTypes.string,
  phoneMessage: PropTypes.string,
  phoneButtonMessageType: PropTypes.string,
  phoneButtonMessageIsOpen: PropTypes.bool,
  formReset: PropTypes.string,
  PhoneChange: PropTypes.func,
  HashCodeVerify: PropTypes.func,
  UserInfo: PropTypes.func,
  PhoneDefaultA: PropTypes.func,
  phoneVerifyCodeSendSuccess: PropTypes.bool,
  phoneIsResendSms: PropTypes.bool,
  isHashCodeVerifySucess: PropTypes.bool,
  isHashCall: PropTypes.bool,
  hashCodeErrorMessage: PropTypes.string,
});
ProfilePhoneRN.defaultProps = {
  userData: {},
  phoneState: 'initial',
  phoneMessage: '',
  phoneButtonMessageType: 'initial',
  phoneButtonMessageIsOpen: false,
  phoneVerifyCodeSendSuccess: false,
  formReset: 'mail',
  PhoneChange: () => {},
  HashCodeVerify: () => {},
  UserInfo: () => {},
  PhoneDefaultA: () => {},
  phoneIsResendSms: false,
  isHashCodeVerifySucess: false,
  isHashCall: false,
  hashCodeErrorMessage: '',
};

const mapStateToProps = (state) => ({
  phoneState: state.AccountManageReducer.phoneState,
  phoneMessage: state.AccountManageReducer.phoneMessage,
  phoneButtonMessageIsOpen: state.AccountManageReducer.phoneButtonMessageIsOpen,
  phoneButtonMessageType: state.AccountManageReducer.phoneButtonMessageType,
  phoneVerifyCodeSendSuccess: state.AccountManageReducer.isSuccess,
  userData: state.UserReducer.userData,
  phoneIsResendSms: state.AccountManageReducer.isResendSms,
  isHashCodeVerifySucess: state.AccountManageReducer.isHashCodeVerifySucess,
  isHashCall: state.AccountManageReducer.isHashCall,
  hashCodeErrorMessage: state.AccountManageReducer.hashCodeErrorMessage,
  formReset: state.AccountManageReducer.formReset,
});

const mapDispatchToProps = {
  PhoneChange: PhoneChangeAction,
  HashCodeVerify: HashCodeVerifyAction,
  UserInfo: UserInfoAction,
  PhoneDefaultA: PhoneDefaultAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhoneRN);
