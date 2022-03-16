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
import {
  Dimensions,
  useWindowDimensions,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import _styles from '@mobile/src/styles/common';
import { SafeAreaView } from 'react-native-safe-area-context';
import game6Blue from '@asset/images/static/game6-bluebg.jpg';
import game6White from '@asset/images/static/game6-whitebg.jpg';
import game6Purple from '@asset/images/static/game6-purplebg.jpg';
import InfoIcon from '@asset/images/icons/info.svg';
import { SvgXml } from 'react-native-svg';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { BottomSheetScrollView, TouchableOpacity } from '@gorhom/bottom-sheet';
import RenderHtml from 'react-native-render-html';
import sanitizeHtml from 'sanitize-html';

const DrawDetailGameID6ModalRN = ({
  drawPrizeData,
  currentState,
  drawID,
  closeNotifier,
  AddBasketOnModal,
  BasketSelectDraw,
  AddItemBasket,
  basketItems,
  token,
  drawData,
}) => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  const [ticketCount, setTicketCount] = useState({
    quarter: 1,
    half: 1,
    full: 1,
  });
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

  const closeHandler = () => {
    setTabIndex(0);
    setTicketCount({
      quarter: 1,
      half: 1,
      full: 1,
    });

    // history.push(RouterPathsConst.draws);

    return closeNotifier();
  };

  const addBasketF = (drawFilter, ticketType) => {
    closeNotifier();

    return AddBasketOnModal({
      drawID: drawFilter.somosDrawID,
      count: ticketCount[ticketType],
      gameID: drawFilter.gameID,
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

  const BtnAddBasketOnClick = (drawFilter, ticketType) => {
    if (drawFilter.isResulted) {
      goDrawResult(drawFilter);
    } else if (drawFilter.remainingTicketCount !== 0 && drawFilter.isActive) {
      // toast('Biletler sepete eklendi.');
      addBasketF(drawFilter, ticketType);
    }
    BasketSelectDraw({});
  };

  useEffect(() => {
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

  const handleChange = (e, ticketType) => {
    const numberValue = Number(e);

    return setTicketCount({ ...ticketCount, [ticketType]: numberValue });
  };

  const selectorItem = ({ ticketType, drawTypeId, ticketTypeColor }) => {
    const drawFilter =
      drawData[drawID] &&
      drawData[drawID].filter((a) => a.typeOfDraw === drawTypeId).length > 0
        ? drawData[drawID].filter((a) => a.typeOfDraw === drawTypeId)[0]
        : { ticketAmount: 0, isActive: false };
    const titleF = t(`cyprus_game6_${ticketType}`).split(' ');
    const ticketTypeCount = ticketCount[ticketType];
    const disabledDraw = drawData[drawID] === undefined || !drawFilter.isActive;

    return (
      <View
        style={[
          _styles.selectorItem,
          disabledDraw ? _styles.selectorItemDisabled : {},
        ]}
      >
        <View style={_styles.selectorItemTop}>
          <View
            style={[_styles.selectorItemType, _styles[`${ticketType}Color`]]}
          >
            <View style={_styles.selectorItemC}>
              {titleF.map((item) => (
                <Text
                  style={[
                    _styles.selectorItemTypeText,
                    _styles[`${ticketType}Color`],
                  ]}
                >
                  {item}
                </Text>
              ))}
            </View>
            <View
              style={[
                _styles.selectorItemTicketAmount,
                _styles[`${ticketType}Color`],
              ]}
            >
              <Text
                style={[
                  _styles.selectorItemTicketAmountText,
                  _styles[`${ticketType}Color`],
                ]}
              >
                {drawFilter.ticketAmount ? `${drawFilter.ticketAmount}₺` : ''}
                &nbsp;
              </Text>
            </View>
          </View>
        </View>
        <NativeViewGestureHandler disallowInterruption shouldActivateOnStart>
          <Slider
            style={{
              width: Dimensions.get('window').width,
              height: 40,
            }}
            minimumValue={1}
            maximumValue={20}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor={ticketTypeColor}
            step={1}
            // onSlidingComplete={(e) => setTest(e)}
            onValueChange={(e) => handleChange(e, ticketType)}
            // value={test}
            disabled={disabledDraw}
          />
        </NativeViewGestureHandler>
        <View>
          <TouchableOpacity
            onPress={() => BtnAddBasketOnClick(drawFilter, ticketType)}
            style={[_styles.buttonBasketCyprus, _styles[`${ticketType}Color`]]}
            disabled={disabledDraw}
          >
            {!disabledDraw ? (
              <>
                <View
                  style={[
                    _styles.buttonBasketRightArea,
                    _styles[`${ticketType}Color`],
                  ]}
                >
                  <Text
                    style={[
                      _styles.buttonBasketRightAreaText,
                      _styles[`${ticketType}Color`],
                    ]}
                  >{`${ticketTypeCount}`}</Text>
                  <Text
                    style={[
                      _styles.buttonBasketRightAreaLowerText,
                      _styles[`${ticketType}Color`],
                    ]}
                  >
                    {t('ticket_count')}
                  </Text>
                </View>
                <View style={_styles.buttonBasketLeftArea}>
                  <Text
                    style={[
                      _styles.buttonBasketLeftAreaText,
                      _styles[`${ticketType}Color`],
                    ]}
                  >{`${t('add_to_basket')}`}</Text>
                </View>
              </>
            ) : drawFilter.isResulted ? (
              <View
                style={[
                  _styles.buttonBasketLeftArea,
                  _styles.buttonBasketLeftAreaFull,
                ]}
              >
                <Text
                  style={[
                    _styles.buttonBasketLeftAreaText,
                    _styles[`${ticketType}Color`],
                  ]}
                >{`${t('drawbox_timer_5')}`}</Text>
              </View>
            ) : drawFilter.remainingTicketCount <= 0 && !timeOver ? (
              <View
                style={[
                  _styles.buttonBasketLeftArea,
                  _styles.buttonBasketLeftAreaFull,
                ]}
              >
                <Text
                  style={[
                    _styles.buttonBasketLeftAreaText,
                    _styles[`${ticketType}Color`],
                  ]}
                >{`${t('soldOut')}`}</Text>
              </View>
            ) : timeOver ? (
              <View
                style={[
                  _styles.buttonBasketLeftArea,
                  _styles.buttonBasketLeftAreaFull,
                ]}
              >
                <Text
                  style={[
                    _styles.buttonBasketLeftAreaText,
                    _styles[`${ticketType}Color`],
                  ]}
                >{`${t('drawbox_timer_3')}`}</Text>
              </View>
            ) : (
              <View
                style={[
                  _styles.buttonBasketLeftArea,
                  _styles.buttonBasketLeftAreaFull,
                ]}
              >
                <Text
                  style={[
                    _styles.buttonBasketLeftAreaText,
                    _styles[`${ticketType}Color`],
                  ]}
                >{`${t('drawbox_timer_2')}`}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={[_styles.drawModalGame6Container]}>
      <SafeAreaView edges={['right', 'bottom', 'left']}>
        {/*
        {currentState !== 'fullfield' ? (
          <LoaderUtil currentStatus={currentState} />
        ) : drawPrizeData &&
        drawPrizeData.prizes &&
        drawPrizeData.prizes.length > 0 ? (
          <View>
            <Text>fdfd</Text>
          </View>
        ) : (
          <View />
        )}
        */}
        <View style={_styles.game6Selector}>
          <View style={_styles.drawModalTopAreaTitleArea}>
            <Text style={_styles.drawModalTopAreaTitle}>
              {t('cyprus_game6_title')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowDrawDescription(!showDrawDescription);
              }}
            >
              <SvgXml width={20} height={20} xml={InfoIcon} />
            </TouchableOpacity>
          </View>
          {showDrawDescription ? (
            <RenderHtml
              contentWidth={width}
              source={{
                html: `${sanitizeHtml(drawPrizeData.description)}`,
              }}
              baseStyle={{ padding: 20 }}
            />
          ) : (
            <>
              <ImageBackground
                source={game6Purple}
                resizeMode="cover"
                style={_styles.selectorMain}
              >
                {selectorItem({
                  ticketType: 'full',
                  drawTypeId: 1,
                  ticketTypeColor: '#f6e322',
                })}
              </ImageBackground>
              <ImageBackground
                source={game6Blue}
                resizeMode="cover"
                style={_styles.selectorMain}
              >
                {selectorItem({
                  ticketType: 'half',
                  drawTypeId: 2,
                  ticketTypeColor: '#005fe1',
                })}
              </ImageBackground>
              <ImageBackground
                source={game6White}
                resizeMode="cover"
                style={_styles.selectorMain}
              >
                {selectorItem({
                  ticketType: 'quarter',
                  drawTypeId: 3,
                  ticketTypeColor: '#2d2d2d',
                })}
              </ImageBackground>
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

DrawDetailGameID6ModalRN.propTypes = exact({
  drawPrizeData: PropTypes.object,
  drawID: PropTypes.number,
  currentState: PropTypes.oneOf(['loading', 'fullfield', 'error']),
  closeNotifier: PropTypes.func,
  AddBasketOnModal: PropTypes.func,
  BasketSelectDraw: PropTypes.func.isRequired,
  AddItemBasket: PropTypes.func.isRequired,
  basketItems: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  drawData: PropTypes.object,
});

DrawDetailGameID6ModalRN.defaultProps = {
  drawPrizeData: null,
  drawID: -1,
  currentState: 'loading',
  closeNotifier: () => {},
  AddBasketOnModal: () => {},
  drawData: {},
};

const mapStateToProps = (state) => {
  return {
    basketItems: state.BasketReducer.items,
    drawData: state.DrawReducer.drawListGame6,
    token: state.UserReducer.token,
  };
};

const mapDispatchToProps = {
  AddBasketOnModal: AddBasketOnModalAction,
  BasketSelectDraw: BasketSelectDrawAction,
  AddItemBasket: AddItemBasketAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawDetailGameID6ModalRN);
