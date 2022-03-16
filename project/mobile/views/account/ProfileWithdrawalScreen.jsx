import React from 'react';
import { View, ScrollView } from 'react-native';
import _styles from '@mobile/src/styles/common';
import ProfileWithdrawalRN from '@mobile/component/profile/ProfileWithdrawalRN';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';

function ProfileWithdrawalScreen({ navigation, route }) {
  return (
    <View style={_styles.withdrawalPage}>
      <ScrollView contentContainerStyle={_styles.scrollView}>
        <ProfileWithdrawalRN navigation={navigation} />
      </ScrollView>
    </View>
  );
}

ProfileWithdrawalScreen.propTypes = exact({
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
});
ProfileWithdrawalScreen.defaultProps = {};

export default ProfileWithdrawalScreen;
