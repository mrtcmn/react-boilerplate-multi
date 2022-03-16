import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import { TicketHistoryAction } from '@service/actions/F_Actions';
import { Ui_DrawHistoryButtonAction } from '@service/actions/Ui_F_Actions';
import format from 'date-fns/format';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import { View } from 'react-native';
import _styles from '@mobile/src/styles/profileMyTickets';
import DataTableRN from '@mobile/utils/DataTableRN';

const optionsPerPage = [2, 3, 4];
const MyTicketsDrawHistory = ({
  draws,
  getTicketHistory,
  currentStatus,
  setButtonError,
  mainState,
  message,
}) => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState('');
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  const apiGetTicketHistory = (id, index) => {
    setActiveButton(index);

    return getTicketHistory({
      year: 0,
      month: 0,
      drawID: id,
    });
  };

  const errorActionLoader = () =>
    setButtonError({
      mainState: 'initial',
      currentStatus: '',
    });

  const dataR = () => {
    const data = [];
    if (draws?.length > 0) {
      draws.forEach((a, index) =>
        data.push([
          {
            value: a.title,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: format(new Date(a.startDate.toString()), 'dd/MM/yyyy H:mm'),
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: a.ticketCount,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: t('Draw_History_Table_Button_1'),
            style: {},
            onPress: () => apiGetTicketHistory(a.drawID, index),
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
          tableTitle={t('Draw_History_Title_Text_2')}
          titleArray={[
            t('Draw_History_Table_Text_1'),
            t('Draw_History_Table_Text_2'),
            t('Draw_History_Table_Text_3'),
          ]}
          dataArray={dataR()}
          errorRender={() =>
            draws.length <= 0 ? (
              <LoaderUtil
                currentStatus={currentStatus}
                errorAction={() => errorActionLoader()}
                btnBackIsNotVisible
                message={
                  message === '-1000'
                    ? t('generic_response_code_-1000')
                    : t('generic_response_code_-502')
                }
                extraClass={{ marginTop: 30 }}
              />
            ) : currentStatus !== '' ? (
              <LoaderUtil
                currentStatus={currentStatus}
                errorAction={() => errorActionLoader()}
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

MyTicketsDrawHistory.propTypes = exact({
  getTicketHistory: PropTypes.func,
  setButtonError: PropTypes.func,
  currentStatus: PropTypes.string,
  mainState: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  draws: PropTypes.arrayOf(
    PropTypes.shape({
      drawID: PropTypes.number,
      title: PropTypes.string,
      startDate: PropTypes.string,
      picture: PropTypes.string,
      ticketCount: PropTypes.number,
    })
  ),
});
MyTicketsDrawHistory.defaultProps = {
  draws: [],
  currentStatus: '',
  message: '',
  mainState: 'initial',
  getTicketHistory: () => {},
  setButtonError: () => {},
};

const mapStateToProps = (state) => {
  return {
    draws: state.DrawHistoryReducer.draws,
    currentStatus: state.Ui_F_DrawHistoryReducer.currentStatus,
    message: state.Ui_F_DrawHistoryReducer.message,
    mainState: state.Ui_F_TicketHistoryReducer.mainState,
  };
};

const mapDispatchToProps = {
  getTicketHistory: TicketHistoryAction,
  setButtonError: Ui_DrawHistoryButtonAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTicketsDrawHistory);
