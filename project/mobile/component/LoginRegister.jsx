import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ui_DrawPrizeModal } from '@service/actions/Ui_F_Actions';
import { connect } from 'react-redux';
import _styles from '@mobile/src/styles/loginRegister';
import RegisterRN from '@mobile/component/RegisterRN';
import LoginRN from '@mobile/component/LoginRN';
import { useTranslation } from 'react-i18next';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { Divider } from 'react-native-paper';
import { StackActions } from '@react-navigation/native';

const GetEnv = require('@envFile');

let timer;
const LoginRegister = ({
  navigation,
  sliderData,
  getSliderData,
  token,
  userReducer,
}) => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.PROJECT === 'CYPRUS_FRONTEND';

  useEffect(() => {
    if (token) {
      if (userReducer) {
        if (
          userReducer.userData &&
          Object.keys(userReducer.userData).length > 0
        ) {
          if (userReducer.userData.IsPhoneActived) {
            timer = setTimeout(() => {
              navigation.dispatch(StackActions.replace('profileMenu'));
            }, 500);
          } else if (userReducer.userData.IsPhoneActived !== undefined) {
            navigation.dispatch(StackActions.replace('activationSms'));
          }
        }
      }
    }
  }, [token, userReducer.userData]);

  return (
    <>
      <ScrollView style={_styles.scrollView}>
        <View style={_styles.loginRegister}>
          <View style={_styles.registerRoute}>
            <Text style={_styles.registerRouteText}>
              {t(isCyprus ? 'Register_Login_Text_Cyrp' : 'Register_Login_Text')}
            </Text>
            <ButtonCLR
              mainState="initial"
              tText="Register_Button_1"
              onPressF={() => navigation.navigate('register')}
            />
          </View>
          <View style={_styles.dividerLR}>
            <Divider />
            <View style={_styles.textOverflow}>
              <View style={_styles.textWrapper}>
                <Text style={_styles.dividerLRText}>
                  {t('Ticket_Checks_Text_1')}
                </Text>
              </View>
            </View>
          </View>
          <LoginRN navigation={navigation} />
        </View>
      </ScrollView>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.UserReducer.token,
    sliderData: state.HomepageSliderReducer.sliderData,
    userReducer: state.UserReducer,
    // drawModalStatus: state.Ui_F_DrawPrizeReducer,
    // drawListData: state.DrawReducer.drawList,
    // endingDrawList: state.DrawReducer.endingDrawList,
  };
};

const mapDispatchToProps = {
  Ui_DrawPrizeModalAct: Ui_DrawPrizeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
