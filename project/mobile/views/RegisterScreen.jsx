import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _styles from '@mobile/src/styles/common';
import RegisterRN from '@mobile/component/RegisterRN';

const RegisterScreen = ({ navigation, sliderData, getSliderData }) => {
  return (
    <>
      <ScrollView style={_styles.scrollView}>
        <RegisterRN navigation={navigation} />
      </ScrollView>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
