import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';

const GetEnv = require('@envFile');

const KVKKScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              KKTC PİYANGOLAR BİRİMİ BİLGİ EDİNME BAŞVURULARI
            </Text>
            <Text>
              Kişisel Verilerin Korunması Yasası’nın (“KVKK”) kişilerin kişisel
              verilerinin işlenmesine ilişkin birtakım taleplerde bulunma hakkı
              tanımaktadır. KVKY’dan kaynaklı haklarınızı nasıl
              kullanabileceğinize ilişkin size bilgi vermek ve bilgi edinme
              başvurularınızı bize iletmenizi kolaylaştırmak adına bu metni
              hazırladık.
            </Text>
            <Text>
              KVKY uyarınca, KKTC Piyangolar Birimi’ne başvurarak aşağıdaki
              haklarınızı kullanabilirsiniz:
            </Text>
            <Text>
              a) Kişisel verinizin işlenip işlenmediğini öğrenebilirsiniz,
            </Text>
            <Text>
              b) Kişisel veriniz işlenmişse buna ilişkin bilgi talep
              edebilirsiniz
            </Text>
            <Text>
              c) Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenebilirsiniz,
            </Text>
            <Text>
              d) Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri öğrenebilirsiniz,
            </Text>
            <Text>
              e) Kişisel verileriniz eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteyebilirsiniz,
            </Text>
            <Text>
              f) KVKY kuralları çerçevesinde kişisel verilerin silinmesini veya
              yok edilmesini isteyebilirsiniz,
            </Text>
            <Text>
              g) (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel
              verilerin aktarıldığı üçüncü kişilerin bildirilmesini
              isteyebilirsiniz,
            </Text>
            <Text>
              h) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
              analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına
              itiraz edebilirsiniz ve
            </Text>
            <Text>
              i) Kişisel verilerinizin KVKY’ya aykırı olarak işlenmesi sebebiyle
              zarara uğramanız hâlinde zararın giderilmesini talep
              edebilirsiniz.
            </Text>
            <View
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>
                  KKTC Piyangolar Birimi’ne gelerek şahsen başvuru yapması ile
                  (ilgili kişinin kimliğini kanıtlayıcı belgeler)
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>Ziya Bey Cd. 1400. Sk. No. 1 06520 Balgat/Ankara</Text>
                <Text>Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  Zarfın üzerine “Kişisel Verilerin Korunması Bilgi Talebi”
                </Text>
              </View>

              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>Tasdik Memuru yoluyla tebligat</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  Tebligat zarfının üzerine “Kişisel Verilerin Korunması Bilgi
                  Talebi” yazılmalıdır.
                </Text>
              </View>

              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>Sistemimizde kayıtlı e-posta adresiniz üzerinden</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>...</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  E-posta’nın konusu “Kişisel Verilerin Korunması Yasası Bilgi
                  Talebi” olmalıdır.
                </Text>
              </View>
            </View>
            <Text>
              Başvurularınızı kolaylaştırmak için hazırladığımız Bilgi Edinme
              Başvuru Formu aracılığı ile başvurularınızı bize iletebilirsiniz.
              Tarafımıza iletilmiş olan başvurularınız KVKY M. 14 uyarınca
              talebin niteliğine göre talebinizin KKTC Piyangolar Birimi’ne
              ulaştığı tarihten itibaren otuz gün içinde yanıtlandırılacaktır.
              Yanıtlarımız KVKY M. 14 uyarınca yazılı veya elektronik ortamdan
              tarafınıza ulaştırılacaktır.
            </Text>
            <Text>Veri Sorumlusu:</Text>
            <Text>KKTC Piyangolar Birimi</Text>
            <Text>Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa.</Text>
            <Text>Tel: ... Faks : ...</Text>
            <Text>KKTC PİYANGOLAR BİRİMİ BİLGİ EDİNME BAŞVURU FORMU</Text>
            <Text>
              İşbu başvuru formu Kişisel Verileri Koruma Kurulu tarafından
              yayınlanan Kişisel Verilerin Korunması Yasası’nın 14’üncü maddesi
              kapsamında yapılacak başvuruların kabulü için bu metinde zorunlu
              olduğu belirtilen alanların bize iletilmesi gerekmektedir.
            </Text>
            <Text>
              Başvuru da bulunurken talebiniz ve talebinizin yanıtlanması ile
              bağlantılı olmayan kişisel veri içerikli belge/bilgi paylaşmamanız
              gerektiğini belirtmek isteriz. Gönderilen belgeler içerisinde
              kişisel veri olması halinde, lütfen söz konusu belgeden ilgili
              kişisel veriyi siliniz veya anonim hale getirmek suretiyle
              paylaşınız.
            </Text>
            <Text>
              İşbu başvuru formu Kişisel Verileri Koruma Kurumu tarafından
              yayınlanan Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
              Tebliğ uyarınca hazırlanmış olup 6698 sayılı Kişisel Verilerin
              Korunması Kanunu’nun 13’üncü maddesi kapsamında yapılacak
              başvuruların kabulü için bu metinde zorunlu olduğu belirtilen
              alanların bize iletilmesi gerekmektedir.
            </Text>
            <Text>
              Başvuru da bulunurken talebiniz ve talebinizin yanıtlanması ile
              bağlantılı olmayan kişisel veri içerikli belge/bilgi paylaşmamanız
              gerektiğini belirtmek isteriz. Gönderilen belgeler içerisinde
              kişisel veri olması halinde, lütfen söz konusu belgeden ilgili
              kişisel veriyi siliniz veya anonim hale getirmek suretiyle
              paylaşınız.
            </Text>
            <Text>Başvuru Sahibi Ad: *(Zorunlu)</Text>
            <Text>Başvuru Sahibi Soyad: * (Zorunlu)</Text>
            <Text>Başvuru Sahibi Kimlik Numarası: * (Zorunlu)*</Text>
            <Text>Başvuru Sahibi Bildirime Esas Telefon Numarası:</Text>
            <Text>Başvuru Sahibi Bildirime Esas e- posta Adresi:</Text>
            <Text>Başvuru Sahibi Bildirime Esas Faks Numarası:</Text>
            <Text>
              Başvuru Sahibi Tebligata Esas Yerleşim Yeri veya İş Yeri Adresi:
              *(Zorunlu)
            </Text>
            <Text>
              Başvuru Talebinizin İçeriği ve Gerekli Açıklamalar: *(Zorunlu)
              *Lütfen KVKY kapsamındaki talebinizi detaylıca açıklayınız. Varsa
              talebinize ek ilgili belgeleri bu forma ekleyebilirsiniz.
            </Text>
            <Text>Başvuru Tarihi:</Text>
            <Text>
              İmza (Başvurunuzun yazılı olarak iletilmesi durumunda zorunludur):
            </Text>
            <Text>Veri Sorumlusu:</Text>
            <Text>KKTC Piyangolar Birimi</Text>
            <Text>Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa.</Text>
            <Text>Tel: ... Faks : ...</Text>
          </>
        ) : (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              MİLLİ PİYANGO İDARESİ VE 106 DİJİTAL HİZMETLER VE ŞANS OYUNLARI
              A.Ş. BİLGİ EDİNME BAŞVURULARI
            </Text>
            <Text>
              6698 Sayılı Kişisel Verilerin Korunması Kanunu’nun (“KVKK”)
              “İlgili Kişinin Hakları” başlıklı 11. maddesi ilgili kişilerin
              kişisel verilerinin işlenmesine ilişkin birtakım taleplerde
              bulunma hakkı tanımaktadır. KVKK m.11’den kaynaklı haklarınızı
              nasıl kullanabileceğinize ilişkin size bilgi vermek ve bilgi
              edinme başvurularınızı bize iletmenizi kolaylaştırmak adına bu
              metni hazırladık.
            </Text>
            <Text>
              KVKK’nın 11. maddesi uyarınca, Milli Piyango İdaresi ve 106
              Dijtal’e başvurarak aşağıdaki haklarınızı kullanabilirsiniz:
            </Text>
            <Text>
              a) Kişisel verinizin işlenip işlenmediğini öğrenebilirsiniz,
            </Text>
            <Text>
              b) Kişisel veriniz işlenmişse buna ilişkin bilgi talep
              edebilirsiniz
            </Text>
            <Text>
              c) Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenebilirsiniz,
            </Text>
            <Text>
              d) Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri öğrenebilirsiniz,
            </Text>
            <Text>
              e) Kişisel verileriniz eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteyebilirsiniz,
            </Text>
            <Text>
              f) KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
              verilerin silinmesini veya yok edilmesini isteyebilirsiniz,
            </Text>
            <Text>
              g) (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel
              verilerin aktarıldığı üçüncü kişilerin bildirilmesini
              isteyebilirsiniz,
            </Text>
            <Text>
              h) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
              analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına
              itiraz edebilirsiniz ve
            </Text>
            <Text>
              i) Kişisel verilerinizin KVKK’ya aykırı olarak işlenmesi sebebiyle
              zarara uğramanız hâlinde zararın giderilmesini talep
              edebilirsiniz.
            </Text>
            <Text>
              Bilgi Edinme Hakkı Kanunu kapsamındaki başvurularınızı ve KVKK
              m.11’den kaynaklı haklarınızı aşağıdaki yöntemleri kullanarak bize
              iletebilirsiniz.
            </Text>

            <View
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>
                  İdaremize/106 Dijital’e gelerek şahsen başvuru yapması ile
                  (ilgili kişinin kimliğini kanıtlayıcı belgeler ile gelmesi
                  gerekmektedir.)
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>Ziya Bey Cd. 1400. Sk. No. 1 06520 Balgat/Ankara</Text>
                <Text>
                  İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  Zarfın üzerine “Kişisel Verilerin Korunması Bilgi Talebi”
                  yazılmalıdır
                </Text>
              </View>

              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>Noter yoluyla tebligat</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>Ziya Bey Cd. 1400. Sk. No. 1 06520 Balgat/Ankara</Text>
                <Text>
                  İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  Zarfın üzerine “Kişisel Verilerin Korunması Bilgi Talebi”
                  yazılmalıdır
                </Text>
              </View>

              <View
                style={{
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderBottomWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>
                  5070 sayılı Elektronik İmza Kanunu’nda tanımlı “Güvenli
                  elektronik imza” ile imzalanarak Kayıtlı Elektronik Posta
                  (KEP) yoluyla
                </Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>millipiyango@hs01.kep.tr</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  E-posta’nın konusu “Kişisel Verilerin Korunması Kanunu Bilgi
                  Talebi” olmalıdır.
                </Text>
              </View>

              <View
                style={{
                  padding: 10,
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Başvuru Yönetimi</Text>
                <Text>Sistemimizde kayıtlı e-posta adresiniz üzerinden</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Başvurunun Yapılacağı Adres
                </Text>
                <Text>millipiyango@mpi.gov.tr</Text>
                <Text>info@piyangosepeti.com.tr</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
                  Yapılması Gereken
                </Text>
                <Text>
                  E-posta’nın konusu “Kişisel Verilerin Korunması Kanunu Bilgi
                  Talebi” olmalıdır.
                </Text>
              </View>
            </View>

            <Text>
              Başvurularınızı kolaylaştırmak için hazırladığımız Bilgi Edinme
              Başvuru Formu aracılığı ile başvurularınızı bize iletebilirsiniz.
              Tarafımıza iletilmiş olan başvurularınız KVKK m. 13/2 uyarınca
              talebin niteliğine göre talebinizin İdaremize/Şirketimize ulaştığı
              tarihten itibaren otuz gün içinde yanıtlandırılacaktır.
              Yanıtlarımız KVKK m. 13 uyarınca yazılı veya elektronik ortamdan
              tarafınıza ulaştırılacaktır.
            </Text>
            <Text>Veri Sorumlusu:</Text>
            <Text>Milli Piyango İdaresi Genel Müdürlüğü</Text>
            <Text>Ziyabey Cd. 1400. Sk. No. 1 06520 Balgat/ANKARA</Text>
            <Text>Tel: 0 312 286 93 06 (PBX) Faks : 0 312 286 97 88</Text>
            <Text>106 Dijital İnteraktif Hizmetler ve Şans Oyunları A.Ş</Text>
            <Text>
              Adres: İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
            </Text>
            <Text>Destek Hattı: 0 850 260 11 60 Faks: 0 212 247 03 75</Text>
            <Text style={[styles.staticPageSubTitle]}>
              MİLLİ PİYANGO İDARESİ/106 DİJİTAL BİLGİ EDİNME BAŞVURU FORMU
            </Text>
            <Text>
              İşbu başvuru formu Kişisel Verileri Koruma Kurumu tarafından
              yayınlanan Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
              Tebliğ uyarınca hazırlanmış olup 6698 sayılı Kişisel Verilerin
              Korunması Kanunu’nun 13’üncü maddesi kapsamında yapılacak
              başvuruların kabulü için bu metinde zorunlu olduğu belirtilen
              alanların bize iletilmesi gerekmektedir.
            </Text>
            <Text>
              Başvuru da bulunurken talebiniz ve talebinizin yanıtlanması ile
              bağlantılı olmayan kişisel veri içerikli belge/bilgi paylaşmamanız
              gerektiğini belirtmek isteriz. Gönderilen belgeler içerisinde
              kişisel veri olması halinde, lütfen söz konusu belgeden ilgili
              kişisel veriyi siliniz veya anonim hale getirmek suretiyle
              paylaşınız.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default KVKKScreen;
