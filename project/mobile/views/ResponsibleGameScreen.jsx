import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';
import UlLiList from '@mobile/component/tools/UlLiList';

const GetEnv = require('@envFile');

const ResponsibleGameScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const list = [
    {
      text: 'Çalışan ve Müşteri Hizmetleri Eğitimi: Tüm çalışanları sorumlu oyun hakkında duyarlı hale getirme ve müdahale alanları konusunda bilgilendirmeyi amaçlayan eğitim faaliyetleri',
    },
    {
      text: 'Sorumlu Satış İletişimi: İletişim kampanyalarında Sorumlu oyun hassasiyetini gözetir uygulamalar',
    },
    {
      text: 'Kendini Devre Dışı bırakma: Önleme mekanizmaları (kendini sınırlama ve kendini devre dışı bırakma) ve çevrimiçi oyun izleme/analizler',
    },
    {
      text: 'Toplum bilinci oluşturma: Sorumlu oyun hakkında duyarlılık oluşturma ve bilgilendirme amaçlı düzenli içerik yayını',
    },
  ];

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text style={[styles.staticPageMainTitle]}>SORUMLU OYUN</Text>
            <Text>
              KKTC Piyangolar Birimi; oyun oynamanın sadece eğlence amaçlı
              olmasını sağlamak konusunda toplumdaki rol ve sorumluluklarının
              farkındadır. Özellikle taahhüdü, 18 yaşından küçüklerin piyango
              oynamamaları ve oyuncuların oyun bağımlılığından korunması gibi
              iki ana konuyla ilgilidir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Sorumlu Oyun Programı:
            </Text>
            <Text>
              Programda sadece oyuncuların değil; çalışanların, dağıtım ağı ve
              satış ortaklarının, kurumların, sektördeki operatörlerin ve tüm
              müşterilerin korunmasını en üst düzeyde garanti altına almayı
              taahhüt eden 4 aksiyon başlığı vardır:
            </Text>
            {UlLiList({ list })}
            <Text>Bu kapsamda, sadece 18 yaş üstü oyuncular oynayabilir.</Text>
            <Text>
              Reşit olmayanlar için oyuna erişim kesinlikle yasaktır. Bir hesap
              oluştururken KKTC Piyangolar Birimi kullanıcının bilgilerini 18
              yaşından büyük olduğundan emin olmak için kontrol eder.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Kendini Devre Dışı Bırakma Özelliği:
            </Text>
            <Text>
              KKTC Piyangolar Birimi, oyunculara kendilerini oyunun dışında
              bırakma imkanı verir. Hesabının kendini devre dışı bırakma
              bölümünden kendini devre dışı bırakmayı isteyebilirsiniz. Kendi
              kendini devre dışı bırakmadan sonra, herhangi bir oyun işlemi
              (para yatırma, piyango oyunu oynama vb.) yapamazsınız, Ancak,
              herhangi bir zamanda hesaptan para çekme talebinde
              bulunabilirsiniz. Başka bir hesap açılmasını ise isteyemez/talep
              edemezsiniz.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              1. Geçici Devre Dışı Bırakma:
            </Text>
            <Text>
              Kendini devre dışı bırakma geçici süreyle olabilir. Geçici
              uzaklaşma durumunda üye geçici süre boyunca hesabı üzerinden
              herhangi bir oyun oynayamaz veya hesabına para yükleyemez.{' '}
              <Text style={[{ textDecorationLine: 'underline' }]}>
                Geçici süre 15, 30 veya 60 günlük bir dönem olabilir.{' '}
              </Text>
              Bu süre içerisinde üye hesabından para çekebilir. Geçici süre
              tamamlandığında üye hesabı otomatik olarak aktive edilir,
              aktivasyon sonrasında üye hesabına para yatırıp, oyun oynamaya
              devam edebilir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              2. Kalıcı Devre Dışı Bırakma:
            </Text>
            <Text>
              Kalıcı uzaklaşma durumunda ise üye hesabı üzerinden herhangi bir
              oyun oynayamaz veya hesabına para yükleyemez. Bu durumda üye
              hesabından para çekebilir.{' '}
              <Text style={[{ textDecorationLine: 'underline' }]}>
                Kalıcı süre 3 aylık bir dönemdir.
              </Text>
              Üye 3 ay sonunda hesabının aktive edilmesi için talebini kimlik
              belgesinin bir kopyasını e-posta içerisine ekleyerek Müşteri
              Hizmetlerine iletmelidir.
            </Text>
            <Text>
              Müşteri Hizmetleri talebi ve üye bilgilerini inceleyerek üye
              hesabını aktive edecektir, hesabın aktive edilmesi işlemi 7 gün
              sonra tamamlanacaktır. Aktivasyon sonrasında üye hesabına para
              yatırıp, oyun oynamaya devam edebilir.
            </Text>
            <Text>
              Üye hesabı geçici veya kalıcı süreli kapalıyken oyun oynamak veya
              hesabına para yatırmak istediğinde Sorumlu oyun limitlerinden
              kaynaklı işlem yapamayacağı hata mesajı olarak verilecektir.
            </Text>
          </>
        ) : (
          <>
            {' '}
            <Text style={[styles.staticPageMainTitle]}>SORUMLU OYUN</Text>
            <Text>
              Milli Piyango İdaresi ve başbayi 106 Dijtial Hizmetler A.Ş.; oyun
              oynamanın sadece eğlence amaçlı olmasını sağlamak konusunda
              toplumdaki rol ve sorumluluklarının farkındadır. Özellikle
              taahhüdü, 18 yaşından küçüklerin piyango oynamamaları ve
              oyuncuların oyun bağımlılığından korunması gibi iki ana konuyla
              ilgilidir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Sorumlu Oyun Programı:
            </Text>
            <Text>
              Programda sadece oyuncuların değil; çalışanların, dağıtım ağı ve
              satış ortaklarının, kurumların, sektördeki operatörlerin ve tüm
              müşterilerin korunmasını en üst düzeyde garanti altına almayı
              taahhüt eden 4 aksiyon başlığı vardır:
            </Text>
            {UlLiList({ list })}
            <Text>Bu kapsamda, sadece 18 yaş üstü oyuncular oynayabilir.</Text>
            <Text>
              Reşit olmayanlar için oyuna erişim kesinlikle yasaktır. Bir hesap
              oluştururken 106 Dijital kullanıcının bilgilerini 18 yaşından
              büyük olduğundan emin olmak için kontrol eder.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Kendini Devre Dışı Bırakma Özelliği:
            </Text>
            <Text>
              106 Dijital, oyunculara kendilerini oyunun dışında bırakma imkanı
              verir. Hesabının kendini devre dışı bırakma bölümünden kendini
              devre dışı bırakmayı isteyebilirsiniz. Kendi kendini devre dışı
              bırakmadan sonra, herhangi bir oyun işlemi (para yatırma, piyango
              oyunu oynama vb.) yapamazsınız, Ancak, herhangi bir zamanda
              hesaptan para çekme talebinde bulunabilirsiniz. Başka bir hesap
              açılmasını ise isteyemez/talep edemezsiniz.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              1. Geçici Devre Dışı Bırakma:
            </Text>
            <Text>
              Kendini devre dışı bırakma geçici süreyle olabilir. Geçici
              uzaklaşma durumunda üye geçici süre boyunca hesabı üzerinden
              herhangi bir oyun oynayamaz veya hesabına para yükleyemez.{' '}
              <Text style={[{ textDecorationLine: 'underline' }]}>
                Geçici süre 15, 30 veya 60 günlük bir dönem olabilir.
              </Text>
              Bu süre içerisinde üye hesabından para çekebilir. Geçici süre
              tamamlandığında üye hesabı otomatik olarak aktive edilir,
              aktivasyon sonrasında üye hesabına para yatırıp, oyun oynamaya
              devam edebilir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              2. Kalıcı Devre Dışı Bırakma:
            </Text>
            <Text>
              Kalıcı uzaklaşma durumunda ise üye hesabı üzerinden herhangi bir
              oyun oynayamaz veya hesabına para yükleyemez. Bu durumda üye
              hesabından para çekebilir.{' '}
              <Text style={[{ textDecorationLine: 'underline' }]}>
                Kalıcı süre 3 aylık bir dönemdir.
              </Text>
              Üye 3 ay sonunda hesabının aktive edilmesi için talebini kimlik
              belgesinin bir kopyasını e-posta içerisine ekleyerek Müşteri
              Hizmetlerine iletmelidir.
            </Text>
            <Text>
              Müşteri Hizmetleri talebi ve üye bilgilerini inceleyerek üye
              hesabını aktive edecektir, hesabın aktive edilmesi işlemi 7 gün
              sonra tamamlanacaktır. Aktivasyon sonrasında üye hesabına para
              yatırıp, oyun oynamaya devam edebilir.
            </Text>
            <Text>
              Üye hesabı geçici veya kalıcı süreli kapalıyken oyun oynamak veya
              hesabına para yatırmak istediğinde Sorumlu oyun limitlerinden
              kaynaklı işlem yapamayacağı hata mesajı olarak verilecektir.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ResponsibleGameScreen;
