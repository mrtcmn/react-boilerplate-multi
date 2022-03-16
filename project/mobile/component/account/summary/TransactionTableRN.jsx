import React from 'react';
import { View, Text } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { useTranslation } from 'react-i18next';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { GetSplitNumberToDigits } from '@utils/numberFormat';
import { connect } from 'react-redux';
import DataTableRN from '@mobile/utils/DataTableRN';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { BookingsAction } from '@service/actions/F_Actions';

const TransactionTableRN = ({
  bookings,
  isShowBtnAllTransaction,
  isOpen,
  message,
  messageType,
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  const dataR = () => {
    const data = [];
    if (bookings?.length > 0) {
      bookings.forEach((a, index) =>
        data.push([
          {
            value: `${new Date(
              a.TransactionDate
            ).toLocaleDateString()} ${new Date(
              a.TransactionDate
            ).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}`,
            style: { flex: 1 },
            onPress: false,
          },
          { value: a.TransactionType, style: { flex: 1 }, onPress: false },
          {
            value: a.TransactionComment,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: `${GetSplitNumberToDigits(a.Amount)} ${a.Currency}`,
            style: { flex: 1 },
            onPress: false,
          },
        ])
      );
    }

    return data;
  };

  return (
    <>
      <View style={[_styles.transactionTableRN]}>
        <DataTableRN
          tableTitle={t('history')}
          titleArray={[
            t('History_List_Title_1'),
            t('History_List_Title_2'),
            t('History_List_Title_3'),
            t('History_List_Title_5'),
          ]}
          dataArray={dataR()}
          errorRender={() =>
            bookings && bookings.length <= 0 ? (
              isOpen ? (
                <LoaderUtil
                  currentStatus={messageType}
                  message={message}
                  customText={
                    message === '-1000'
                      ? 'generic_response_code_-1000'
                      : 'generic_response_code_116'
                  }
                />
              ) : (
                <MessagesUtil
                  customMessage="dataIsNotFound"
                  messageType="info"
                  isShow
                />
              )
            ) : (
              <></>
            )
          }
        />
      </View>
      {isShowBtnAllTransaction ? (
        <Text
          style={[
            { marginLeft: 20, marginTop: 5, color: '#00cbf9', fontSize: 13 },
          ]}
          onPress={() => {
            navigation.navigate('transactionHistory');
          }}
        >
          {t('showAllTransactionHistory')}
        </Text>
      ) : null}
    </>
  );
};

TransactionTableRN.propTypes = exact({
  bookings: PropTypes.array,
  navigation: PropTypes.object,
  route: PropTypes.object,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  isShowBtnAllTransaction: PropTypes.bool,
});
TransactionTableRN.defaultProps = {
  bookings: [],
  isOpen: false,
  message: '',
  messageType: '',
  isShowBtnAllTransaction: false,
  navigation: {},
  route: {},
};

const mapStateToProps = (state) => {
  return {
    bookings: state.UserReducer.bookings,
    isOpen: state.Ui_F_BookingsWarningReducer.isOpen,
    message: state.Ui_F_BookingsWarningReducer.message,
    messageType: state.Ui_F_BookingsWarningReducer.messageType,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionTableRN);
