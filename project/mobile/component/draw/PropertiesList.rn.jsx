import React, { useState, useEffect } from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { SvgFromUri, SvgUri } from 'react-native-svg';
import _styles from '@mobile/src/styles/common';
const GetEnv = require('@envFile');

const IMAGE_URL = GetEnv.REACT_APP_CDN_PRE_URL;

const PropertiesListRN = ({ properties, prizeData }) => {
  const [moneyProps, setMoneyProps] = useState({});
  const getImageLink = (iconPath) => {
    console.log(`${IMAGE_URL}${iconPath}`);

    return `${IMAGE_URL}${iconPath}`;
  };

  const propertiesItem = (item, index, isLast) => {
    return (
      <View key={index}>
        {item && Object.keys(item).length > 0 ? (
          <View
            style={{
              ..._styles.propertiesListWrapper,
              ...(isLast ? _styles.propertiesListWrapperNoBorder : {}),
            }}
          >
            <View style={_styles.propertiesListIcon}>
              <SvgUri
                height={35}
                width={35}
                uri={getImageLink(item.iconPath)}
                fill="#000"
              />
            </View>
            <View>
              <Text style={_styles.propertiesListValue}>
                {item.propertyValue}
              </Text>
              <Text style={_styles.propertiesListOptionValue}>
                {item.optionValue}
              </Text>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  };

  useEffect(() => {
    const data = {
      iconText: 'TL',
      iconPath: 'b26dc045-e83a-4a02-a897-9f0585a73c83.svg',
      prizePropertyID: '0',
      propertyValue: 'Yaklaşık Değeri',
      optionValue: prizeData.approxPrizeValue,
    };

    setMoneyProps(data);
  }, [prizeData]);

  return (
    <View className="properties-main">
      {propertiesItem(moneyProps)}
      {properties.map((item, index) =>
        propertiesItem(item, index, properties.length === index + 1)
      )}
    </View>
  );
};

PropertiesListRN.propTypes = exact({
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
PropertiesListRN.defaultProps = {
  properties: {},
  prizeData: {},
};

export default PropertiesListRN;
