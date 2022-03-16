import React from 'react';
import { View, Text } from 'react-native';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TouchableRipple } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { colorThemes } from '@mobile/src/styles/colors';
import { SvgXml } from 'react-native-svg';
import ImportanceIcon from '@asset/images/icons/high-importance.svg';
import CheckmarkIcon from '@asset/images/icons/checkmark.svg';
import SpinnerIcon from '@asset/images/icons/spinner.svg';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import _styles from '../src/styles/utils/buttonBasket';

function ButtonDrawModalRN({
  tText,
  mainState,
  isActiveButton,
  fullWidth,
  extraClass,
  onPressF,
  ticketCount,
  ticketAmount,
}) {
  const { t } = useTranslation();
  const buttonMainClass = [
    _styles.buttonBasket,
    isActiveButton ? _styles.activeButton : {},
    fullWidth ? _styles.buttonFullWidth : {},
    _styles[mainState],
    extraClass ? _styles[extraClass] : [],
  ];

  const defaultText = tText === 'buy';

  const buttonSelect = () => {
    return {
      icon: ImportanceIcon,
      iconColor: colorThemes.whiteVersion.$primaryColorVivid,
      textColor: colorThemes.whiteVersion.$mainBackground,
      bgColor: colorThemes.whiteVersion.$primaryColorVivid,
      leftAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
      rightAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
      rightAreaBgReverse: colorThemes.whiteVersion.$primaryColor,
    };
  };

  return (
    <View style={buttonMainClass}>
      <TouchableOpacity onPress={() => onPressF()} style={_styles.buttonC}>
        <View
          style={[
            _styles.rightAreaReverse,
            { backgroundColor: buttonSelect().rightAreaBgReverse },
          ]}
        >
          <Text
            style={[_styles.priceText, { color: buttonSelect().textColor }]}
          >
            {ticketCount} x {ticketAmount}₺
          </Text>
          <Text
            style={[
              _styles.priceTextBottom,
              { color: buttonSelect().textColor },
            ]}
          >
            Bilet Sayısı
          </Text>
        </View>
        <View
          style={[
            _styles.leftAreaReverse,
            { backgroundColor: buttonSelect().leftAreaBg },
          ]}
        >
          <Text
            style={[_styles.leftAreaText, { color: buttonSelect().textColor }]}
          >
            Sepete Ekle
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

ButtonDrawModalRN.propTypes = exact({
  tText: PropTypes.string,
  mainState: PropTypes.string,
  whenResultCameDisabled: PropTypes.bool,
  whenResultCameSuccessDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isActiveButton: PropTypes.bool,
  extraClass: PropTypes.array,
  onPressF: PropTypes.func,
});

ButtonDrawModalRN.defaultProps = {
  tText: '',
  mainState: PropTypes.oneOf([
    'initial',
    'loading',
    'res-success',
    'res-failed',
  ]),
  whenResultCameDisabled: false,
  whenResultCameSuccessDisabled: false,
  disabled: false,
  isActiveButton: false,
  fullWidth: false,
  extraClass: [],
  onPressF: () => {},
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDrawModalRN);
