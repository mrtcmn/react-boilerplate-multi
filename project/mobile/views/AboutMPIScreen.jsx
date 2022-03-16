import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';

const AboutMPIScreen = () => {
  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        <Text
          style={[
            styles.staticPageSubTitle,
            { fontStyle: 'italic', textAlign: 'center', marginBottom: 40 },
          ]}
        >
          82 yıllık Milli Piyango tecrübesi ve garantisi ile.
        </Text>
        <Text style={[styles.staticPageMainTitle, { marginBottom: 20 }]}>
          MİLLİ PİYANGO İDARESİ GENEL MÜDÜRLÜĞÜ
        </Text>
        <Text>
          <Text style={[styles.staticPageSubTitle]}>GÖREVLERİMİZ</Text>
        </Text>
        <View>
          <View>
            <Text>
              Milli Piyango İdaresi; 05.07.1939 tarihli ve 3670 sayılı “Milli
              Piyango Teşkiline Dair Kanun”la kurulmuş olup, 04/04/1988 tarihli
              ve 320 sayılı Milli Piyango İdaresi Genel Müdürlüğü Kuruluş ve
              Görevleri Hakkında Kanun Hükmünde Kararname ile ilave görev ve
              sorumluluklar verilmek suretiyle Genel Müdürlük olarak
              teşkilatlandırılmıştır.
            </Text>
            <Text>
              15.07.2018 tarihli Resmî Gazetede yayımlanan Bakanlıklara Bağlı,
              İlgili, İlişkili Kurum ve Kuruluşlar ile Diğer Kurum ve
              Kuruluşların Teşkilatı Hakkında 4 sayılı Cumhurbaşkanlığı
              Kararnamesiyle (Madde:283 ila 314); mevcut görevleri korunmak
              suretiyle Milli Piyango İdaresi Genel Müdürlüğünün teşkilat yapısı
              yeniden düzenlenmiştir.
            </Text>
          </View>
          {/* <View>
            82 yıllık Milli Piyango tecrübesi ve garantisi ile.
          </View> */}
        </View>

        <Text>
          Öte yandan, TVF tarafından, Ağustos/2020 ayı başından itibaren
          Yüklenici Firma aracılığıyla lisans kapsamındaki şans oyunlarının
          düzenlenmesine başlanıldığından. İdaremizce Temmuz/2020 ayı sonu
          itibariyle karşılığı nakit olan tüm şans oyunlarının düzenlenmesine
          son verilmiş olup, İdare devir işlemlerini müteakip lisans konusu
          faaliyetlerin ilgili mevzuat hükümlerine uygun olarak yürütülmesini
          izlemek ve denetleme görevini ifa etmeye başlamıştır.
        </Text>
        <Text>
          Buna karşılık, kamusal kaynakların yerinde ve verimli kullanılması,
          kamuya vergi ve pay olarak kaynak aktarılması, talihlilere ikramiye
          olarak verilecek mal ve hizmetlerin temin edilmesi ve İllegal
          mecralarda yürütülen faaliyetlere imkân verilmemesi gibi amaçlarla 4
          sayılı Cumhurbaşkanlığı Kararnamesinin 285 inci, 288 inci, 295 inci ve
          796 ncı maddelerine dayanılarak İdaremizce hazırlanan “KARŞILIĞI NAKİT
          OLMAYAN PİYANGO VE ÇEKİLİŞLERİN DÜZENLENMESİNE DAİR USUL VE ESASLAR”
          Sayıştay Başkanlığından alınan görüş doğrultusunda 16.08.2020
          tarihinde İdareye ait “www.mpi.gov.tr” alan adlı internet sitemizde
          ilan edilmiştir.
        </Text>
        <Text>
          Mevcut duruma göre, Karşılığı Nakit Olmayan oyunlar için Başbayilik ve
          Elektronik Ortam Bayiliği verilerek, anılan Usul ve Esaslar
          doğrultusunda fiziki ve elektronik ortamda da KNOP oynatılması ve
          sosyal medya dahil tüm dijital mecralarda halen izinsiz olarak
          uygulanan bu tür faaliyetlerin denetlenebilir hale getirilmesi
          amaçlanmaktadır. KNO’larda dağıtılacak ikramiyeler cinsi ve nev’i
          itibariyle; her türlü taşıt aracı, gayrimenkul, elektronik cihaz,
          tatil, seyahat, bilet, her türlü yiyecek, içecek, mal ve hizmet
          alımında kullanılabilecek bonus, chip para, sanal para, para puan ile
          altın gibi kıymetli madenler vb. mal ve hizmetlerden oluşacaktır.
        </Text>
        <Text style={[styles.staticPageSubTitle]}>İDARİ YAPI</Text>
        <Text>
          Milli Piyango İdaresi Genel Müdürlüğü; Türkiye Cumhuriyeti
          Cumhurbaşkanlığı Makamı’nın 4 sayılı Kararnamesi ile görev, yetki ve
          sorumlulukları belirlenmiş olarak, Hazine ve Maliye Bakanlığı’na bağlı
          teşkilat yapısı ile mevcudiyetini 1939 yılından bu yana sürdürmekte
          olup, İdarenin Merkez Teşkilatı ana hizmet, danışma ve denetim
          birimlerinden, Taşra Teşkilatı ise 16 ilde 18 şubeden oluşmaktadır.
        </Text>
        <Text>
          İdarenin karar organı Yönetim Kurulu olup, Yönetim Kurulu Başkanı
          Genel Müdürdür.
        </Text>
        <Text style={[styles.staticPageSubTitle]}>
          ŞEFFAFLIK VE HESAP VEREBİLİRLİK
        </Text>
        <Text>
          Milli Piyango İdaresi, şans oyunlarını çağdaş, katılımcı, şeffaf ve
          hesap verebilir olmayı esas alan, etkili ve verimli bir yönetim
          anlayışı içerisinde; “Sorumlu Oyun Anlayışı” ve “Kurumsal Sosyal
          Sorumluluk” ilkeleri çerçevesinde düzenlemekte olup, 15/07/2018
          tarihli RG’de yayımlanan 4 numaralı Cumhurbaşkanlığı Kararnamesiyle
          düzenlenen ve saklı tutulan hükümler dışında özel hukuk hükümlerine
          tabi ve her türlü tasarrufa ehil, tüzel kişiliği haiz, 5018 sayılı
          Kamu Mali Yönetimi ve Kontrol Kanununa tabi olmayan, TBMM KİT
          Komisyonu ve Sayıştay’ın denetimine tabi bir kamu kuruluşu olarak
          faaliyetlerine devam etmektedir.
        </Text>
        <Text style={[styles.staticPageSubTitle]}>KATKILARIMIZ</Text>
        <Text>
          Milli Piyango İdaresince 1939 yılından günümüze kadar talihlilere
          ikramiye, hazineye vergi ve kamu payı, savunma sanayine, Çocuk
          Hizmetleri Genel Müdürlüğüne, Türkiye’nin Tanıtımına, Olimpiyat
          Oyunlarına ve Kredi ve Yurtlar Genel Müdürlüğüne katkı ve kaynak
          sağlanmaktadır.
        </Text>
        <Text>
          Bu bağlamda, İdaremizce 2003 – 2020 yılları arasındaki dönemde
          talihlilere toplam 4.338.309,083 Türk Lirası tutarında ikramiye
          dağıtılmıştır.
        </Text>
        <Text style={[styles.staticPageSubTitle]}>ULUSLARARASI İLİŞKİLER</Text>
        <Text>
          Milli Piyango İdaresi, Dünya Piyangolar Birliği (WLA) ile Avrupa
          Devlet Piyangoları ve Toto Birliği’nin (EL) üyesidir. İdare, 1984’te
          Dünya Piyangolar Birliği (AILE) Genel Başkanlığına seçilmiş ve bu
          görevini Eylül 1986 yılında İstanbul’da yapılan 16 ncı AILE Genel
          Kurulu Kongresine kadar sürdürmüş, 1990 yılına kadar da ilgili
          teşkilatın başkan yardımcılığı görevini yapmıştır. İdaremiz, 2009
          yılında gerçekleştirilmiş olan Avrupa Devlet Piyangoları ve Toto
          Birliği 5. Kongresine ev sahipliği yapmaya aday olmuş, İtalya'nın
          başkenti Roma'da yapılan genel kurulda diğer aday ülkeler arasından
          seçilerek Kongrenin Türkiye’de yapılması kararlaştırılmıştır. Ana
          teması “Piyangolar ve Toplum” olan Avrupa Devlet Piyangoları ve Toto
          Birliğinin (EL) 5. Kongresi İdaremizin ev sahipliğinde 8-11 Haziran
          2009 tarihleri arasında İstanbul’da gerçekleştirilmiştir.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutMPIScreen;
