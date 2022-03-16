import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';

const AboutCyprusScreen = () => {
  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        <Text style={[styles.staticPageMainTitle, { marginBottom: 20 }]}>
          KKTC Piyangolar Birimi
        </Text>
        <Text>
          <Text style={[styles.staticPageSubTitle]}>GÖREVLERİMİZ</Text>
        </Text>
        <View>
          <View>
            <Text>
              1982 yılında kuruldu. İlk memur istihdamı 1984 yılında 4 kişilik
              istihdam yapıldı. İlk kurulduğu yıllarda Milli Piyango, spor toto
              ve loto oyunları vardı. Mart 1985 yılında Devlet Piyangosu
              başlangıcı yapıldı. Piyangolar biriminin ilk sorumlusu İsmail
              Araz, yardımcısı Mehmet Sporcuoğlu ve daire müdürü Günay Caymazdı.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutCyprusScreen;
