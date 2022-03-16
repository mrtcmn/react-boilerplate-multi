import React from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageViewer from '@f/components/Image.viewer';
import ImageViewerRN from '@mobile/component/Image.viewer.rn';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import _styles from '@mobile/src/styles/common';

const PrizesTabRN = ({ name, picturesPath, isSelected, prizeCount }) => {
  return (
    <View style={_styles.prizeTab}>
      <View style={_styles.prizeTabImageWrapper}>
        <ImageViewerRN
          style={{
            ..._styles.prizeTabImage,
            ...(isSelected ? _styles.prizeTabImageSelected : {}),
          }}
          imageName={picturesPath}
          sizeEnum="small-thumb"
        />
      </View>
      <View style={_styles.prizeTabPrizeCount}>
        <Text style={_styles.prizeTabPrizeCountText}>{prizeCount}</Text>
      </View>

      <View style={_styles.prizeTabNameWrapper}>
        <Text style={_styles.prizeTabNameText}>{name}</Text>
      </View>
    </View>
  );
};

PrizesTabRN.propTypes = exact({
  name: PropTypes.string,
  pid: PropTypes.string,
  picturesPath: PropTypes.string,
  isSelected: PropTypes.bool,
  prizeCount: PropTypes.number,
});
PrizesTabRN.defaultProps = {
  name: '',
  pid: '',
  picturesPath: '',
  isSelected: false,
  prizeCount: 0,
};

export default PrizesTabRN;
