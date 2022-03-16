import React, { Component, createRef } from 'react';
import {
  // FlatList,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
} from 'react-native';
import {
  NativeViewGestureHandler,
  FlatList,
} from 'react-native-gesture-handler';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Indicator from './Indicator';
import ChildItem from './ChildItem';

export default class ImageSlider extends Component {
  slider = createRef();

  static defaultProps = {
    data: [],
    imageKey: 'image',
    local: false,
    width: Math.round(Dimensions.get('window').width),
    height: 230,
    separatorWidth: 0,
    loop: true,
    indicator: true,
    indicatorStyle: {},
    indicatorContainerStyle: {},
    indicatorActiveColor: '#3498db',
    indicatorInActiveColor: '#bdc3c7',
    indicatorActiveWidth: 6,
    animation: true,
    autoscroll: true,
    timer: 3000,
    onPress: {},
    contentContainerStyle: {},
    component: <ChildItem />,
    styleKey: 'homeSliderImage',
    imageSelection: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: this.props.data,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }
  }

  componentDidMount() {
    if (this.props.autoscroll) {
      this.startAutoPlay();
    }
  }

  componentWillUnmount() {
    if (this.props.autoscroll) {
      this.stopAutoPlay();
    }
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      if (
        currentIndex % this.props.data.length === this.props.data.length - 1 &&
        this.props.loop
      ) {
        this.setState({
          index: currentIndex,
          data: [...this.state.data, ...this.props.data],
        });
      } else {
        this.setState({ index: currentIndex });
      }

      if (this.props.currentIndexCallback) {
        this.props.currentIndexCallback(currentIndex);
      }
    }
  };

  viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  changeSliderListIndex = () => {
    if (this.props.animation) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    }

    if (this.props.data.length > 0) {
      if (this.props.data.length <= this.state.index) {
        this.setState({ index: this.state.index + 1 });
        this.slider.current.scrollToIndex({
          index: this.state.index,
          animated: true,
        });
      } else {
        this.setState({ index: 0 });
        this.slider.current.scrollToIndex({
          index: this.state.index,
          animated: true,
        });
      }
    }
  };

  startAutoPlay = () => {
    this.sliderTimer = setInterval(
      this.changeSliderListIndex,
      this.props.timer
    );
  };

  stopAutoPlay = () => {
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
      this.sliderTimer = null;
    }
  };

  render() {
    const itemWidth = this.props.width;
    const { separatorWidth } = this.props;
    const totalItemWidth = itemWidth + separatorWidth;

    return (
      <View>
        {/* <NativeViewGestureHandler disallowInterruption shouldActivateOnStart> */}
        <FlatList
          ref={this.slider}
          horizontal
          pagingEnabled
          snapToInterval={totalItemWidth}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={this.props.contentContainerStyle}
          data={this.state.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) =>
            React.cloneElement(this.props.component, {
              style: { width: this.props.width },
              item,
              imageKey: this.props.imageKey,
              onPress: this.props.onPress,
              index: this.state.index % this.props.data.length,
              active: index === this.state.index,
              local: this.props.local,
              height: this.props.height,
              styleKey: this.props.styleKey,
              imageSelection: this.props.imageSelection,
            })
          }
          ItemSeparatorComponent={() => (
            <View style={{ width: this.props.separatorWidth }} />
          )}
          keyExtractor={(item, index) => item.toString() + index}
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
          getItemLayout={(data, index) => ({
            length: totalItemWidth,
            offset: totalItemWidth * index,
            index,
          })}
          windowSize={1}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews
        />
        {/* </NativeViewGestureHandler> */}

        {this.props.indicator && (
          <Indicator
            itemCount={this.props.data.length}
            currentIndex={this.state.index % this.props.data.length}
            indicatorStyle={this.props.indicatorStyle}
            indicatorContainerStyle={[
              styles.indicatorContainerStyle,
              this.props.indicatorContainerStyle,
            ]}
            indicatorActiveColor={this.props.indicatorActiveColor}
            indicatorInActiveColor={this.props.indicatorInActiveColor}
            indicatorActiveWidth={this.props.indicatorActiveWidth}
            style={{ ...styles.indicator, ...this.props.indicatorStyle }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
  indicatorContainerStyle: {
    marginTop: 18,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
