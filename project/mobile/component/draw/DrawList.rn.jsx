import React, {
  Component,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import DrawBox from '@f/components/draw/DrawBox';
import DrawModalMain from '@f/components/draw/drawModal/DrawModalMain';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation, withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { RouterPathsConst } from '@f/constants/routers.constant';
import { gtmEvent_selectItem } from '@f/utils/gtm.util';
import DrawBoxRN from '@mobile/component/draw/DrawBox.rn';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ui_DrawPrizeModal } from '@service/actions/Ui_F_Actions';
import { DrawPrizeAction } from '@service/actions/F_Actions';

const DrawListRN = ({
  drawListData,
  drawPrizeListData,
  drawModalStatus,
  DrawPrizeAction,
  Ui_DrawPrizeModal,
  endingDrawList,
  navigation,
}) => {
  const { t } = useTranslation();

  /*
  constructor(props) {
    super(props);

    this.state = {
      prizeModal: {
        isOpen: false,
        drawID: 0,
      },
    };
  }

*/
  const openModal = (
    modalIsOpen,
    drawID = 0,
    gameID = 5,
    drawIndex,
    isResulted
  ) => {
    Ui_DrawPrizeModal({
      isOpen: true,
      currentState: 'loading',
      drawID,
      gameID,
    });
    DrawPrizeAction({
      modalIsOpen: true,
      drawID,
      gameID,
    });
  };

  let modalData = {};
  if (
    drawModalStatus &&
    drawModalStatus.drawID &&
    drawModalStatus.drawID !== -1
  ) {
    const xx = endingDrawList.filter(
      (x) => x.somosDrawID === Number(drawModalStatus.drawID)
    );

    modalData = drawPrizeListData && drawPrizeListData[drawModalStatus.drawID];
    modalData = modalData || {};
    modalData.isResulted =
      xx.length > 0
        ? xx[0].isResulted === 1
          ? true
          : xx[0].isResulted
        : false;
  }

  return (
    <View>
      {drawListData.length > 0 ? (
        <>
          <Text style={_styles.colorfulTitle}>AKTİF ÇEKİLİŞLER</Text>
          <View>
            {drawListData.map((drawItem, index) => (
              <DrawBoxRN
                onClickMethod={() => {
                  console.log('drawItem', drawItem);

                  drawItem.gameID == 7
                    ? navigation.navigate('scratchPageScreen')
                    : openModal(
                        true,
                        drawItem.gameID === 6
                          ? drawItem.groupDrawID
                          : drawItem.somosDrawID,
                        drawItem.gameID,
                        index + 1,
                        drawItem.isResulted
                      );
                }}
                key={`${drawItem.somosDrawID}_${index}`}
                somosDrawID={drawItem.somosDrawID.toString()}
                drawDate={drawItem.drawDate}
                drawStartDate={drawItem.drawStartDate}
                title={drawItem.title}
                pictures={drawItem.pictures}
                remainingTicketCount={drawItem.remainingTicketCount}
                approxPrizeValue={drawItem.approxPrizeValue}
                ticketAmount={drawItem.ticketAmount}
                allowAnimate={drawItem.allowAnimate}
                gameID={drawItem.gameID}
                isActive={drawItem.isActive}
                isResulted={drawItem.isResulted}
              />
            ))}
          </View>
        </>
      ) : null}

      {endingDrawList.length > 0 ? (
        <>
          <Text style={_styles.colorfulTitle}>{t('endingDraws')}</Text>
          <View>
            {endingDrawList.map((drawItem, index) => (
              <DrawBoxRN
                onClickMethod={() => true}
                key={drawItem.somosDrawID}
                somosDrawID={drawItem.somosDrawID.toString()}
                drawDate={drawItem.drawDate}
                drawStartDate={drawItem.drawStartDate}
                title={drawItem.title}
                pictures={drawItem.pictures}
                remainingTicketCount={drawItem.remainingTicketCount}
                approxPrizeValue={drawItem.approxPrizeValue}
                ticketAmount={drawItem.ticketAmount}
                allowAnimate={drawItem.allowAnimate}
                gameID={drawItem.gameID}
                isEndingDraw
                isActive={drawItem.isActive}
                isResulted={drawItem.isResulted}
              />
            ))}
          </View>
        </>
      ) : null}
    </View>
  );

  /*
  <DrawModalMain
    drawPrizeData={modalData}
    drawID={drawModalStatus.drawID}
    currentState={drawModalStatus.currentState}
    isOpen={drawModalStatus.isOpen}
    closeNotifier={() =>
      this.props.Ui_DrawPrizeModal({
        isOpen: false,
        currentState: 'loading',
        drawID: -1,
      })
    }
  />

   */
};

DrawListRN.propTypes = {
  drawListData: PropTypes.array,
  drawPrizeListData: PropTypes.object,
  drawModalStatus: PropTypes.object,
  DrawPrizeAction: PropTypes.func,
  Ui_DrawPrizeModal: PropTypes.func,
  endingDrawList: PropTypes.array.isRequired,
  navigation: PropTypes.object,
};

DrawListRN.defaultProps = {
  drawListData: [],
  drawPrizeListData: {},
  navigation: {},
  drawModalStatus: null,
  DrawPrizeAction: () => {},
  Ui_DrawPrizeModal: () => {},
};

const mapStateToProps = (state) => {
  return {
    drawListData: state.DrawReducer.drawList,
    endingDrawList: state.DrawReducer.endingDrawList,
    drawPrizeListData: state.DrawReducer.drawPrizeList,
    drawModalStatus: state.Ui_F_DrawPrizeReducer,
  };
};

const mapDispatchToProps = {
  DrawPrizeAction,
  Ui_DrawPrizeModal,
};

// const withRouterDrawList = withRouter(DrawListRN);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DrawListRN));
