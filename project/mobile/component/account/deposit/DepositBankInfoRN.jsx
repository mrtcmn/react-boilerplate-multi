import React, { useMemo, useState } from 'react';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Arrow from '@asset/images/icons/arrow.svg';
import ArrowPointingLeft from '@asset/images/icons/arrow-pointing-left.svg';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { SvgXml } from 'react-native-svg';
import ImageSlider from '@mobile/component/slider/Image.slider';
import ButtonCLRRN from '@mobile/utils/ButtonCLR';
import { colorThemes } from '@mobile/src/styles/colors';

const DepositBankInfo = ({ bankData, setPage }) => {
  const { t } = useTranslation();
  const [selectPayment, setSelectPayment] = useState({
    paymentKey: 'internetBanking',
    moreInformation: false,
  });

  const paymentMethodsArray = useMemo(
    () =>
      Object.keys(bankData.paymentMethods).map(
        (i) => bankData.paymentMethods[i]
      ),
    [bankData]
  );

  return (
    <View className="deposit-bank-info">
      <TouchableOpacity
        onPress={() => setPage('Deposit', '')}
        style={_styles.detailBackIcon}
      >
        <SvgXml
          width={20}
          height={20}
          xml={ArrowPointingLeft}
          fill={colorThemes.whiteVersion.$primaryGrayDarker}
        />
        <Text style={[_styles.subtitleText, { marginLeft: 10 }]}>
          {t('Deposit_Text_1')}
        </Text>
      </TouchableOpacity>
      <View>
        <View className="card-item">
          <View className="button-g">
            {React.Children.toArray(
              paymentMethodsArray.map((paymentItem) => (
                <ButtonCLRRN
                  onPressF={() =>
                    setSelectPayment({
                      ...selectPayment,
                      paymentKey: paymentItem.paymentKey,
                    })
                  }
                  isActiveButton={
                    paymentItem.paymentKey === selectPayment.paymentKey
                  }
                  tText={`Deposit_Text_${paymentItem.buttonName}`}
                />
              ))
            )}
          </View>
        </View>
        {selectPayment.paymentKey !== '' ? (
          <View style={_styles.propertiesPropsWrapperBox}>
            <View style={_styles.paymentTop}>
              <Text style={_styles.subtitleText}>
                {bankData.paymentMethods[selectPayment.paymentKey].bankTitle}
              </Text>
              <Image
                style={{ width: 125, height: 20, resizeMode: 'cover' }}
                source={{
                  uri: `https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/${
                    bankData.paymentMethods[selectPayment.paymentKey].logo
                  }`,
                }}
              />
            </View>
            <View style={_styles.paymentCenterButton}>
              <Text style={_styles.paymentCenterButtonText}>
                {
                  bankData.paymentMethods[selectPayment.paymentKey]
                    .processingFee
                }
              </Text>
            </View>
            <View>
              <Text style={_styles.paymentBottomText}>
                {bankData.paymentMethods[selectPayment.paymentKey].processText}
              </Text>
            </View>
            <TouchableOpacity
              style={_styles.paymentDescriptionLink}
              onPress={() =>
                setSelectPayment({
                  ...selectPayment,
                  moreInformation: !selectPayment.moreInformation,
                })
              }
            >
              <SvgXml
                width={20}
                height={20}
                xml={Arrow}
                rotation={selectPayment.moreInformation ? 0 : 270}
                fill={colorThemes.whiteVersion.$primaryColorVivid}
              />
              <Text style={[_styles.inputLinkText, { marginLeft: 10 }]}>
                {
                  bankData.paymentMethods[selectPayment.paymentKey]
                    .moreInformation.title
                }
              </Text>
            </TouchableOpacity>
            {selectPayment.moreInformation ? (
              <View style={_styles.depositMoreInformation}>
                <Text>
                  {
                    bankData.paymentMethods[selectPayment.paymentKey]
                      .moreInformation.text
                  }
                </Text>
                <View style={_styles.depositMoreInformationImageC}>
                  {bankData.paymentMethods[selectPayment.paymentKey]
                    .moreInformation.image.length > 0 ? (
                    bankData.paymentMethods[
                      selectPayment.paymentKey
                    ].moreInformation.image.map((item) => (
                      <Image
                        style={_styles.depositMoreInformationImage}
                        source={{
                          uri: item,
                        }}
                      />
                    ))
                  ) : (
                    <View />
                  )}
                </View>
              </View>
            ) : (
              <View />
            )}
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

DepositBankInfo.propTypes = exact({
  bankData: PropTypes.string,
  setPage: PropTypes.func.isRequired,
});

DepositBankInfo.defaultProps = {
  bankData: {},
};

export default DepositBankInfo;
