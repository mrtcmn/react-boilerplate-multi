import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import { Ui_TicketHistoryButtonAction } from '@service/actions/Ui_F_Actions';
import format from 'date-fns/format';
import { View } from 'react-native';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import _styles from '@mobile/src/styles/profileMyTickets';
import DataTableRN from '@mobile/utils/DataTableRN';

const MyTicketsTicketHistory = ({ tickets, currentStatus, setButtonError }) => {
  const { t } = useTranslation();
  const dataR = () => {
    const data = [];
    if (tickets?.length > 0) {
      tickets.forEach((a) =>
        data.push([
          {
            value: a.ticketNo,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: format(new Date(a.ticketDate.toString()), 'dd/MM/yyyy H:mm'),
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: a.ticketStatus,
            style: { flex: 1 },
            onPress: false,
          },
        ])
      );
    }

    return data;
  };

  return (
    <View style={_styles.drawHistory}>
      <View style={_styles.drawHistoryCard}>
        <DataTableRN
          tableTitle={`${t('Draw_History_Title_Text_3')} - ${
            tickets && tickets.length > 0 && tickets[0].title
          }`}
          titleArray={[
            t('Draw_History_Table_Text_4'),
            t('Draw_History_Table_Text_7'),
            t('Draw_History_Table_Text_5'),
          ]}
          dataArray={dataR()}
          errorRender={() =>
            tickets.length <= 0 ? (
              <LoaderUtil
                currentStatus={currentStatus}
                errorAction={() =>
                  setButtonError({
                    mainState: 'initial',
                    currentStatus: 'not_found',
                  })
                }
                extraClass={{ marginTop: 30 }}
              />
            ) : (
              <></>
            )
          }
        />
      </View>
    </View>
  );
};

MyTicketsTicketHistory.propTypes = exact({
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      drawID: PropTypes.number,
      title: PropTypes.string,
      ticketDate: PropTypes.string,
      picture: PropTypes.string,
      ticketNo: PropTypes.string,
      ticketStatus: PropTypes.string,
    })
  ),
  currentStatus: PropTypes.string,
  setButtonError: PropTypes.func,
});
MyTicketsTicketHistory.defaultProps = {
  tickets: [],
  currentStatus: 'loader',
  setButtonError: () => {},
};

const mapStateToProps = (state) => {
  return {
    tickets: state.DrawHistoryReducer.tickets,
    currentStatus: state.Ui_F_TicketHistoryReducer.currentStatus,
  };
};

const mapDispatchToProps = {
  setButtonError: Ui_TicketHistoryButtonAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTicketsTicketHistory);
