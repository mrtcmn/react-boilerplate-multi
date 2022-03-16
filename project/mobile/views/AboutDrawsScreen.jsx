import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import styles from '@mobile/src/styles/common';

const GetEnv = require('@envFile');

const AboutDrawsScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              ÇEKİLİŞLERİMİZ HAKKINDA
            </Text>
            <Text>
              Çekilişler; KKTC Piyangolar Birimi tarafından ilan edilen
              yer/yerlerde; içinde numaraların yazılı olduğu toplar bulunan
              hareketli küreler ile ve/veya gelişen teknoloji kullanmak
              suretiyle dijital olarak yapılmaktadır.
            </Text>
            <Text>
              Çekilişler satılan bilete ikramiye çıkana kadar devam etmektedir.
              Çekilişler{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com
              </Text>
              , adresinde ve youtube kanalımızda canlı ve arşiv olarak
              yayınlanacaktır.
            </Text>
            <Text>
              Çekiliş sonuçları;{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('http://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com
              </Text>
              ,{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangolar.gov.ct.tr/')
                }
              >
                www.piyangolar.gov.ct.tr
              </Text>{' '}
              alan adlı KKTC Piyangolar Birimine ait resmi siteler aracılığıyla
              sorgulanabilecektir.
            </Text>
            <Text>
              Çekiliş tarih ve saati ile çekiliş yeri hakkında oyun planlarında
              kararlaştırıldığı şekilde kamuoyuna bilgilendirme yapılmaktadır.
              İdarece gerekli görülmesi halinde çekiliş tarihi ya da oyun
              döneminin başlangıç veya bitiş tarihlerinde değişiklik
              yapılabilecektir. Bu takdirde, KKTC Piyangolar Birimi’ne ait
              internet siteleri aracılığıyla kamuoyunun bilgilendirilmesi
              sağlanacaktır. Çekilişler KKTC Piyangolar Birimi tarafından halka
              ve basın yayın organlarına açık olarak, noter huzurunda
              yapılmaktadır.
            </Text>
            <Text>
              KKTC Piyangolar Birimi çalışanları ve birinci derece yakınları ile
              18 yaşından küçükler çekilişe katılamaz, katılmış ve kazanmış
              olsalar dahi ikramiyeleri verilemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Çekilişe nasıl hazırlanıyoruz?
              </Text>
            </Text>
            <Text>
              Her çekilişten önce, tasdik memuru gözetiminde seçilen top çantası
              açıldıktan sonra tasdik memuru eşliğinde çekiliş topları, hassas
              tartı ile tartılarak ağırlık kontrolleri yapılmaktadır.
              Kontrolleri yapılan ve onaylanan toplar ile deneme çekilişi
              yapılmakta ve makinelerin doğru bir şekilde çalıştığı tespit
              edildikten sonra çekilişe onay verilmektedir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Çekilişler nasıl gerçekleştiriliyor?
              </Text>
            </Text>
            <Text>
              Kontrolü yapılan toplar çekiliş makinelerine tek tek anons
              edilerek yerleştirilmektedir. Kazanan talihli numaralar anında
              ekrana aktarılmakta ve zaman etiketi ile yapılan çekilişler ayrıca
              bu sisteme entegre edilmiş kameralar ile çekilen toplar takip
              edilip, izlenmekte ve izleyicilere bütün çekiliş süreci canlı ve
              kesintisiz olarak aktarılmaktadır.
            </Text>
            <Text>
              Çekilişler KKTC Piyangolar Birimi yetkilileri ve tasdik memuru
              eşliğinde sürdürülmektedir ve tüm çekilişlerin tutanakları
              tutulmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Canlı yayınlar:</Text>
            </Text>
            <Text>
              Çekilişlerimiz ilan edilen tarih ve çekiliş saatlerinde internet
              sitemizin yanı sıra youtube kanalımız üzerinden canlı olarak
              yayınlanmaktadır. İstenildiği zaman tekrar izlenebilme imkanı da
              hem internet sitemizde hem de Youtube kanalımızda bulunmaktadır.
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              ÇEKİLİŞLERİMİZ HAKKINDA
            </Text>
            <Text>
              Çekilişler; Milli Piyango İdaresi tarafından ilan edilen
              yer/yerlerde; içinde numaraların yazılı olduğu toplar bulunan
              hareketli küreler ile ve/veya gelişen teknoloji kullanmak
              suretiyle dijital olarak yapılmaktadır.
            </Text>
            <Text>
              Çekilişler satılan bilete ikramiye çıkana kadar devam etmektedir.
              Çekilişler{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('http://www.mpi.gov.tr/')
                }
              >
                www.mpi.gov.tr
              </Text>
              , adresinde ve youtube kanalımızda canlı ve arşiv olarak
              yayınlanacaktır.
            </Text>
            <Text>
              Çekiliş sonuçları;{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('http://www.millipiyango.gov.tr/')
                }
              >
                www.millipiyango.gov.tr
              </Text>
              ,{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('http://www.mpi.gov.tr/')
                }
              >
                www.mpi.gov.tr{' '}
              </Text>{' '}
              ve{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>{' '}
              alan adlı İdareye ait resmi siteler aracılığıyla
              sorgulanabilecektir.
            </Text>
            <Text>
              Çekiliş tarih ve saati ile çekiliş yeri hakkında oyun planlarında
              kararlaştırıldığı şekilde kamuoyuna bilgilendirme yapılmaktadır.
              İdarece gerekli görülmesi halinde çekiliş tarihi ya da oyun
              döneminin başlangıç veya bitiş tarihlerinde değişiklik
              yapılabilecektir. Bu takdirde, İdare, başbayi ya da bayilere ait
              internet siteleri aracılığıyla kamuoyunun bilgilendirilmesi
              sağlanacaktır. Çekilişler Milli Piyango İdaresi tarafından halka
              ve basın yayın organlarına açık olarak, noter huzurunda
              yapılmaktadır.
            </Text>
            <Text>
              Milli Piyango İdaresi, 106 Dijital çalışanları ve birinci derece
              yakınları ile 18 yaşından küçükler çekilişe katılamaz, katılmış ve
              kazanmış olsalar dahi ikramiyeleri verilemez.
            </Text>
            <Text>
              Tüm çekiliş süreçlerimiz “Dünya Piyango Birliği, World Lottery
              Association” standart ve kurallarına uygun şekilde organize
              edilmektedir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Çekilişe nasıl hazırlanıyoruz?
              </Text>
            </Text>
            <Text>
              Her çekilişten önce, noter gözetiminde seçilen top çantası
              açıldıktan sonra noter eşliğinde çekiliş topları, hassas tartı ile
              tartılarak ağırlık kontrolleri yapılmaktadır. Kontrolleri yapılan
              ve onaylanan toplar ile deneme çekilişi yapılmakta ve makinelerin
              doğru bir şekilde çalıştığı tespit edildikten sonra çekilişe onay
              verilmektedir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Çekilişler nasıl gerçekleştiriliyor?
              </Text>
            </Text>
            <Text>
              Kontrolü yapılan toplar çekiliş makinelerine tek tek anons
              edilerek yerleştirilmektedir. Kazanan talihli numaralar anında
              ekrana aktarılmakta ve zaman etiketi ile yapılan çekilişler ayrıca
              bu sisteme entegre edilmiş kameralar ile çekilen toplar takip
              edilip, izlenmekte ve izleyicilere bütün çekiliş süreci canlı ve
              kesintisiz olarak aktarılmaktadır.
            </Text>
            <Text>
              Çekilişler Milli Piyango İdaresi yetkilileri ve Noter eşliğinde
              sürdürülmektedir ve tüm çekilişlerin tutanakları tutulmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Canlı yayınlar:</Text>
            </Text>
            <Text>
              Çekilişlerimiz ilan edilen tarih ve çekiliş saatlerinde internet
              sitemizin yanısıra youtube kanalımız üzerinden canlı olarak
              yayınlanmaktadır. İstenildiği zaman tekrar izlenebilme imkanı da
              hem internet sitemizde hem de Youtube kanalımızda bulunmaktadır.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default AboutDrawsScreen;
