import React from 'react';
import { View, Text } from 'react-native';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { colorThemes } from '@mobile/src/styles/colors';
import _styles from '../src/styles/buttonCLR';

function ButtonCLRRN({
  tText,
  mainState,
  whenResultCameDisabled,
  whenResultCameSuccessDisabled,
  disabled,
  isActiveButton,
  fullWidth,
  extraClass,
  onPressF,
}) {
  const { t } = useTranslation();
  const buttonMainClass = [
    _styles.buttonCLR,
    fullWidth ? _styles.buttonFullWidth : {},
    _styles[mainState],
    extraClass || {},
  ];

  const isDisabled =
    mainState === 'loading' ||
    (whenResultCameDisabled &&
      (mainState === 'res-success' || mainState === 'res-failed')) ||
    (whenResultCameSuccessDisabled && mainState === 'res-success');

  const defaultText =
    tText === ''
      ? mainState === 'loading'
        ? 'loading'
        : mainState === 'res-success'
        ? 'success'
        : mainState === 'res-failed'
        ? 'fail'
        : 'save'
      : tText;

  const buttonSelect = () => {
    switch (mainState) {
      case 'loading':
        return {
          icon: '',
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$primaryColorVivid,
        };
      case 'res-success':
        return {
          icon: 'check',
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$greenSuccess,
        };
      case 'res-failed':
        return {
          icon: 'close',
          iconColor: colorThemes.whiteVersion.$mainBackground,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$redWarning,
        };
      default:
        return {
          icon: '',
          iconColor: colorThemes.whiteVersion.$primaryColorVivid,
          textColor: colorThemes.whiteVersion.$mainBackground,
          bgColor: colorThemes.whiteVersion.$primaryColorVivid,
        };
    }
  };

  return (
    <View style={buttonMainClass}>
      <Button
        icon={buttonSelect().icon}
        color={buttonSelect().bgColor}
        labelStyle={{ color: buttonSelect().iconColor }}
        loading={mainState === 'loading'}
        mode="contained"
        onPress={() => onPressF()}
        disabled={disabled || isDisabled}
        style={{
          backgroundColor: isActiveButton
            ? colorThemes.whiteVersion.$primaryColor
            : buttonSelect().bgColor,
        }}
      >
        <Text style={[_styles.buttonText, { color: buttonSelect().textColor }]}>
          {tText !== undefined && tText !== '' ? t(tText) : t(defaultText)}
        </Text>
      </Button>
    </View>
  );
}

ButtonCLRRN.propTypes = exact({
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

ButtonCLRRN.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCLRRN);
