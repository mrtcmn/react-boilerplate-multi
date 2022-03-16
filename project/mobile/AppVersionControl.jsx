import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import LOGO_MPI from '@asset/images/logos/symbol.png';
import LOGO from '@asset/images/logos/logov2/ps-blue-text-small.png';
import _styles from '@mobile/src/styles/common';
import { useTranslation } from 'react-i18next';
import { SvgXml } from 'react-native-svg';
import MenuIcon from '@asset/images/icons/update.svg';
import { colorThemes } from '@mobile/src/styles/colors';

const AppVersionControl = () => {
  const { t } = useTranslation();

  return (
    <View style={_styles.appVersionControl}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorThemes.whiteVersion.$mainBackground}
        style={{ height: 0 }}
      />
      <View style={_styles.appVersionLogoWrapper}>
        <Image style={_styles.appVersionHomeLogoMPI} source={LOGO_MPI} />
        <Image style={_styles.appVersionHomeLogo} source={LOGO} />
      </View>
      <View style={_styles.appVersionCenter}>
        <SvgXml width={200} height={200} xml={MenuIcon} fill="#757575" />
        <Text style={_styles.versionControlDescriptionText}>
          {Platform.OS === 'ios'
            ? t('VersionControl_Text_1')
            : t('VersionControl_Text')}
        </Text>
      </View>
      {Platform.OS === 'ios' ? (
        <View />
      ) : (
        <TouchableOpacity
          style={_styles.versionControlButton}
          onPress={() =>
            Linking.openURL(
              'https://cdn.piyangosepeti.com.tr/cdn/mpi-mobile/apk/app-release.apk'
            )
          }
        >
          <Text style={_styles.versionControlButtonText}>
            {t('VersionControl_Button_Text')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppVersionControl;
