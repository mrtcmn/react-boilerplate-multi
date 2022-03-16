import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MailIcon from '@asset/images/icons/important-mail.svg';
import PhoneIcon from '@asset/images/icons/phone.svg';
import MapIcon from '@asset/images/icons/map.svg';
import { useTranslation } from 'react-i18next';
import styles from '@mobile/src/styles/common';

const GetEnv = require('@envFile');

const ContactScreen = () => {
  const { t } = useTranslation();
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              KKTC Piyangolar Birimi
            </Text>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={PhoneIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_2')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>Tel : ...</Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MapIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_5')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>
                  Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa.
                </Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MailIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_3')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text
                  style={[styles.contactInfoText, { color: 'blue' }]}
                  onPress={async () =>
                    await Linking.openURL('mailto:millipiyango@mpi.gov.tr')
                  }
                >
                  ...
                </Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              MİLLİ PİYANGO İDARESİ GENEL MÜDÜRLÜĞÜ
            </Text>
            {/* <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={PhoneIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_2')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>
                  Tel : 0 850 260 11 60
                </Text>
              </View>
            </View> */}
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MapIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_5')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>
                  Ziyabey Caddesi 1400. Sokak No : 1 06520 Balgat / ANKARA
                </Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MailIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_3')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text
                  style={[styles.contactInfoText, { color: 'blue' }]}
                  onPress={async () =>
                    await Linking.openURL('mailto:millipiyango@mpi.gov.tr')
                  }
                >
                  millipiyango@mpi.gov.tr
                </Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MailIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_4')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text
                  style={[styles.contactInfoText, { color: 'blue' }]}
                  onPress={async () =>
                    await Linking.openURL('mailto:millipiyango@hs01.kep.tr')
                  }
                >
                  millipiyango@hs01.kep.tr
                </Text>
              </View>
            </View>
            <Text style={[styles.staticPageMainTitle, { marginTop: 40 }]}>
              106 DİJİTAL HİZMETLER VE ŞANS OYUNLARI A.Ş.
            </Text>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={PhoneIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_2')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>
                  Destek Hattı: 0 850 260 11 60
                </Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MapIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_5')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text style={[styles.contactInfoText]}>
                  İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
                </Text>
              </View>
            </View>
            <View style={[styles.contactBlockMain]}>
              <View style={[styles.contactIconTitleMain]}>
                <SvgXml
                  width={25}
                  height={25}
                  xml={MailIcon}
                  fill="#000"
                  style={[styles.contactIcon]}
                />
                <Text style={[styles.staticPageSubTitle]}>
                  {t('Contact_Text_3')}
                </Text>
              </View>
              <View style={[styles.contactInfoTextsMain]}>
                <Text
                  style={[styles.contactInfoText, { color: 'blue' }]}
                  onPress={async () =>
                    await Linking.openURL('mailto:info@piyangosepeti.com.tr')
                  }
                >
                  info@piyangosepeti.com.tr
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
