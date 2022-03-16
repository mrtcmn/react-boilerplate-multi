import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import {
  DepositPaymentEFTFullFilledAction,
  KoopBankGetURLAction,
  KoopBankResetStatesAction,
  PaymentCreditCardAction,
} from '@service/actions/F_Actions';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import _styles from '@mobile/src/styles/common';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLRRN from '@mobile/utils/ButtonCLR';
import DepositCardRN from '@mobile/component/account/deposit/DepositCardRN';
import DepositBankInfoRN from '@mobile/component/account/deposit/DepositBankInfoRN';
import KoopBanLogo from '@asset/images/logos/bayiler-logo/koop-logo.png';

const GetEnv = require('@envFile');

const ProfileDepositScreen = ({
  PaymentCreditCardA,
  DepositPaymentFullFilledA,
  navigation,
  route,
  KoopBankGetURLAct,
  depositCardBtnState,
  url,
  mainState,
  KoopBankResetStatesAct,
  depositCardMessage,
  depositCardMessageIsOpen,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState('Deposit');
  const [bankKey, setBankKey] = useState('');
  const data = {
    halkBank: {
      projectType: 'MOBILE',
      cardType: 'infoCard',
      bankName: 'Halk Bankası',
      id: 23232,
      logo: '3a361473-0d4c-4a21-a525-3acb2aa5d131.png',
      bankKey: 'halkBank',
      paymentMethods: {
        internetBanking: {
          logo: '3a361473-0d4c-4a21-a525-3acb2aa5d131.png',
          paymentKey: 'internetBanking',
          buttonName: 'internetBanking',
          bankTitle: 'Halkbank İnternet Bankacılığı',
          processingFee: 'Banka, 4,00 TL + BSMV ücreti almaktadır.',
          processText: (
            <View>
              <Text style={_styles.depositNormalText} numberOfLines={10}>
                Halkbank’tan, diğer elektronik bayilerde olduğu gibi{' '}
                <Text style={_styles.depositBoldText}>
                  sadece kendinize ait piyangosepeti.com üyelik hesabına{' '}
                </Text>
                para gönderimi yapabilirsiniz. Banka kanalında ve
                piyangosepeti.com’da kayıtlı kimlik numarasının aynı olması,
                yani size ait olması gerekmektedir.
              </Text>
              <Text style={_styles.depositNormalText} numberOfLines={10}>
                Halkbank internet bankacılığı için para yatırma işlemlerinizi,
                ilgili bankanın internet şubesi üzerinden kolayca
                yapabilirsiniz.
              </Text>
            </View>
          ),
          moreInformation: {
            title: 'İnternet Bankacılığı İçin Detaylı Bilgi',
            text: (
              <View>
                <Text style={_styles.depositNormalText} numberOfLines={10}>
                  Halkbank İnternet Bankacılığı kullanıyorsanız anında para
                  gönderebilirsiniz.
                </Text>
                <Text style={_styles.depositNormalText} numberOfLines={10}>
                  Banka{' '}
                  <Text style={_styles.depositBoldText}>
                    4,00 TL + BSMV işlem ücreti
                  </Text>{' '}
                  almaktadır.
                </Text>
              </View>
            ),
            image: [
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/5ff82c02-662c-411a-a8f8-95c6465c7fd6.jpg',
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/f0992a36-7657-4c5c-b31c-9ff67eccdde1.jpg',
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/eaeaa833-8d98-416e-9673-7d3a5a66d484.jpg',
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/009a83eb-eb94-4f96-9477-c2f9cfc40f8e.jpg',
            ],
          },
        },
        mobileBanking: {
          logo: '3a361473-0d4c-4a21-a525-3acb2aa5d131.png',
          paymentKey: 'mobileBanking',
          buttonName: 'mobileBanking',
          bankTitle: 'Halkbank Cep / Mobil Bankacılık',
          processingFee: 'Banka, 4,00 TL + BSMV ücreti almaktadır.',
          processText: (
            <View>
              <Text style={_styles.depositNormalText} numberOfLines={10}>
                Halkbank'tan, diğer elektronik bayilerde olduğu gibi{' '}
                <Text style={_styles.depositBoldText}>
                  sadece kendinize ait piyangosepeti.com üyelik hesabına
                </Text>{' '}
                para gönderimi yapabilirsiniz. Banka kanalında ve
                piyangosepeti.com’da kayıtlı kimlik numarasının aynı olması,
                yani size ait olması gerekmektedir.
              </Text>
              <Text style={_styles.depositNormalText} numberOfLines={10}>
                Halkbank{' '}
                <Text style={_styles.depositBoldText}>
                  iOS & Android Cep/Mobil uygulamaları
                </Text>{' '}
                aracılığıyla para yatırma işlemlerinizi kolayca yapabilirsiniz.
              </Text>
            </View>
          ),

          moreInformation: {
            title: 'Cep / Mobil Bankacılık İçin Detaylı Bilgi',
            text: (
              <View>
                <Text style={_styles.depositNormalText} numberOfLines={10}>
                  Halkbank cep/mobil bankacılığı kullanıyorsanız anında para
                  gönderebilirsiniz.
                </Text>
                <Text style={_styles.depositNormalText} numberOfLines={10}>
                  Banka{' '}
                  <Text style={_styles.depositBoldText}>
                    4 TL + BSMV işlem ücreti
                  </Text>{' '}
                  almaktadır.
                </Text>
              </View>
            ),
            image: [
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/106ba02d-5e48-496e-b7f9-7915f0ac0b1a.jpg',
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/900dbdf1-c634-42b8-8ea3-ccaa39b19b33.jpg',
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/3d4597b0-5b40-41c6-9465-c5152a4493f4.jpg',
            ],
          },
        },
        telephoneBanking: {
          logo: '3a361473-0d4c-4a21-a525-3acb2aa5d131.png',
          paymentKey: 'telephoneBanking',
          buttonName: 'telephoneBanking',
          bankTitle: 'Halkbank Telefon Bankacılığı',
          telephoneNumber: '0 850 222 0 400',
          processingFee: 'Banka, 4,00 TL + BSMV ücreti almaktadır.',
          processText: (
            <View>
              <Text style={_styles.depositNormalText} numberOfLines={10}>
                Halkbank'ın{' '}
                <Text style={_styles.depositBoldText}>0850 222 0400</Text>{' '}
                numaralı telefon bankacılığı kanalını arayarak,
                piyangosepeti.com hesabınıza para transferi yapabilirsiniz.
              </Text>
            </View>
          ),
          moreInformation: {
            title: 'Telefon Bankacılığı İçin Detaylı Bilgi',
            text: (
              <View>
                <Text style={_styles.depositNormalText} numberOfLines={10}>
                  Bu içerik size yeterince yardımcı olmadıysa bizimle iletişime
                  geçebilirsiniz.
                </Text>
              </View>
            ),
            image: [],
          },
        },
      },
    },
    koopBank: {
      projectType: 'CYPRUS_MOBILE',
      cardType: 'depositCard',
      bankName: 'KOOPBANK',
      headerImage: (
        <Image
          style={{ height: 50, width: 70, marginRight: 20 }}
          source={KoopBanLogo}
        />
      ),
      buttonOnClick: KoopBankGetURLAct,
    },
  };

  const onClickSetPage = (pageName, bankK) => {
    setPage(pageName);
    setBankKey(bankK);
  };

  const dataArray = useMemo(() => Object.keys(data).map((i) => data[i]), []);

  // #region KOOPBANK
  const paymentProcess = () => {
    navigation.navigate('depositPaymentEFT', { url });
  };

  useEffect(() => {
    if (mainState === 'fullfilled') {
      paymentProcess();
    }
  }, [mainState]);
  // #endregion

  useEffect(() => {
    return () => {
      setPage('Deposit');
      KoopBankResetStatesAct();
    };
  }, []);

  return (
    <ScrollView style={_styles.scrollView}>
      {page === 'Deposit' ? (
        <>
          <View
            style={[_styles.propertiesPropsWrapperBox, { marginVertical: 5 }]}
          >
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Deposit_Text_1')}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('myCoupon')}>
              <MessagesUtil
                isShow
                customMessage="Coupon_Text_14"
                messageType="info"
                iconState="true"
              />
            </TouchableOpacity>
          </View>
          {GetEnv.REACT_APP_PROJECT === 'MOBILE' ? (
            <DepositCardRN
              numberArray={[20, 50, 100, 250, 500, 1000]}
              title="Deposit_Text_7"
              buttonName="Deposit_Text_8"
              buttonF={(e) => DepositPaymentFullFilledA(e)}
              maxValue={500000}
              minValue={10}
              route="depositPaymentEFT"
              navigation={navigation}
            />
          ) : null}
        </>
      ) : (
        <View />
      )}
      {page === 'Deposit' ? (
        <View style={[_styles.propertiesPropsWrapperBox, { marginBottom: 5 }]}>
          <View style={_styles.subtitle}>
            <Text style={_styles.subtitleText}>{t('Deposit_Text_5')}</Text>
          </View>
          <View>
            {dataArray.map((item, index) =>
              GetEnv.REACT_APP_PROJECT === item.projectType ? (
                item.cardType === 'infoCard' ? (
                  <View key={item.id} style={_styles.paymentMethodsItem}>
                    <View style={_styles.paymentMethodsItemImageText}>
                      <Image
                        style={{ width: 150, height: 25, objectFit: 'cover' }}
                        source={{
                          uri: 'https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/3a361473-0d4c-4a21-a525-3acb2aa5d131.png',
                        }}
                      />
                      <Text style={_styles.paymentMethodsItemText}>
                        {item.bankName}
                      </Text>
                    </View>
                    <ButtonCLRRN
                      tText="Deposit_Text_2"
                      onPressF={() =>
                        onClickSetPage('DepositDetail', item.bankKey)
                      }
                    />
                  </View>
                ) : (
                  <DepositCardRN
                    numberArray={[20, 50, 100, 250, 500, 1000]}
                    title={item.bankName}
                    buttonName="Deposit_Text_9"
                    buttonF={(e) => item.buttonOnClick(e)}
                    maxValue={500000}
                    minValue={10}
                    // route="depositPaymentEFT"
                    // navigation={navigation}
                    isInBox
                    btnMainState={depositCardBtnState}
                    messageUiIsOpen={depositCardMessageIsOpen}
                    messageUiText={t(depositCardMessage)}
                    headerImage={item.headerImage}
                    defaultOpen
                    key={index.toString()}
                  />
                )
              ) : null
            )}
          </View>
        </View>
      ) : (
        <View />
      )}
      {page === 'DepositDetail' && bankKey !== '' ? (
        <DepositBankInfoRN
          bankData={data[bankKey]}
          setPage={(a, b) => onClickSetPage(a, b)}
        />
      ) : (
        <View />
      )}
    </ScrollView>
  );
};

ProfileDepositScreen.propTypes = exact({
  PaymentCreditCardA: PropTypes.func,
  DepositPaymentFullFilledA: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
  depositCardBtnState: PropTypes.string,
  KoopBankGetURLAct: PropTypes.func.isRequired,
  KoopBankResetStatesAct: PropTypes.func.isRequired,
  url: PropTypes.string,
  mainState: PropTypes.string,
  depositCardMessage: PropTypes.string,
  depositCardMessageIsOpen: PropTypes.bool,
});

ProfileDepositScreen.defaultProps = {
  PaymentCreditCardA: () => {},
  DepositPaymentFullFilledA: () => {},
  navigation: {},
  route: {},
  depositCardBtnState: 'initial',
  url: '',
  mainState: 'initial',
  depositCardMessage: '',
  depositCardMessageIsOpen: false,
};

const mapStateToProps = (state) => {
  return {
    depositCardBtnState: state.KoopBankReducer.depositCardBtnState,
    url: state.KoopBankReducer.url,
    mainState: state.KoopBankReducer.mainState,
    depositCardMessage: state.KoopBankReducer.depositCardMessage,
    depositCardMessageIsOpen: state.KoopBankReducer.depositCardMessageIsOpen,
  };
};

const mapDispatchToProps = {
  PaymentCreditCardA: PaymentCreditCardAction,
  DepositPaymentFullFilledA: DepositPaymentEFTFullFilledAction,
  KoopBankGetURLAct: KoopBankGetURLAction,
  KoopBankResetStatesAct: KoopBankResetStatesAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDepositScreen);
