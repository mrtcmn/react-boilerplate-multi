import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  bottom_basketStackNavigator,
  bottom_drawListStackNavigator,
  bottom_homepageStackNavigator,
} from '@mobile/router/stackNavigators/MainStackNavigator';
import i18n from '@f/utils/locale/i18n';
import { SvgXml } from 'react-native-svg';
import HomeIcon from '@asset/images/icons/home.svg';
import BasketIcon from '@asset/images/icons/shopping_cart.svg';
import RaffleIcon from '@asset/images/icons/raffle.svg';
import { connect } from 'react-redux';
import _styles from '@mobile/src/styles/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const MainBottomNavigator = ({ totalTicketCount }) => {
  const insets = useSafeAreaInsets();
  const badgeOptions =
    totalTicketCount > 0
      ? {
          tabBarBadge: totalTicketCount,
          tabBarBadgeStyle: _styles.tabBarBadgeStyle,
        }
      : {};

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          paddingBottom: 10 + insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tab.Screen
        name="homepage"
        component={bottom_homepageStackNavigator}
        options={{
          tabBarLabel: i18n.t('homepage'),
          tabBarIcon: ({ focused, color, size }) => (
            <SvgXml width={size} height={size} xml={HomeIcon} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="basket"
        component={bottom_basketStackNavigator}
        options={{
          ...badgeOptions,
          tabBarLabel: i18n.t('basket'),
          tabBarIcon: ({ focused, color, size }) => (
            <SvgXml width={size} height={size} xml={BasketIcon} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="drawlist"
        component={bottom_drawListStackNavigator}
        options={{
          tabBarLabel: 'Çekilişler',
          tabBarIcon: ({ focused, color, size }) => (
            <SvgXml width={size} height={size} xml={RaffleIcon} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => ({
  totalTicketCount: state.BasketReducer.totalTicketCount,
});

export default connect(mapStateToProps)(MainBottomNavigator);
