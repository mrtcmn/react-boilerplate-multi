import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';
import UlLiList from '@mobile/component/tools/UlLiList';

const About106DijitalScreen = () => {
  const ulList = [
    {
      text: 'Milli Piyango çatısı altındaki eşya piyangolarının oynanabildiği (ev piyangosu, otomobil piyangosu, cep telefonu piyangosu, tatil piyangosu, elektronik eşya piyangosu)',
    },
    {
      text: 'Oyuncunun profil açıp, ikramiyelerini istediği zaman görüntüleyebildiği,',
    },
    {
      text: 'Milli Piyango TV üzerinden çekilişlerin canlı yayınlandığı,',
    },
    {
      text: 'Sorumlu Oyun politikasının benimsendiği,',
    },
  ];

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        <Text style={[styles.staticPageMainTitle]}>
          106 DİJİTAL ŞANS OYUNLARI YATIRIM
        </Text>
        <Text>
          106 Dijital Şans Oyunları Yatırım olarak, T.C. Millî Piyango İdaresi
          Genel Müdürlüğü’nün izleme ve denetimine tabi olmak üzere 2 Şubat 2021
           itibarıyla, karşılığı nakit olmayan Şans Oyunları düzenlemesine
          ilişkin iş ve hizmetleri 10 yıl süreyle yerine getirmek üzere
          yetkilendirilmiş bulunuyoruz.
        </Text>
        <Text>
          Milli Piyango’nun köklü geleneklerini koruyup ve deneyimlerini
          arkamıza alarak Türkiye çapında geniş erişim ağımız, şans oyunları
          alanındaki deneyimimiz ve son teknolojiyi kullanan teknik altyapımız
          ile Milli Piyango markasını en iyi şekilde temsil etmeyi
          hedefliyoruz. Böylece, Türkiye ekonomisine katkı sağlayacağımıza ve
          şans oyunları sektörüne getireceğimiz yenilikler ile oyunculara
          eğlenceli bir oyun dünyası sunacağımıza inanıyoruz.
        </Text>
        <View style={{ marginTop: 20 }} />
        <Text style={[styles.staticPageSubTitle]}>Piyangosepeti.com.tr:</Text>
        {UlLiList({ list: ulList })}
        <Text style={[styles.staticPageSubTitle]}>
          Türkiye’nin şans oyunları sitesidir.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About106DijitalScreen;
