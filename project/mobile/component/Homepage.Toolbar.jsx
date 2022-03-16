import { Appbar, TouchableRipple } from 'react-native-paper';
import _styles from '@mobile/src/styles/common';
import { SvgXml } from 'react-native-svg';
import { Image, View, Text } from 'react-native';
import LOGO_MPI from '@asset/images/logos/symbol.png';
import CYPRUS_LOGO from '@asset/images/logos/logo-long-light.png';
import LOGO from '@asset/images/logos/logov2/ps-blue-text-small.png';
import React from 'react';
import UserIcon from '@asset/images/icons/user.svg';
import MenuIcon from '@asset/images/icons/menu.svg';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { GetSplitNumberToDigits } from '../../../utils/numberFormat';

const GetEnv = require('@envFile');

const HomepageToolbar = ({ token, navigation, userData }) => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <Appbar.Header style={_styles.homeHeader}>
      <TouchableRipple
        style={_styles.homeHeaderIcon}
        onPress={() => navigation.toggleDrawer()}
        rippleColor="#efefef"
      >
        <SvgXml width={25} height="100%" xml={MenuIcon} fill="#757575" />
      </TouchableRipple>
      {isCyprus ? (
        <View style={_styles.logoWrapper}>
          <Image style={_styles.cyprusHomeLogo} source={CYPRUS_LOGO} />
        </View>
      ) : (
        <View style={_styles.logoWrapper}>
          <Image style={_styles.homeLogoMPI} source={LOGO_MPI} />
          <Image style={_styles.homeLogo} source={LOGO} />
        </View>
      )}
      {token && userData && userData.Balance !== undefined ? (
        <View style={_styles.balanceContainer}>
          <Text style={_styles.balanceText}>
            {`${GetSplitNumberToDigits(userData.Balance)} ${userData.Symbol}`}
          </Text>
          {isCyprus ? (
            <View />
          ) : (
            <Text style={_styles.bonusText}>
              {`${userData?.Bonus} ${t('ps_point')}`}
            </Text>
          )}
        </View>
      ) : (
        <View />
      )}
      <TouchableRipple
        style={_styles.homeHeaderIcon}
        onPress={() =>
          !token
            ? navigation.navigate('login')
            : navigation.navigate('profileMenu')
        }
        rippleColor="#efefef"
      >
        <SvgXml width={25} height="100%" xml={UserIcon} fill="#757575" />
      </TouchableRipple>
    </Appbar.Header>
  );
};

HomepageToolbar.propTypes = exact({
  navigation: PropTypes.object,
  token: PropTypes.string,
  userData: PropTypes.object,
});

HomepageToolbar.defaultProps = {
  token: '',
  navigation: {},
  userData: {},
};

const mapStateToProps = (state) => {
  return {
    token: state.UserReducer.token,
    userData: state.UserReducer.userData,
  };
};

export default connect(mapStateToProps)(HomepageToolbar);
