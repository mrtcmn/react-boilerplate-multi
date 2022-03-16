import React from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const ProfilePaymentCreditCardScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>erer</Text>
    </View>
  );
};

ProfilePaymentCreditCardScreen.propTypes = exact({
  navigation: PropTypes.object,
  route: PropTypes.object,
});

ProfilePaymentCreditCardScreen.defaultProps = {
  navigation: {},
  route: {},
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePaymentCreditCardScreen);
