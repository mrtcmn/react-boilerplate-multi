import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  mainStackNavigatorConst,
  bottom_homepageStackNavConst,
  bottom_basketStackNavConst,
  bottom_drawListStackNavConst,
} from '@mobile/constant/StackNavigatorConstant';
import { StackNavigatorItem } from '@mobile/router/stackNavigators/StackNavigatorConfig';
import MainBottomNavigator from '@mobile/router/bottomNavigators/MainBottomNavigator';
import _styles from '@mobile/src/styles/common';

export const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: _styles.stackScreenHeaderStyle,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="mainBottomNavigator"
        component={MainBottomNavigator}
      />

      {mainStackNavigatorConst.map((x) =>
        StackNavigatorItem({
          Stack,
          key: x.name,
          component: x.component,
          title: x.title,
        })
      )}
    </Stack.Navigator>
  );
};

// #region BOTTOM STACK NAVIGATORS
export const bottom_homepageStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      {bottom_homepageStackNavConst.map((x) =>
        StackNavigatorItem({
          Stack,
          key: x.name,
          component: x.component,
          title: x.title,
        })
      )}
    </Stack.Navigator>
  );
};

export const bottom_basketStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {bottom_basketStackNavConst.map((x) =>
        StackNavigatorItem({
          Stack,
          key: x.name,
          component: x.component,
          title: x.title,
          options: {
            title: x.title,
            headerShown: x.headerShown,
          },
        })
      )}
    </Stack.Navigator>
  );
};

export const bottom_drawListStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      {bottom_drawListStackNavConst.map((x) =>
        StackNavigatorItem({
          Stack,
          key: x.name,
          component: x.component,
          title: x.title,
        })
      )}
    </Stack.Navigator>
  );
};

// #endregion
