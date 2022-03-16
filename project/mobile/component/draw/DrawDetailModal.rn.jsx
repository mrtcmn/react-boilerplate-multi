import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import { connect } from 'react-redux';
import {
  AddBasketOnModalAction,
  AddItemBasketAction,
  BasketSelectDrawAction,
} from '@service/actions/F_Actions';
import { Dimensions, useWindowDimensions, View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { Text } from 'react-native-paper';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import PrizesTabRN from '@mobile/component/draw/PrizesTab.rn';
import { SvgXml } from 'react-native-svg';
import InfoIcon from '@asset/images/icons/info.svg';
import PrizeContentRN from '@mobile/component/draw/PrizeContent.rn';
import ButtonDrawModalRN from '@mobile/utils/ButtonDrawModal';
import { BottomSheetScrollView, TouchableOpacity } from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHtml from 'react-native-render-html';
import sanitizeHtml from 'sanitize-html';

const DrawDetailModalRN = ({
  drawPrizeData,
  currentState,
  drawID,
  closeNotifier,
  AddBasketOnModal,
  BasketSelectDraw,
  AddItemBasket,
  basketItems,
  token,
}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);
  const [rangeState, setRangeState] = useState(false);
  const [drawDescription, setDrawDescription] = useState(false);
  const [showDrawDescription, setShowDrawDescription] = useState(false);
  const { width } = useWindowDimensions();

  const tabData =
    drawPrizeData &&
    drawPrizeData.prizes &&
    drawPrizeData.prizes.map((prizeItem) => {
      return {
        name: prizeItem.name,
        prizeCount: prizeItem.prizeCount,
        pid: prizeItem.pid,
        picturesPath:
          prizeItem.pictures && prizeItem.pictures.length > 0
            ? prizeItem.pictures[0].path
            : '',
      };
    });
  const clickPrizesTab = (key) => {
    console.log(key);
    setTabIndex(key);
  };

  const goBasketDetail = () => {
    /*
    if (token !== '') {
      if (!basketItems.hasOwnProperty(drawID)) {
        AddItemBasket({
          drawID,
          count: 1,
          gameID: drawPrizeData.gameID,
        });
      }

      BasketSelectDraw({ drawID: drawID.toString() });
      closeHandler();

      const x = setTimeout(() => {
        history.push(`/${t('route_basketDetail')}`);
        clearTimeout(x);
      }, 50);
    } else {
      history.push(`/${t('route_login')}`);
    }

    */
  };

  const closeHandler = () => {
    setTabIndex(0);
    setTicketCount(1);

    // history.push(RouterPathsConst.draws);

    return closeNotifier();
  };

  const addBasketF = () => {
    return AddBasketOnModal({
      drawID,
      count: ticketCount,
      gameID: drawPrizeData.gameID,
    });
  };

  const goDrawResult = () => {
    /*
    closeHandler();
    history.push(
      `/${t('route_draw_result_detail')}/${drawPrizeData.somosDrawID}`
    );
    */
  };

  const BtnAddBasketOnClick = () => {
    if (drawPrizeData.isResulted) {
      goDrawResult();
    } else if (
      drawPrizeData.remainingTicketCount !== 0 &&
      drawPrizeData.isActive
    ) {
      // toast('Biletler sepete eklendi.');
      addBasketF();
    }
    BasketSelectDraw({});
  };

  useEffect(() => {
    console.log(drawPrizeData);

    if (drawPrizeData) {
      const countDownDate = new Date(drawPrizeData.drawDate);
      const now = new Date().getTime();

      if (countDownDate.getTime() < now) {
        setTimeOver(true);
      } else {
        setTimeOver(false);
      }
    }
  }, [drawPrizeData]);

  const handleChange = (e) => {
    const numberValue = Number(e);

    return setTicketCount(numberValue);

    // if (name === 'input') {
    //   if (numberValue >= 0 && numberValue < 101) {
    //     return setTicketCount(numberValue);
    //   }
    // }
  };

  return (
    <View style={[_styles.drawModalContentContainer, { flex: 1 }]}>
      <SafeAreaView edges={['right', 'bottom', 'left']}>
        {currentState !== 'fullfield' ? (
          <LoaderUtil currentStatus={currentState} />
        ) : drawPrizeData &&
          drawPrizeData.prizes &&
          drawPrizeData.prizes.length > 0 ? (
          <View style={_styles.drawModalContentContainerInside}>
            <View
              style={[!showDrawDescription ? _styles.drawModalTopArea : {}]}
            >
              <View style={_styles.drawModalTopAreaTitleArea}>
                <Text style={_styles.drawModalTopAreaTitle}>
                  {drawPrizeData.title}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowDrawDescription(!showDrawDescription);
                  }}
                >
                  <SvgXml width={20} height={20} xml={InfoIcon} />
                </TouchableOpacity>
              </View>
              {!showDrawDescription ? (
                <View style={_styles.drawModalPrizeScroll}>
                  <BottomSheetScrollView horizontal>
                    <View style={_styles.prizeTabWrapper}>
                      {tabData.map((item, index) => (
                        <TouchableOpacity
                          style={_styles.prizeTabTR}
                          key={item.pid}
                          onPress={() => clickPrizesTab(index)}
                        >
                          <PrizesTabRN
                            isSelected={index === tabIndex}
                            name={item.name}
                            picturesPath={item.picturesPath}
                            pid={item.pid}
                            prizeCount={item.prizeCount}
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  </BottomSheetScrollView>
                </View>
              ) : null}
            </View>

            {!showDrawDescription ? (
              <>
                <PrizeContentRN
                  drawData={drawPrizeData}
                  prizeData={drawPrizeData.prizes[tabIndex]}
                  drawID={drawID}
                />

                <View
                  style={[
                    {
                      backgroundColor: 'white',
                      marginBottom: 10,
                      borderStyle: 'solid',
                      borderColor: '#dcdcdc',
                      borderTopWidth: 1,
                    },
                  ]}
                >
                  <NativeViewGestureHandler
                    disallowInterruption
                    shouldActivateOnStart
                  >
                    <Slider
                      style={{
                        width: Dimensions.get('window').width,
                        height: 40,
                      }}
                      minimumValue={1}
                      maximumValue={20}
                      minimumTrackTintColor="#000000"
                      maximumTrackTintColor="#000000"
                      thumbTintColor="#0270bd"
                      step={1}
                      // onSlidingComplete={(e) => setTest(e)}
                      onValueChange={handleChange}
                      // value={test}
                    />
                  </NativeViewGestureHandler>
                  <ButtonDrawModalRN
                    mainState="initial"
                    ticketCount={ticketCount}
                    ticketAmount={drawPrizeData.ticketAmount}
                    onPressF={BtnAddBasketOnClick}
                  />
                </View>
              </>
            ) : (
              <BottomSheetScrollView contentContainerStyle={{ padding: 20 }}>
                <RenderHtml
                  contentWidth={width}
                  source={{
                    html: `${sanitizeHtml(drawPrizeData.description)}`,
                  }}
                />
              </BottomSheetScrollView>
            )}
          </View>
        ) : (
          <View />
        )}
      </SafeAreaView>
    </View>
  );
};

DrawDetailModalRN.propTypes = exact({
  drawPrizeData: PropTypes.object,
  drawID: PropTypes.number,
  currentState: PropTypes.oneOf(['loading', 'fullfield', 'error']),
  closeNotifier: PropTypes.func,
  AddBasketOnModal: PropTypes.func,
  BasketSelectDraw: PropTypes.func.isRequired,
  AddItemBasket: PropTypes.func.isRequired,
  basketItems: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
});

DrawDetailModalRN.defaultProps = {
  drawPrizeData: null,
  drawID: -1,
  currentState: 'loading',
  closeNotifier: () => {},
  AddBasketOnModal: () => {},
};

const mapStateToProps = (state) => {
  return {
    basketItems: state.BasketReducer.items,
    token: state.UserReducer.token,
  };
};

const mapDispatchToProps = {
  AddBasketOnModal: AddBasketOnModalAction,
  BasketSelectDraw: BasketSelectDrawAction,
  AddItemBasket: AddItemBasketAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawDetailModalRN);
