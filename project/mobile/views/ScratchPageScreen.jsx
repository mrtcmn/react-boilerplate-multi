import React, { useEffect, createRef } from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import {
  ScratchGameAction,
  ScratchGameDeleteAction,
  UserInfoAction,
} from '@service/actions/F_Actions';
import { Ui_ScratchCardAppMessageAction } from '@service/actions/Ui_F_Actions';
import { useTranslation } from 'react-i18next';
import { WebView } from 'react-native-webview';
import { KaziKazanComm } from '@utils/kaziKazan.comm';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import _styles from '@mobile/src/styles/common';

let kaziKazanManager;

const ScratchCardPageRN = ({
  ScratchGameA,
  ScratchGameDeleteA,
  Ui_ScratchCardAppMessageA,
  appState,
  scratchData,
  UserInfoActionA,
  userData,
  token,
  navigation,
}) => {
  const { t } = useTranslation();
  const ref = createRef();
  // const scratchCardURL = 'http://localhost:3000/?platform=mobile';
  const scratchCardURL = 'https://oyun-cyprus.aritaturk.live/?platform=mobile';

  const setKaziKazanManager = () => {
    kaziKazanManager = new KaziKazanComm({
      targetRef: ref.current,
      targetUrl: scratchCardURL,
      whichPlatform: 'mobile',
      userInfo: userData,
      state: {
        appState,
        ticketData: scratchData,
      },
      actions: {
        ScratchGameA: () => ScratchGameA(),
        ScratchGameDeleteA: () => ScratchGameDeleteA(),
        UserInfoActionA: () => UserInfoActionA(),
        Ui_ScratchCardAppMessageA: (payload) =>
          Ui_ScratchCardAppMessageA(payload),
      },
    });
  };

  useEffect(() => {
    if (token !== '') {
      setKaziKazanManager();
    }

    return () => {
      console.log('remove Message manager');

      ScratchGameDeleteA();
      Ui_ScratchCardAppMessageA({ appState: 'not_ready' });
      kaziKazanManager.removeMessageListener();
    };
  }, []);

  useEffect(() => {
    if (token !== '') {
      setKaziKazanManager();
    }
  }, [token]);

  const onMessageWebView = (event) => {
    if (event?.nativeEvent?.url == scratchCardURL) {
      console.log('Setting Message manager', kaziKazanManager);
      kaziKazanManager.onMessageListener(event.nativeEvent);
    }

    return console.log(
      'onMessage',
      'warning-url',
      scratchCardURL == event?.nativeEvent?.url
    );
  };

  useEffect(() => {
    console.log('stateC', appState);
    if (token !== '') {
      if (kaziKazanManager && appState && appState !== '') {
        kaziKazanManager.reduxStateListener({
          appState,
          ticketData: scratchData,
        });
      }

      if (kaziKazanManager && appState && appState === 'depositRoute') {
        navigation.navigate('deposit');
      }
    }
  }, [appState]);

  useEffect(() => {
    if (token !== '' && kaziKazanManager) {
      kaziKazanManager.sendMessageManager.userInfo(userData);
    }
  }, [userData]);

  return token === '' ? (
    <View style={_styles.scratchCard}>
      <MessagesUtil
        messageType="info"
        customMessage="Scratch_Card_Token"
        isShow
        extraClass={{ width: '100%' }}
      />
      <ButtonCLR
        tText="Register_Title_1"
        extraClass={{ width: '100%' }}
        mainState="initial"
        onPressF={() => navigation.navigate('login')}
      />
    </View>
  ) : (
    <WebView
      ref={ref}
      source={{
        uri: scratchCardURL,
      }}
      androidHardwareAccelerationDisabled
      javaScriptEnabled
      onMessage={(event) => onMessageWebView(event)}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
      onNavigationStateChange={(navState) => {
        const { url } = navState;
        console.log('onNavigationStateChange', navState);
      }}
      startInLoadingState
      style={{
        marginTop: 0,
        width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height/2,
        height: 200,
        opacity: 0.99,
      }}
      nativeConfig={{ props: { webContentsDebugginEnabled: true } }}
    />
  );
};

ScratchCardPageRN.propTypes = exact({
  ScratchGameA: PropTypes.func.isRequired,
  ScratchGameDeleteA: PropTypes.func.isRequired,
  Ui_ScratchCardAppMessageA: PropTypes.func.isRequired,
  appState: PropTypes.string,
  scratchData: PropTypes.object,
  UserInfoActionA: PropTypes.func.isRequired,
  userData: PropTypes.object,
  token: PropTypes.string,
  navigation: PropTypes.object,
});

ScratchCardPageRN.defaultProps = {
  appState: '',
  scratchData: {},
  userData: {},
  navigation: {},
  token: '',
};
const mapStateToProps = (state) => {
  return {
    appState: state.Ui_ScratchCardAppStateReducer.appState,
    scratchData: state.ScratchCardReducer.scratchData,
    userData: state.UserReducer.userData,
    token: state.UserReducer.token,
  };
};

const mapDispatchToProps = {
  ScratchGameA: ScratchGameAction,
  ScratchGameDeleteA: ScratchGameDeleteAction,
  Ui_ScratchCardAppMessageA: Ui_ScratchCardAppMessageAction,
  UserInfoActionA: UserInfoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScratchCardPageRN);
