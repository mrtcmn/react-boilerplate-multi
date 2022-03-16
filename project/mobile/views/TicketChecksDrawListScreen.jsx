import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import format from 'date-fns/format';
import { TicketChecksAction } from '@service/actions/F_Actions';
import { useTranslation } from 'react-i18next';
import { Ui_TicketChecksButtonAction } from '@service/actions/Ui_F_Actions';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import DataTableRN from '@mobile/utils/DataTableRN';
import _styles from '@mobile/src/styles/profileMyTickets';

const TicketChecksDrawListScreen = ({
  mainState,
  drawsData,
  ticketChecksA,
  currentStatus,
  uiButton,
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  // const history = useHistory();
  // const params = useParams();

  const [drawSelect, setDrawSelect] = useState(0);
  const [activeButton, setActiveButton] = useState('');

  const apiGetTicketHistory = (id, index) => {
    setActiveButton(index);

    return navigation.navigate('ticketChecksDrawDetail', {
      drawID: id,
      hashCode: route.params.hashCode,
    });
    // return history.push(`/bilet-sorgulama/${params.hashCode}/${id}`);
  };

  const errorActionLoader = () =>
    uiButton({
      mainState: 'initial',
      currentStatus: '',
    });

  useEffect(() => {
    ticketChecksA({ select: drawSelect, hashCode: route.params.hashCode });
  }, [drawSelect]);

  const dataR = () => {
    const data = [];
    if (drawsData?.length > 0) {
      drawsData.forEach((a, index) =>
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
    <ScrollView>
      <View style={_styles.drawHistoryCard}>
        {drawsData.length !== 0 || drawSelect === 2 ? (
          <View className="draw-button-group sl-margin-v-3">
            <ButtonCLR
              onPressF={() => setDrawSelect(0)}
              tText="Draw_History_Button_Text_1"
              isActiveButton={drawSelect === 0}
            />
            <ButtonCLR
              onPressF={() => setDrawSelect(1)}
              tText="Draw_History_Button_Text_3"
              isActiveButton={drawSelect === 1}
            />
            <ButtonCLR
              onPressF={() => setDrawSelect(2)}
              tText="Draw_History_Button_Text_2"
              isActiveButton={drawSelect === 2}
            />
          </View>
        ) : null}
        {currentStatus === 'loading' ? (
          <LoaderUtil
            currentStatus={currentStatus}
            errorAction={() => errorActionLoader()}
          />
        ) : null}
        {drawsData.length > 0 ? (
          <View className="account-card withHeader">
            <View className="card-content sl-padding-3">
              <DataTableRN
                tableTitle={t('Draw_History_Title_Text_2')}
                titleArray={[
                  t('Draw_History_Table_Text_1'),
                  t('Draw_History_Table_Text_2'),
                  t('Draw_History_Table_Text_3'),
                ]}
                dataArray={dataR()}
                errorRender={() =>
                  drawsData.length <= 0 ? (
                    <LoaderUtil
                      currentStatus={currentStatus}
                      errorAction={() => errorActionLoader()}
                      btnBackIsNotVisible
                      // message={
                      //   message === '-1000'
                      //     ? t('generic_response_code_-1000')
                      //     : t('generic_response_code_-502')
                      // }
                      extraClass={{ marginTop: 30 }}
                    />
                  ) : currentStatus !== '' ? (
                    <LoaderUtil
                      currentStatus={currentStatus}
                      errorAction={() => errorActionLoader()}
                      extraClass={{ marginTop: 30 }}
                    />
                  ) : null
                }
              />
            </View>
          </View>
        ) : currentStatus !== 'loading' ? (
          <MessagesUtil
            isShow
            customMessage={
              drawSelect === 2 ? 'Ticket_Checks_Text_4' : 'Ticket_Checks_Text_5'
            }
            messageType="info"
            pageName="TicketChecksDrawList"
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

TicketChecksDrawListScreen.propTypes = exact({
  ticketChecksA: PropTypes.func,
  uiButton: PropTypes.func,
  mainState: PropTypes.string,
  currentStatus: PropTypes.string,
  drawsData: PropTypes.arrayOf(PropTypes.object),
});

TicketChecksDrawListScreen.defaultProps = {
  ticketChecksA: () => {},
  uiButton: () => {},
  mainState: 'initial',
  currentStatus: '',
  drawsData: [],
};

const mapStateToProps = (state) => {
  return {
    drawsData: state.TicketChecksReducer.drawsData,
    currentStatus: state.Ui_F_TicketChecksReducer.currentStatus,
    mainState: state.Ui_F_TicketChecksReducer.mainState,
  };
};

const mapDispatchToProps = {
  ticketChecksA: TicketChecksAction,
  uiButton: Ui_TicketChecksButtonAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketChecksDrawListScreen);
