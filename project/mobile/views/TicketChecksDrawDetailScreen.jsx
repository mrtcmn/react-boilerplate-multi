import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TicketChecksDetailsAction } from '@service/actions/F_Actions';
import { Ui_TicketDetailLoaderAction } from '@service/actions/Ui_F_Actions';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import DataTableRN from '@mobile/utils/DataTableRN';
import format from 'date-fns/format';

const TicketChecksDrawDetailScreen = ({
  ticketChecksA,
  drawData,
  currentStatus,
  navigation,
  route,
}) => {
  const { t } = useTranslation();
  // const history = useHistory();
  // const params = useParams();

  useEffect(() => {
    ticketChecksA({
      hashCode: route.params.hashCode,
      drawID: route.params.drawID,
    });
  }, []);

  const dataR = () => {
    const data = [];
    if (drawData?.length > 0) {
      drawData.forEach((x, index) =>
        data.push([
          {
            value: x.title,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: format(new Date(x.ticketDate.toString()), 'dd/MM/yyyy H:mm'),
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: x.ticketNo,
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: x.ticketStatus,
            style: { flex: 1 },
            onPress: false,
          },
        ])
      );
    }

    return data;
  };

  return (
    <ScrollView className="site-container">
      <View className="site-wrapper-w">
        {currentStatus === 'loading' ? (
          <LoaderUtil currentStatus={currentStatus} />
        ) : null}
        {drawData.length > 0 ? (
          <View className="account-card withHeader">
            <DataTableRN
              tableTitle={t('Draw_History_Title_Text_3')}
              titleArray={[
                t('Draw_History_Table_Text_1'),
                t('Draw_History_Table_Text_6'),
                t('Draw_History_Table_Text_4'),
                t('Draw_History_Table_Text_5'),
              ]}
              dataArray={dataR()}
              // errorRender={() =>
              //   drawData.length <= 0 ? (
              //     <LoaderUtil
              //       currentStatus={currentStatus}
              //       // errorAction={() => errorActionLoader()}
              //       btnBackIsNotVisible
              //       // message={
              //       //   message === '-1000'
              //       //     ? t('generic_response_code_-1000')
              //       //     : t('generic_response_code_-502')
              //       // }
              //       extraClass={{ marginTop: 30 }}
              //     />
              //   ) : currentStatus !== '' ? (
              //     <LoaderUtil
              //       currentStatus={currentStatus}
              //       // errorAction={() => errorActionLoader()}
              //       extraClass={{ marginTop: 30 }}
              //     />
              //   ) : null
              // }
            />
          </View>
        ) : currentStatus !== 'loading' ? (
          <MessagesUtil
            isShow
            customMessage="Ticket_Checks_Text_6"
            messageType="info"
            pageName="TicketChecksDrawList"
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

TicketChecksDrawDetailScreen.propTypes = exact({
  ticketChecksA: PropTypes.func,
  setButtonError: PropTypes.func,
  currentStatus: PropTypes.string,
  drawData: PropTypes.arrayOf(PropTypes.object),
});

TicketChecksDrawDetailScreen.defaultProps = {
  ticketChecksA: () => {},
  setButtonError: () => {},
  drawData: [],
  currentStatus: '',
};

const mapStateToProps = (state) => {
  return {
    drawData: state.TicketChecksDetailsReducer.drawData,
    currentStatus: state.Ui_F_TicketDetailReducer.currentStatus,
  };
};

const mapDispatchToProps = {
  ticketChecksA: TicketChecksDetailsAction,
  setButtonError: Ui_TicketDetailLoaderAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketChecksDrawDetailScreen);
