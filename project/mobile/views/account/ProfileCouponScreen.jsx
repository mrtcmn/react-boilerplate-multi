import React from 'react';
import { View, ScrollView } from 'react-native';
import _styles from '@mobile/src/styles/common';
import AddMyCouponRN from '@mobile/component/profile/AddMyCouponRN';
import ManageMyCouponRN from '@mobile/component/profile/ManageMyCouponRN';

const ProfileCouponScreen = () => {
  return (
    <View style={_styles.myCouponPage}>
      <ScrollView style={_styles.scrollView}>
        <AddMyCouponRN />
        <ManageMyCouponRN />
      </ScrollView>
    </View>
  );
};

export default ProfileCouponScreen;
