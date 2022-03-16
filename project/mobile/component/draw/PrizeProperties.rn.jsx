import React from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import PropertiesListRN from '@mobile/component/draw/PropertiesList.rn';
import _styles from '@mobile/src/styles/common';

const PrizePropertiesRN = ({ properties, prizeData }) => {
  const { t } = useTranslation();

  return (
    <View style={_styles.propertiesMargin}>
      <View style={_styles.propertiesPropsWrapper}>
        <View style={_styles.propertiesPropsWrapperBox}>
          <Text style={_styles.propertiesPropsText}>{t('prize_stats')}</Text>
        </View>
      </View>
      <View style={_styles.propertiesList}>
        <PropertiesListRN prizeData={prizeData} properties={properties} />
      </View>
    </View>
  );
};

PrizePropertiesRN.propTypes = exact({
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      prizePropertyID: PropTypes.number,
      propertyID: PropTypes.number,
      propertyOptionID: PropTypes.number,
      propertyKey: PropTypes.string,
      optionValue: PropTypes.string,
      propertyValue: PropTypes.string,
    })
  ),
  prizeData: PropTypes.object,
});
PrizePropertiesRN.defaultProps = {
  properties: {},
  prizeData: {},
};

export default PrizePropertiesRN;
