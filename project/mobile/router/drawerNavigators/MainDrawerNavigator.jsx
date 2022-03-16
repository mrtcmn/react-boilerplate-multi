import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { MainStackNavigator } from '@mobile/router/stackNavigators/MainStackNavigator';
import AppVersionControl from '@mobile/AppVersionControl';
import { Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { drawerMenuList } from '@mobile/constant/DrawerNavigator';
import { environment } from '@config/version.js';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { MobileAppVersionControlAction } from '@service/actions/F_Actions';
import { connect } from 'react-redux';

function CustomDrawerContent(props) {
  // const [focusedItem, setFocusedItem] = useState('HomeScreen1');

  return (
    <DrawerContentScrollView {...props}>
      <View style={[]}>
        {drawerMenuList.map((sectionItem, index) => (
          <Drawer.Section
            title={sectionItem.sectionTitle}
            style={[styles.drawerSectionMain]}
            key={index}
          >
            {sectionItem.menuItems.map((menuItem, index2) => (
              <DrawerItem
                label={() => (
                  <Text style={[styles.drawerItemText]}>{menuItem.title}</Text>
                )}
                style={[]}
                onPress={() => {
                  props.navigation.navigate(menuItem.navigateKey);
                }}
                key={index2}
              />
            ))}
          </Drawer.Section>
        ))}

        {/* <Drawer.Section title="Tercihler" style={[styles.drawerSectionMain]}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text style={[styles.drawerItemText]}>Koyu Tema</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
         */}
        <View style={[styles.appInfoTextWrapper]}>
          <Text style={[styles.appInfoText]}>
            Piyango Sepeti Mobile App v{environment.version}
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const MainDrawerNavigator = ({ MobileAppVersionControlA, isAppOutDated }) => {
  const Drawer = createDrawerNavigator();
  useEffect(() => {
    MobileAppVersionControlA({
      appName: Platform.OS === 'ios' ? 'PSMobileIOS' : 'PSMobileAndroid',
    });
  }, []);

  return (
    <>
      {!isAppOutDated ? (
        <Drawer.Navigator
          edgeWidth={0}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="StackNav" component={MainStackNavigator} />
        </Drawer.Navigator>
      ) : (
        <AppVersionControl />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSectionMain: {
    marginBottom: 30,
  },
  drawerItemText: {
    color: 'black',
    fontWeight: 'bold',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  appInfoTextWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  appInfoText: {
    fontSize: 13,
    color: 'gray',
  },
});

MainDrawerNavigator.propTypes = exact({
  MobileAppVersionControlA: PropTypes.func,
  isAppOutDated: PropTypes.bool,
});

MainDrawerNavigator.defaultProps = {
  MobileAppVersionControlA: () => {},
  isAppOutDated: false,
};

const mapStateToProps = (state) => {
  return {
    isAppOutDated: state.MobileAppVersionControlReducer.version,
  };
};

const mapDispatchToProps = {
  MobileAppVersionControlA: MobileAppVersionControlAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDrawerNavigator);
