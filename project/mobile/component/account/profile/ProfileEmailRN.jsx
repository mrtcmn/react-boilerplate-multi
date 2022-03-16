import {
  MailChangeAction,
  MailDefaultAction,
} from '@service/actions/F_Actions';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';

const ProfileEmailRN = ({
  MailChange,
  mailState,
  mailMessage,
  userData,
  messageType,
  formReset,
  MailDefaultA,
  CustomerPhoneOrMailChangeSendCodeAct,
}) => {
  const [disableEField, setDisableEField] = useState(true);
  const { t } = useTranslation();
  const formikRef = useRef();

  useEffect(() => {
    if (formReset === 'eMail') {
      formikRef.current.setFieldValue('eMail', '');
    }
  }, [formReset]);

  useEffect(() => {
    return () => MailDefaultA();
  }, []);

  return (
    <Formik
      enableReinitialize
      innerRef={formikRef}
      initialValues={{
        eMail: '',
        oldMail: userData.Email,
      }}
      validationSchema={() =>
        Yup.object().shape({
          eMail: Yup.lazy((value) => {
            if (value) {
              return Yup.mixed().test(
                'eMail',
                t('message_ui_util_email'),
                (item) => item !== userData.Email
              );
            }

            return Yup.string()
              .email(t('Register_Error_Text_5'))
              .required(t('Register_Field_Text_9'));
          }),
        })
      }
      onSubmit={(values) => {
        CustomerPhoneOrMailChangeSendCodeAct({
          newValue: values.eMail,
          activityCode: 2,
        });
      }}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <View>
          <Field
            name="oldMail"
            label={t('Profile_Contact_Field_Text_3')}
            placeholder={t('Profile_Contact_Field_Text_3')}
            type="text"
            component={PSInputMobil}
            // maxLength="50"
            value={values.oldMail}
            disabled
            onChange={(value) => setFieldValue('oldMail', value)}
          />
          {!disableEField ? (
            <Field
              name="eMail"
              label={t('Profile_Contact_Field_Text_4')}
              placeholder={t('Profile_Contact_Field_Text_4')}
              type="text"
              component={PSInputMobil}
              // maxLength="50"
              value={values.eMail}
              disabled={disableEField}
              onChange={(value) => setFieldValue('eMail', value)}
            />
          ) : null}
          <View>
            {disableEField ? (
              <ButtonCLR
                tText="Profile_Contact_Button_2"
                onPressF={() => setDisableEField(false)}
              />
            ) : (
              <ButtonCLR
                onPressF={handleSubmit}
                mainState={mailState}
                whenResultCameDisabled
              />
            )}
            {messageType === 'success' || messageType === 'warning' ? (
              <MessagesUtil
                isShow
                tText={mailMessage}
                messageType={messageType}
                pageName="changeMail"
              />
            ) : null}
          </View>
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  mailState: state.AccountManageReducer.mailState,
  messageType: state.AccountManageReducer.mailMessageType,
  mailMessage: state.AccountManageReducer.mailMessage,
  userData: state.UserReducer.userData,
  formReset: state.AccountManageReducer.formReset,
});

const mapDispatchToProps = {
  MailDefaultA: MailDefaultAction,
  CustomerPhoneOrMailChangeSendCodeAct: MailChangeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEmailRN);
