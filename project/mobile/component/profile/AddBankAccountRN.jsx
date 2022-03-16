import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ManageBankAccountAction } from '@service/actions/F_Actions';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import _styles from '@mobile/src/styles/common';
import { Field, Formik } from 'formik';
import { PSInputMaskMobil, PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';

const validationSchema = () => {
  const { t } = useTranslation();
  const trValidation = RegExp(
    'TR[a-zA-Z0-9]{2}\\s?([0-9]{4}\\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\\s?)([a-zA-Z0-9]{4}\\s?){3}([a-zA-Z0-9]{2})\\s?'
  );

  return Yup.object().shape({
    txtIban: Yup.string()
      .required(t('Register_Field_Text_9'))
      .matches(trValidation, t('Withdrawal_Error_Text_1')),
    txtAccountName: Yup.string().required(t('Register_Field_Text_9')),
  });
};

function AddBankAccountRN({
  ManageBankAccount,
  buttonState,
  messageCode,
  messageType,
  messageIsOpen,
}) {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({
    txtIban: '',
    txtAccountName: '',
  });

  const OnSubmit = (values) => {
    ManageBankAccount({
      accName: values.txtAccountName,
      iban: values.txtIban,
      requestType: 'INSERT',
    });
  };

  return (
    <View style={[_styles.addBankAccount]}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return OnSubmit(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <View style={_styles.formContainer}>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Withdrawal_Text_5')}</Text>
            </View>
            <Field
              name="txtIban"
              label={t('Withdrawal_Field_Text_1')}
              placeholder={t('Withdrawal_Field_Text_3')}
              type="text"
              component={PSInputMaskMobil}
              value={values.txtIban}
              mask="TR[000000000000000000000000]"
              onChange={(value) => setFieldValue('txtIban', value)}
            />
            <View style={_styles.inputSub}>
              <Text style={_styles.inputSubText}>{t('iban_warning_1')}</Text>
              <Text style={_styles.inputSubText}>{t('iban_warning_2')}</Text>
            </View>
            <Field
              name="txtAccountName"
              label={t('bank_account_name')}
              placeholder={t('bank_account_name')}
              component={PSInputMobil}
              value={values.txtAccountName}
              onChange={(value) => setFieldValue('txtAccountName', value)}
            />
            <ButtonCLR
              tText="add_new_bank_account"
              mainState={buttonState}
              whenResultCameSuccessDisabled
              onPressF={handleSubmit}
            />
            {messageIsOpen ? (
              <MessagesUtil
                messageType={messageType}
                tText={messageCode}
                isShow={messageIsOpen}
                pageName="bank"
              />
            ) : (
              <View />
            )}
          </View>
        )}
      </Formik>
    </View>
  );
}

AddBankAccountRN.propTypes = {
  ManageBankAccount: PropTypes.func.isRequired,
  buttonState: PropTypes.string.isRequired,
  messageCode: PropTypes.number.isRequired,
  messageType: PropTypes.string.isRequired,
  messageIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  buttonState: state.ManageBankAccountReducer.buttonState,
  messageCode: state.ManageBankAccountReducer.messageCode,
  messageType: state.ManageBankAccountReducer.messageType,
  messageIsOpen: state.ManageBankAccountReducer.messageIsOpen,
});

const mapDispatchToProps = {
  ManageBankAccount: ManageBankAccountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBankAccountRN);
