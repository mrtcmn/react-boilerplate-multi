import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import * as DateFns from 'date-fns';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { BookingsAction } from '@service/actions/F_Actions';
import TransactionTableRN from '@mobile/component/account/summary/TransactionTableRN';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { PSDropdownMobil } from '@mobile/utils/FormElementUtil';
import Section from '@mobile/component/tools/Section';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import _styles from '@mobile/src/styles/common';

const initialValues = {
  operation: 'all',
  period: DateFns.format(DateFns.subDays(new Date(), 7), 'yyyy-MM-dd'),
};

const validationSchema = () => {
  return Yup.object().shape({
    operation: Yup.string(),
    period: Yup.string(),
  });
};

const TransactionHistoryScreen = ({
  GetBookings,
  mainState,
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const operationConstant = [
    {
      key: 'all',
      value: 'all',
      text: t('History_Button_1'),
    },
    {
      key: 'depositMoney',
      value: 'depositMoney',
      text: t('History_Button_2'),
    },
    {
      key: 'withdrawMoney',
      value: 'withdrawMoney',
      text: t('History_Button_3'),
    },
    {
      key: 'EarningsAndRefunds',
      value: 'EarningsAndRefunds',
      text: t('History_Button_4'),
    },
  ];
  const periodConstant = [
    {
      key: 'lastThreeDay',
      value: DateFns.format(DateFns.subDays(new Date(), 3), 'yyyy-MM-dd'),
      label: t('History_Dropdown_Text_1'),
    },
    {
      key: 'lastSevenDay',
      value: DateFns.format(DateFns.subDays(new Date(), 7), 'yyyy-MM-dd'),
      label: t('History_Dropdown_Text_2'),
    },
    {
      key: 'lastFifteenDay',
      value: DateFns.format(DateFns.subDays(new Date(), 15), 'yyyy-MM-dd'),
      label: t('History_Dropdown_Text_3'),
    },
    {
      key: 'lastThirtyDay',
      value: DateFns.format(DateFns.subDays(new Date(), 30), 'yyyy-MM-dd'),
      label: t('History_Dropdown_Text_4'),
    },
    {
      key: 'lastTwoMount',
      value: DateFns.subDays(new Date(), 60).toLocaleDateString(),
      label: t('History_Dropdown_Text_5'),
    },
    {
      key: 'lastThreeMount',
      value: DateFns.format(DateFns.subDays(new Date(), 90), 'yyyy-MM-dd'),
      label: t('History_Dropdown_Text_6'),
    },
  ];

  const FnGetBookings = (startDate) => {
    GetBookings({
      typeid: 0,
      transacationStartDate: startDate,
      transacationEndDate: DateFns.format(new Date(), 'yyyy-MM-dd'),
      langid: 1,
    });
  };

  useEffect(() => {
    FnGetBookings(initialValues.period);
  }, []);

  const BtnFilterSubmit = (values) => {
    FnGetBookings(values.period);
  };

  return (
    <ScrollView style={_styles.scrollView}>
      <Section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema()}
          onSubmit={(values) => {
            BtnFilterSubmit(values);
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <View>
              <Field
                name="period"
                id="period"
                listData={periodConstant}
                value={values.period}
                label={`${t('History_Field_Text_3')}`}
                placeholder={t('History_Field_Text_3')}
                fluid
                selection
                component={PSDropdownMobil}
                onChange={(value) => {
                  setFieldValue('period', value);
                }}
              />
              <ButtonCLR
                mainState={mainState}
                tText="History_Button_5"
                onPressF={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </Section>

      <TransactionTableRN />
    </ScrollView>
  );
};

TransactionHistoryScreen.propTypes = exact({
  GetBookings: PropTypes.func,
  mainState: PropTypes.string,
  navigation: PropTypes.object,
  route: PropTypes.object,
});
TransactionHistoryScreen.defaultProps = {
  GetBookings: () => {},
  mainState: 'initial',
  navigation: {},
  route: {},
};

const mapStateToProps = (state) => {
  return {
    mainState: state.Ui_F_BookingsButtonReducer.mainState,
  };
};

const mapDispatchToProps = {
  GetBookings: BookingsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistoryScreen);
