import {
  BasketSelectDrawAction,
  GetSelectedTicketAction,
  ListTicketNumberAction,
  SelectTicketAction,
  SendSelectedTicketAction,
} from '@service/actions/F_Actions';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { SvgUri, SvgXml } from 'react-native-svg';
import CheckboxChecked from '@asset/images/icons/checkbox-checked.svg';
import Checkbox from '@asset/images/icons/checkbox.svg';
import RefreshIcon from '@asset/images/icons/refresh.svg';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import PropTypes from 'prop-types';
import styles from '@mobile/src/styles/common';

const TicketNumberAreaScreen = ({
  ListTicketNumber,
  SelectTicket,
  ticketList,
  selectedDraw,
  drawList,
  basketItemsReducerData,
  status,
  message,
  BasketSelectDraw,
  allDrawsTicketList,
  GetSelectedTicket,
  SendSelectedTicket,
  getSelectedTicketStatus,
  sendTicketStatus,
  isInitial,
  setIsInitial,
}) => {
  const { t } = useTranslation();
  const [selectedDrawDetail, setSelectedDrawDetail] = useState({});
  // const [isInitial, setIsInitial] = useState(true);

  const RefreshTicketList = () => {
    const selections = [];
    const _drawId = selectedDraw.drawID.toString();
    if (allDrawsTicketList.hasOwnProperty(_drawId)) {
      const keys = Object.keys(allDrawsTicketList[_drawId]);

      for (let i = 0; i < keys.length; i++) {
        const x = keys[i];
        selections.push({
          ...allDrawsTicketList[_drawId][x],
          reserveStatus: allDrawsTicketList[_drawId][x].reserve,
        });
      }
    }

    if (selectedDrawDetail.somosDrawID) {
      ListTicketNumber({
        drawID: selectedDrawDetail.somosDrawID,
        selections,
      });
    }
  };

  // #region useEffects
  useEffect(() => {
    const drawIDs = Object.keys(basketItemsReducerData);

    if (isInitial) {
      GetSelectedTicket({
        drawIDs,
      });
    } else {
      GetSelectedTicket({
        drawIDs: [selectedDraw.drawID],
      });
    }

    setIsInitial(false);

    return () => {
      if (selectedDraw.drawID) {
        setIsInitial(true);
        SendSelectedTicket({ drawID: selectedDraw.drawID });
      }
    };
  }, []);

  useEffect(() => {
    // if (!isInitial) {
    if (getSelectedTicketStatus === 'finish') {
      if (selectedDraw.drawID === undefined) {
        const data = drawList.filter((x, i) =>
          x.somosDrawID === Number(Object.keys(basketItemsReducerData)[0])
            ? x
            : null
        );

        BasketSelectDraw({ drawID: data[0].somosDrawID });
      } else if (Object.keys(selectedDraw).length > 0) {
        const data = drawList.filter((x) =>
          x.somosDrawID === Number(selectedDraw.drawID) ? x : null
        );

        setSelectedDrawDetail(data[0]);
      } else {
        const data = drawList.filter((x) =>
          x.somosDrawID === Number(Object.keys(basketItemsReducerData)[0])
            ? x
            : null
        );

        BasketSelectDraw({ drawID: data[0].somosDrawID });
        setSelectedDrawDetail(data[0]);
      }

      setIsInitial(false);
    }
    // }
  }, [getSelectedTicketStatus]);

  useEffect(() => {
    if (!isInitial) {
      RefreshTicketList();
    }
  }, [selectedDrawDetail]);
  // #endregion

  const CheckReserve = (x) => {
    const isReserved = allDrawsTicketList[selectedDraw.drawID]
      ? allDrawsTicketList[selectedDraw.drawID][x.ticketNo.toString()]
        ? !!allDrawsTicketList[selectedDraw.drawID][x.ticketNo.toString()]
            .reserve
        : false
      : false;

    return isReserved;
  };

  return (
    <View style={[styles.ticketNumberSelectList]}>
      <View style={[styles.ticketNumberMain]}>
        {Object.keys(selectedDrawDetail).length ? (
          <>
            <View style={[{ width: '100%' }]}>
              <View style={[styles.containerHead]}>
                <Text>{`${t('select_ticket')}:`}</Text>
                <View style={{ flexGrow: 1 }} />
                <TouchableOpacity
                  style={[styles.refreshTicket]}
                  onPress={RefreshTicketList}
                >
                  <SvgXml
                    width={25}
                    height={25}
                    xml={RefreshIcon}
                    fill="#757575"
                  />
                  <Text>{t('refresh_tickets')}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.allTicketNumberArea]}>
                {status !== 'loading'
                  ? ticketList.map((x, index) => (
                      <TouchableOpacity
                        key={x.ticketNo}
                        style={[
                          styles.ticketNumberSelectOnePieceMain,
                          CheckReserve(x)
                            ? styles.ticketNumberCheckedWithBorder
                            : {},
                        ]}
                        onPress={() => SelectTicket({ index, count: 1 })}
                      >
                        {CheckReserve(x) ? (
                          <SvgXml
                            width={20}
                            height={20}
                            xml={CheckboxChecked}
                            fill="#0270bd"
                          />
                        ) : (
                          <SvgXml
                            width={20}
                            height={20}
                            xml={Checkbox}
                            fill="#757575"
                          />
                        )}
                        <Text
                          style={[
                            { marginLeft: 5 },
                            CheckReserve(x)
                              ? styles.ticketNumberChecked
                              : { color: 'black' },
                          ]}
                        >
                          {x.ticketNo}
                        </Text>
                      </TouchableOpacity>
                    ))
                  : null}
                <LoaderUtil
                  currentStatus={status}
                  customText={message}
                  btnBackIsNotVisible
                />
              </View>
            </View>
          </>
        ) : (
          <LoaderUtil
            currentStatus={status}
            customText={message}
            btnBackIsNotVisible
          />
        )}
      </View>
    </View>
  );
};

TicketNumberAreaScreen.propTypes = {
  SelectTicket: PropTypes.func.isRequired,
  ListTicketNumber: PropTypes.func.isRequired,
  ticketList: PropTypes.array.isRequired,
  selectedDraw: PropTypes.object.isRequired,
  drawList: PropTypes.array.isRequired,
  basketItemsReducerData: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  BasketSelectDraw: PropTypes.func.isRequired,
  allDrawsTicketList: PropTypes.object.isRequired,
  GetSelectedTicket: PropTypes.func.isRequired,
  SendSelectedTicket: PropTypes.func.isRequired,
  getSelectedTicketStatus: PropTypes.string.isRequired,
  sendTicketStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ticketList: state.BasketReducer.ticketList,
  selectedDraw: state.BasketReducer.selectedDraw,
  drawList: state.DrawReducer.drawList,
  basketItemsReducerData: state.BasketReducer.items,
  status: state.BasketReducer.status,
  message: state.BasketReducer.message,
  allDrawsTicketList: state.BasketReducer.allDrawsTicketList,
  getSelectedTicketStatus: state.BasketReducer.getSelectedTicketStatus,
  sendTicketStatus: state.BasketReducer.sendTicketStatus,
});

const mapDispatchToProps = {
  SelectTicket: SelectTicketAction,
  ListTicketNumber: ListTicketNumberAction,
  BasketSelectDraw: BasketSelectDrawAction,
  GetSelectedTicket: GetSelectedTicketAction,
  SendSelectedTicket: SendSelectedTicketAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketNumberAreaScreen);
