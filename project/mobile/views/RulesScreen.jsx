import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '@mobile/src/styles/common';

const GetEnv = require('@envFile');

const RulesScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              KARŞILIĞI NAKİT OLMAYAN OYUNLARININ OYNATILMASINA İLİŞKİN KURALLAR
            </Text>
            <Text>
              (1) KNO’lara İdarece belirlenen usul ve esaslar dâhilinde;
            </Text>
            <Text>
              &nbsp;&nbsp;a) İdarenin fiziki ve/veya elektronik ortam üzerinden
              doğrudan veya üçüncü kişilere ait bir mal veya hizmetin satışına
              aracılık edilmesi hizmeti karşılığında satışa sunduğu numaralı
              biletlerin satın alınması,
            </Text>
            <Text>
              &nbsp;&nbsp;b) KKTC Piyangolar Birimince doğrudan veya kendilerine
              ya da üçüncü kişilere ait bir mal veya hizmetin satışına aracılık
              edilmesi hizmeti karşılığında satışa sunulan bilet, kupon, iştirak
              numarası ve benzerlerinin satın alınması,
            </Text>
            <Text>
              &nbsp;&nbsp;c) Kamu kurum ve kuruluşları ile özel sektör
              kuruluşları tarafından doğrudan veya bir mal veya hizmetin satışı
              kapsamında piyasaya sürülen, satılan veya düzenlenen banknot,
              menkul kıymet, resmi veya özel evrakın ya da ürünün belirleyici
              nitelikteki seri ve/veya sıra numaralarının KKTC Piyangolar
              Birimi’ne elektronik haberleşme araçları ile bildirilmesi,
            </Text>
            <Text>
              &nbsp;&nbsp;ç) KKTC Piyangolar Birimi veya diğer üçüncü kişiler
              tarafından, bir mal veya hizmetin satışı kapsamında KKTC
              Piyangolar Birimi ile ticari işbirliği kapsamında ilave bir bedel
              ödenmek suretiyle edinilen bilet, kupon, iştirak numarası ve
              benzerlerinin KKTC Piyangolar Birimi’ne elektronik haberleşme
              araçları ile bildirilmesi, suretiyle iştirak edilebilir.
            </Text>
            <Text>
              (2) İdare günün koşullarına göre, birinci fıkrada sayılanların
              dışında, KNO’lara alternatif katılım şekilleri belirleyebilir.
            </Text>
            <Text>
              (3) KKTC Piyangolar Birimi ile bunların her kademedeki yönetici ve
              çalışanları, yüzde on veya daha fazla hisseye sahip ortakları,
              bunların eş ve çocukları ile on sekiz yaşından küçükler KNO’lara
              iştirak edemezler, iştirak etmiş olsalar dahi kazandıkları
              ikramiyeleri verilmez ve bedeli İdareye gelir kaydedilir.
            </Text>
            <Text>
              (4) KNO’lara ait oyun planları ile dağıtılması taahhüt edilen
              ikramiyeleri kazanacak talihlilerin tespitine yönelik iş ve
              işlemler KKTC Piyangolar Birimi tarafından gerçekleştirilir.
            </Text>
            <Text>
              (5) KNO’larda kazanılan ikramiyeler talihlilerine; KKTC Piyangolar
              Birimi veya ikramiyeye konu taşınır ve taşınmaz mallar ile hizmet
              ve hakların sahibi ya da satıcısı tarafından veyahut İdarenin bu
              konuda yetkilendirdiği üçüncü kişiler tarafından teslim edilir.
              Üçüncü kişilerin ikramiye tesliminde uyacakları usul ve esaslar
              KKTC Piyangolar Birimi tarafından belirlenir. Ancak, KKTC
              Piyangolar Birimi’nin KNO düzenlenmesine yönelik iş ve işlemlere
              aracılık etme yetkisi verdiği KKTC Piyangolar Birimi’nin taahhüt
              ettikleri ikramiyelerin talihlilerine teslimi ilgili bayiler
              tarafından gerçekleştirilir.
            </Text>
            <Text>
              (6) İkramiye teslimiyle yetkili veya sorumlu olanlar ikramiye
              teslimlerini zamanında, eksiksiz ve doğru olarak gerçekleştirmekle
              yükümlüdürler.
            </Text>
            <Text>
              (7) İkramiyeler, oyun planlarında taahhüt edildiği şekilde
              talihlilere teslim edilir. Mücbir sebep hali veya KKTC Piyangolar
              Birimi kabul edilebilir haklı sebepler hariç olmak üzere farklı
              tür, cins, marka, model ve nitelikte ikramiye verilemez,
              ikramiyelerin karşılığı paraya tahvil edilemez, bedeli talihlilere
              nakden veya hesaben ödenemez.
            </Text>
            <Text>
              (8) KNO’larda dağıtılması taahhüt edilen ikramiyelerden, mevzuat
              hükümleri uyarınca tescile tabi olanların talihli adına tescili
              zorunludur.
            </Text>
            <Text>
              (9) KNO’larda fiziki olarak bastırılan biletler hamiline ait olup,
              isabet eden ikramiyeler bileti ibraz eden kişiye teslim edilir.
              Elektronik ortam üzerinden oynanan KNO’lara isabet eden
              ikramiyeler ise, yalnızca talihlinin kendisine veya tasdik memuru
              aracılığıyla vekil tayin ettiği kişilere teslim edilir.
            </Text>
            <Text>
              (10) Talihli kazandığı ikramiyeyi teslim almadan üçüncü kişilere
              devir ve temlik edemez.
            </Text>
            <Text>
              (11) Usulsüz veya hatalı olarak yapılan ikramiye teslimlerinden
              teslimi yapanlar, haksız teslim yapılanlar ile birlikte müştereken
              ve müteselsilen sorumludur.
            </Text>
            <Text>
              (12) KKTC Piyangolar Birimi tarafından tertiplenen KNO’lar için
              taahhüt edilen ikramiyeler Devlet garantisi altındadır.
            </Text>
            <Text>
              (13) Kargo ile ödül teslimatı yapılan durumlarda, talihlinin
              kendisine kimlik ibrazı ile veya kargo firmasının teslimat kodunu
              ibraz eden 3. Kişilere teslimat yapılabilir.
            </Text>
            <Text>
              (14) Kargoyla teslim edilecek ikramiyeler için, herhangi bir
              nedenle teslimatın yapılamaması durumunda, ürünün KKTC Piyangolar
              Birimi iadesini müteakip yeniden kargo gönderimi yapılır. Toplamda
              en çok 3 (üç) kez gönderim sağlanır.
            </Text>
            <Text>
              (15) KKTC Piyangolar Birimi tarafından, kargo takip bilgisi
              talihliye iletilecektir.
            </Text>
            <Text>
              (16) Kargoyla yapılan ürün teslimatlarında, ürün ambalajının
              kontrol edilmesi sorumluluğu talihliye aittir. Ürün ambalajının
              yırtılmış veya zarar görmüş olması durumunda ürün teslim
              alınmamalıdır. Ürün tesliminden sonra oluşacak her türlü işlem
              talebi için tedarikçi firma ile iletişime geçilmelidir.
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.staticPageMainTitle]}>
              KARŞILIĞI NAKİT OLMAYAN OYUNLARININ OYNATILMASINA İLİŞKİN KURALLAR
            </Text>
            <Text>
              (1) KNO’lara İdarece belirlenen usul ve esaslar dâhilinde;
            </Text>
            <Text>
              &nbsp;&nbsp;a) İdarenin fiziki ve/veya elektronik ortam üzerinden
              doğrudan veya üçüncü kişilere ait bir mal veya hizmetin satışına
              aracılık edilmesi hizmeti karşılığında satışa sunduğu numaralı
              biletlerin satın alınması,
            </Text>
            <Text>
              &nbsp;&nbsp;b) Başbayi, bayi veya elektronik ortam bayilerince
              doğrudan veya kendilerine ya da üçüncü kişilere ait bir mal veya
              hizmetin satışına aracılık edilmesi hizmeti karşılığında satışa
              sunulan bilet, kupon, iştirak numarası ve benzerlerinin satın
              alınması,
            </Text>
            <Text>
              &nbsp;&nbsp;c) Kamu kurum ve kuruluşları ile özel sektör
              kuruluşları tarafından doğrudan veya bir mal veya hizmetin satışı
              kapsamında piyasaya sürülen, satılan veya düzenlenen banknot,
              menkul kıymet, resmi veya özel evrakın ya da ürünün belirleyici
              nitelikteki seri ve/veya sıra numaralarının İdare, başbayi, bayi
              veya elektronik ortam bayisine elektronik haberleşme araçları ile
              bildirilmesi,
            </Text>
            <Text>
              &nbsp;&nbsp;ç) Başbayi, bayi, elektronik ortam bayileri veya diğer
              üçüncü kişiler tarafından, bir mal veya hizmetin satışı kapsamında
              İdare ile ticari işbirliği kapsamında ilave bir bedel ödenmek
              suretiyle edinilen bilet, kupon, iştirak numarası ve benzerlerinin
              İdare, başbayi, bayi veya elektronik ortam bayisine elektronik
              haberleşme araçları ile bildirilmesi,
            </Text>
            <Text>suretiyle iştirak edilebilir.</Text>
            <Text>
              (2) İdare günün koşullarına göre, birinci fıkrada sayılanların
              dışında, KNO’lara alternatif katılım şekilleri belirleyebilir.
            </Text>
            <Text>
              (3) İdare, başbayi, bayi ve elektronik ortam bayileri ile bunların
              her kademedeki yönetici ve çalışanları, yüzde on veya daha fazla
              hisseye sahip ortakları, bunların eş ve çocukları ile on sekiz
              yaşından küçükler KNO’lara iştirak edemezler, iştirak etmiş
              olsalar dahi kazandıkları ikramiyeleri verilmez ve bedeli İdareye
              gelir kaydedilir.
            </Text>
            <Text>
              (4) KNO’lara ait oyun planları ile dağıtılması taahhüt edilen
              ikramiyeleri kazanacak talihlilerin tespitine yönelik iş ve
              işlemler Milli Piyango İdaresi Genel Müdürlüğü/İkramiye Kontrol ve
              Çekilişler Dairesi Başkanlığı tarafından gerçekleştirilir.
            </Text>
            <Text>
              (5) KNO’larda kazanılan ikramiyeler talihlilerine; İdare veya
              ikramiyeye konu taşınır ve taşınmaz mallar ile hizmet ve hakların
              sahibi ya da satıcısı tarafından veyahut İdarenin bu konuda
              yetkilendirdiği üçüncü kişiler tarafından teslim edilir. Üçüncü
              kişilerin ikramiye tesliminde uyacakları usul ve esaslar İdare
              tarafından belirlenir. Ancak, İdarenin KNO düzenlenmesine yönelik
              iş ve işlemlere aracılık etme yetkisi verdiği başbayi, bayi ve
              elektronik ortam bayilerinin taahhüt ettikleri ikramiyelerin
              talihlilerine teslimi ilgili bayiler tarafından gerçekleştirilir.
            </Text>
            <Text>
              (6) İkramiye teslimiyle yetkili veya sorumlu olanlar ikramiye
              teslimlerini zamanında, eksiksiz ve doğru olarak gerçekleştirmekle
              yükümlüdürler.
            </Text>
            <Text>
              (7) İkramiyeler, oyun planlarında taahhüt edildiği şekilde
              talihlilere teslim edilir. Mücbir sebep hali veya İdarece kabul
              edilebilir haklı sebepler hariç olmak üzere farklı tür, cins,
              marka, model ve nitelikte ikramiye verilemez, ikramiyelerin
              karşılığı paraya tahvil edilemez, bedeli talihlilere nakden veya
              hesaben ödenemez.
            </Text>
            <Text>
              (8) KNO’larda dağıtılması taahhüt edilen ikramiyelerden, mevzuat
              hükümleri uyarınca tescile tabi olanların talihli adına tescili
              zorunludur.
            </Text>
            <Text>
              (9) KNO’larda fiziki olarak bastırılan biletler hamiline ait olup,
              isabet eden ikramiyeler bileti ibraz eden kişiye teslim edilir.
              Elektronik ortam üzerinden oynanan KNO’lara isabet eden
              ikramiyeler ise, yalnızca talihlinin kendisine veya noter
              aracılığıyla vekil tayin ettiği kişilere teslim edilir.
            </Text>
            <Text>
              (10) Talihli kazandığı ikramiyeyi teslim almadan üçüncü kişilere
              devir ve temlik edemez.
            </Text>
            <Text>
              (11) Usulsüz veya hatalı olarak yapılan ikramiye teslimlerinden
              teslimi yapanlar, haksız teslim yapılanlar ile birlikte müştereken
              ve müteselsilen sorumludur.
            </Text>
            <Text>
              (12) 5/7/1939 tarihli ve 3670 sayılı Milli Piyango Teşkiline Dair
              Kanun uyarınca, İdare tarafından tertiplenen KNO’lar için taahhüt
              edilen ikramiyeler Devlet, belediye ve hususi idarelere ait her
              türlü vergi ve resimden muaftır. Bu kapsamda, yurt içi veya yurt
              dışından temin edilerek KNO’larda dağıtılması taahhüt edilen
              ikramiyelerin temin, teslim ve gerekli hallerde tescilinde bu
              madde hükmü uyarınca işlem tesis edilir.
            </Text>
            <Text>
              (13) 320 sayılı Kanun Hükmünde Kararname hükümleri uyarınca, İdare
              tarafından tertiplenen KNO’lar için taahhüt edilen ikramiyeler
              Devlet garantisi altındadır.
            </Text>
            <Text>
              (14) Kargo ile ödül teslimatı yapılan durumlarda, talihlinin
              kendisine kimlik ibrazı ile veya kargo firmasının teslimat kodunu
              ibraz eden 3. Kişilere teslimat yapılabilir.
            </Text>
            <Text>
              (15) Kargoyla teslim edilecek ikramiyeler için, herhangi bir
              nedenle teslimatın yapılamaması durumunda, ürünün başbayiye
              iadesini müteakip yeniden kargo gönderimi yapılır. Toplamda en çok
              3 (üç) kez gönderim sağlanır.
            </Text>
            <Text>
              (16) Başbayi tarafından, kargo takip bilgisi talihliye ve
              altbayiye iletilecektir.
            </Text>
            <Text>
              (17) Masraflarını talihlinin karşılaması koşuluyla yurtdışına
              ikramiye teslimatı yapılabilir veya talihli bulunduğu ülkedeki
              Türkiye Cumhuriyeti konsoloslukları aracılığıyla, Türkiye’de
              ikamet eden bir kişiye ödülün teslim alınması için vekâlet
              verilebilecektir.
            </Text>
            <Text>
              (18) Kargoyla yapılan ürün teslimatlarında, ürün ambalajının
              kontrol edilmesi sorumluluğu talihliye aittir. Ürün ambalajının
              yırtılmış veya zarar görmüş olması durumunda ürün teslim
              alınmamalıdır. Ürün tesliminden sonra oluşacak her türlü işlem
              talebi için tedarikçi firma ile iletişime geçilmelidir.
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default RulesScreen;
