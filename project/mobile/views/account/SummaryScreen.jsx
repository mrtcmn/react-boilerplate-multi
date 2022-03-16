import AccountBalanceRN from '@mobile/component/account/summary/AccountBalanceRN';
import AccountNumberRN from '@mobile/component/account/summary/AccountNumberRN';
import TransactionTableRN from '@mobile/component/account/summary/TransactionTableRN';
import { BookingsAction } from '@service/actions/F_Actions';
import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import * as DateFns from 'date-fns';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import _styles from '@mobile/src/styles/common';
import { HeaderBackButton } from '@react-navigation/stack';

const SummaryScreen = ({ GetBookings, navigation, route }) => {
  navigation.setOptions({
    headerLeft: () => (
      <HeaderBackButton onPress={() => navigation.navigate('profileMenu')} />
    ),
  });

  const FnGetBookings = (startDate) => {
    GetBookings({
      typeid: 0,
      transacationStartDate: startDate,
      transacationEndDate: DateFns.format(new Date(), 'yyyy-MM-dd'),
      langid: 1,
    });
  };

  useEffect(() => {
    FnGetBookings(DateFns.format(DateFns.subDays(new Date(), 7), 'yyyy-MM-dd'));
  }, []);

  return (
    <ScrollView style={_styles.scrollView}>
      <AccountNumberRN />
      <AccountBalanceRN navigation={navigation} />
      <TransactionTableRN isShowBtnAllTransaction navigation={navigation} />
      <View style={[{ marginTop: 20 }]} />
    </ScrollView>
  );
};

SummaryScreen.propTypes = exact({
  GetBookings: PropTypes.func,
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object,
});
SummaryScreen.defaultProps = {
  GetBookings: () => {},
  route: {},
};

const mapDispatchToProps = {
  GetBookings: BookingsAction,
};

export default connect(null, mapDispatchToProps)(SummaryScreen);
