import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { colorThemes } from '@mobile/src/styles/colors';
import { SvgXml } from 'react-native-svg';
import ImportanceIcon from '@asset/images/icons/high-importance.svg';
import CheckmarkIcon from '@asset/images/icons/checkmark.svg';
import SpinnerIcon from '@asset/images/icons/spinner.svg';
import _styles from '../src/styles/utils/buttonBasket';

function ButtonBasketRN({
  tText,
  mainState,
  whenResultCameDisabled,
  whenResultCameSuccessDisabled,
  disabled,
  isActiveButton,
  fullWidth,
  extraClass,
  onPressF,
  navigation,
  totalAmount,
  type,
  errorMessage,
  totalAmountResponse,
  insufficientMoney,
}) {
  const { t } = useTranslation();
  const buttonMainClass = [
    _styles.buttonBasket,
    isActiveButton ? _styles.activeButton : {},
    fullWidth ? _styles.buttonFullWidth : {},
    _styles[mainState],
    extraClass ? _styles[extraClass] : {},
  ];

  const isDisabled =
    mainState === 'loading' ||
    (whenResultCameDisabled &&
      (mainState === 'res-success' || mainState === 'res-failed')) ||
    (whenResultCameSuccessDisabled && mainState === 'res-success');

  const defaultText =
    tText === ''
      ? mainState === 'initial'
        ? 'buy'
        : mainState === 'login-needed'
        ? 'login_needed'
        : mainState === 'insufficient-money'
        ? 'insufficient_money'
        : mainState === 'res-success'
        ? 'buy_success'
        : mainState === 'res-failed'
        ? 'buy_failed'
        : mainState === 'phone-verify'
        ? 'phone_verify'
        : 'buy_wait'
      : tText;

  const buttonSelect = () => {
    switch (mainState) {
      case 'loading':
        return {
          icon: SpinnerIcon,
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          leftAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
          rightAreaBg: colorThemes.whiteVersion.$primaryColor,
        };
      case 'success':
        return {
          icon: CheckmarkIcon,
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$greenSuccess,
          leftAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
          rightAreaBg: colorThemes.whiteVersion.$primaryColor,
        };
      case 'failed':
        return {
          icon: ImportanceIcon,
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$redWarning,
          leftAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
          rightAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
        };
      case 'login-needed':
        return {
          icon: ImportanceIcon,
          iconColor: colorThemes.whiteVersion.$primaryGrayBrighter,
          textColor: colorThemes.whiteVersion.$primaryColorVivid,
          bgColor: colorThemes.whiteVersion.$redWarning,
          leftAreaBg: colorThemes.whiteVersion.$primaryGrayBrighter,
          rightAreaBg: colorThemes.whiteVersion.$primaryGrayBright,
        };
      case 'insufficient-money':
        return {
          icon: ImportanceIcon,
          iconColor: colorThemes.whiteVersion.$primaryGrayBrighter,
          textColor: colorThemes.whiteVersion.$redWarning,
          bgColor: colorThemes.whiteVersion.$redWarning,
          leftAreaBg: colorThemes.whiteVersion.$primaryGrayBrighter,
          rightAreaBg: colorThemes.whiteVersion.$primaryGrayBright,
        };
      case 'res-failed':
        return {
          icon: ImportanceIcon,
          iconColor: colorThemes.whiteVersion.$loss,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$redWarning,
          leftAreaBg: colorThemes.whiteVersion.$loss,
          rightAreaBg: colorThemes.whiteVersion.$redWarning,
        };
      default:
        return {
          icon: ImportanceIcon,
          iconColor: colorThemes.whiteVersion.$primaryColorVivid,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$primaryColorVivid,
          leftAreaBg: colorThemes.whiteVersion.$primaryColorVivid,
          rightAreaBg: colorThemes.whiteVersion.$primaryColor,
        };
    }
  };

  const onPressButton = () => {
    if (mainState === 'login-needed') {
      return navigation.navigate('login');
    }

    return onPressF();
  };

  return (
    <View style={buttonMainClass}>
      <TouchableOpacity
        onPress={() => onPressButton()}
        style={_styles.buttonC}
        disabled={
          mainState === 'res-failed' ||
          mainState === 'res-success' ||
          mainState === 'loading'
        }
      >
        <View
          style={[
            _styles.leftArea,
            { backgroundColor: buttonSelect().leftAreaBg },
          ]}
        >
          <SvgXml
            width={20}
            height={20}
            xml={buttonSelect().icon}
            fill={buttonSelect().iconColor}
          />
          <Text
            style={[_styles.leftAreaText, { color: buttonSelect().textColor }]}
          >
            {tText !== undefined && tText !== '' ? t(tText) : t(defaultText)}
          </Text>
        </View>
        <View
          style={[
            _styles.rightArea,
            { backgroundColor: buttonSelect().rightAreaBg },
          ]}
        >
          <Text
            style={[_styles.priceText, { color: buttonSelect().textColor }]}
          >
            {totalAmountResponse === -1
              ? totalAmount || '-'
              : totalAmountResponse}
            ₺
          </Text>
          <Text
            style={[
              _styles.priceTextBottom,
              { color: buttonSelect().textColor },
            ]}
            numberOfLines={1}
          >
            {totalAmountResponse === -1
              ? t('total_amount')
              : t('total_amount_response')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

ButtonBasketRN.propTypes = exact({
  tText: PropTypes.string,
  mainState: PropTypes.string,
  whenResultCameDisabled: PropTypes.bool,
  whenResultCameSuccessDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isActiveButton: PropTypes.bool,
  extraClass: PropTypes.string,
  onPressF: PropTypes.func,
  navigation: PropTypes.object,
});

ButtonBasketRN.defaultProps = {
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
  extraClass: '',
  onPressF: () => {},
  navigation: {},
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBasketRN);
