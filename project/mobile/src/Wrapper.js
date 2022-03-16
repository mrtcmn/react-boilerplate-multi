import { connect } from 'react-redux';
import React from 'react';
import { StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { colorThemes } from './styles/colors';
import Root from '../index.app';

const Wrapper = ({ theme }) => {
  EStyleSheet.build({
    ...colorThemes.whiteVersion,
  });

  const bgColor = colorThemes.whiteVersion.$mainBackground;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={bgColor}
        style={{ height: 0 }}
      />
      <Root />
    </View>
  );
};

Wrapper.propTypes = exact({
  theme: PropTypes.string,
});

Wrapper.defaultProps = {
  theme: 'light',
};

const mapStateToProps = (state) => ({
  theme: state.Ui_F_ThemeModeReducer.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
