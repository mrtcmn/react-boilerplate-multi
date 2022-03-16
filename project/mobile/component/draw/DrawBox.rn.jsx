import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import { connect } from 'react-redux';
import {
  AddItemBasketAction,
  BasketSelectDrawAction,
} from '@service/actions/F_Actions';
import { GetSplitNumberToDigits } from '@utils/numberFormat';
import * as DateFns from 'date-fns';
import { tr } from 'date-fns/locale';
import { format } from 'date-fns';
import { TouchableOpacity, View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { Text, Menu, TouchableRipple } from 'react-native-paper';
import ImageViewerRN from '@mobile/component/Image.viewer.rn';
import { SvgXml } from 'react-native-svg';
import ClickIcon from '@asset/images/icons/click.svg';

const DrawBoxRN = ({
  somosDrawID,
  drawDate,
  drawStartDate,
  title,
  pictures,
  remainingTicketCount,
  approxPrizeValue,
  ticketAmount,
  onClickMethod,
  AddItemBasket,
  drawListCountAnimation,
  allowAnimate,
  gameID,
  isEndingDraw,
  isActive,
  isResulted,
  BasketSelectDraw,
}) => {
  const countTrayValues = [1, 5, 10, 15, 20];
  const { t } = useTranslation();
  const [timeOver, setTimeOver] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const _pictures = pictures && pictures[0];

  useEffect(() => {
    const countDownDate = new Date(drawDate);
    const now = new Date().getTime();
    if (countDownDate.getTime() < now) {
      setTimeOver(true);
    }
  }, []);

  const FastTicketCountOnClick = (ctItem) => {
    if (remainingTicketCount !== 0 && isActive) {
      AddItemBasket({
        drawID: somosDrawID,
        gameID,
        count: ctItem,
      });
      BasketSelectDraw({});
    }
  };

  return (
    <TouchableRipple onPress={onClickMethod}>
      <View style={_styles.drawBoxMain}>
        <View>
          <View style={_styles.drawBoxPrice}>
            <View style={_styles.drawBoxPriceMain}>
              <Text style={_styles.drawBoxPriceText}>
                {GetSplitNumberToDigits(ticketAmount, true)}₺
              </Text>
            </View>
            <Menu
              style={_styles.drawBoxAddMenu}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <View>
                  <TouchableOpacity
                    onPress={openMenu}
                    style={_styles.drawBoxAddTR}
                  >
                    <View style={_styles.drawBoxAdd} onPress={openMenu}>
                      <Text style={_styles.drawBoxPriceText}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              }
            >
              {countTrayValues.map((trayItem) => (
                <Menu.Item
                  key={trayItem}
                  onPress={() => {
                    FastTicketCountOnClick(trayItem);
                    closeMenu();
                  }}
                  title={`${trayItem} Bilet Ekle`}
                />
              ))}
            </Menu>
          </View>
          <ImageViewerRN
            style={_styles.drawBoxImage}
            imageName={_pictures.path}
            sizeEnum="box-thumb"
          />
        </View>

        <View style={_styles.drawBoxBottom}>
          <View style={_styles.drawBoxBottomLeft}>
            <Text>{title}</Text>
          </View>

          <View style={_styles.drawBoxBottomRight}>
            {isResulted ? (
              <View style={_styles.drawBoxBottomRightWrapper}>
                <Text style={_styles.drawBoxBottomRightText}>
                  {t('draw_is_resulted')}
                </Text>
              </View>
            ) : isEndingDraw ? (
              <View style={_styles.drawBoxBottomRightWrapper}>
                {timeOver ? (
                  <Text>{t('drawbox_timer_1')}</Text>
                ) : (
                  <View style={_styles.drawBoxBottomRightWrapper}>
                    <Text style={_styles.drawBoxBottomRightText}>
                      {DateFns.formatDistanceToNow(new Date(drawDate), {
                        locale: tr,
                        addSuffix: true,
                      })}
                    </Text>
                    <Text style={_styles.drawBoxBottomRightText}>
                      {t('drawbox_timer_2')}
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              <View style={_styles.drawBoxBottomRightWrapper}>
                {gameID != 7 ? (
                  <>
                    <Text style={_styles.drawBoxBottomRightText}>
                      {format(new Date(drawDate), 'dd.MM.yyyy')}
                    </Text>
                    <Text style={_styles.drawBoxBottomRightText}>
                      {t('draw_date')}
                    </Text>
                  </>
                ) : (
                  <View style={_styles.drawBoxBottomRightGame7}>
                    <Text style={[{ marginRight: 10 }]}>Çekilişe Katıl</Text>
                    <SvgXml
                      width={20}
                      height={20}
                      xml={ClickIcon}
                      fill="#ffffff"
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

DrawBoxRN.propTypes = exact({
  somosDrawID: PropTypes.string,
  drawDate: PropTypes.string,
  drawStartDate: PropTypes.string,
  title: PropTypes.string,
  pictures: PropTypes.array,
  remainingTicketCount: PropTypes.number,
  approxPrizeValue: PropTypes.string,
  ticketAmount: PropTypes.number,
  onClickMethod: PropTypes.func,
  allowAnimate: PropTypes.bool,
  AddItemBasket: PropTypes.func.isRequired,
  drawListCountAnimation: PropTypes.bool.isRequired,
  gameID: PropTypes.number.isRequired,
  isEndingDraw: PropTypes.bool,
  isActive: PropTypes.bool,
  isResulted: PropTypes.bool,
});

DrawBoxRN.defaultProps = {
  somosDrawID: '',
  drawDate: '',
  drawStartDate: '',
  title: '',
  pictures: [],
  remainingTicketCount: '',
  approxPrizeValue: '',
  ticketAmount: '',
  allowAnimate: false,
  onClickMethod: () => {},
  isEndingDraw: false,
  isActive: true,
  isResulted: false,
};

const mapStateToProps = (state) => {
  return {
    drawListCountAnimation: state.DrawReducer.drawListCountAnimation,
  };
};

const mapDispatchToProps = {
  AddItemBasket: AddItemBasketAction,
  BasketSelectDraw: BasketSelectDrawAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawBoxRN);
