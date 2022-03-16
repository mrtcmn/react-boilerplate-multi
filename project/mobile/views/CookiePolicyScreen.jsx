import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import DotIcon from '@asset/images/icons/black-circle.svg';
import { SvgXml } from 'react-native-svg';
import styles from '@mobile/src/styles/common';
import UlLiList from '@mobile/component/tools/UlLiList';

const GetEnv = require('@envFile');

const CookiePolicyScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const whatIsCookieList = isCyprus
    ? [
        {
          text: 'devletpiyangosu.com’da oturum açarken “beni hatırla” seçeneğini seçtiğinizde her ziyaretinizde kullanıcı adı bilgilerinizi yeniden girmek zorunda kalmayacağınız bir kullanıcı deneyimi yaratıyoruz.',
        },
        {
          text: 'Güvenlik kontrolleri için kullanıyoruz.',
        },
        {
          text: 'Birden fazla sayfadan oluşan çevrimiçi formların doldurulmasını sağlıyoruz.',
        },
        {
          text: 'Ziyaretleriniz sırasındaki performans verileri incelenerek teknik iyileştirme hizmetlerinden daha hızlı, güvenli ve kolay faydalanmanızı sağlıyoruz.',
        },
        {
          text: 'Reklam ağımızda yer alan diğer internet sitelerinde size özel reklamlar göstererek, gösterilen reklam sayısını sınırlayabiliyoruz.',
        },
      ]
    : [
        {
          text: 'Piyangosepeti.com.tr’de oturum açarken “beni hatırla” seçeneğini seçtiğinizde her ziyaretinizde kullanıcı adı bilgilerinizi yeniden girmek zorunda kalmayacağınız bir kullanıcı deneyimi yaratıyoruz.',
        },
        {
          text: 'Güvenlik kontrolleri için kullanıyoruz.',
        },
        {
          text: 'Birden fazla sayfadan oluşan çevrimiçi formların doldurulmasını sağlıyoruz.',
        },
        {
          text: 'Ziyaretleriniz sırasındaki performans verileri incelenerek teknik iyileştirme hizmetlerinden daha hızlı, güvenli ve kolay faydalanmanızı sağlıyoruz.',
        },
        {
          text: 'Reklam ağımızda yer alan diğer internet sitelerinde size özel reklamlar göstererek, gösterilen reklam sayısını sınırlayabiliyoruz.',
        },
      ];

  const whatRightsList = isCyprus
    ? [
        {
          text: 'Kişisel veri işlenip işlenmediğini öğrenme,',
        },
        {
          text: 'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
        },
        {
          text: 'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
        },
        {
          text: 'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme',
        },
        {
          text: 'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
        },
        {
          text: 'Yasa ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
        },
        {
          text: 'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
        },
        {
          text: 'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.',
        },
      ]
    : [
        {
          text: 'Kişisel veri işlenip işlenmediğini öğrenme,',
        },
        {
          text: 'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
        },
        {
          text: 'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
        },
        {
          text: 'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme',
        },
        {
          text: 'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
        },
        {
          text: 'Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
        },
        {
          text: 'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
        },
        {
          text: 'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.',
        },
      ];

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {/* <Text style={[styles.staticPageSubTitle]}>Çerez Politikası</Text> */}
        {isCyprus ? (
          <>
            <Text>
              KKTC Piyangolar Birimi olarak işleticisi olduğumuz
              ("devletpiyangosu.com") web sitemizin ("Web Sitesi")
              ziyaretçilerinin gizlilik ve kişisel verilerinin korunması
              haklarını gözeterek ziyaretçilerimize daha iyi bir kullanım
              deneyimi sağlayabilmek için kişisel verilerini işlemekte ve
              internet çerezleri kullanmaktayız.
            </Text>
            <Text>
              Bu Çerez Kullanımı Politikası ("Politika"), tüm Web Sitesi
              ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi
              koşullarda kullanıldığını açıklamaktadır. Bu Politika, Web
              Sitesi'ne hangi teknolojilerle, hangi yöntemlerle ve ne şekilde
              bağlandığınıza bağlı olmaksızın uygulanmaktadır.
            </Text>
            <Text>
              Çoğu web sitesinde olduğu gibi, devletpiyangosu.com’da ("Site")
              ziyaretçilere kişisel içerik ve reklamlar göstermek, site içinde
              analitik faaliyetler gerçekleştirmek ve ziyaretçi kullanım
              alışkanlıklarını takip etmek amacıyla Çerezler kullanılmaktadır.
            </Text>
            <Text>
              Devletpiyangosu.com, bu Çerez Politikası’nı ("Politika") Site’de
              hangi Çerezlerin kullanıldığını ve kullanıcıların bu konudaki
              tercihlerini nasıl yönetebileceğini açıklamak amacıyla
              hazırlamıştır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Çerez (“Cookie”) Nedir ve Niçin Kullanılmaktadır?
            </Text>
            <Text>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından
              tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan
              küçük metin dosyalarıdır. Çerezler, ziyaretçilere ilişkin isim,
              cinsiyet veya adres gibi kişisel verileri içermezler. Çerezler
              konusundan daha detaylı bilgi için{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.aboutcookies.org/')
                }
              >
                www.aboutcookies.org{' '}
              </Text>{' '}
              ve{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.allaboutcookies.org/')
                }
              >
                www.allaboutcookies.org{' '}
              </Text>
              adreslerini ziyaret edebilirisiniz.
            </Text>
            <Text>
              Devletpiyangosu.com, çerezler sayesinde hizmet alımınızı
              kolaylaştırarak almış olduğunuz hizmet kalitesini artırmayı
              amaçlamaktadır. Geçerlilik sürelerine göre Kalıcı ve Geçici iki
              tip çerez kullanmaktayız. Kalıcı Çerezler, bilgisayarınızda veya
              mobil cihazınızda en fazla 12 ay süreyle bir dosya olarak
              saklanır. Geçici Çerezler tarayıcı oturumunuzu kapattığınızda
              silinir. Site’de, Çerezler aşağıdaki amaçlar kapsamında
              kullanılmaktadır:
            </Text>
            {UlLiList({ list: whatIsCookieList })}
            <Text style={[styles.staticPageSubTitle]}>
              Çerezlerle Hangi Tür Verilerinizi İşliyoruz?
            </Text>
            <Text>
              Çerezler, türlerine bağlı olmak üzere, genel olarak, Web Sitesi'ne
              eriştiğiniz cihazda tarama ve kullanım tercihlerinize ilişkin
              verileri toplamaktadır. Bu veriler, eriştiğiniz sayfaları,
              incelediğiniz hizmet ve ürünlerimizi, Web Sitesi'nde yaptığınız
              gezintiye ilişkin tüm bilgileri kapsamaktadır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Hangi Tür Çerezleri Hangi Şekillerde Kullanıyoruz?
            </Text>
            <Text>
              Web Sitesi'nde farklı türlerde çerezler kullanmaktayız. Bunlar Web
              Sitesi'nin çalışmasını sağlamak için kullanılması zorunlu olan
              çerezler, işlev çerezleri, analiz/performans çerezleri ve
              hedefleme/reklam çerezleridir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              KULLANIM BAKIMINDAN ÇEREZ TÜRLERİ:
            </Text>
            <Text>
              Kullanılması Zorunlu Olan Çerezler: Bu çerezler, Web Sitesi'nin
              düzgün şekilde çalışması için mutlaka gerekli olan çerezlerdir. Bu
              çerezlere, sistemin yönetilebilmesi, sahte işlemlerin önlenmesi
              için ihtiyaç vardır ve engellenmesi halinde Web Sitesi
              çalışamayacaktır.
            </Text>
            <Text>
              İşlev Çerezleri: Bu çerezler size daha gelişmiş ve kolay bir
              kullanım deneyimi yaşatmak için kullanılan çerezlerdir. Örneğin
              önceki tercihlerinizi hatırlamak, Web Sitesi üzerinde yer alan
              bazı içeriklere rahatça erişmenizi sağlamak işlevlerini yerine
              getirmektedir. Aşağıda detaylı olarak açıklanan şekilde bu
              çerezlerin kullanımını engelleyebilirsiniz.
            </Text>
            <Text>
              Analiz/Performans Çerezleri: Bu çerezler, Web Sitesi'nin
              işleyişinizi analiz edip anlamımızı sağlayan ve sizinle etkileşime
              geçerek Web Sitesi'ni geliştirebilmemizi sağlamaktadır. Aşağıda
              detaylı olarak açıklanan şekilde bu çerezlerin kullanımını
              engelleyebilirsiniz
            </Text>
            <Text>
              Hedefleme/Reklam Çerezleri: Bu çerezler, size, reklam içerikleri
              de dâhil olmak üzere, ilginizi çekebilecek içerikleri saptayarak
              sunmamız için kullanılmaktadır. Aşağıda detaylı olarak açıklanan
              şekilde bu çerezlerin kullanımını engelleyebilirsiniz. Ancak bu
              çerezleri engellemeniz, reklam içeriklerini tamamen engellemeyecek
              sadece sizin ilginizi çekebilecek olan reklamlar yerine genel
              içerikli reklamlar sunulacaktır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              SAKLANDIĞI SÜRE BAKIMINDAN ÇEREZ TÜRLERİ:
            </Text>
            <Text>
              Kalıcı Çerezler (Persistent Cookies): Kişinin bilgisayarında
              belirli bir tarihe veya kullanıcı tarafından silinene kadar
              varlığını sürdüren çerezlerdir. Bu çerezler, çoğunlukla
              kullanıcıların site hareketlerini ve tercihlerini ölçmek amacıyla
              kullanılır.
            </Text>
            <Text>
              Oturum Çerezleri (Session Cookies): Bu çerezler kullanıcının
              ziyaretini oturumlara ayırmak için kullanılır ve kullanıcıdan veri
              toplamaz. Çerez, kullanıcı ziyaret ettiği web sayfasını
              kapattığında veya belli bir süre pasif kaldığında silinir. Web
              Sitesi'nde üçüncü kişilerin başta reklam hizmetleri olmak üzere
              hizmet sağlamasına yardımcı olmak ve bu hizmetlerin etkinliğini
              artırmak için hedef ve izleme çerezleri kullanılır. Bu çerezler,
              ziyaret ettiğiniz web sayfalarını ve siteleri hatırlayabilir ve
              başta kullanıcı cihazının IP adresi olmak üzere kişisel verileri
              toplayabilir. Web Sitesi, bilgi toplamak, ilgi alanlarınızı ve
              demografik verileri hatırlamak ve size hedeflenmiş reklamları
              sunmak, reklamları iyileştirmek ziyaret edilme ve reklam
              gösterimleri sayısını, reklam hizmetlerinin diğer kullanımlarını
              ve bu reklam gösterimleri ve reklam hizmetleriyle ilgili
              etkileşimler arasındaki oranı belirlemek için hem birinci taraf
              hem de üçüncü taraf çerezlerini kullanmaktadır. Web Sitesi;
              Facebook ve LinkedIn gibi sosyal ağlara bağlantı sağlayan sosyal
              eklentilerden faydalanmaktadır. Web Sitesi'ni ziyaret ettiğinizde
              ve bu eklentileri kullandığınızda, Web Sitesi doğrudan seçilen
              sosyal ağın sunucusuna bağlanır. Ardından, eklentinin sunduğu
              içerik doğrudan sosyal ağlardan web tarayıcınıza iletilir ve
              ziyaret etmekte olduğunuz web sitesine eklenir. Böylelikle ilgili
              sosyal ağ size ait verilere ulaşarak işleyebilir ve ilgili sosyal
              ağdaki hesabınıza ait verilerle birleştirebilir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
            </Text>
            <Text>
              Devletpiyangosu.com, kullanıcıların kendilerine ait kişisel
              veriler üzerindeki tercihlerini kullanabilmelerini son derece
              önemsemektedir. Bununla birlikte, Site’nin çalışması için zorunlu
              olan bazı Çerezler konusunda tercih yönetimi mümkün olmamaktadır.
              Ayrıca bazı Çerezlerin kapatılması halinde Site’nin çeşitli
              fonksiyonlarının çalışmayabileceğini hatırlatmak isteriz.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Site’de kullanılan Çerezlere dair tercihlerin ne şekilde
              yönetebileceğine yönelik bilgiler aşağıdaki gibidir:
            </Text>
            {/* {UlLiList({ list: cookieChoiceList })} */}
            <View style={[styles.cookieUlMain]}>
              <View style={[styles.cookieUlLiMain]}>
                <SvgXml
                  width={5}
                  height={5}
                  xml={DotIcon}
                  fill="#000"
                  style={[styles.cookieUlLiDotIcon]}
                />
                <Text>
                  Kullanıcılar, kullanmakta oldukları tarayıcı ayarlarını
                  değiştirerek çerezlere ilişkin tercihlerini
                  kişiselleştirebilirler. Böylelikle, tarayıcının sunmuş olduğu
                  imkanlara göre farklılık gösterebilmekle birlikte, veri
                  sahiplerinin çerezlerin kullanılmasını engelleme, çerez
                  kullanılmadan önce uyarı almayı tercih etme veya sadece bazı
                  Çerezleri devre dışı bırakma ya da silme imkanları
                  bulunmaktadır. Bu konudaki tercihler, kullanılan tarayıcıya
                  göre değişiklik göstermekle birlikte genel açıklamaya
                  <Text
                    style={{ color: 'blue' }}
                    onPress={async () =>
                      await Linking.openURL('https://www.aboutcookies.org/')
                    }
                  >
                    www.aboutcookies.org{' '}
                  </Text>
                  adresinden ulaşmak mümkündür.
                </Text>
              </View>
              <View style={[styles.cookieUlLiMain]}>
                <SvgXml
                  width={5}
                  height={5}
                  xml={DotIcon}
                  fill="#000"
                  style={[styles.cookieUlLiDotIcon]}
                />
                <Text>
                  Mobil cihazlar üzerinden Çerezleri yönetmek için mobil cihaza
                  ait ayarlar menüsü kullanılabilir
                </Text>
              </View>
            </View>
            <Text style={[styles.staticPageSubTitle]}>
              Hangi Haklara Sahipsiniz?
            </Text>
            <Text>
              Kişisel Verilerin Korunması Yasası’nın 11. maddesi uyarınca
              ziyaretçiler, devletpiyangosu.com’a başvurarak, kendileriyle
              ilgili,
            </Text>
            {UlLiList({ list: whatRightsList })}
            <Text>
              Söz konusu haklar, kişisel veri sahipleri tarafından
              devletpiyangosu.com adresinde yer alan devletpiyangosu.com
              tarafından KVKY kapsamında belirtilen yöntemlerle iletilmesi
              halinde 30 (otuz) gün içerisinde değerlendirilerek
              sonuçlandırılacaktır. Taleplere ilişkin olarak herhangi bir ücret
              talep edilmemesi esas olmakla birlikte, KKTC Piyangolar Birimi’nin
              Kişisel Verileri Koruma Kurulu tarafından belirlenen ücret
              tarifesi üzerinden ücret talep etme hakkı saklıdır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Rıza ve Politika’daki Değişiklikler:
            </Text>
            <Text>
              devletpiyangosu.com, Politika ile kullanıcılarına Çerez
              kullanımının kapsamı ve amaçları hakkında detaylı açıklama sunmayı
              ve Çerez tercihleri konusunda kullanıcılarını bilgilendirmeyi
              hedeflemiştir. Bu bakımdan, Site’de yer alan Çerez bilgilendirme
              uyarısının kapatılması ve Site’nin kullanılmaya devam edilmesi
              halinde Çerez kullanımına rıza verildiği kabul edilmektedir.
              Kullanıcıların Çerez tercihlerini değiştirme imkânı her zaman
              saklıdır.
            </Text>
            <Text>
              devletpiyangosu.com, Politika hükümlerini dilediği zaman
              değiştirebilir. Güncel Politika Site’de yayınlandığı tarihte
              yürürlük kazanır.
            </Text>
            <Text>Veri Sorumlusu:</Text>
            <Text>KKTC Piyangolar Birimi</Text>
            <Text>
              Adres: Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa.
            </Text>
            <Text>Destek Hattı: ... Faks: ...</Text>
          </>
        ) : (
          <>
            <Text>
              106 Dijital İnteraktif Hizmetler ve Şans Oyunları A.Ş. (106
              Dijital) olarak işleticisi olduğumuz ("piyangosepeti.com.tr") web
              sitemizin ("Web Sitesi") ziyaretçilerinin gizlilik ve kişisel
              verilerinin korunması haklarını gözeterek ziyaretçilerimize daha
              iyi bir kullanım deneyimi sağlayabilmek için kişisel verilerini
              işlemekte ve internet çerezleri kullanmaktayız
            </Text>
            <Text>
              Bu Çerez Kullanımı Politikası ("Politika"), tüm Web Sitesi
              ziyaretçilerimize ve kullanıcılarımıza hangi tür çerezlerin hangi
              koşullarda kullanıldığını açıklamaktadır. Bu Politika, Web
              Sitesi'ne hangi teknolojilerle, hangi yöntemlerle ve ne şekilde
              bağlandığınıza bağlı olmaksızın uygulanmaktadır.
            </Text>
            <Text>
              Çoğu web sitesinde olduğu gibi, piyangosepeti.com.tr’de ("Site")
              ziyaretçilere kişisel içerik ve reklamlar göstermek, site içinde
              analitik faaliyetler gerçekleştirmek ve ziyaretçi kullanım
              alışkanlıklarını takip etmek amacıyla Çerezler kullanılmaktadır.
            </Text>
            <Text>
              Piyangosepeti.com.tr, bu Çerez Politikası’nı ("Politika") Site’de
              hangi Çerezlerin kullanıldığını ve kullanıcıların bu konudaki
              tercihlerini nasıl yönetebileceğini açıklamak amacıyla
              hazırlamıştır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Çerez (“Cookie”) Nedir ve Niçin Kullanılmaktadır?
            </Text>
            <Text>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından
              tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan
              küçük metin dosyalarıdır. Çerezler, ziyaretçilere ilişkin isim,
              cinsiyet veya adres gibi kişisel verileri içermezler. Çerezler
              konusundan daha detaylı bilgi için{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.aboutcookies.org/')
                }
              >
                www.aboutcookies.org{' '}
              </Text>{' '}
              ve{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.allaboutcookies.org/')
                }
              >
                www.allaboutcookies.org{' '}
              </Text>
              adreslerini ziyaret edebilirisiniz.
            </Text>
            <Text>
              Piyangosepeti.com.tr, çerezler sayesinde hizmet alımınızı
              kolaylaştırarak almış olduğunuz hizmet kalitesini artırmayı
              amaçlamaktadır. Geçerlilik sürelerine göre Kalıcı ve Geçici iki
              tip çerez kullanmaktayız. Kalıcı Çerezler, bilgisayarınızda veya
              mobil cihazınızda en fazla 12 ay süreyle bir dosya olarak
              saklanır. Geçici Çerezler tarayıcı oturumunuzu kapattığınızda
              silinir. Site’de, Çerezler aşağıdaki amaçlar kapsamında
              kullanılmaktadır:
            </Text>
            {UlLiList({ list: whatIsCookieList })}
            <Text style={[styles.staticPageSubTitle]}>
              Çerezlerle Hangi Tür Verilerinizi İşliyoruz?
            </Text>
            <Text>
              Çerezler, türlerine bağlı olmak üzere, genel olarak, Web Sitesi'ne
              eriştiğiniz cihazda tarama ve kullanım tercihlerinize ilişkin
              verileri toplamaktadır. Bu veriler, eriştiğiniz sayfaları,
              incelediğiniz hizmet ve ürünlerimizi, Web Sitesi'nde yaptığınız
              gezintiye ilişkin tüm bilgileri kapsamaktadır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Hangi Tür Çerezleri Hangi Şekillerde Kullanıyoruz?
            </Text>
            <Text>
              Web Sitesi'nde farklı türlerde çerezler kullanmaktayız. Bunlar Web
              Sitesi'nin çalışmasını sağlamak için kullanılması zorunlu olan
              çerezler, işlev çerezleri, analiz/performans çerezleri ve
              hedefleme/reklam çerezleridir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              KULLANIM BAKIMINDAN ÇEREZ TÜRLERİ:
            </Text>
            <Text>
              Kullanılması Zorunlu Olan Çerezler: Bu çerezler, Web Sitesi'nin
              düzgün şekilde çalışması için mutlaka gerekli olan çerezlerdir. Bu
              çerezlere, sistemin yönetilebilmesi, sahte işlemlerin önlenmesi
              için ihtiyaç vardır ve engellenmesi halinde Web Sitesi
              çalışamayacaktır.
            </Text>
            <Text>
              İşlev Çerezleri: Bu çerezler size daha gelişmiş ve kolay bir
              kullanım deneyimi yaşatmak için kullanılan çerezlerdir. Örneğin
              önceki tercihlerinizi hatırlamak, Web Sitesi üzerinde yer alan
              bazı içeriklere rahatça erişmenizi sağlamak işlevlerini yerine
              getirmektedir. Aşağıda detaylı olarak açıklanan şekilde bu
              çerezlerin kullanımını engelleyebilirsiniz.
            </Text>
            <Text>
              Analiz/Performans Çerezleri: Bu çerezler, Web Sitesi'nin
              işleyişinizi analiz edip anlamımızı sağlayan ve sizinle etkileşime
              geçerek Web Sitesi'ni geliştirebilmemizi sağlamaktadır. Aşağıda
              detaylı olarak açıklanan şekilde bu çerezlerin kullanımını
              engelleyebilirsiniz
            </Text>
            <Text>
              Hedefleme/Reklam Çerezleri: Bu çerezler, size, reklam içerikleri
              de dâhil olmak üzere, ilginizi çekebilecek içerikleri saptayarak
              sunmamız için kullanılmaktadır. Aşağıda detaylı olarak açıklanan
              şekilde bu çerezlerin kullanımını engelleyebilirsiniz. Ancak bu
              çerezleri engellemeniz, reklam içeriklerini tamamen engellemeyecek
              sadece sizin ilginizi çekebilecek olan reklamlar yerine genel
              içerikli reklamlar sunulacaktır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              SAKLANDIĞI SÜRE BAKIMINDAN ÇEREZ TÜRLERİ:
            </Text>
            <Text>
              Kalıcı Çerezler (Persistent Cookies): Kişinin bilgisayarında
              belirli bir tarihe veya kullanıcı tarafından silinene kadar
              varlığını sürdüren çerezlerdir. Bu çerezler, çoğunlukla
              kullanıcıların site hareketlerini ve tercihlerini ölçmek amacıyla
              kullanılır.
            </Text>
            <Text>
              Oturum Çerezleri (Session Cookies): Bu çerezler kullanıcının
              ziyaretini oturumlara ayırmak için kullanılır ve kullanıcıdan veri
              toplamaz. Çerez, kullanıcı ziyaret ettiği web sayfasını
              kapattığında veya belli bir süre pasif kaldığında silinir. Web
              Sitesi'nde üçüncü kişilerin başta reklam hizmetleri olmak üzere
              hizmet sağlamasına yardımcı olmak ve bu hizmetlerin etkinliğini
              artırmak için hedef ve izleme çerezleri kullanılır. Bu çerezler,
              ziyaret ettiğiniz web sayfalarını ve siteleri hatırlayabilir ve
              başta kullanıcı cihazının IP adresi olmak üzere kişisel verileri
              toplayabilir. Web Sitesi, bilgi toplamak, ilgi alanlarınızı ve
              demografik verileri hatırlamak ve size hedeflenmiş reklamları
              sunmak, reklamları iyileştirmek ziyaret edilme ve reklam
              gösterimleri sayısını, reklam hizmetlerinin diğer kullanımlarını
              ve bu reklam gösterimleri ve reklam hizmetleriyle ilgili
              etkileşimler arasındaki oranı belirlemek için hem birinci taraf
              hem de üçüncü taraf çerezlerini kullanmaktadır. Web Sitesi;
              Facebook ve LinkedIn gibi sosyal ağlara bağlantı sağlayan sosyal
              eklentilerden faydalanmaktadır. Web Sitesi'ni ziyaret ettiğinizde
              ve bu eklentileri kullandığınızda, Web Sitesi doğrudan seçilen
              sosyal ağın sunucusuna bağlanır. Ardından, eklentinin sunduğu
              içerik doğrudan sosyal ağlardan web tarayıcınıza iletilir ve
              ziyaret etmekte olduğunuz web sitesine eklenir. Böylelikle ilgili
              sosyal ağ size ait verilere ulaşarak işleyebilir ve ilgili sosyal
              ağdaki hesabınıza ait verilerle birleştirebilir.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?
            </Text>
            <Text>
              Piyangosepeti.com.tr, kullanıcıların kendilerine ait kişisel
              veriler üzerindeki tercihlerini kullanabilmelerini son derece
              önemsemektedir. Bununla birlikte, Site’nin çalışması için zorunlu
              olan bazı Çerezler konusunda tercih yönetimi mümkün olmamaktadır.
              Ayrıca bazı Çerezlerin kapatılması halinde Site’nin çeşitli
              fonksiyonlarının çalışmayabileceğini hatırlatmak isteriz.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Site’de kullanılan Çerezlere dair tercihlerin ne şekilde
              yönetebileceğine yönelik bilgiler aşağıdaki gibidir:
            </Text>
            {/* {UlLiList({ list: cookieChoiceList })} */}
            <View style={[styles.cookieUlMain]}>
              <View style={[styles.cookieUlLiMain]}>
                <SvgXml
                  width={5}
                  height={5}
                  xml={DotIcon}
                  fill="#000"
                  style={[styles.cookieUlLiDotIcon]}
                />
                <Text>
                  Kullanıcılar, kullanmakta oldukları tarayıcı ayarlarını
                  değiştirerek çerezlere ilişkin tercihlerini
                  kişiselleştirebilirler. Böylelikle, tarayıcının sunmuş olduğu
                  imkanlara göre farklılık gösterebilmekle birlikte, veri
                  sahiplerinin çerezlerin kullanılmasını engelleme, çerez
                  kullanılmadan önce uyarı almayı tercih etme veya sadece bazı
                  Çerezleri devre dışı bırakma ya da silme imkanları
                  bulunmaktadır. Bu konudaki tercihler, kullanılan tarayıcıya
                  göre değişiklik göstermekle birlikte genel açıklamaya{' '}
                  <Text
                    style={{ color: 'blue' }}
                    onPress={async () =>
                      await Linking.openURL('https://www.aboutcookies.org/')
                    }
                  >
                    www.aboutcookies.org{' '}
                  </Text>
                  adresinden ulaşmak mümkündür.
                </Text>
              </View>
              <View style={[styles.cookieUlLiMain]}>
                <SvgXml
                  width={5}
                  height={5}
                  xml={DotIcon}
                  fill="#000"
                  style={[styles.cookieUlLiDotIcon]}
                />
                <Text>
                  Mobil cihazlar üzerinden Çerezleri yönetmek için mobil cihaza
                  ait ayarlar menüsü kullanılabilir
                </Text>
              </View>
            </View>
            <Text style={[styles.staticPageSubTitle]}>
              Hangi Haklara Sahipsiniz?
            </Text>
            <Text>
              6698 Sayılı Kişisel Verilerin Korunması Kanunu’nun 11. maddesi
              uyarınca ziyaretçiler, piyangosepeti.com.tr’ye başvurarak,
              kendileriyle ilgili,
            </Text>
            {UlLiList({ list: whatRightsList })}
            <Text>
              Söz konusu haklar, kişisel veri sahipleri tarafından
              piyangosepeti.com.tr adresinde yer alan piyangosepeti.com.tr
              tarafından 6698 sayılı Kanun Kapsamında Kişisel Verilerin
              İşlenmesi ve Korunmasına ilişkin Politika'da belirtilen
              yöntemlerle iletilmesi halinde 30 (otuz) gün içerisinde
              değerlendirilerek sonuçlandırılacaktır. Taleplere ilişkin olarak
              herhangi bir ücret talep edilmemesi esas olmakla birlikte, 106
              Dijital’in Kişisel Verileri Koruma Kurulu tarafından belirlenen
              ücret tarifesi üzerinden ücret talep etme hakkı saklıdır.
            </Text>
            <Text style={[styles.staticPageSubTitle]}>
              Rıza ve Politika’daki Değişiklikler:
            </Text>
            <Text>
              piyangosepeti.com.tr, Politika ile kullanıcılarına Çerez
              kullanımının kapsamı ve amaçları hakkında detaylı açıklama sunmayı
              ve Çerez tercihleri konusunda kullanıcılarını bilgilendirmeyi
              hedeflemiştir. Bu bakımdan, Site’de yer alan Çerez bilgilendirme
              uyarısının kapatılması ve Site’nin kullanılmaya devam edilmesi
              halinde Çerez kullanımına rıza verildiği kabul edilmektedir.
              Kullanıcıların Çerez tercihlerini değiştirme imkânı her zaman
              saklıdır.
            </Text>
            <Text>
              Piyangosepeti.com.tr, Politika hükümlerini dilediği zaman
              değiştirebilir. Güncel Politika Site’de yayınlandığı tarihte
              yürürlük kazanır.
            </Text>
            <Text>Veri Sorumlusu:</Text>
            <Text>106 Dijital İnteraktif Hizmetler ve Şans Oyunları A.Ş</Text>
            <Text>
              Adres: İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
            </Text>
            <Text>Destek Hattı: 0 850 260 11 60 Faks: 0 212 247 03 75</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default CookiePolicyScreen;
