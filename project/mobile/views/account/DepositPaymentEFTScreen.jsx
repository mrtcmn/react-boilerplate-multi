import React, { useEffect } from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Dimensions, Button } from 'react-native';
import {
  DepositPaymentEFTAction,
  KoopBankResetStatesAction,
  UserBalanceAction,
} from '@service/actions/F_Actions';
import MessagesUtil from '@mobile/utils/MessageUtil';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from '@react-navigation/stack';

const ProfilePaymentEFTScreen = ({
  navigation,
  route,
  DepositPaymentEFTA,
  paymentAmountV,
  isOpen,
  message,
  messageType,
  iframeToken,
  UserBalanceA,
  KoopBankResetStatesAct,
}) => {
  navigation.setOptions({
    headerLeft: () => (
      <HeaderBackButton onPress={() => navigation.navigate('accountSummary')} />
    ),
  });
  useEffect(() => {
    if (paymentAmountV !== null) {
      DepositPaymentEFTA({ paymentAmount: paymentAmountV });
    }
  }, []);

  useEffect(() => {
    return () => {
      UserBalanceA();
      KoopBankResetStatesAct();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {messageType === 'loading' ? (
        <LoaderUtil currentStatus={messageType} />
      ) : (
        <View />
      )}
      {messageType === '' ? (
        <WebView
          source={{
            uri:
              route.params.url ||
              `https://www.paytr.com/odeme/api/${iframeToken}`,
          }}
          androidHardwareAccelerationDisabled
          javaScriptEnabled
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          startInLoadingState
          style={{
            marginTop: 20,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            opacity: 0.99,
          }}
        />
      ) : (
        <View />
      )}
      {isOpen ? (
        <MessagesUtil
          isShow={isOpen}
          messageType={messageType}
          customMessage={message}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

ProfilePaymentEFTScreen.propTypes = exact({
  navigation: PropTypes.object,
  route: PropTypes.object,
  DepositPaymentEFTA: PropTypes.func,
  UserBalanceA: PropTypes.func,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  iframeToken: PropTypes.string,
  paymentAmountV: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  KoopBankResetStatesAct: PropTypes.func,
});

ProfilePaymentEFTScreen.defaultProps = {
  DepositPaymentEFTA: () => {},
  UserBalanceA: () => {},
  messageType: '',
  message: '',
  iframeToken: '',
  paymentAmountV: '',
  isOpen: false,
  navigation: {},
  route: {},
  KoopBankResetStatesAct: () => {},
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.Ui_DepositPaymentEFTReducer.isOpen,
    message: state.Ui_DepositPaymentEFTReducer.message,
    messageType: state.Ui_DepositPaymentEFTReducer.messageType,
    iframeToken: state.DepositPaymentEFTReducer.iframeToken,
    paymentAmountV: state.DepositPaymentEFTReducer.paymentAmount,
  };
};

const mapDispatchToProps = {
  DepositPaymentEFTA: DepositPaymentEFTAction,
  UserBalanceA: UserBalanceAction,
  KoopBankResetStatesAct: KoopBankResetStatesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePaymentEFTScreen);
