import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PlaceTicketPrePaymentAction } from '@service/actions/F_Actions';
import { Ui_PrePaymentBasketModalAction } from '@service/actions/Ui_F_Actions';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import _styles from '@mobile/src/styles/common';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import ButtonCLRRN from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { PSInputMaskMobil } from '@mobile/utils/FormElementUtil';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import WebView from 'react-native-webview';
const GetEnv = require('@envFile');

const queryString = require('query-string');
const _ = require('lodash');

const PrePaymentBasketScreen = ({
  mIsOpen,
  mStatus,
  mData,
  userData,
  PlaceTicketPrePaymentAct,
  Ui_PrePaymentBasketModalAct,
  navigation,
}) => {
  const { t } = useTranslation();
  const [webViewState, setWebViewState] = useState(false);
  const [formValue, setFormValue] = useState({
    clientid: '',
    storetype: '',
    hash: '',
    islemtipi: '',
    amount: '',
    currency: '949',
    oid: '',
    okUrl: '',
    failUrl: '',
    callbackurl: '',
    lang: '',
    rnd: 'customfield',
    pan: '',
    Ecom_Payment_Card_ExpDate_Year: '',
    Ecom_Payment_Card_ExpDate_Month: '',
    expirationDate: '',
    Faturafirma: '',
    tel: '',
  });
  const [buttonState, setButtonState] = useState(false);
  const [webViewResultState, setWebViewResultState] = useState('');
  const [returnUrl, setReturnUrl] = useState(
    'https://bayi-api-bank.aritaturk.live/api/v1/bank/halkbank/resultPageBasket'
  );

  const validationSchema = () => {
    return Yup.object().shape({
      pan: Yup.lazy((value) => {
        if (value) {
          const splitVal = value.toString().length;
          if (splitVal !== 19) {
            return Yup.string().matches(
              splitVal !== 19,
              t('Credit_Card_Text_8')
            );
          }

          return Yup.string().required(t('Register_Field_Text_9'));
        }

        return Yup.string().required(t('Register_Field_Text_9'));
      }),
      expirationDate: Yup.lazy((value) => {
        if (value) {
          const month = value.split('/')[0] || 0;
          const year = value.split('/')[1] || 0;
          if (Number(month) === 0 || Number(month) > 12) {
            return Yup.string().matches(
              Number(month) === 0 || Number(month) > 12,
              t('Credit_Card_Text_9')
            );
          }
          if (year?.length !== 2) {
            return Yup.number()
              .matches(year.length !== 2, t('Credit_Card_Text_11'))
              .required(t('Register_Field_Text_9'));
          }
        }

        return Yup.string().required(t('Register_Field_Text_9'));
      }),
    });
  };

  const closeModal = () => {
    navigation.navigate('basket');
    setFormValue({
      ...formValue,
      expirationDate: '',
      pan: '',
      Faturafirma: '',
    });
    setButtonState(false);

    return Ui_PrePaymentBasketModalAct(false, 'loading');
  };

  const paymentProcessRender = (values) => {
    const qsValue = queryString.stringify({
      clientid: mData.clientId,
      storetype: mData.storeType,
      hash: mData.hash,
      islemtipi: mData.islemType,
      amount: mData.amount,
      oid: mData.oid,
      okUrl: mData.okUrl,
      failUrl: mData.failUrl,
      callbackurl: mData.callbackUrl,
      lang: mData.lang,
      currency: '949',
      rnd: 'customfield',
      refreshtime: '0',
      pan: _.trim(values.pan),
      Ecom_Payment_Card_ExpDate_Year: values.expirationDate.split('/')[1],
      Ecom_Payment_Card_ExpDate_Month: values.expirationDate.split('/')[0],
      Faturafirma: `${userData.CustomerName} ${userData.CustomerSurname}`,
      tel: userData.PhoneNumber,
    });

    const HALKBANK_3D_PAY_URL =
      GetEnv.REACT_APP_IS_PRODUCTION === 'yes'
        ? 'https://sanalpos.halkbank.com.tr/fim/est3Dgate'
        : 'https://entegrasyon.asseco-see.com.tr/fim/est3Dgate';
    setReturnUrl(
      GetEnv.REACT_APP_IS_PRODUCTION === 'yes'
        ? 'https://bayi-api-bank.aritaturk.live/api/v1/bank/halkbank/resultPageBasket'
        : 'http://localhost:5000/bank/halkbank/resultPageBasket'
    );

    return (
      <WebView
        source={{
          uri: `${HALKBANK_3D_PAY_URL}?${qsValue}`,
          method: 'POST',
        }}
        androidHardwareAccelerationDisabled
        javaScriptEnabled
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        onNavigationStateChange={(navState) => {
          const { url } = navState;
          console.log('onNavigationStateChange', navState);
          setWebViewResultState(url);
        }}
        startInLoadingState
        style={{
          marginTop: 20,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          opacity: 0.99,
        }}
        nativeConfig={{ props: { webContentsDebugginEnabled: true } }}
      />
    );
  };

  const paymentProcess = () => {
    setWebViewState(true);
  };

  useEffect(() => {
    if (webViewResultState === returnUrl) {
      const timer = setInterval(() => {
        clearInterval(timer);
        closeModal();
        PlaceTicketPrePaymentAct({ refNo: mData.oid });
      }, 3000);

      setFormValue({
        ...formValue,
        Faturafirma: `${userData.CustomerName} ${userData.CustomerSurname}`,
        tel: userData.PhoneNumber,
      });
    }
  }, [webViewResultState]);

  useEffect(() => {
    if (webViewResultState !== '' || webViewResultState !== returnUrl) {
      return () => PlaceTicketPrePaymentAct({ refNo: mData.oid });
    }
  }, []);

  useEffect(() => {
    if (mData !== {} && userData?.CustomerName) {
      setFormValue({
        ...formValue,
        clientid: mData.clientId,
        storetype: mData.storeType,
        hash: mData.hash,
        islemtipi: mData.islemType,
        amount: mData.amount,
        oid: mData.oid,
        okUrl: mData.okUrl,
        failUrl: mData.failUrl,
        callbackurl: mData.callbackUrl,
        lang: mData.lang,
        Faturafirma: `${userData.CustomerName} ${userData.CustomerSurname}`,
        tel: userData.PhoneNumber,
      });
    }
  }, [mData]);

  return (
    <ScrollView style={_styles.scrollView}>
      {mStatus !== 'payment_screen' ? (
        <View className="sl-margin-h-5">
          <LoaderUtil currentStatus="loading" />
        </View>
      ) : (
        <View className="pre-payment-basket">
          <Formik
            enableReinitialize
            initialValues={formValue}
            validationSchema={validationSchema()}
            onSubmit={(values) => {
              return paymentProcess();
            }}
          >
            {({ handleSubmit, values, setFieldValue, touched, errors }) => (
              <View style={_styles.formContainer}>
                {webViewState ? (
                  paymentProcessRender(values)
                ) : (
                  <View>
                    <View style={_styles.subtitle}>
                      <Text style={_styles.subtitleText}>
                        {t('Credit_Card_Text_3')}
                      </Text>
                    </View>
                    <Field
                      name="pan"
                      label={t('Credit_Card_Text_4')}
                      placeholder="&#9679;&#9679;&#9679;&#9679;&nbsp;&nbsp;&#9679;&#9679;&#9679;&#9679;&nbsp;&nbsp;&#9679;&#9679;&#9679;&#9679;&nbsp;&nbsp;&#9679;&#9679;&#9679;&#9679;"
                      type="text"
                      component={PSInputMaskMobil}
                      value={values.pan}
                      mask="[0000] [0000] [0000] [0000]"
                      onChange={(value) => setFieldValue('pan', value)}
                    />
                    <Field
                      name="expirationDate"
                      label={t('Credit_Card_Text_5')}
                      placeholder={t('Credit_Card_Text_5')}
                      type="text"
                      component={PSInputMaskMobil}
                      value={values.expirationDate}
                      mask="[00]/[00]"
                      onChange={(value) =>
                        setFieldValue('expirationDate', value)
                      }
                    />
                    <View style={_styles.inputSub}>
                      <Text style={_styles.inputSubText}>
                        {t('Credit_Card_Text_10')}
                      </Text>
                    </View>
                    <ButtonCLRRN
                      tText="Credit_Card_Text_7"
                      mainState="initial"
                      whenResultCameSuccessDisabled
                      fullWidth
                      disabled={buttonState}
                      onPressF={handleSubmit}
                    />
                    <ButtonCLRRN
                      tText="Credit_Card_Text_15"
                      onPressF={() => closeModal()}
                      mainState="res-failed"
                      whenResultCameSuccessDisabled
                      fullWidth
                    />
                    <View className="password-text">
                      <MessagesUtil
                        isShow
                        messageType="info"
                        customMessage={t('Credit_Card_Text_14')}
                      />
                    </View>
                  </View>
                )}
              </View>
            )}
          </Formik>
        </View>
      )}
    </ScrollView>
  );
};

PrePaymentBasketScreen.propTypes = exact({
  mIsOpen: PropTypes.bool.isRequired,
  mStatus: PropTypes.string.isRequired,
  mData: PropTypes.any.isRequired,
  PlaceTicketPrePaymentAct: PropTypes.func.isRequired,
  Ui_PrePaymentBasketModalAct: PropTypes.func.isRequired,
  userData: PropTypes.object,
  navigation: PropTypes.func,
});
PrePaymentBasketScreen.defaultProps = {
  userData: {},
  navigation: {},
};

const mapStateToProps = (state) => {
  return {
    mIsOpen: state.Ui_F_BasketReducer.prePaymentModalIsOpen,
    mStatus: state.Ui_F_BasketReducer.prePaymentModalStatus,
    mData: state.Ui_F_BasketReducer.prePaymentModalData,
    userData: state.UserReducer.userData,
  };
};

const mapDispatchToProps = {
  PlaceTicketPrePaymentAct: PlaceTicketPrePaymentAction,
  Ui_PrePaymentBasketModalAct: Ui_PrePaymentBasketModalAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrePaymentBasketScreen);
