import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import {
  PSCheckboxMobil,
  PSInputMobil,
  PSRadioMobil,
  PSInputMaskMobil,
  PSDropdownMobil,
  PSDatePickerMobil,
} from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { tcNumberControl } from '@f/utils/tcNumberControl.util';
import { differenceInYears, format, isValid, parse, subYears } from 'date-fns';
import { telephoneNumberInput } from '@f/utils/input.util';
import { utf8_to_b64, text_to_aes } from '@utils/passwordHasher';
import { RegisterAction } from '@service/actions/F_Actions';
import {
  Ui_RegisterAction,
  Ui_RegisterButtonAction,
} from '@service/actions/Ui_F_Actions';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { Provider } from 'react-native-paper';
import _styles from '../src/styles/registerStyle';

const GetEnv = require('@envFile');

let routeTimeOut;
const RegisterRN = ({
  postRegister,
  isOpen,
  message,
  messageType,
  mainState,
  Ui_Register,
  Ui_Register_Button,
  navigation,
}) => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const initialValues = {
    firstName: '',
    lastName: '',
    tcNumber: '',
    dateOfBirth: '01.01.2000',
    eMail: '',
    telephoneNumber: '',
    password: '',
    tryPassword: '',
    membershipAgreement: false,
    clarificationText: false,
    allowPromotion: false,
    isForeign: 'tc',
  };

  const validationSchema = () => {
    const { t } = useTranslation();
    const strongRegex = RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/&*()\\-.+[\\]:;,?=<>%_])(?=.{8,})'
    );

    const mustBeValidTcNumber = !isCyprus
      ? {
          tcNumber: Yup.lazy((value) => {
            if (value) {
              if (value.toString().length < 11) {
                return Yup.string().min(11, t('Register_Error_Text_3'));
              }

              return Yup.mixed().test(
                'tcNumber',
                t('Register_Error_Text_12'),
                (item) => tcNumberControl(item)
              );
            }

            return Yup.number().required(t('Register_Field_Text_9'));
          }),
        }
      : {};

    return Yup.object().shape({
      firstName: Yup.string()
        .min(2, t('Register_Error_Text_1'))
        .matches(/^[A-ZÀ-ÚÄ-Üa-zà-úä-üĞğŞşİı\s]+$/, t('Register_Error_Text_10'))
        .required(t('Register_Field_Text_9')),
      lastName: Yup.string()
        .min(2, t('Register_Error_Text_2'))
        .required(t('Register_Field_Text_9'))
        .matches(
          /^[A-ZÀ-ÚÄ-Üa-zà-úä-üĞğŞşİı\s]+$/,
          t('Register_Error_Text_11')
        ),
      ...mustBeValidTcNumber,
      dateOfBirth: Yup.string().required(t('Register_Field_Text_9')),
      eMail: Yup.string()
        .email(t('Register_Error_Text_5'))
        .required(t('Register_Field_Text_9')),
      telephoneNumber: Yup.string()
        .min(15, t('Register_Error_Text_6'))
        .required(t('Register_Field_Text_9')),
      password: Yup.string()
        .min(8, t('Register_Error_Text_7'))
        .max(50, t('Register_Error_Text_13'))
        .matches(strongRegex, t('Register_Error_Text_8'))
        .required(t('Register_Field_Text_9')),
      tryPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], t('Register_Error_Text_9'))
        .required(t('Register_Field_Text_9')),
      membershipAgreement: Yup.lazy((value) => {
        if (!value) {
          return Yup.mixed().test(
            'membershipAgreement',
            t('Register_Field_Text_9'),
            (item) => item
          );
        }

        return Yup.string().required(t('Register_Field_Text_9'));
      }),
      clarificationText: Yup.string(),
      allowPromotion: Yup.string(),
      isForeign: Yup.string().required(t('Register_Field_Text_9')),
    });
  };

  const postRegisterApi = (body) => {
    const birthDate = body.dateOfBirth.split('.');
    const apiDateOfBirth = `${Number(birthDate[2])}-${Number(
      birthDate[1]
    )}-${Number(birthDate[0])}`;

    const pass = text_to_aes(body.password);
    const tc = !isCyprus ? { tcno: body.tcNumber } : {};
    console.log('dsa', {
      name: body.firstName.toLocaleUpperCase('TR'),
      surName: body.lastName.toLocaleUpperCase('TR'),
      hashedPassword: `${pass.iv}.${pass.hash}`,
      email: body.eMail,
      phone: body.telephoneNumber.replace(/[^\d]/g, ''),
      bd: apiDateOfBirth,
      ...tc,
      langID: 1,
      isAcceptedAggrements:
        body.membershipAgreement === 'checked' &&
        body.clarificationText === 'checked'
          ? 1
          : 0,
      iWantToReceiveMail:
        body.membershipAgreement === 'checked' &&
        body.clarificationText === 'checked'
          ? 1
          : 0,
      requestType: 'NEW',
      allowPromotion: body.clarificationText === 'checked' ? 1 : 0,
      isForeign: body.isForeign === 'tc',
    });

    return postRegister({
      name: body.firstName.toLocaleUpperCase('TR'),
      surName: body.lastName.toLocaleUpperCase('TR'),
      hashedPassword: `${pass.iv}.${pass.hash}`,
      email: body.eMail,
      phone: body.telephoneNumber.replace(/[^\d]/g, ''),
      bd: apiDateOfBirth,
      ...tc,
      langID: 1,
      isAcceptedAggrements:
        body.membershipAgreement === 'checked' &&
        body.clarificationText === 'checked'
          ? 1
          : 0,
      iWantToReceiveMail:
        body.membershipAgreement === 'checked' &&
        body.clarificationText === 'checked'
          ? 1
          : 0,
      requestType: 'NEW',
      allowPromotion: body.clarificationText === 'checked' ? 1 : 0,
      isForeign: body.isForeign !== 'tc',
    });
  };

  useEffect(() => {
    if (messageType === 'success') {
      Ui_Register({ isOpen: false, message: '', messageType: '' });
      Ui_Register_Button({ mainState: 'initial' });

      return setTimeout(() => navigation.navigate('profileMenu'), 1000);
    }
  }, [messageType]);

  return (
    <View style={[_styles.loginRN]}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return postRegisterApi(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <View style={_styles.formContainer}>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Register_Title_3')}</Text>
            </View>
            <Field
              name="firstName"
              label={t('Register_Field_Text_1')}
              placeholder={t('Register_Field_Text_1')}
              type="text"
              component={PSInputMobil}
              value={values.firstName}
              onChange={(value) => setFieldValue('firstName', value)}
            />
            <Field
              name="lastName"
              label={t('Register_Field_Text_2')}
              placeholder={t('Register_Field_Text_2')}
              type="text"
              component={PSInputMobil}
              value={values.lastName}
              onChange={(value) => setFieldValue('lastName', value)}
            />
            {isCyprus ? (
              <View />
            ) : (
              <>
                <View style={_styles.subtitle}>
                  <Text style={_styles.subtitleTextLabel}>
                    {t('Register_Field_Text_21')}
                  </Text>
                </View>
                <Field
                  name="isForeign"
                  option={[
                    { label: t('Register_Field_Text_19'), valueKey: 'tc' },
                    { label: t('Register_Field_Text_20'), valueKey: 'ykn' },
                  ]}
                  component={PSRadioMobil}
                  value={values.isForeign}
                  onChange={(value) => setFieldValue('isForeign', value)}
                />
                <Field
                  name="tcNumber"
                  label={
                    values.isForeign === 'tc'
                      ? t('Register_Field_Text_3')
                      : t('Register_Field_Text_20')
                  }
                  placeholder={
                    values.isForeign === 'tc'
                      ? t('Register_Field_Text_3')
                      : t('Register_Field_Text_20')
                  }
                  type="text"
                  component={PSInputMaskMobil}
                  value={values.tcNumber}
                  mask="[00000000000]"
                  onChange={(value) => setFieldValue('tcNumber', value)}
                />
              </>
            )}
            <Field
              name="dateOfBirth"
              placeholder="Örn: gg.aa.yyyy"
              label={t('Register_Field_Text_4')}
              maxDate={format(subYears(new Date(), 18), 'dd.MM.yyyy')}
              component={PSDatePickerMobil}
              value={values.dateOfBirth}
              onChange={(value) => setFieldValue('dateOfBirth', value)}
            />
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Register_Title_2')}</Text>
            </View>
            <Field
              name="eMail"
              label={t('Register_Field_Text_18')}
              placeholder={t('Register_Field_Text_18')}
              type="text"
              component={PSInputMobil}
              value={values.eMail}
              onChange={(value) => setFieldValue('eMail', value)}
            />
            <Field
              name="telephoneNumber"
              label={t('Register_Field_Text_6')}
              placeholder="(555) 555-55-55"
              type="text"
              component={PSInputMaskMobil}
              value={values.telephoneNumber}
              mask="([000]) [000] [00] [00]"
              onChange={(value) => setFieldValue('telephoneNumber', value)}
            />
            <View style={_styles.inputSub}>
              <Text style={_styles.inputSubText}>
                {t('Başında 0 olmadan giriniz.')}
              </Text>
            </View>
            <View style={_styles.subtitle}>
              <Text style={[_styles.subtitleText, { marginTop: 25 }]}>
                {t('Register_Title_4')}
              </Text>
            </View>
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
              secureTextEntry
              label={t('Register_Field_Text_8')}
              placeholder={t('Register_Field_Text_8')}
              component={PSInputMobil}
              value={values.tryPassword}
              onChange={(value) => setFieldValue('tryPassword', value)}
            />
            <View style={_styles.subtitle}>
              <Text style={[_styles.subtitleText]}>
                {t('Register_Title_5')}
              </Text>
            </View>
            <View style={_styles.inputSub}>
              <Text style={_styles.inputSubText}>
                Lütfen üye olmadan önce Aydınlatma Metnini okuyunuz. Aydınlatma
                metnine her zaman anasayfadaki{' '}
              </Text>
              <Text style={_styles.inputLinkText}>
                Kişisel Verilerinizin Korunmasına İlişkin Aydınlatma Metni
              </Text>
              <Text style={_styles.inputSubText}>
                ibaresine tıklayarak da ulaşabilirsiniz.
              </Text>
            </View>
            <Field
              name="membershipAgreement"
              label={`${t('Register_Field_Text_11')} ${t(
                'Register_Field_Text_12'
              )}`}
              component={PSCheckboxMobil}
              value={values.membershipAgreement}
              onChange={(value) => setFieldValue('membershipAgreement', value)}
            />
            <Field
              name="clarificationText"
              label={`${t('Register_Field_Text_14')}`}
              component={PSCheckboxMobil}
              value={values.clarificationText}
              onChange={(value) => setFieldValue('clarificationText', value)}
            />
            <ButtonCLR
              tText="Register_Button_1"
              mainState={mainState}
              whenResultCameSuccessDisabled
              onPressF={handleSubmit}
            />
            {isOpen ? (
              <MessagesUtil
                messageType={messageType}
                isShow={isOpen}
                tText={
                  message === -800 && isCyprus
                    ? -801
                    : message === -800 && !isCyprus
                    ? -800
                    : message
                }
                pageName="register"
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

RegisterRN.propTypes = exact({
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  mainState: PropTypes.string,
  postRegister: PropTypes.func,
  Ui_Register_Button: PropTypes.func,
  Ui_Register: PropTypes.func.isRequired,
});

RegisterRN.defaultProps = {
  isOpen: false,
  message: '',
  messageType: '',
  mainState: '',
  postRegister: () => {},
  Ui_Register_Button: () => {},
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.Ui_F_RegisterReducer.isOpen,
    message: state.Ui_F_RegisterReducer.message,
    messageType: state.Ui_F_RegisterReducer.messageType,
    mainState: state.Ui_F_RegisterButtonReducer.mainState,
  };
};

const mapDispatchToProps = {
  postRegister: RegisterAction,
  Ui_Register: Ui_RegisterAction,
  Ui_Register_Button: Ui_RegisterButtonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRN);
