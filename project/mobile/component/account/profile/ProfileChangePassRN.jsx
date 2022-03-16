import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Section from '@mobile/component/tools/Section';
import styles from '@mobile/src/styles/common';
import { useTranslation } from 'react-i18next';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { text_to_aes } from '@utils/passwordHasher';
import { connect } from 'react-redux';
import {
  PassDefaultAction,
  PasswordChangeAction,
} from '@service/actions/F_Actions';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';
import UlLiList from '@mobile/component/tools/UlLiList';
import { TextInput } from 'react-native-paper';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';

const validationSchema = () => {
  const { t } = useTranslation();
  const strongRegex = RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/&*()\\-.+[\\]:;,?=<>%_])(?=.{8,})'
  );

  return Yup.object().shape({
    oldPassword: Yup.string()
      .required(t('Register_Error_Text_7'))
      .notOneOf([Yup.ref('password'), null], t('Register_Error_Text_16')),
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

let resetPassword;
const ProfileChangePassRN = ({
  PasswordChange,
  passwordState,
  passwordBottomMessageCode,
  passwordBottomMessageIsOpen,
  passwordBottomMessageType,
  PassDefaultA,
}) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({
    oldPassword: '',
    password: '',
    tryPassword: '',
  });
  const [showPass, setShowPass] = useState(true);
  const [showTryPass, setShowTryPass] = useState(true);
  const [showOldPass, setShowOldPass] = useState(true);

  const ulList = [
    {
      text: t('Register_Password_2'),
    },
    {
      text: t('Register_Error_Text_7'),
    },
    {
      text: t('Register_Password_3'),
    },
  ];

  // #region useEffects
  useEffect(() => {
    if (passwordBottomMessageType === 'success') {
      resetPassword({});
    }
  }, [passwordBottomMessageType]);

  const onSubmit = (values, { resetForm }) => {
    const oldPass = text_to_aes(values.oldPassword);
    const newPass = text_to_aes(values.password);

    PasswordChange({
      oldPassword: `${oldPass.iv}.${oldPass.hash}`,
      newPassword: `${newPass.iv}.${newPass.hash}`,
    });
    resetPassword = resetForm;
  };

  useEffect(() => {
    return () => PassDefaultA();
  }, []);
  // #endregion

  return (
    <Section>
      <Text style={[styles.staticPageSubTitle]}>
        {t('Profile_Pass_Title_Text_1')}
      </Text>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => (
          <>
            <View>
              <Field
                name="oldPassword"
                label={t('Profile_Pass_Field_Text_1')}
                placeholder={t('Profile_Pass_Field_Text_1')}
                rightIcon={
                  <TextInput.Icon
                    name={showOldPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowOldPass(!showOldPass)}
                  />
                }
                secureTextEntry={showOldPass}
                component={PSInputMobil}
                // maxLength="50"
                value={values.oldPassword}
                onChange={(value) => setFieldValue('oldPassword', value)}
              />
              <View>
                <Text>{t('Register_Password_1')}</Text>
                <UlLiList list={ulList} />
              </View>
            </View>
            <View>
              <Field
                primary
                name="password"
                label={t('Profile_Pass_Field_Text_2')}
                placeholder={t('Profile_Pass_Field_Text_2')}
                rightIcon={
                  <TextInput.Icon
                    name={showPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                secureTextEntry={showPass}
                component={PSInputMobil}
                // maxLength="50"
                value={values.password}
                onChange={(value) => setFieldValue('password', value)}
              />
              <Field
                name="tryPassword"
                label={t('Profile_Pass_Field_Text_3')}
                placeholder={t('Profile_Pass_Field_Text_3')}
                rightIcon={
                  <TextInput.Icon
                    name={showTryPass ? 'eye' : 'eye-off'}
                    onPress={() => setShowTryPass(!showTryPass)}
                  />
                }
                secureTextEntry={showTryPass}
                component={PSInputMobil}
                // maxLength="50"
                value={values.tryPassword}
                disabled={!(touched.password && !errors.password)}
                onChange={(value) => setFieldValue('tryPassword', value)}
              />
              <ButtonCLR onPressF={handleSubmit} mainState={passwordState} />
            </View>

            {passwordBottomMessageIsOpen ? (
              <MessagesUtil
                isShow={passwordBottomMessageIsOpen}
                messageType={passwordBottomMessageType}
                tText={passwordBottomMessageCode}
                pageName="ProfileChangePass"
              />
            ) : null}
          </>
        )}
      </Formik>
    </Section>
  );
};

ProfileChangePassRN.propTypes = exact({
  passwordState: PropTypes.string,
  passwordBottomMessageCode: PropTypes.number,
  passwordBottomMessageIsOpen: PropTypes.bool,
  passwordBottomMessageType: PropTypes.string,
  PasswordChange: PropTypes.func,
  PassDefaultA: PropTypes.func,
});
ProfileChangePassRN.defaultProps = {
  passwordState: 'initial',
  passwordBottomMessageCode: 0,
  passwordBottomMessageIsOpen: false,
  passwordBottomMessageType: '',
  PasswordChange: () => {},
  PassDefaultA: () => {},
};

const mapStateToProps = (state) => ({
  passwordState: state.AccountManageReducer.passwordState,
  passwordBottomMessageCode:
    state.AccountManageReducer.passwordBottomMessageCode,
  passwordBottomMessageIsOpen:
    state.AccountManageReducer.passwordBottomMessageIsOpen,
  passwordBottomMessageType:
    state.AccountManageReducer.passwordBottomMessageType,
});

const mapDispatchToProps = {
  PasswordChange: PasswordChangeAction,
  PassDefaultA: PassDefaultAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileChangePassRN);
