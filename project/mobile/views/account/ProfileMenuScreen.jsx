import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import {
  Text,
  TouchableRipple,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import _styles from '@mobile/src/styles/common';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { SignOutAction } from '@service/actions/F_Actions';
import { connect } from 'react-redux';
import LoginRegister from '@mobile/component/LoginRegister';
import { useTranslation } from 'react-i18next';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { StackActions } from '@react-navigation/native';

const GetEnv = require('@envFile');

let timer;
const ProfileMenuScreen = ({
  navigation,
  token,
  SignOutA,
  mainState,
  messageType,
  isOpen,
  message,
  userData,
}) => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const profileMenuList = isCyprus
    ? [
        {
          name: 'Biletlerim',
          key: 'Biletlerim',
          route: 'myTickets',
        },
        {
          name: 'Profilim',
          key: 'Profilim',
          route: 'myProfile',
        },
        {
          name: 'Para Yatırma',
          key: 'Para Yatırma',
          route: 'deposit',
        },
        {
          name: 'Kuponlarım',
          key: 'Kuponlarım',
          route: 'myCoupon',
        },
        {
          name: 'Hesap Özeti',
          key: 'Hesap Özeti',
          route: 'accountSummary',
        },
        {
          name: 'İşlem Geçmişi',
          key: 'İşlem Geçmişi',
          route: 'transactionHistory',
        },
        {
          name: 'Çıkış Yap',
          key: 'exit',
          route: '',
        },
      ]
    : [
        {
          name: 'Biletlerim',
          key: 'Biletlerim',
          route: 'myTickets',
        },
        {
          name: 'Profilim',
          key: 'Profilim',
          route: 'myProfile',
        },
        {
          name: 'Para Yatırma',
          key: 'Para Yatırma',
          route: 'deposit',
        },
        {
          name: 'Para Çekme',
          key: 'Para Çekme',
          route: 'withdrawal',
        },
        {
          name: 'Banka Hesaplarım',
          key: 'Banka Hesaplarım',
          route: 'bankAccount',
        },
        {
          name: 'Kuponlarım',
          key: 'Kuponlarım',
          route: 'myCoupon',
        },
        {
          name: 'Hesap Özeti',
          key: 'Hesap Özeti',
          route: 'accountSummary',
        },
        {
          name: 'İşlem Geçmişi',
          key: 'İşlem Geçmişi',
          route: 'transactionHistory',
        },
        {
          name: 'Çıkış Yap',
          key: 'exit',
          route: '',
        },
      ];

  const menuItemOnPress = (item) => {
    if (item.key === 'exit') {
      return showModal();
    }

    return navigation.navigate(item.route || 'drawResults');
  };

  const signOutF = () => {
    return SignOutA();
  };

  const MenuItems = ({ item, index }) => {
    return (
      <TouchableRipple
        style={[
          _styles.profileMenuScreenItemMain,
          index === 0 ? { borderTopWidth: 0 } : {},
        ]}
        onPress={() => menuItemOnPress(item)}
      >
        <Text style={[_styles.profileMenuScreenItemText]}>{item.name}</Text>
      </TouchableRipple>
    );
  };

  useEffect(() => {
    if (mainState === 'res-success') {
      setTimeout(() => hideModal(), 1000);
    }
  }, [mainState]);

  useEffect(() => {
    if (!token) {
      timer = setTimeout(() => {
        navigation.navigate('homepage');
      }, 1000);
    }
  }, [token]);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (token) {
      if (Object.keys(userData).length > 0) {
        if (!userData.IsPhoneActived) {
          navigation.dispatch(StackActions.replace('activationSms'));
        }
      }
    }
  }, [userData]);

  return (
    <Provider>
      <View>
        {/* {token ? (
          <FlatList
            data={profileMenuList}
            renderItem={MenuItems}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        ) : (
          <LoginRegister navigation={navigation} />
        )} */}
        <FlatList
          data={profileMenuList}
          renderItem={MenuItems}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ flexGrow: 1 }}
        />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={_styles.profileMenuModalContainer}
          >
            <View style={_styles.profileMenuDescription}>
              <Text style={_styles.profileMenuDescriptionText}>
                {t('Sign_Out_Text_1')}
              </Text>
            </View>
            {isOpen ? (
              <MessagesUtil
                messageType={messageType}
                isShow={isOpen}
                tText={message}
              />
            ) : (
              <View />
            )}
            <View style={_styles.profileMenuButtonGroup}>
              <ButtonCLR
                mainState="initial"
                tText="Sign_Out_Text_3"
                onPressF={hideModal}
                fullWidth
                extraClass={[_styles.buttonStyle, { marginRight: 5 }]}
              />
              <ButtonCLR
                mainState={mainState}
                tText="Sign_Out_Text_2"
                onPressF={() => signOutF()}
                fullWidth
                extraClass={[_styles.buttonStyle, { marginLeft: 5 }]}
                disabled={mainState === 'res-success'}
              />
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

ProfileMenuScreen.propTypes = exact({
  token: PropTypes.string,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  mainState: PropTypes.string,
  SignOutA: PropTypes.func,
  navigation: PropTypes.object,
});

ProfileMenuScreen.defaultProps = {
  token: '',
  message: '',
  isOpen: false,
  messageType: '',
  mainState: 'initial',
  SignOutA: () => {},
  navigation: {},
};

const mapStateToProps = (state) => {
  return {
    token: state.UserReducer.token,
    isOpen: state.Ui_F_SignOutReducer.isOpen,
    message: state.Ui_F_SignOutReducer.message,
    messageType: state.Ui_F_SignOutReducer.messageType,
    mainState: state.Ui_F_SignOutReducer.mainState,
    userData: state.UserReducer.userData,
  };
};

const mapDispatchToProps = {
  SignOutA: SignOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenuScreen);
