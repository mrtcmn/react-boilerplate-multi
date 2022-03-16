import React from 'react';
import { View, Text } from 'react-native';
import Section from '@mobile/component/tools/Section';
import { SvgXml } from 'react-native-svg';
import CheckMarkIcon from '@asset/images/icons/checkmark.svg';
import XIcon from '@asset/images/icons/x.svg';
import styles from '@mobile/src/styles/common';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const ProfileAccountInfoRN = ({ userData }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Text
        style={[styles.profileSectionMainTitle]}
      >{`${userData.CustomerName} ${userData.CustomerSurname}`}</Text>

      <View style={[styles.profileSectionsAreaMain]}>
        <View style={[styles.profileMailInfoRowMain]}>
          <Text>
            {t('Profile_Account_Info_Text_1')}
            <Text style={[styles.profileMailIsActivated]}>
              {userData.IsMailActived
                ? t('Profile_Account_Info_Text_3')
                : t('Profile_Account_Info_Text_4')}
            </Text>
          </Text>
          {userData.IsMailActived ? (
            <SvgXml
              xml={CheckMarkIcon}
              fill="rgb(76, 128, 10)"
              style={[styles.profileMailActivatedIcon]}
            />
          ) : (
            <SvgXml
              xml={XIcon}
              fill="rgb(219, 39, 39)"
              style={[styles.profileMailActivatedIcon]}
            />
          )}
        </View>

        <View style={[styles.profileMailInfoRowMain]}>
          <Text>
            {t('Profile_Account_Info_Text_2')}
            <Text style={[styles.profileMailIsActivated]}>
              {userData.IsPhoneActived
                ? t('Profile_Account_Info_Text_3')
                : t('Profile_Account_Info_Text_4')}
            </Text>
          </Text>
          {userData.IsPhoneActived ? (
            <SvgXml
              xml={CheckMarkIcon}
              fill="rgb(76, 128, 10)"
              style={[styles.profileMailActivatedIcon]}
            />
          ) : (
            <SvgXml
              xml={XIcon}
              fill="rgb(219, 39, 39)"
              style={[styles.profileMailActivatedIcon]}
            />
          )}
        </View>

        <View style={[styles.profileMailInfoRowMain, { marginTop: 20 }]}>
          <Text>
            {t('Profile_Account_Info_Field_Text_2')}
            {': '}
            <Text style={[styles.profileMailIsActivated]}>
              {userData.CustomerNo}
            </Text>
          </Text>
        </View>
      </View>
    </Section>
  );
};

ProfileAccountInfoRN.propTypes = exact({
  userData: PropTypes.object,
});
ProfileAccountInfoRN.defaultProps = {
  userData: {},
};

const mapStateToProps = (state) => ({
  userData: state.UserReducer.userData,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileAccountInfoRN);
