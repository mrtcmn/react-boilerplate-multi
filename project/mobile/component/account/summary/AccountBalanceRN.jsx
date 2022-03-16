import Section from '@mobile/component/tools/Section';
import React from 'react';
import { View, Text } from 'react-native';
import { Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { GetSplitNumberToDigits } from '@utils/numberFormat';
import { connect } from 'react-redux';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import _styles from '@mobile/src/styles/common';

const _ = require('lodash');
const GetEnv = require('@envFile');

const AccountBalanceRN = ({ userData, navigation }) => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <Section>
      <Formik
        initialValues={{
          accountBalance: _.get(userData, 'Balance', 0),
        }}
        onSubmit={(values) => {
          return console.log(values);
        }}
      >
        {({ values }) => (
          <View>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>
                {' '}
                {t('Account_Summary_Title_4')}
              </Text>
            </View>
            <Field
              name="accountBalance"
              component={PSInputMobil}
              value={`${GetSplitNumberToDigits(
                values.accountBalance,
                true
              )} ${_.get(userData, 'Symbol', '')}`}
              disabled
              style={{ fontSize: 25, textAlign: 'center' }}
            />
          </View>
        )}
      </Formik>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
        <View style={[{ width: '49%' }]}>
          <ButtonCLR
            tText="Account_Summary_Deposit"
            onPressF={() => {
              navigation.navigate('deposit');
            }}
          />
        </View>
        <View style={[{ width: '49%' }]}>
          <ButtonCLR
            tText="Account_Summary_Withdrawal"
            onPressF={() => {
              navigation.navigate('withdrawal');
            }}
          />
        </View>
      </View>
      {isCyprus ? (
        <View />
      ) : (
        <Formik
          initialValues={{
            accountBonus: _.get(userData, 'Bonus', 0),
          }}
          onSubmit={(values) => {
            return console.log(values);
          }}
        >
          {({ values }) => (
            <View>
              <View style={_styles.subtitle}>
                <Text style={_styles.subtitleText}> {t('ps_point')}</Text>
              </View>
              <Field
                name="accountBonus"
                component={PSInputMobil}
                value={`${GetSplitNumberToDigits(
                  values.accountBonus,
                  true
                )} ${t('ps_point')}`}
                disabled
                style={{ fontSize: 15, textAlign: 'center' }}
              />
            </View>
          )}
        </Formik>
      )}
    </Section>
  );
};

AccountBalanceRN.propTypes = exact({
  userData: PropTypes.object,
});
AccountBalanceRN.defaultProps = {
  userData: {},
};

const mapStateToProps = (state) => ({
  userData: state.UserReducer.userData,
});

export default connect(mapStateToProps)(AccountBalanceRN);
