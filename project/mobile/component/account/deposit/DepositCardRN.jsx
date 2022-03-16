import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ForwardIcon from '@asset/images/icons/forward.svg';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { SvgXml } from 'react-native-svg';
import { TextInput } from 'react-native-paper';
import { colorThemes } from '@mobile/src/styles/colors';
import ButtonCLRRN from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';

const { width, height } = Dimensions.get('window');

const DepositCardRN = ({
  numberArray,
  title,
  buttonName,
  buttonF,
  maxValue,
  minValue,
  route,
  navigation,
  isInBox,
  headerImage,
  btnMainState,
  messageUiIsOpen,
  messageUiText,
  defaultOpen,
}) => {
  const { t } = useTranslation();
  const [selectAmount, setSelectAmount] = useState(0);
  const [paymentButton, setPaymentButton] = useState(true);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const paymentButtonF = () => {
    buttonF({ paymentAmount: selectAmount });
    if (route && navigation) {
      navigation.navigate(route);
    }
  };

  const setPaymentA = (item) => {
    if (RegExp('[0-9]') && item <= maxValue) {
      setSelectAmount(item);
    }
  };

  const openF = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (paymentButton && selectAmount >= minValue) {
      setPaymentButton(false);
    }
    if (!paymentButton && selectAmount <= minValue) {
      setPaymentButton(true);
    }
  }, [selectAmount]);

  return (
    <View style={[_styles.propertiesPropsWrapperBox, { marginBottom: 5 }]}>
      <View style={{ marginVertical: 5 }}>
        <TouchableOpacity
          style={[_styles.depositCardTextIcon, { paddingVertical: 5 }]}
          onPress={() => openF()}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {headerImage}
            <Text style={_styles.subtitleText}>{t(title)}</Text>
          </View>
          <View
            className={classNames('icon-container', {
              'active-icon-container': isOpen,
            })}
          >
            <SvgXml
              width={20}
              height={20}
              xml={ForwardIcon}
              rotation={isOpen ? 270 : 90}
            />
          </View>
        </TouchableOpacity>
      </View>
      {isOpen ? (
        <>
          <TextInput
            mode="outlined"
            style={_styles.textInput}
            underlineColor={colorThemes.whiteVersion.$primaryColor}
            selectionColor={colorThemes.whiteVersion.$primaryColor}
            placeholderTextColor={colorThemes.whiteVersion.$primaryColor}
            outlineColor={colorThemes.whiteVersion.$primaryColor}
            value={selectAmount.toString() || ''}
            onChangeText={(text) => setPaymentA(Number(text))}
            right={<TextInput.Icon name="currency-try" />}
          />
          <View style={_styles.depositCardAmountBox}>
            {React.Children.toArray(
              numberArray.map((item, index) => (
                <TouchableOpacity
                  style={[
                    _styles.depositCardAmountBoxItem,
                    item === selectAmount
                      ? _styles.depositCardAmountBoxItemActive
                      : {},
                    {
                      marginLeft: index % 2 === 1 ? 5 : 0,
                      marginRight: index % 2 === 0 ? 5 : 0,
                    },
                    isInBox ? { width: width / 2 - 37.5 } : null,
                  ]}
                  onPress={() => setSelectAmount(item)}
                >
                  <Text style={_styles.depositCardAmountBoxItemText}>
                    {item}₺
                  </Text>
                </TouchableOpacity>
              ))
            )}
          </View>

          {messageUiIsOpen ? (
            <MessagesUtil
              messageType="warning"
              customMessage={messageUiText}
              isShow={messageUiIsOpen}
            />
          ) : null}

          <ButtonCLRRN
            tText={buttonName}
            disabled={paymentButton}
            onPressF={() => paymentButtonF()}
            mainState={btnMainState}
          />
        </>
      ) : (
        <View />
      )}
    </View>
  );
};

DepositCardRN.propTypes = exact({
  numberArray: PropTypes.arrayOf(PropTypes.number),
  buttonF: PropTypes.func.isRequired,
  buttonName: PropTypes.string,
  title: PropTypes.string,
  route: PropTypes.string,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  navigation: PropTypes.object,
  headerImage: PropTypes.element,
  btnMainState: PropTypes.string,
  messageUiText: PropTypes.string,
  messageUiIsOpen: PropTypes.bool,
  isInBox: PropTypes.bool,
  defaultOpen: PropTypes.bool,
});

DepositCardRN.defaultProps = {
  numberArray: [],
  buttonName: '',
  title: '',
  route: '',
  navigation: {},
  headerImage: <></>,
  btnMainState: undefined,
  messageUiText: '',
  messageUiIsOpen: false,
  isInBox: false,
  defaultOpen: false,
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DepositCardRN);
