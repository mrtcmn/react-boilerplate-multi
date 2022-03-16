import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { responseCode } from '@f/utils/responseCode.util';
import _styles from '@mobile/src/styles/utils/messageUtil';
import { SvgXml } from 'react-native-svg';
import ImportanceIcon from '@asset/images/icons/high-importance.svg';
import CheckmarkIcon from '@asset/images/icons/checkmark.svg';
import InfoIcon from '@asset/images/icons/info.svg';
import { colorThemes } from '@mobile/src/styles/colors';

const MessagesUtil = ({
  messageType,
  tText,
  isShow,
  pageName,
  customMessage,
  customMessageContext,
  iconState,
  extraClass,
}) => {
  const { t } = useTranslation();
  const textSelect = () => {
    if (customMessageContext && customMessage) {
      return t(customMessage, customMessageContext);
    }
    if (!customMessageContext && customMessage) {
      return t(customMessage);
    }
    if (!(customMessageContext && customMessage)) {
      return responseCode(pageName, tText);
    }
  };

  const messageTypeSelect = () => {
    switch (messageType) {
      case 'info':
        return {
          icon: InfoIcon,
          text: t('message_ui_util_info'),
          iconColor: colorThemes.whiteVersion.$blueInfo,
          textColor: colorThemes.whiteVersion.$blueInfo,
        };
      case 'success':
        return {
          icon: CheckmarkIcon,
          text: t('message_ui_util_success'),
          iconColor: colorThemes.whiteVersion.$greenSuccess,
          textColor: colorThemes.whiteVersion.$greenSuccess,
        };
      case 'warning':
        return {
          icon: ImportanceIcon,
          text: t('message_ui_util_warning'),
          iconColor: colorThemes.whiteVersion.$redWarning,
          textColor: colorThemes.whiteVersion.$redWarning,
        };
    }
  };

  const SLMessageClasses = [
    _styles['sl-message'],
    extraClass,
    { borderColor: messageTypeSelect().textColor },
  ];

  return (
    <View style={SLMessageClasses}>
      <View style={_styles.leftArea}>
        <SvgXml
          width={20}
          height={20}
          xml={messageTypeSelect().icon}
          fill={messageTypeSelect().iconColor}
        />
        <Text
          style={[
            _styles.leftAreaText,
            { color: messageTypeSelect().textColor },
          ]}
        >
          {messageTypeSelect().text}
        </Text>
      </View>
      <View style={_styles.rightArea}>
        <Text
          style={[
            _styles.rightAreaText,
            { color: messageTypeSelect().textColor },
          ]}
        >
          {textSelect()}
        </Text>
      </View>
    </View>
  );
};

MessagesUtil.defaultProps = {
  messageType: 'info',
  tText: '',
  isShow: true,
  pageName: '',
  customMessage: '',
  customMessageContext: {},
  extraClass: {},
};

MessagesUtil.propTypes = {
  messageType: PropTypes.oneOf(['warning', 'info', 'success']),
  tText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isShow: PropTypes.bool,
  pageName: PropTypes.string,
  customMessage: PropTypes.string,
  customMessageContext: PropTypes.object,
  extraClass: PropTypes.object,
};

export default MessagesUtil;
