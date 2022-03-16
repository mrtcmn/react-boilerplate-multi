import React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import ProfileChangePassRN from '@mobile/component/account/profile/ProfileChangePassRN';
import ProfileAccountInfoRN from '@mobile/component/account/profile/ProfileAccountInfoRN';
import ProfileContactRN from '@mobile/component/account/profile/ProfileContactRN';
import ProfilePromotionRN from '@mobile/component/account/profile/ProfilePromotionRN';
import _styles from '@mobile/src/styles/common';

const ProfileAccountInfoScreen = () => {
  return (
    <ScrollView style={_styles.scrollView}>
      <ProfileAccountInfoRN />
      <ProfileChangePassRN />
      <ProfileContactRN />
      <ProfilePromotionRN />
      <View style={[{ marginTop: 20 }]} />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAccountInfoScreen);
