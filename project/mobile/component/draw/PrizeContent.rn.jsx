import React, { useEffect, useRef, useState } from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import ImageSlider from '@mobile/component/slider/Image.slider';
import { ScrollView, View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import PrizePropertiesRN from '@mobile/component/draw/PrizeProperties.rn';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const PrizeContentRN = ({ prizeData, drawID, AddBasketOnModal, drawData }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [prizeData]);

  return (
    <View style={[_styles.prizeContent, { flex: 1 }]}>
      <BottomSheetScrollView ref={scrollRef} style={{ flex: 1 }}>
        <View style={_styles.prizeImageSlider}>
          <ImageSlider
            data={
              prizeData.pictures.map((item) => ({ imageUrl: item.path })) || []
            }
            timer={10000}
            local={false}
            separator={0}
            loop
            currentIndexCallback={(index) => console.log('Index', index)}
            onPress={(item) => alert(JSON.stringify(item))}
            indicator
            animation
            indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
            imageKey="path"
            styleKey="prizeImageSlider"
            imageSelection="slider-prize"
          />
        </View>
        <PrizePropertiesRN
          prizeData={prizeData}
          properties={prizeData.properties}
        />
      </BottomSheetScrollView>
    </View>
  );
};

/*
<PrizeProperties
          prizeData={prizeData}
          properties={prizeData.properties}
        />

 */

PrizeContentRN.propTypes = exact({
  drawData: PropTypes.object.isRequired,
  drawID: PropTypes.number,
  prizeData: PropTypes.shape({
    prizeCategory: PropTypes.number,
    approxPrizeValue: PropTypes.string,
    name: PropTypes.string,
    pid: PropTypes.string,
    winningConditionText: PropTypes.string,
    winningConditionValue: PropTypes.number,
    prizeCount: PropTypes.number,
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
    pictures: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
      })
    ),
  }),
});
PrizeContentRN.defaultProps = {
  prizeData: {},
  drawID: -1,
};

export default PrizeContentRN;
