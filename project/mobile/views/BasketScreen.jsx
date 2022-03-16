import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Ui_Basket,
  Ui_LeftMenuModal,
  Ui_PrePaymentBasketRequestAction,
} from '@service/actions/Ui_F_Actions';
import { SvgXml } from 'react-native-svg';
import HomepageToolbar from '@mobile/component/Homepage.Toolbar';
import { useTranslation } from 'react-i18next';
import _styles from '@mobile/src/styles/common';
import {
  AddItemBasketAction,
  BasketSelectDrawAction,
  ClearSelectedTicketAction,
  DecreaseItemBasketAction,
  PlaceTicketAction,
  PlaceTicketInitialAction,
  RemoveAllItemBasketAction,
  RemoveItemBasketAction,
  SendSelectedTicketAction,
} from '@service/actions/F_Actions';
import PlusIcon from '@asset/images/icons/plus.svg';
import MinusIcon from '@asset/images/icons/minus.svg';
import DoneIcon from '@asset/images/icons/done.svg';
import SomeErrorIcon from '@asset/images/icons/someError.svg';
import FailIcon from '@asset/images/icons/fail.svg';
import TrashIcon from '@asset/images/icons/trash.svg';
import ImageViewerRN from '@mobile/component/Image.viewer.rn';
import { GetSplitNumberToDigits } from '@utils/numberFormat';
import ButtonBasket from '@mobile/utils/ButtonBasket';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import TicketNumberAreaScreen from './TicketNumberAreaScreen';

const GetEnv = require('@envFile');

const BasketScreen = ({
  basketItemsReducerData,
  drawList,
  endingDrawList,
  RemoveItemBasket,
  DecreaseItemBasket,
  RemoveAllItemBasket,
  userData,
  PlaceTicket,
  totalAmount,
  basketUiState,
  totalAmountAnimate,
  messageState,
  placeTicketStats,
  PlaceTicketInitial,
  Ui_BasketState,
  insufficientMoney,
  totalTicketCount,
  AddItemBasket,
  isComingDetailPage,
  token,
  BasketSelectDraw,
  selectedDraw,
  allDrawsTicketList,
  SendSelectedTicket,
  setOpen,
  navigation,
  lastUpdateDate,
  ClearSelectedTicketAct,
  Ui_PrePaymentBasketRequestA,
}) => {
  const { t } = useTranslation();
  const [basketItems, setBasketItems] = useState([]);
  const [detailIsInitial, setDetailIsInitial] = useState(true);
  const [basketCountWarning, setBasketCountWarning] = useState(false);
  const isScreenFocused = useIsFocused();
  const [isSelectTicketSwitchOn, setIsSelectTicketSwitchOn] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  const ticketButtonClick = (select) => {
    // if (select) {
    //   return history.push(select);
    // }

    return navigation.navigate('drawlist');
  };

  const removeAllItems = () => {
    if (messageState === 'error-some' || messageState === 'success') {
      // RemoveAllItemBasket();
      // PlaceTicketInitial();
      // Ui_BasketState({ currentState: 'initial' });
    }
    if (messageState === 'error-all') {
      PlaceTicketInitial();
      Ui_BasketState({ currentState: 'initial' });
    }
  };

  // #region all useEffects
  useEffect(() => {
    const newData = Object.keys(basketItemsReducerData).map((basketDrawID) => {
      const draw = [...drawList, ...endingDrawList].filter(
        (drawItem) => drawItem.somosDrawID == basketDrawID
      );

      if (draw && draw.length > 0) {
        return {
          drawID: basketDrawID,
          count: basketItemsReducerData[basketDrawID].count,
          selectionCount:
            basketItemsReducerData[basketDrawID].selectedTicketCount,
          title: draw[0].title,
          ticketAmount: draw[0].ticketAmount,
          picture: draw[0].pictures.length > 0 ? draw[0].pictures[0].path : '',
          gameID: basketItemsReducerData[basketDrawID].gameID,
        };
      }
    });

    setBasketItems(newData);
  }, [basketItemsReducerData, drawList]);

  useEffect(() => {
    return () => {
      if (messageState === 'error-some' || messageState === 'success') {
        Ui_BasketState({ currentState: 'initial' });
        RemoveAllItemBasket();
        PlaceTicketInitial();
      }
      if (messageState === 'error-all') {
        PlaceTicketInitial();
        Ui_BasketState({ currentState: 'initial' });
      }
    };
  }, [messageState]);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      ClearSelectedTicketAct();
      navigation.navigate('homepage');
    }, 3 * 60 * 1000);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [lastUpdateDate]);

  useFocusEffect(() => {
    if (!isScreenFocused) {
      if (messageState === 'error-some' || messageState === 'success') {
        RemoveAllItemBasket();
        PlaceTicketInitial();
        Ui_BasketState({ currentState: 'initial' });
      }

      if (messageState === 'error-all') {
        PlaceTicketInitial();
        Ui_BasketState({ currentState: 'initial' });
      }

      BasketSelectDraw({});
    }
  });
  // #endregion

  const placeTicket = () => {
    if (basketUiState === 'login-needed') {
      navigation.navigate('login');

      return;
    }
    if (basketUiState === 'phone-verify') {
      return navigation.navigate('activationSms');
    }

    if (insufficientMoney) {
      Ui_PrePaymentBasketRequestA();

      return navigation.navigate('prePaymentScreen');
    }

    if (userData.Balance >= totalAmount) {
      const dataBuild = { data: [] };
      for (let i = 0; i < basketItems.length; i++) {
        const x = basketItems[i];
        const selection = [];
        let selectionCount = 0;

        if (allDrawsTicketList[x.drawID]) {
          const keys = Object.keys(allDrawsTicketList[x.drawID]);
          for (let k = 0; k < keys.length; k++) {
            const y = allDrawsTicketList[x.drawID][keys[k]];

            if (y.reserve) {
              selection.push(y.ticketNo);
              selectionCount += 1;
            }
          }
        }

        dataBuild.data.push({
          dw: x.drawID,
          a: x.ticketAmount,
          count: x.count - selectionCount,
          selectionCount,
          selection,
          gameID: x.gameID,
        });
      }

      PlaceTicket(dataBuild);
    }
  };

  const DrawOnClick = (value) => {
    if (
      selectedDraw.drawID !== value.drawID &&
      token !== '' &&
      isSelectTicketSwitchOn
    ) {
      // SendSelectedTicket(value);
      BasketSelectDraw(value);
    } else {
      BasketSelectDraw({});
    }
  };

  const basketDrawPlus = (select, x) => {
    if (!basketCountWarning && x.count === 20) {
      setBasketCountWarning(true);
    }
    if (basketCountWarning && x.count < 20) {
      setBasketCountWarning(false);
    }

    if (select === 'minus' && x.count === 20) {
      setBasketCountWarning(false);
    }

    if (select === 'plus') {
      AddItemBasket({
        drawID: x.drawID,
        count: 1,
        gameID: x.gameID,
      });

      if (!selectedDraw.drawID) {
        BasketSelectDraw({});
      }

      return;
    }

    if (select === 'minus') {
      DecreaseItemBasket({
        drawID: x.drawID,
      });

      if (!selectedDraw.drawID) {
        BasketSelectDraw({});
      }
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View
          style={[
            messageState !== 'sending' && messageState !== 'initial'
              ? _styles.basketMessageArea
              : {},
          ]}
        >
          {messageState === 'error-all' ? (
            <>
              <SvgXml width={75} height={75} xml={FailIcon} />
              <Text style={[{ color: 'rgb(219, 39, 39)', marginBottom: 10 }]}>
                {`${t('buy_error_all_msg')}`}
              </Text>
              <Button
                title={t('goToDrawPage')}
                onPress={() => {
                  ticketButtonClick();
                }}
              />
            </>
          ) : null}
          {messageState === 'error-some' ? (
            <>
              <SvgXml width={75} height={75} xml={SomeErrorIcon} />
              <Text style={[{ color: 'rgb(76, 128, 10)' }]}>
                {`${placeTicketStats.success} ${t('buy_success_msg')}`}
              </Text>
              <Text style={[{ color: 'rgb(219, 39, 39)', marginBottom: 10 }]}>
                {`${placeTicketStats.total - placeTicketStats.success} ${t(
                  'buy_error_some_msg'
                )}`}
              </Text>
              <Button
                title={t('Account_Menu_DrawHistory')}
                onPress={() => {
                  navigation.navigate('myTickets');
                }}
              />
            </>
          ) : null}
          {messageState === 'success' ? (
            <>
              <SvgXml width={75} height={75} xml={DoneIcon} />
              <Text style={[{ color: 'rgb(76, 128, 10)', marginBottom: 10 }]}>
                {`${placeTicketStats.success} ${t('buy_success_msg')}`}
              </Text>
              <Button
                title={t('Account_Menu_DrawHistory')}
                onPress={() => {
                  navigation.navigate('myTickets');
                }}
              />
            </>
          ) : null}
        </View>

        {messageState === 'sending' || messageState === 'initial' ? (
          <View style={[_styles.basketItemMainWrapper]} key={index}>
            <Pressable
              style={[_styles.basketItemMain]}
              onPress={() => DrawOnClick({ ...item, index })}
            >
              <View
                style={[
                  {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <View style={[_styles.basketImageAreMain]}>
                  <ImageViewerRN
                    imageName={item.picture}
                    sizeEnum="small-thumb"
                    style={{
                      height: 80,
                      width: 110,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    imageAlt={item.picture}
                  />
                  <View style={[_styles.basketCountTools]}>
                    <TouchableOpacity
                      onPressOut={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        basketDrawPlus('minus', item);
                      }}
                    >
                      <SvgXml
                        width={20}
                        height={20}
                        xml={MinusIcon}
                        fill="#000"
                      />
                    </TouchableOpacity>
                    <Text style={[{ fontWeight: 'bold', fontSize: 16 }]}>
                      {item.count}
                    </Text>
                    <TouchableOpacity
                      onPressOut={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        basketDrawPlus('plus', item);
                      }}
                    >
                      <SvgXml
                        width={20}
                        height={20}
                        xml={PlusIcon}
                        fill="#000"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={[_styles.basketMiddleContent]}>
                  <Text style={[{ fontSize: 16, marginBottom: 5 }]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[{ color: 'gray' }]}
                  >{`(Bilet Adeti: ${GetSplitNumberToDigits(
                    item.ticketAmount
                  )}₺)`}</Text>
                  {isComingDetailPage ? (
                    <View style={{ marginTop: 5 }}>
                      <Text
                        style={[{ color: 'gray' }]}
                      >{`Seçilen bilet: ${item.selectionCount}`}</Text>
                      <Text style={[{ color: 'gray' }]}>{`Rastgele bilet: ${
                        item.count - item.selectionCount
                      }`}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
              <View style={[{ alignItems: 'flex-end' }]}>
                <TouchableOpacity
                  style={[{ marginBottom: 20 }]}
                  onPress={() => {
                    RemoveItemBasket({ drawID: item.drawID });
                    BasketSelectDraw({});
                  }}
                >
                  <SvgXml
                    width={20}
                    height={20}
                    xml={TrashIcon}
                    fill="#db2727"
                  />
                </TouchableOpacity>
                <Text style={[{ fontSize: 20 }]}>
                  {`${GetSplitNumberToDigits(item.ticketAmount * item.count)}₺`}
                </Text>
              </View>
            </Pressable>
            {isComingDetailPage ? (
              selectedDraw.drawID === item.drawID ? (
                <TicketNumberAreaScreen
                  isInitial={detailIsInitial}
                  setIsInitial={setDetailIsInitial}
                />
              ) : null
            ) : null}
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <HomepageToolbar navigation={navigation} />

        {!isCyprus &&
        basketItems.length > 0 &&
        token !== '' &&
        messageState !== 'error-some' &&
        messageState !== 'error-all' ? (
          <View style={[_styles.basketSelectTicketSwitchMain]}>
            <Text style={[_styles.basketSelectTicketSwitchTextColor]}>
              Bilet numaralarınızı elle seçin
            </Text>
            <Switch
              color="#0270bd"
              value={isSelectTicketSwitchOn}
              onValueChange={() => {
                if (isSelectTicketSwitchOn) {
                  BasketSelectDraw({});
                }
                setIsSelectTicketSwitchOn(!isSelectTicketSwitchOn);
              }}
            />
          </View>
        ) : null}
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={basketItems}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <View style={[_styles.basketNoTicketMain]}>
              <Text>{t('noTicketInBasket')}</Text>

              <Button
                size="tiny"
                title={t('goToDrawPage')}
                onPress={() => {
                  ticketButtonClick();
                }}
              />
            </View>
          )}
        />
      </View>

      {basketItems.length > 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          {!isCyprus &&
          !isComingDetailPage &&
          token !== '' &&
          messageState === 'initial' ? (
            <Text
              style={[_styles.basketSelectTicketNumber]}
              onPress={() => {
                // setIsOpenBasketArea(false);
                // pathname: `/${t('route_basketDetail')}`,
              }}
            >
              {t('basket_select_ticket_number')}
            </Text>
          ) : null}
          {basketCountWarning ? (
            <Text style={[_styles.basketMaxText]}>{t('basket_max_text')}</Text>
          ) : null}
          {totalTicketCount >= 100 && messageState === 'initial' ? (
            <Text style={[_styles.basketMaxText]}>{t('max_ticket_limit')}</Text>
          ) : null}
          <ButtonBasket
            totalAmountAnimate={totalAmountAnimate}
            mainState={insufficientMoney ? 'insufficient-money' : basketUiState}
            totalAmount={GetSplitNumberToDigits(totalAmount, true)}
            totalAmountResponse={
              messageState === 'error-some' ||
              messageState === 'success' ||
              messageState === 'error-all'
                ? GetSplitNumberToDigits(
                    placeTicketStats && placeTicketStats.totalAmount
                      ? placeTicketStats.totalAmount
                      : 0
                  )
                : -1
            }
            navigation={navigation}
            whenResultCameDisabled
            onPressF={placeTicket}
          />
        </View>
      ) : null}
    </View>
  );
};

BasketScreen.defaultProps = {
  userData: {},
  isComingDetailPage: true,
  Ui_PrePaymentBasketRequestA: () => {},
};

BasketScreen.propTypes = {
  basketItemsReducerData: PropTypes.object.isRequired,
  drawList: PropTypes.array.isRequired,
  endingDrawList: PropTypes.array.isRequired,
  totalAmount: PropTypes.number.isRequired,
  RemoveItemBasket: PropTypes.func.isRequired,
  DecreaseItemBasket: PropTypes.func.isRequired,
  RemoveAllItemBasket: PropTypes.func.isRequired,
  userData: PropTypes.object,
  PlaceTicket: PropTypes.func.isRequired,
  basketUiState: PropTypes.string.isRequired,
  totalAmountAnimate: PropTypes.bool.isRequired,
  messageState: PropTypes.string.isRequired,
  placeTicketStats: PropTypes.object.isRequired,
  insufficientMoney: PropTypes.bool.isRequired,
  totalTicketCount: PropTypes.number.isRequired,
  AddItemBasket: PropTypes.func.isRequired,
  Ui_BasketState: PropTypes.func.isRequired,
  PlaceTicketInitial: PropTypes.func.isRequired,
  isComingDetailPage: PropTypes.bool,
  token: PropTypes.string.isRequired,
  BasketSelectDraw: PropTypes.func.isRequired,
  selectedDraw: PropTypes.object.isRequired,
  allDrawsTicketList: PropTypes.object.isRequired,
  SendSelectedTicket: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
  Ui_PrePaymentBasketRequestA: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    basketItemsReducerData: state.BasketReducer.items,
    drawList: state.DrawReducer.drawList,
    endingDrawList: state.DrawReducer.endingDrawList,
    totalAmount: state.BasketReducer.totalAmount,
    insufficientMoney: state.BasketReducer.insufficientMoney,
    totalTicketCount: state.BasketReducer.totalTicketCount,
    userData: state.UserReducer.userData,
    messageState: state.PlaceTicketReducer.messageState,
    placeTicketStats: state.PlaceTicketReducer.stats,
    basketUiState: state.Ui_F_BasketReducer.currentState,
    totalAmountAnimate: state.Ui_F_BasketReducer.totalAmountAnimate,
    token: state.UserReducer.token,
    selectedDraw: state.BasketReducer.selectedDraw,
    allDrawsTicketList: state.BasketReducer.allDrawsTicketList,
    lastUpdateDate: state.BasketReducer.lastUpdateDate,
  };
};

const mapDispatchToProps = {
  RemoveItemBasket: RemoveItemBasketAction,
  DecreaseItemBasket: DecreaseItemBasketAction,
  RemoveAllItemBasket: RemoveAllItemBasketAction,
  PlaceTicket: PlaceTicketAction,
  PlaceTicketInitial: PlaceTicketInitialAction,
  Ui_BasketState: Ui_Basket,
  AddItemBasket: AddItemBasketAction,
  BasketSelectDraw: BasketSelectDrawAction,
  SendSelectedTicket: SendSelectedTicketAction,
  setOpen: Ui_LeftMenuModal,
  ClearSelectedTicketAct: ClearSelectedTicketAction,
  Ui_PrePaymentBasketRequestA: Ui_PrePaymentBasketRequestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
