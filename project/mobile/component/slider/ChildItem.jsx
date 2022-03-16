import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImageViewerRN from '@mobile/component/Image.viewer.rn';
import { Text, TouchableRipple } from 'react-native-paper';
import _styles from '@mobile/src/styles/common';

const ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
  styleKey,
  imageSelection,
}) => {
  return (
    <TouchableRipple
      onPress={() => onPress(index)}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <ImageViewerRN
        style={styleKey ? _styles[styleKey] : _styles.homeSliderImage}
        imageName={item.imageUrl}
        sizeEnum={imageSelection != '' ? imageSelection : 'slider'}
      />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});

export default ChildItem;
