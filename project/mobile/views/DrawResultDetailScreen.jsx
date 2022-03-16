import { DrawResultDetailAction } from '@service/actions/F_Actions';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from '@mobile/src/styles/common';
import MessagesUtil from '@mobile/utils/MessageUtil';

const DrawResultDetailScreen = ({
  route,
  getDrawResultDetail,
  drawResultDetailListData,
  appendData,
}) => {
  const { t } = useTranslation();
  const [drawResultDetailArrayList, setDrawResultDetailArrayList] = useState(
    []
  );

  // #region useEffects
  useEffect(() => {
    getDrawResultDetail({
      drawID: route.params.drawID,
    });
  }, []);

  useEffect(() => {
    const newArray = [];
    if (Object.keys(drawResultDetailListData).length > 0) {
      Object.keys(drawResultDetailListData).map((x) =>
        newArray.push(drawResultDetailListData[x])
      );
    }
    setDrawResultDetailArrayList(newArray);
  }, [drawResultDetailListData]);
  // #endregion

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.drawResultDetailRenderMain,
          index === 0 ? { marginTop: 0 } : {},
        ]}
      >
        <Text style={[styles.drawResultDetailRenderTitleText]}>
          {item.prizeName} Kazanan Biletler
        </Text>
        <View style={[styles.drawResultDetailTicketNumberMain]}>
          {item.winnerTicketNos.map((ticket, i) => (
            <Text
              key={ticket}
              style={[styles.drawResultDetailTicketNumberText]}
            >
              {ticket}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={drawResultDetailArrayList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={
        <MessagesUtil
          messageType="info"
          isShow
          tText="-200"
          pageName="DrawResult"
        />
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    drawResultDetailListData:
      state.DrawResultDetailReducer.drawResultDetailList,
    appendData: state.DrawResultDetailReducer.appendData,
  };
};

const mapDispatchToProps = {
  getDrawResultDetail: DrawResultDetailAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawResultDetailScreen);
