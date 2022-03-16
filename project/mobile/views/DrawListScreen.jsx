import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import DrawListRN from '@mobile/component/draw/DrawList.rn';
import HomepageToolbar from '@mobile/component/Homepage.Toolbar';
import _styles from '@mobile/src/styles/common';

function DrawListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HomepageToolbar navigation={navigation} />

      <ScrollView style={{ flex: 1 }}>
        <DrawListRN navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default DrawListScreen;
