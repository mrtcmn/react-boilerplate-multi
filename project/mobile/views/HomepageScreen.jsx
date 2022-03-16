import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, Text, ScrollView, Button, Dimensions } from 'react-native';
import HomepageToolbar from '@mobile/component/Homepage.Toolbar';
import DrawListRN from '@mobile/component/draw/DrawList.rn';
import ImageSlider from '@mobile/component/slider/Image.slider';
import {
  DrawPrizeAction,
  HomepageSliderAction,
  LoginUserAction,
} from '@service/actions/F_Actions';
import { Ui_DrawPrizeModal } from '@service/actions/Ui_F_Actions';
import { connect } from 'react-redux';
import _styles from '@mobile/src/styles/common';
import HomePageDrawListRN from '@mobile/component/draw/HomePageDrawList.rn';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
const GetEnv = require('@envFile');

const IS_CYPRUS = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

const HomepageScreen = ({
  navigation,
  sliderData,
  getSliderData,
  drawCategoryData,
}) => {
  useEffect(() => {
    getSliderData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HomepageToolbar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <ImageSlider
          data={sliderData}
          timer={10000}
          imageKey="image"
          local={false}
          separator={0}
          loop
          currentIndexCallback={(index) => console.log('Index', index)}
          onPress={(item) => {}}
          indicator
          animation
          indicatorContainerStyle={{ position: 'absolute', bottom: 10 }}
        />
        {IS_CYPRUS ? (
          <View style={_styles.homepageDrawListBottom}>
            {React.Children.toArray(
              drawCategoryData.map((item) => {
                return item.drawData && item.drawData.length > 0 ? (
                  <HomePageDrawListRN drawData={item} navigation={navigation} />
                ) : (
                  <View />
                );
              })
            )}
          </View>
        ) : (
          <DrawListRN />
        )}
      </ScrollView>
    </View>
  );
};

HomepageScreen.propTypes = exact({
  sliderData: PropTypes.array,
  drawCategoryData: PropTypes.array,
  navigation: PropTypes.object,
  getSliderData: PropTypes.func,
});
HomepageScreen.defaultProps = {
  sliderData: [],
  drawCategoryData: [],
  navigation: {},
  getSliderData: () => {},
};

const mapStateToProps = (state) => {
  return {
    sliderData: state.HomepageSliderReducer.sliderData,
    drawCategoryData: state.HomepageDrawCategoryListReducer.drawCategoryData,
    // drawModalStatus: state.Ui_F_DrawPrizeReducer,
    // drawListData: state.DrawReducer.drawList,
    // endingDrawList: state.DrawReducer.endingDrawList,
  };
};

const mapDispatchToProps = {
  getSliderData: HomepageSliderAction,
  Ui_DrawPrizeModalAct: Ui_DrawPrizeModal,
  DrawPrizeAct: DrawPrizeAction,
  LoginUserAct: LoginUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageScreen);
