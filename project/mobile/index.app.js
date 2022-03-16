import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Text,
  Platform,
  View,
  Button,
  BackHandler,
  AppState,
} from 'react-native';
import MainDrawerNavigator from '@mobile/router/drawerNavigators/MainDrawerNavigator';
import { ClearInterval, IntervalActions } from '@service/utils/IntervalManager';
import {
  DrawListAction,
  DrawListCountAction,
  DrawPrizeAction,
  EndingDrawListAction,
  HomepageDrawCategoryListAction,
  ThemeModeAction,
  TokenValidateAction,
  UserBalanceAction,
  UserInfoAction,
} from '@service/actions/F_Actions';
import {
  Ui_AppStatusAction,
  Ui_DrawPrizeModal,
  Ui_MaintenanceModeFAction,
} from '@service/actions/Ui_F_Actions';
import { connect } from 'react-redux';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import _styles from '@mobile/src/styles/common';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import DrawDetailModalRN from '@mobile/component/draw/DrawDetailModal.rn';
import PropTypes from 'prop-types';
import {
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';
import DrawDetailGameID6ModalRN from '@mobile/component/draw/DrawDetailGameID6Modal.rn';
import { firebase } from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

const GetEnv = require('@envFile');

const IS_CYPRUS = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
const drawDataLength = 3;
let modalIsOpen = false;
const App = ({
  getDrawCategoryList,
  drawListCount,
  EndingDrawListAction,
  DrawListAction,
  Ui_MaintenanceModeA,
  UserBalance,
  drawModalStatus,
  drawPrizeListData,
  endingDrawList,
  Ui_DrawPrizeModal,
}) => {
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState({});
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const bottomSheetModalRef = useRef(null);
  const insets = useSafeAreaInsets();
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const intervalF = () => {
    if (IS_CYPRUS) {
      IntervalActions(
        'getDrawCategoryList',
        1000 * 60 * 5,
        getDrawCategoryList({ drawLength: drawDataLength })
      );
      IntervalActions(
        'DrawListAction7',
        10 * 60 * 1000,
        DrawListAction({ gameID: 7, drawID: 0, activeStatus: 1 })
      );
    }
    IntervalActions(
      'drawListCount',
      GetEnv.DRAW_LIST_COUNT_INTERVAL || 5 * 60 * 1000,
      drawListCount(0)
    );
    IntervalActions(
      'DrawListAction5',
      5 * 60 * 1000,
      DrawListAction({ gameID: 5, drawID: 0, activeStatus: 1 })
    );
    IntervalActions(
      'DrawListAction6',
      10 * 60 * 1000,
      DrawListAction({ gameID: 6, drawID: 0, activeStatus: 1 })
    );
    IntervalActions(
      'EndingDrawListAction',
      10 * 60 * 1000,
      EndingDrawListAction({ drawID: 0, activeStatus: 2 })
    );
    IntervalActions('UserBalance', 100 * 1000, UserBalance());
  };

  const trackingManage = () => {
    getTrackingStatus()
      .then((trackingStatus) => {
        if (
          trackingStatus === 'authorized' ||
          trackingStatus === 'unavailable'
        ) {
          console.log('Tracking: ', trackingStatus);
          firebase
            .analytics()
            .setAnalyticsCollectionEnabled(true)
            .then((resAnalytic) => console.log(resAnalytic));

          crashlytics()
            .setCrashlyticsCollectionEnabled(true)
            .then((resCrash) => console.log(resCrash));
        } else if (trackingStatus === 'not-determined') {
          requestTrackingPermission().then((resRequest) => {
            console.log('Tracking: ', resRequest);
          });
        } else {
          firebase
            .analytics()
            .setAnalyticsCollectionEnabled(false)
            .then((resAnalytic) => console.log(resAnalytic));

          crashlytics()
            .setCrashlyticsCollectionEnabled(false)
            .then((resCrash) => console.log(resCrash));
        }
      })
      .catch((err) => console.log('Tracking: ', err));
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        trackingManage();
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    setTimeout(() => {
      trackingManage();
    }, 3000);

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  useEffect(() => {
    SplashScreen.hide();
    console.log(
      GetEnv.REACT_APP_PROJECT ||
        'env dosyaları okunamadı. yarn mobile:reset çalıştırınız.'
    );
    setLoading(true);
    intervalF();

    const backAction = () => {
      if (modalIsOpen) {
        bottomSheetModalRef.current?.dismiss();
      } else {
        return false;
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => {
      if (IS_CYPRUS) {
        ClearInterval('getDrawCategoryList');
        ClearInterval('DrawListAction7');
      }
      ClearInterval('drawListCount');
      ClearInterval('DrawListAction5');
      ClearInterval('DrawListAction6');
      ClearInterval('UserBalance');
      ClearInterval('maintenanceMode');
      backHandler.remove();
    };
  }, []);

  // variables
  const snapPoints = useMemo(() => ['0%', '100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);

    if (index === -1) {
      Ui_DrawPrizeModal({
        isOpen: false,
        currentState: 'loading',
        drawID: -1,
      });
    }
  }, []);

  useEffect(() => {
    modalIsOpen = drawModalStatus.isOpen;

    if (drawModalStatus.isOpen) {
      bottomSheetModalRef.current?.close();
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }

    if (
      drawModalStatus &&
      drawModalStatus.drawID &&
      drawModalStatus.drawID !== -1
    ) {
      const xx = endingDrawList.filter(
        (x) => x.somosDrawID === Number(drawModalStatus.drawID)
      );

      let _modalData;
      _modalData =
        drawPrizeListData && drawPrizeListData[drawModalStatus.drawID];
      _modalData = _modalData || {};
      _modalData.isResulted =
        xx.length > 0
          ? xx[0].isResulted === 1
            ? true
            : xx[0].isResulted
          : false;
      setModalData(_modalData);
    }
  }, [drawModalStatus]);

  return (
    <BottomSheetModalProvider>
      <View style={_styles.drawModalContainer}>
        <MainDrawerNavigator />
        <BottomSheetModal
          style={_styles.drawModalWrapper}
          ref={bottomSheetModalRef}
          index={1}
          topInset={Platform.OS === 'ios' ? insets.top : 0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          detached
        >
          {drawModalStatus.gameID === 6 ? (
            <BottomSheetScrollView>
              <DrawDetailGameID6ModalRN
                drawPrizeData={modalData}
                drawID={drawModalStatus.drawID}
                currentState={drawModalStatus.currentState}
                closeNotifier={() =>
                  Ui_DrawPrizeModal({
                    isOpen: false,
                    currentState: 'loading',
                    drawID: -1,
                    gameID: -1,
                  })
                }
              />
            </BottomSheetScrollView>
          ) : (
            <DrawDetailModalRN
              drawPrizeData={modalData}
              drawID={drawModalStatus.drawID}
              currentState={drawModalStatus.currentState}
            />
          )}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

App.defaultProps = {
  DrawListAction: () => {},
  TokenValidate: () => {},
  UserBalance: () => {},
  getDrawCategoryList: () => {},
  uiAppStatusA: () => {},
  Ui_MaintenanceModeA: () => {},
  appStatus: '',
  text: '',
  content: '',
  endDate: '',
  startDate: '',
  drawListData: [],
  drawPrizeListData: {},
  drawModalStatus: null,
  DrawPrizeAction: () => {},
  Ui_DrawPrizeModal: () => {},
};
App.propTypes = {
  drawListData: PropTypes.array,
  drawPrizeListData: PropTypes.object,
  drawModalStatus: PropTypes.object,
  DrawPrizeAction: PropTypes.func,
  Ui_DrawPrizeModal: PropTypes.func,
  endingDrawList: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    themeMode: state.Ui_F_ThemeModeReducer,
    persistor: state._persist.rehydrated,
    appStatus: state.Ui_F_AppStatusReducer.appStatus,
    isOpen: state.Ui_F_MaintenanceModeReducer.isOpen,
    text: state.Ui_F_MaintenanceModeReducer.text,
    content: state.Ui_F_MaintenanceModeReducer.content,
    startDate: state.Ui_F_MaintenanceModeReducer.startDate,
    endDate: state.Ui_F_MaintenanceModeReducer.endDate,
    userData: state.UserReducer,
    drawModalStatus: state.Ui_F_DrawPrizeReducer,
    drawListData: state.DrawReducer.drawList,
    endingDrawList: state.DrawReducer.endingDrawList,
    drawPrizeListData: state.DrawReducer.drawPrizeList,
  };
};

const mapDispatchToProps = {
  DrawListAction,
  TokenValidate: TokenValidateAction,
  UserBalance: UserBalanceAction,
  UserInfo: UserInfoAction,
  uiThemeMode: ThemeModeAction,
  drawListCount: DrawListCountAction,
  getDrawCategoryList: HomepageDrawCategoryListAction,
  uiAppStatusA: Ui_AppStatusAction,
  EndingDrawListAction,
  Ui_MaintenanceModeA: Ui_MaintenanceModeFAction,
  DrawPrizeAction,
  Ui_DrawPrizeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
