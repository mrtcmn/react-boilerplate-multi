import React from 'react';
import { View } from 'react-native';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text } from 'react-native-paper';
import { colorThemes } from '@mobile/src/styles/colors';
import { useTranslation } from 'react-i18next';
import { SvgXml } from 'react-native-svg';
import FailIcon from '@asset/images/icons/fail.svg';
import _styles from '../src/styles/utils/loaderUtil';

const loaderInside = (
  _currentStatus,
  errorAction,
  message,
  customText,
  btnBackIsNotVisible,
  extraClass
) => {
  const { t } = useTranslation();

  switch (_currentStatus) {
    case 'loading': {
      return (
        <View style={[_styles.loaderUtil, extraClass || {}]}>
          <ActivityIndicator
            animating
            color={colorThemes.whiteVersion.$primaryColorVivid}
          />
        </View>
      );
    }
    case 'error': {
      return (
        <View style={[_styles.loaderUtil, extraClass || {}]}>
          <SvgXml width={50} height={50} xml={FailIcon} />
          <Text style={_styles.loaderUtilText}>
            {customText || message || 'Bir hata oluştu.'}
          </Text>
        </View>
      );
    }
    default:
      return <View />;
  }
};

function LoaderUtil({
  currentStatus,
  errorAction,
  message,
  customText,
  btnBackIsNotVisible,
  extraClass,
}) {
  return loaderInside(
    currentStatus,
    errorAction,
    message,
    customText,
    btnBackIsNotVisible,
    extraClass
  );
}

LoaderUtil.propTypes = exact({
  currentStatus: PropTypes.oneOf(['loading', 'not_found', 'error', '']),
  errorAction: PropTypes.func,
  customText: PropTypes.string,
  message: PropTypes.string,
  btnBackIsNotVisible: PropTypes.bool,
  extraClass: PropTypes.object,
});

LoaderUtil.defaultProps = {
  currentStatus: 'loading',
  customText: '',
  message: '',
  errorAction: () => {},
  btnBackIsNotVisible: false,
  extraClass: {},
};

export default LoaderUtil;
