import Section from '@mobile/component/tools/Section';
import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import _styles from '@mobile/src/styles/common';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';

const _ = require('lodash');

const AccountNumberRN = ({ userData }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Formik
        enableReinitialize
        initialValues={{
          accountNumber: userData.CustomerNo.toString(),
        }}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <View>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{`${_.get(
                userData,
                'CustomerName',
                ''
              )} ${_.get(userData, 'CustomerSurname', '')}`}</Text>
            </View>
            <Field
              name="accountNumber"
              label={t('Account_Summary_Title_3')}
              placeholder={t('Account_Summary_Title_3')}
              component={PSInputMobil}
              value={values.accountNumber}
              disabled
            />
            <View style={_styles.inputSub}>
              <Text style={_styles.inputSubText}>
                {t('Account_Number_Text_1')}
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </Section>
  );
};

AccountNumberRN.propTypes = exact({
  userData: PropTypes.object,
});
AccountNumberRN.defaultProps = {
  userData: {},
};

const mapStateToProps = (state) => ({
  userData: state.UserReducer.userData,
});

export default connect(mapStateToProps)(AccountNumberRN);
