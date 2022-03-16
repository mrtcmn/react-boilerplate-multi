import React from 'react';
import { View, ScrollView } from 'react-native';
import AddBankAccountRN from '@mobile/component/profile/AddBankAccountRN';
import ManageBankAccountRN from '@mobile/component/profile/ManageBankAccountRN';
import _styles from '@mobile/src/styles/common';

function ProfileBankAccountScreen() {
  return (
    <View style={_styles.bankAccountPage}>
      <ScrollView contentContainerStyle={_styles.scrollView}>
        <AddBankAccountRN />
        <ManageBankAccountRN />
      </ScrollView>
    </View>
  );
}

export default ProfileBankAccountScreen;
