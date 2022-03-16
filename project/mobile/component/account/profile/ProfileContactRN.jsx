import Section from '@mobile/component/tools/Section';
import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '@mobile/src/styles/common';
import ProfileEmailRN from '@mobile/component/account/profile/ProfileEmailRN';
import ProfilePhoneRN from '@mobile/component/account/profile/ProfilePhoneRN';

const ProfileContactRN = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Text style={[styles.staticPageSubTitle]}>
        {t('Profile_Contact_Title_Text_1')}
      </Text>

      <ProfileEmailRN />
      <ProfilePhoneRN />
    </Section>
  );
};

export default ProfileContactRN;
