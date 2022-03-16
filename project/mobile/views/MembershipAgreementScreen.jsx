import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import styles from '@mobile/src/styles/common';

const GetEnv = require('@envFile');

const MembershipAgreementScreen = () => {
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        {isCyprus ? (
          <>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üyelik Sözleşmesi</Text>
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Madde 1- Taraflar:
              </Text>
            </Text>
            <Text>Bu üyelik sözleşmesi ("Sözleşme");</Text>
            <Text>
              Bedrettin Demirel Caddesi No. 111 Kumsal/Lefkoşa adresinde mukim
              KKTC Piyangolar Birimi ve adresi ve ismi/soyismi “Üyelik
              Bilgileri” nin ilgili alanlarında beyan olunan kişi ("Üye")
              arasında, aşağıdaki hüküm ve koşullarda yapılmıştır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 2-</Text>{' '}
              Tanımlar: Aşağıdaki terimler işbu sözleşme kapsamında aşağıdaki
              anlamlarda kullanılmaktadır. Buna göre;
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye:</Text>{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com{' '}
              </Text>
              internet adres üzerinden her türlü KNO oyununu oynayacak veya KKTC
              Piyangolar Birimi'nin çeşitli ürün veya hizmetlerinden
              yararlanacak ve işbu Sözleşmeyi kabul eden herhangi bir kişi.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Hesap Numarası:</Text>{' '}
              KKTC Piyangolar Birimi tarafından üyelere tahsis edilen ve üyelik
              sırasında kullanılacak olan, değiştirilmeyen ve her üye için özel
              olan numaradır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Şifre:</Text> Üyenin
              sistem tarafından tanınmasını sağlayan KKTC Piyangolar Birimi’nin
              kanallarına erişmek için kullanılabilen ve ilk kullanımdan sonra
              üye tarafından değiştirilmesi gereken, hesap numarası ile birlikte
              kullanılan şifredir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye Hesabı:</Text>{' '}
              Üyelerin, KKTC Piyangolar Birimi tarafından sağlanan çeşitli ürün
              veya hizmetlerden faydalanmaları ve para transferi için gerekli
              olan KKTC Piyangolar Birimi hesabıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye Banka Hesabı:</Text>{' '}
              Üyelerin KKTC Piyangolar Birimi’ne kayıtlı banka hesaplarıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>SOMOS:</Text> Tüm
              bilgilerin toplandığı, işlendiği ve depolandığı, yüksek kapasite
              ve işlem gücüne sahip yedekleme özelliği bulunan donanımların
              bütününün oluşturduğu KKTC Piyangolar Birimi online merkezi
              sistemi,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Bilet:</Text> KNO’lara
              iştiraki kanıtlayan bilgilerin yer aldığı bilişim ürünlerini,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>KNO:</Text> Elektronik
              olarak üretilmiş numaralı biletlerin satılarak, adet ve tutarları
              oyun planları ile önceden belirlenmiş ikramiyeleri kazanacak
              numaraların belirli günde yapılacak çekilişle belirlenmesi esasına
              dayanan ve devletpiyangosu.com sanal ortamında, üyelerin
              beğenilerine göre oynayacakları her türlü karşılığı nakit olmayan
              şans oyunlarını,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Oyun Ücreti (leri):
              </Text>{' '}
              Üyelerin oyun kanalları üzerinden KNO oynamak için bankaların
              ödeme kanalları üzerinden KKTC Piyangolar Birimi’e ödedikleri
              ücret.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Ödeme Kanalları:</Text>{' '}
              İnternet bankacılığı, ATM, telefon bankacılığı ve mobil bankacılık
              ve tüm alternatif bankacılık kanalları.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Oyun Kanalları:</Text>{' '}
              www.devletpiyangosu.com altyapısı altındaki elektronik ve
              interaktif platformalar ve benzerleri.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Hesabım Menüsü:</Text>{' '}
              Üyelerin, devletpiyangosu.com bünyesindeki Üye Hesabı'na yapılan
              para transferlerinin hesap işlemlerine erişebilecekleri, diğer
              hesap işlemlerine erişebilecekleri, banka havalesi taleplerini
              gerçekleştirebilecekleri, oynanan kupon bilgilerini takip
              edebilecekleri ve izin verilen diğer işlemleri
              gerçekleştirebilecekleri kişisel alanlarıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Banka(lar):</Text>{' '}
              Bankacılık sistemindeki herhangi bir bankayı ifade eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Anlaşmalı Banka(lar):
              </Text>{' '}
              Bankacılık sisteminde bulunan ve çevrimiçi bir iletişim ağı
              üzerinden devletpiyangosu.com sistemlerine bağlı bankalardır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>SMS:</Text> Kısa Mesaj
              Servisi
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>JAVA:</Text> Cep
              telefonları için geliştirilen bir programlama dilidir,
              devletpiyangosu.com platformlarından oyun oynamayı sağlayan
              uygulamadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>WAP:</Text> Kablosuz
              Uygulama Protokolü, mobil cihazlardan internet erişimi sağlayan
              teknolojidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Müşteri Hizmetleri:
              </Text>{' '}
              Üyelerin yazılı veya sözlü olarak iletişim kurabilecekleri bilgi
              ve danışmanlık hizmeti alabilecekleri KKTC Piyangolar Birimi’nin
              ilgili departmanıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Kişisel Veriler:</Text>{' '}
              Kişisel Verilerin Korunması Yasası kapsamında, kimliği belirli
              veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade
              eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Üyeliğin Sona Ermesi:
              </Text>{' '}
              Bir üyelik başvurusu yapıldıktan sonra ve bu üyelik hesabı adına
              bir kupon oluşturulmadığında, aktif hesabın, belirli bir süre
              içinde, ilgili maddeye göre feshini talep eden üyenin hesabının
              devre dışı bırakılarak pasifleştirilmesi işlemidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Madde 3- Sözleşmenin Amacı ve Konusu:
              </Text>
            </Text>
            <Text>
              İşbu Sözleşme, Üyenin KKTC Piyangolar Birimi ile yaptığı üyelik
              sözleşmesidir. Söz konusu hizmet ilişkisi kapsamında üyelerin
              verilen hizmetlerden faydalanmasını sağlamak ve tarafların hak ve
              yükümlülüklerini belirlemek amacıyla düzenlenmiştir.
            </Text>
            <Text>Madde 4- Üyelik Koşulları:</Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1</Text> Üyelik
              Başvurusu ve Üyeliğin Başlaması:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.1</Text> Nüfus Kayıt
              Dairesi tarafından kimlik numarası verilen ve 18 yaşını dolduran
              herkes, devletpiyangosu.com’a üye olabilir. devletpiyangosu.com’a
              herhangi bir kanaldan giren üye, işbu Sözleşmeyi okumuş ve
              şartlarını kabul etmiş sayılır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.2</Text> Üyelik
              tesisinin ilk ve en önemli koşulu "18 yaşından büyük olmak" tır.
              18 yaş kriteri Nüfus Kayıt Dairesi tarafından uygulanan yasal
              düzenlemelere göre belirlenmiştir. Üye, Başvuru Formunda ve işbu
              Sözleşme kapsamında 18 yaşından büyük olduğunu beyan ve taahhüt
              eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.3</Text> 18 yaşından
              büyük olduğunu taahhüt eden kişi, üyelik başlangıcında bildirdiği
              tüm bilgilerin gerçeğe uygun olmasından ve doğruluğundan
              sorumludur. KKTC Piyangolar Birimi Üye ile ilgili tüm işlemlerde
              bunu varsayar ve buna göre hareket eder. Bu bilgilerin gerekli
              olduğu (şifre unutma gibi) durumlarda bilginin hatalı veya eksik
              olmasından doğacak zararlardan dolayı da sorumluluğun kendisine
              ait olacağını kabul ve taahhüt etmiştir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.4</Text> Üyelik
              kriterlerini karşılayan kişiler, fiil ehliyetine sahip
              olduklarını, ruh sağlıklarının yerinde olduğunu ve eylemlerinden
              sorumlu olduklarını önceden kabul ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.5</Text> Üyelik
              başvurularında, başvurunun kabulü için Üyelik Başvuru Formu'ndaki
              zorunlu bilgilerin girilmesi gereklidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.6</Text> Üyelik
              kriterlerini karşılayan kişilerin üyeliği, üyelik formunu
              doldurduktan sonra mümkün olan en kısa sürede
              etkinleştirilecektir. Üyeliğin etkinleştirilmesinin ardından oyun
              oynanabilir. Aktivasyon bilgileri üyelere sms veya e-posta ile
              gönderilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.7</Text> İşbu
              Sözleşmede belirtilen tüm Üyelik şartlarının yerine getirilmesi ve
              sürdürülmesi durumunda üyelik devam edecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.8</Text> Üye olacak
              kişi, işbu Sözleşme’nin tüm şartlarını kabul edip onayladığını
              peşinen taahhüt eder. KKTC Piyangolar Birimi işbu Sözleşme konusu
              hizmetten yararlanmak isteyen herhangi bir kişi ve/veya kuruluşun
              üyelik başvurusunu kabul etmeme hakkını saklı tutar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2</Text> Üyelik
              Hesabını Kullanma
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.1</Text> Her Üyenin
              yalnızca bir Üye Hesabı olabilir. Üye Hesabı yalnızca işbu
              Sözleşmede açıklanan oyunları oynamak için kullanılabilir. Üye,
              KKTC Piyangolar Birimi tarafından kendisine izin verilen oyunları,
              herhangi bir ticari amaç için ve/veya hizmeti başkalarına satmak
              ve/veya herhangi bir ticari amaç için, kamu düzenini ihlal etmek
              amacıyla, etik olmayan bir şekilde, başkalarını rahatsız ederek
              veya gelir ve/veya kayıp sağlamak amacıyla işbu Sözleşmenin
              amaçları dışında kullanamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.2</Text> Aynı kişi
              tarafından kullanılan birden fazla Üyelik varsa veya Üye Hesabı
              amacının dışında kullanılırsa, ilgili Üyelikler KKTC Piyangolar
              Birimi tarafından herhangi bir açıklama yapılmaksızın derhal
              feshedilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.3</Text> Üye, hesap
              numarası ve şifrenin herhangi bir üçüncü şahıs tarafından
              kullanılmasının sonuçlarından tamamen kendisi sorumludur ve bu tür
              işlemlerin kendisi tarafından yapılmadığına dair itirazlardan
              önceden feragat etmiş sayılır ve KKTC Piyangolar Birimi bu tür
              yasadışı kullanımı yapan kişilerin kimliğini tespit etmekle
              yükümlü olmadığını kabul ve taahhüt eder. Hesap numarasının ve
              şifrenin herhangi bir üçüncü taraf tarafından kullanıldığının
              farkına vardığında, Üye, bu durumu derhal KKTC Piyangolar
              Birimi’ne bildirmekle yükümlüdür. KKTC Piyangolar Birimi, Üye
              hesabının Üye dışındaki kişiler tarafından kullanıldığı tespit
              ettiğinde ilgili üyeliği sona erdirebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.4</Text> KKTC
              Piyangolar Birimi üyeliği süresince, Üye tarafından kullanılacak
              olan şifreyi koruma sorumluluğu ve şifre kullanımına dair her
              türlü sorumluluk Üye'ye ait olacak olup şifrenin Üye dışındaki
              üçüncü şahıslar tarafından kötü niyetli olarak kullanılmasından
              kaynaklı KKTC Piyangolar Birimi’nin üçüncü kişilere ödemek zorunda
              kalabileceği her türlü tazminat için Üye'ye aynen rücu hakkı
              saklıdır. KKTC Piyangolar Birimi, Şifre ve Oyun oynayabilmek için
              gerekli bilgileri haiz üçüncü şahıslar tarafından oynanan Oyunları
              geçerli sayacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3</Text> Üyenin
              Kişisel Bilgileri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.1</Text> KKTC
              Piyangolar Birimi, üyeyi tanımlamak amacıyla Üyenin ad soyadı,
              adresi, kimlik numarası, telefon numarası, kredi kartı bilgileri
              gibi KKTC Piyangolar Birimi Aydınlatma metninde yer verilen
              kategorilerdeki kişisel verilerini, KKTC Piyangolar Birimi’nin
              faaliyetleriyle sınırlı olmak üzere ve KKTC Piyangolar Birimi
              aydınlatma metninde açıklanan amaçlarla işlemektedir. Üye
              tarafından üyelik başlangıcında adı, soyadı, kimlik numarası,
              doğum tarihi ve güvenliği açısından verilen bilgiler dışındaki
              Üyenin kişisel bilgileri, üye tarafından web sitesi aracılığıyla
              veya Müşteri Hizmetleri ile iletişime geçerek değiştirilebilir.
              Müşteri Hizmetlerinin gerekli değişiklikleri yapabilmesi için
              Üyenin güvenlik kontrolünü sorunsuz bir şekilde geçmesi veya
              gerektiğinde kimlik bilgilerini doğrulaması önemlidir. Bu bilgiler
              dışındaki bilgilerin üye tarafından değiştirilip
              değiştirilemeyeceği konusundaki değişiklik KKTC Piyangolar Birimi
              tarafından belirlenecek ve devletpiyangosu.com web sitesinde ilan
              edilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.2</Text> KKTC
              Piyangolar Birimi, kişisel verilerin KVKY kapsamında korunması,
              yetkisiz erişime maruz kalmaması ve veri ihlallerinin önüne geçmek
              için uygun güvenlik düzeyini sağlamaya yönelik gerekli tüm teknik
              ve idari tedbirleri almıştır. Bu kapsamda faaliyetleri süresince
              uygun güvenlik düzeyini sağlamaya yönelik gerekli tüm teknik ve
              idari tedbirleri ve gerekli özeni göstermeyi taahhüt eder. KKTC
              Piyangolar Birimi, Üye’nin sözleşme konusu kişisel bilgilerini
              yasal zorunluluklar ve hizmetlerini yerine getirmek amacıyla
              zorunlu olan haller haricinde üçüncü kişilerle paylaşmayacaktır.
              Her halükarda ilgili paylaşımlar, Kişisel Verilerin Korunması
              Yasası’na uygun olarak ve Aydınlatma Metni ve Rıza Beyanı
              kapsamında yapılmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.3</Text> KKTC
              Piyangolar Birimi tarafından işlenen kişisel verileriniz ile
              ilgili detaylı bilgi Aydınlatma Metninde yer almaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.4</Text> KKTC
              Piyangolar Birimi, KVKY’na uygun sosyal eklentileri kullanmaktadır
              ve gerektiğinde sosyal eklentilerin kullanımı için üyelerin
              rızasını alır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.5</Text> Üyelere
              yönelik pazarlama faaliyetleri KVKY'ya uygun olarak açık rıza ile
              yürütülmekte ve açık rızasını vermeyen üyelere yönelik pazarlama
              faaliyeti gerçekleştirilmemektedir. Üyeler herhangi bir zamanda
              ticari elektronik mesajlar almayı durdurabilir. Üyenin KKTC
              Piyangolar Birimi’ne ulaşması halinde, ticari elektronik mesajlar
              göndermeyi durdurulacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.6</Text> Üye,
              KVKY'dan kaynaklı halklarını her zaman kullanabilir. Kişisel
              Verilerin Korunması Yasası kapsamındaki haklarınıza,
              www.devletpiyangosu.com web sitesindeki Bilgi Edinme Başvurusu
              bölümünden erişebilirsiniz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.7</Text> Üyeler,{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com{' '}
              </Text>
              web sitesini kullanırken yürürlükteki tüm ilgili mevzuat
              hükümlerine ve KKTC Piyangolar Birimi tarafından yayınlanan
              bildirimlere söz konusu mevzuat doğrultusunda uymayı taahhüt
              ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.8</Text> Üyeler,
              sponsorluk reklamlarının veya{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com{' '}
              </Text>
              web sitesi aracılığıyla bağlantılı benzer 3. taraf web sitelerinin
              içeriğinden hiçbir şekilde KKTC Piyangolar Birimi'ni sorumlu
              tutamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.9</Text> Üyeliğin
              herhangi bir nedenle askıya alınması ve / veya sonlandırılması
              durumunda, üyenin ikramiye dahil tüm kazanılmış hakları bundan
              etkilenmeyecektir. Süresi dolmuş ve / veya askıya alınmış üyelik
              bilgileri, Kişisel Verileri Koruma Yasası’nda belirtilen sürelere
              uygun olarak imha edilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.</Text> Üyeliğin
              Sona Ermesi:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.1.</Text> Üye
              istediği an KKTC Piyangolar Birimi üyeliğinden kendi talebi ile
              çıkma hakkına sahiptir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.2.</Text> KKTC
              Piyangolar Birimi, gerekli gördüğü takdirde, herhangi bir sebep
              göstermek zorunda olmaksızın üyeliği askıya alabilir ve/veya
              sonlandırabilir. Üye, üyeliğinin sona ermesine ilişkin olarak
              herhangi bir zarar – ziyan ve/veya hangi nam altında olursa olsun
              herhangi bir tazminat talebinde bulunmayacağını kabul ve beyan
              eder. İşbu madde uyarınca üyeliğin askıya alınması ve/veya
              sonlandırılması durumunda, Üye’nin ikramiye kazanımları da dahil
              kazanılmış hakları söz konusu halden etkilenmeyecektir. İptal
              edilen üyelik bilgileri KKTC Piyangolar Birimi tarafından Kişisel
              Verilerin Korunması Yasası uyarınca belirlenecek süre boyunca
              SOMOS veri tabanında saklanmaya devam eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.3.</Text> KKTC
              Piyangolar Birimi’nin kuruluş amacı KNO’lar dahil olmak üzere KKTC
              Piyangolar Birimi’nin onay verdiği şans ve bahis oyunları
              biletlerini satmaktan ibaret olup; KKTC Piyangolar Birimi,
              üyelerinin bu amaçlar dışında hesaplarını kullandığını tespit
              ettiği takdirde, bu üyelere ait üyelikleri derhal kapatma hakkını
              haiz olmakla birlikte, Suç Gelirlerinin Aklanmasının Önlenmesi
              Yasası uyarınca yükümlü sayıldığından, işbu durum derhal ilgili
              yetkili makamlara bildirilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.4.</Text> Üye suç
              teşkil edecek, yasal takip gerektirecek; yerel, ulusal ya da
              uluslararası düzeyde hukuka ve kanunlara aykırı bir durum teşkil
              eden ya da teşvik eden hiçbir yasadışı, tehditkar, rahatsızlık
              verici hakaret ve küfür içeren, küçük düşürücü, kaba, pornografik
              ya da ahlaka aykırı hiçbir bilgiyi KKTC Piyangolar Birimi’ne
              hiçbir kanaldan iletemez. Ayrıca virüs veya başka zararlı unsur
              içeren türde bilgiyi, yazılımı ya da malzemeyi postalayamaz ya da
              iletemez. Bu hallerden en az birini gerçekleştirdiği tespit edilen
              üyelerin üyeliği KKTC Piyangolar Birimi tarafından sonlandırılır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.5.</Text> KKTC
              Piyangolar Birimi, ilgili üyeliklerin ve bu üyeliklere bağlı KKTC
              Piyangolar Birimi nezdinde açılan hesapların yasadışı para
              transferleri dahil olmak üzere kanunlara aykırı olarak
              kullanıldığını tespit etmesi halinde ilgili üyelikleri derhal
              hiçbir bildirimde bulunmaksızın sonlandırma, ilgili tutarları
              uygulanabilir mevzuat kapsamında aksi emredilmediği sürece
              aktarmayı reddetme ve/veya gönderilen kaynağa geri aktarma hakkını
              saklı tutar. Bu takdirde ilgili Üye hesabında bulunan ikramiye
              bedelleri Üye Banka Hesabı’na aktarılmaz ve ilgili bedellere dair
              yasal mercilerin vereceği kararlar nezdinde hareket edilir. Üye bu
              hallerde KKTC Piyangolar Birimi’ne karşı hiçbir talepte
              bulunmayacağını kabul, beyan ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.</Text> Üye Hesabına
              Para Transferi İçin Genel Koşullar:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.1.</Text> Üyelerin
              Oyun Kanallarında oyun oynamaya başlayabilmeleri için, Sözleşmeli
              Bankaların KKTC Piyangolar Birimi’ndeki Üye Hesabına alternatif
              ödeme kanalları veya EFT yoluyla para transferi yapması
              gerekmektedir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.2.</Text> Yabancı
              para cinsinden yapılan para transferleri KKTC Merkez Bankası Alış
              Kuru üzerinden hesaplanmakta ve Üye Hesaplarına aktarılmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.3.</Text> Bankalarca
              belirlenen minimum transfer tutarı, EFT ile üye hesabına yapılacak
              transferlerde geçerli olup, bankalarca tahsil edilen EFT giderleri
              üyeye aittir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.4.</Text> Üye
              tarafından üye hesabına yatırılan ve oyun ücreti olarak
              kullanılmayan tutarlar, işbu Sözleşme, mücbir sebepler ve kanunla
              getirilen düzenlemeler tarafından getirilen istisnai durumlar
              dışında, KKTC Piyangolar Birimi’nin garantisi altındadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.</Text> Üyeler,
              Üye hesaplarına yaptıkları transfer tutarlarından ve Üye hesabına
              doğru hesap numarasını girerek para transferi yapmaktan yalnızca
              kendileri sorumludur. Üye tarafından verilen ödeme emirlerinin tam
              ve doğru bir şekilde yerine getirilmemesi nedeniyle ortaya
              çıkabilecek her türlü hasar, kayıp ve tüm sorumluluk Üye'ye
              aittir. KKTC Piyangolar Birimi, üye tarafından yapılan hatalı
              işlemlerde herhangi bir yasal sorumluluğa sahip değildir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.1.</Text> KKTC
              Piyangolar Birimi, kendi takdirine bağlı olarak, yanlış
              transferleri diğer üyenin Üye hesabına veya ödeme Üye olmayan bir
              kişi tarafından kendi takdirine bağlı olarak yapılmışsa ilgili
              kişinin banka hesabına yatırmayabilir. Ödemesi yanlış yapılan Üye,
              ödeme yapan ve Hesap Numarası yapılan ödeme eşleşmiyorsa bu iade
              işlemini geri çevrilemez şekilde kabul eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.2.</Text> KKTC
              Piyangolar Birimi, yapılan ödemeleri yanlış Hesap Numarasına iade
              etme yükümlülüğü altında değildir. Bu tutarlar ilgili kişinin
              banka hesabına yatırılabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.6.</Text> KKTC
              Piyangolar Birimi, Bankalardan kaynaklanan sorunlar ve / veya
              sistemik nedenlerden dolayı üyelerin, anlaşmalı bankaların
              alternatif ödeme kanalları aracılığıyla yaptığı ödemelerden veya
              üye hesaplarına geç EFT transferlerinden sorumlu değildir. Ancak,
              KKTC Piyangolar Birimi üyenin başvurusunu dikkate alarak araştırma
              yapabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.7.</Text> Anlaşmalı
              banka bilgileri ve çalışılan banka kanalları, uygun görüldüğü
              üzere KKTC Piyangolar Birimi tarafından değiştirilebilir. Üye,
              banka bilgileri ve çalışılan banka kanallarının KKTC Piyangolar
              Birimi tarafından değiştirilmesi durumunda herhangi bir isim
              altında herhangi bir zarar ve/veya tazminat talep etmeyeceğini
              önceden kabul eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.8.</Text> KKTC
              Piyangolar Birimi, ilgili üyeliklerin ve bu üyeliklere bağlı
              devletpiyangosu.com’da açılan hesapların yasadışı para
              transferleri de dahil olmak üzere yasalara aykırı kullanıldığını
              tespit ederse, ilgili üyelikleri herhangi bir bildirimde
              bulunmaksızın feshetme, geçerli yasalar uyarınca aksi
              belirtilmedikçe ilgili tutarların aktarılmasını reddetme ve
              kaynağa geri aktarma hakkını saklı tutar. Bu durumda, ilgili Üye
              hesabındaki ikramiye ücretleri Üye hesabına aktarılmayacak ve
              ilgili ücretlerle ilgili yasal makamların kararları doğrultusunda
              hareket edecektir. Üye, bu durumlarda KKTC Piyangolar Birimi
              aleyhinde herhangi bir iddiada bulunmayacağını önceden taahhüt
              eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.</Text> Oyun
              Sırasında Genel Koşullar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.1.</Text> KKTC
              Piyangolar Birimi, hali hazırda oynanıp oynanmadıklarına
              bakılmaksızın, işbu Sözleşmede tanımlanan Oyun Kanallarını
              değiştirebilir, iptal edebilir veya yenilerini ekleyebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.2.</Text> KKTC
              Piyangolar Birimi tarafından belirlenen oyun kuralları (oyun
              açılış-kapanış bilgileri ve / veya oyun, sütun, bilet fiyatları,
              iptal prosedürü, vb.) Üyeler tarafından oynanan Oyunlar için
              geçerlidir. Bu oyun kuralları (oyun açılış-kapanış bilgileri ve /
              veya oyun, sütun, bilet fiyatları, iptal prosedürü, vb.) ilgili
              kurumlar tarafından ve/veya ilgili mevzuattaki değişiklik
              nedeniyle herhangi bir zamanda değiştirilebilir. Üyenin bu
              değişiklikler nedeniyle KKTC Piyangolar Birimi’nden herhangi bir
              talep ve/veya tazminat hakkı yoktur. Oyun kuralları (oyun
              açılış-kapanış bilgileri ve / veya oyun, sütun, bilet fiyatları,
              iptal prosedürü vb.) ve yasal değişiklikler gibi detaylar{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com{' '}
              </Text>
              adresinden takip edilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.3.</Text> KKTC
              Piyangolar Birimi, oynanan oyunlar için limitler belirlemekte veya
              belirlememekte serbesttir. Üyeler, oyun kanallarında oynadıkları
              oyunlarda KKTC Piyangolar Birimi tarafından bir limit
              belirlenirse, bu limitleri önceden kabul etmiş sayılırlar. KKTC
              Piyangolar Birimi, limitler için belirlenen miktarı herhangi bir
              zamanda değiştirme hakkına sahiptir. Üyeler limit artışı talep
              edebilir. Bununla birlikte, Üyeler tarafından talep edilen ve KKTC
              Piyangolar Birimi tarafından uygun görülen yeni Üye limitleri de
              KKTC Piyangolar Birimi’nin takdirindedir ve KKTC Piyangolar Birimi
              bu limitleri değiştirme hakkını saklı tutar. Üyeler, KKTC
              Piyangolar Birimi tarafından belirlenen dokümanları limit artışı
              için KKTC Piyangolar Birimi’ne teslim etmekten sorumludur. Üyeler,
              oynadıkları şans oyunlarında, limitler dahilinde yaşadıkları maddi
              kayıplardan da kişisel olarak sorumludur, bu nedenle üyeler, KKTC
              Piyangolar Birimi’nin sorumlu olduğunu iddia edemez. KKTC
              Piyangolar Birimi’nin limit koyma konusunda herhangi bir
              sorumluluğu yoktur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.4.</Text> Oynanan
              oyunlarda, üye tarafından girilen oyunla ilgili bilgiler KKTC
              Piyangolar Birimi tarafından üstlenilecek ve işlenecektir. Bu
              nedenle, Üye, oyun tercihlerinin belirlenmesinden münhasıran
              sorumlu olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.5.</Text>{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.devletpiyangosu.com/')
                }
              >
                www.devletpiyangosu.com{' '}
              </Text>
              oyun kanallarına bağlantı fiyatı (İnternet, televizyon, cep
              telefonu aboneliği, wap / internet bağlantısı, SMS ücreti vb.) ve
              abonelik ve / veya ekstra kullanım ücretleri Üyeye aittir.
              <Text>
                SMS kanalı üzerinden yapılacak işlemler bir ücrete tabidir ve
                işlem türüne bağlı olarak farklı şekilde ücretlendirilebilir.
                KKTC Piyangolar Birimi, SMS kanalını kullanarak sağlanan tüm
                hizmetlerin fiyatlarını değiştirme hakkını saklı tutar. Üye,
                fiyat değişikliği nedeniyle KKTC Piyangolar Birimi’nden herhangi
                bir zarar ve tazminat talep etmeyeceğini önceden kabul, beyan ve
                taahhüt eder. SMS fiyatı faturalı hatlarda ilgili operatör
                faturasına yansıtılacak ve ön ödemeli hatlar için krediden
                düşülecektir. KKTC Piyangolar Birimi, operatörlerin
                tarifelerindeki değişikliklerden sorumlu değildir. KKTC
                Piyangolar Birimi, müşteri hizmetlerinden yapılacak işlemler
                için çağrı başına servis ücreti almakta serbesttir. KKTC
                Piyangolar Birimi alınan hizmet kullanım ücretini değiştirme
                hakkını saklı tutar. Bu ücrette değişiklik yapıldığı takdirde,
                KKTC Piyangolar Birimi bu bilgileri üyeleriyle paylaşmayı
                taahhüt eder.
              </Text>
              <Text>
                KKTC Piyangolar Birimi, müşteri hizmetlerinden yapılacak
                işlemler için çağrı başına servis ücreti almakta serbesttir.
                KKTC Piyangolar Birimi alınan hizmet kullanım ücretini
                değiştirme hakkını saklı tutar. Bu ücrette değişiklik yapıldığı
                takdirde, KKTC Piyangolar Birimi bu bilgileri üyeleriyle
                paylaşmayı taahhüt eder.
              </Text>
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.3.</Text> Oyun İptal
              İşlemleri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.3.1.</Text> Üyenin
              satın aldığı Bilet iptal edilemez ve hiçbir şekilde
              değiştirilemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 6-</Text> Ek
              Hizmetler:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.1.</Text> İşbu
              Sözleşmenin ile etkileşimli alanların (forum alanları) kullanım
              koşulları da kabul edilmiş olmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.2.</Text> KKTC
              Piyangolar Birimi tarafından verilen örnek bilet, bilgilendirme
              vb. gibi ek hizmetler gibi alanlarda verilen bilgiler sadece yorum
              ve öneri amaçlıdır, KKTC Piyangolar Birimi’nin %100 doğru bilgi
              içerdiği iddia edilmemektedir ve bu konularda hiçbir sorumluluk
              kabul edilmemektedir. KKTC Piyangolar Birimi’nin bu yazı, biletler
              ve diğer ek hizmetlerden doğan sorumluluğu yoktur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.</Text> Kampanyalar
              ve Promosyonlar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.1.</Text> Üye, KKTC
              Piyangolar Birimi tarafından belirlenen kullanım / faydalanma
              koşulları çerçevesinde kampanya ve promosyonlardan
              yararlanabileceğini beyan, kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.2.</Text> KKTC
              Piyangolar Birimi, herhangi bir zamanda, kampanyaların ve
              promosyonların genel uygulama ve kullanım koşullarında tek taraflı
              değişiklik yapma hakkını saklı tutar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.3.</Text> KKTC
              Piyangolar Birimi, üyelerinin oyun oynama ve davranış
              analizlerini, kampanya ve promosyonlarda veya genel uygulamalarda
              dikkate alarak üyelerine farklı teklifler sunma, bu analizleri
              gerçekleştirme ve/veya sadakat programlarında değişiklik yapma
              hakkını saklı tutar. Tüm bu uygulamalar KKTC Piyangolar Birimi
              tarafından belirlenen süre içinde geçerlidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 7-</Text> İkramiye
              Teslimatları ve Hesap İşlemleri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.</Text> Teslimatlar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.1.</Text> İkramiye
              teslimleri KKTC Piyangolar Birimi tarafından kargo ile
              yapılabileceği gibi tescile tabi ödüller KKTC Piyangolar Birimi
              merkezinde de teslim edilebilir. İkramiye teslimi sırasında
              yasaların öngördüğü vergi ve diğer kesintiler dolayısıyla, üye
              tarafından KKTC Piyangolar Birimi’nden herhangi bir zarar ve kayıp
              talep edemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.2.</Text> KNO
              oyunlarında kazanılan ikramiyeler İdareye ait Şubeler aracılığıyla
              da talihlilere teslim edilebilir. Yurtdışına gönderilecek
              ikramiyeler için her türlü gönderi masrafı üyeler tarafından
              karşılanacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.3.</Text> Üyenin
              KKTC Piyangolar Birimi nezdindeki hesabına yatırdığı tutarlar,
              üyenin takdirine bağlı olsa bile, üçüncü tarafların banka
              hesaplarına aktarım yapılamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.4.</Text> Üye
              Hesaplarından iş emriyle Üye Banka Hesaplarına aktaracakları tutar
              en az 10 TL (On Türk Lirası) olmalıdır. Bu miktar KKTC Piyangolar
              Birimi tarafından değiştirilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.5.</Text> KKTC
              Piyangolar Birimi yabancı hesaplara ödeme yapmak zorunda değildir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.6.</Text> KKTC
              Piyangolar Birimi genellikle para yatırmak veya para çekmek için
              bir ücret talep etmeyecektir. Ancak, para yatırma ve / veya para
              çekme işlevini kötüye kullandığınızdan şüphelenirsek, bu tür
              yanlış kullanımlarla ilgili olarak tarafımızdan yapılan masrafları
              karşılamak için sizden bir ücret talep etme hakkımızı saklı
              tutarız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.7.</Text> KKTC
              Piyangolar Birimi, kendi takdirine bağlı olarak, zaman zaman
              promosyonlar, ikramiyeler veya diğer özel teklifler sunma ve
              reklam verme hakkını saklı tutar ve bu tekliflerin her biri
              sınırlı bir süre için geçerli olacak belirli hüküm ve koşullara
              tabi olacaktır. Aşağıdakilerden herhangi birini kötüye
              kullandığınızdan veya kötüye kullanmaya çalıştığınızdan
              şüphelenmemiz durumunda, herhangi bir ödemeyi veya kazanç
              miktarını kesintiye uğratma veya reddetme veya tersine çevirme
              hakkımız olacaktır: (i) Üye hesaplarına yatırılan tutarlar; (ii)
              diğer promosyonlar; veya (iii) mevcut bir oyun veya yeni bir oyun
              ile ilgili olarak belirlenen belirli kurallar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.8.</Text> KKTC
              Piyangolar Birimi, üye tarafında dolandırıcılık veya hileli
              faaliyetlerden şüpheleniyorsa veya ödemelerinizden herhangi biri
              reddedilirse, hesabınızdan orijinal depozitonuzu aşan herhangi bir
              miktarı alıkoyma ve tarafımızdan gerekli görüldüğü takdirde,
              borçlusu olduğunuz ödemeleri tahsil etmek için herhangi bir yasal
              işlem başlatma hakkına sahip olacağız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.9.</Text> KKTC
              Piyangolar Birimi, ikramiyelerin doğru kişiye teslim edilmesini
              sağlamak için kazanan kişinin kimliği, bundan tatmin olacağımız
              doğrultusunda doğrulanana kadar herhangi bir teslimat yapmayı
              durdurma hakkına sahip olacaktır. Bu amaçla, tamamen kendi
              takdirimize bağlı olarak, yetki alanınızın yürürlükteki yasalarına
              göre veya başka bir şekilde bize noter tasdikli bir kimlik veya
              eşdeğer bir sertifikalı kimlik sağlamanızı talep etme hakkına
              sahip olacağız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 8-</Text>{' '}
              Sorumluluk:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.1.</Text> KKTC
              Piyangolar Birimi, oyun kanallarında vb. olası bağlantı kesilmesi,
              sistem arızaları, teknik mesajlar vb. nedeniyle hata, gecikmiş
              veri aktarımı veya iletişim hataları da dahil olmak üzere, ancak
              bunlarla sınırlı olmamak üzere, gönderilememe veya ertelenme
              nedeniyle ortaya çıkan ve/veya oluşabilecek zararlardan hiçbir
              şekilde sorumlu tutulamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.2.</Text> Oyunlarla
              ilgili bilgi girişi yalnızca KKTC Piyangolar Birimi’nin kontrolü
              altındadır. KKTC Piyangolar Birimi'nden, oyunlar hakkında gerekli
              bilgiler verilmemesinden kaynaklı herhangi bir kayıp veya hasar
              talep edilemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.3.</Text> Üye,
              devletpiyangosu.com’a işbu sözleşme kapsamındaki hizmetlere
              ilişkin yazılı, sözlü, internet ve / veya diğer elektronik medya
              aracılığıyla ilettiği bilgilerin doğru, eksiksiz ve güncel
              olduğunu beyan eder; bununla ilgili zararlardan sadece Üye sorumlu
              olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.4.</Text> KKTC
              Piyangolar Birimi, Üye tarafından bildirilen yanlış bilgiler
              nedeniyle (GSM numarası ve e-posta adresinin doğru ve/veya etkin
              olmaması da dahil olmak üzere) veya teknik nedenlerden dolayı
              (SMS'in gönderildiği Üyenin SMS hattı açık olmaması, Üyenin
              telefon ayarları SMS almak için uygun olmaması nedeniyle bilgi
              mesajları vb. hava ve karasal iletim şebekesinde arızalar vb.)
              meydana gelen eksiklik, gecikme, doğrudan ve / veya dolaylı
              zararlardan sorumlu tutulamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.5.</Text> İşbu
              Sözleşme uyarınca üyeye sunulan hizmetlerin kapsamı, KKTC
              Piyangolar Birimi tarafından herhangi bir zamanda tek taraflı
              olarak genişletilebilir veya daraltılabilir veya durdurulabilir.
              KKTC Piyangolar Birimi, işbu Sözleşmedeki maddelerde değişiklik
              yapma hakkını saklı tutar. Bu nedenle, Üye, işbu Sözleşme ile
              kendisine sunulan hizmet kapsamının bir taahhüt olmadığını ve
              değişebileceğini önceden kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.6.</Text> Üye, KKTC
              Piyangolar Birimi tarafından sunulan hizmetlerin kullanımı
              sırasında üçüncü şahıslara ve/veya KKTC Piyangolar Birimi’ne ve
              devletpiyangosu.com’a zarar vermesi durumunda bu tür hasarlardan
              kişisel olarak sorumlu olduğunu kabul, beyan ve taahhüt eder.
              Böyle bir durumda, ilgili üyelik KKTC Piyangolar Birimi tarafından
              sonlandırılabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.7.</Text> KKTC
              Piyangolar Birimi web sitesinde yayınlanan tüm yazılı, resimli,
              ses grafik ve / veya grafik olmayan malzemeler ile tüm
              malzemelerin kullanım hakkını saklı tutar. Üyelik, KKTC Piyangolar
              Birimi’nin fikri mülkiyetidir ve KKTC Piyangolar Birimi’nin
              sunduğu hizmet ve ürünlerle ilgili her türlü görsel ve işitsel
              materyaller ve bunların sunumları, KKTC Piyangolar Birimi’nin
              yazılı izni olmadan üye tarafından sahiplenilemez ve kullanılamaz
              ve bunları kopyalamak suretiyle kişisel ve genel kullanıma açamaz.
              Üye, bunları internet sayfalarında kullanmayacağını,
              yayınlamayacağını ve / veya pazarlama hakkına sahip olmayacağını
              kabul, beyan ve taahhüt eder. KKTC Piyangolar Birimi’nin hizmetin
              sağlanması için kullanılan yazılımın telif hakları KKTC Piyangolar
              Birimi’ne aittir ve Üye, bu yazılımı çoğaltmamayı, bir şekilde
              hizmet almak için hiçbir şekilde kullanmamayı taahhüt eder. KKTC
              Piyangolar Birimi, üyelerin bu materyalleri kullanmaları veya
              devletpiyangosu.com’dan bilgisi olmadan alıntı yapmaları durumunda
              herhangi bir sorumluluk kabul etmeyeceğini önceden beyan eder. Bu
              gibi durumlarda, tazminat hakkı, KKTC Piyangolar Birimi’nin maruz
              kalacağı hasar ve kayıplar için saklı tutulur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.8.</Text> Üçüncü
              şahıslarla ilgili olarak ortaya çıkabilecek ihtilaflarda; Üye,
              üçüncü şahısların tazminat taleplerinden KKTC Piyangolar
              Birimi’nin sorumlu tutulamayacağını önceden kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.9.</Text> Üyeler, KKTC
              Piyangolar Birimi’ni üçüncü şahıslar aracılığıyla KKTC Piyangolar
              Birimi hesaplarına gönderdikleri paralar hakkında uğradıkları /
              uğrayabilecekleri kayıplardan sorumlu tutamazlar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.10.</Text> İşbu
              Sözleşmedeki, KKTC Piyangolar Birimi’nin mesuliyetsizliğini
              öngören tüm düzenlemeler, KKTC Piyangolar Birimi’nin ağır kusuru
              halinde de geçerli olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.11.</Text> İşbu
              Sözleşme kapsamında Üyelerin sorumluluğu altındaki konularda, KKTC
              Piyangolar Birimi’nin tabi olacağı her türlü talep ve / veya ödeme
              için ilgili Üyelere rücu edilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 9-</Text> Ortak
              Hükümler:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.1.</Text> Bu Üyelik
              ilişkisi sanal bir ortamda oluştuğu için işbu Sözleşme, üyelik
              başvurusu talebi ve başvurunun KKTC Piyangolar Birimi tarafından
              kabul edilmesi üzerine kurulur. Karşılıklı haklar ve yükümlülükler
              başvurunun kabulü üzerine yürürlüğe girer. Sözleşme tarihi,
              sözleşmenin yapıldığı tarih olarak kabul edilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.2.</Text> Üye hiçbir
              şekilde işbu Sözleşmeden doğan hak ve yükümlülüklerini üçüncü
              kişilere aktaramaz ve devredemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.3.</Text> Üye, KKTC
              Piyangolar Birimi kayıtlarının geçerliliğini önceden kabul eder ve
              KKTC Piyangolar Birimi’nin her türlü kayıt, belge ve defter kaydı
              ile KKTC Piyangolar Birimi’nin her türlü bilgisayar ve ses kaydı,
              mikrofilmleri ve mikrofişlerinin bağlayıcı ve kesin delil teşkil
              edeceğini bunlara karşı her türlü defi ve itiraz haklarından
              feragat ettiğini; KKTC Piyangolar Birimi’ni yemin teklifinden
              ber'i kıldığını ve Sözleşme’nin kesin delil sözleşmesi niteliğinde
              olduğunu kabul, beyan ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.4.</Text> Taraflar,
              işbu Sözleşmenin uygulanmasından ve yorumlanmasından kaynaklanan
              uyuşmazlıkların çözümünde KKTC’deki yürürlükteki mevzuatın
              uygulanmasını kabul ve beyan etmişlerdir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.5.</Text> Taraflar,
              yukarıda belirtilen adreslerinin yazılı olarak aksi
              belirtilmedikçe yasal bildirim adresleri olduğunu ve bu adreslere
              yapılacak yazılı bildirimlerin yasal olarak geçerli bildirimin tüm
              hukuki sonuçlarını doğuracağını kabul ve beyan etmişlerdir.
            </Text>
            <Text>
              İşbu Sözleşme 9 (dokuz) maddeden oluşmaktadır. Üye olmak
              isteyenler, Sözleşmenin tamamını okuduklarını, içeriklerindeki tüm
              makaleleri koşulsuz olarak kabul ettiklerini ve onayladıklarını
              taahhüt ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Erişim bilgileri:</Text>
            </Text>
            <Text>KKTC Piyangolar Birimi</Text>
            <Text>
              Adres: Bedrettin Demirel Caddesi, No. 111 Kumsal/Lefkoşa.
            </Text>
            <Text>Destek Hattı: ... Faks: ...</Text>
            <Text>E-Mail Addres: ...</Text>
          </>
        ) : (
          <>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üyelik Sözleşmesi</Text>
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Madde 1- Taraflar:
              </Text>
            </Text>
            <Text>Bu üyelik sözleşmesi ("Sözleşme");</Text>
            <Text>
              İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8
              Şişli/İSTANBULCadresinde mukim 106 Dijital İnteraktif Hizmetler ve
              Şans Oyunları A.Ş. (106 Dijital) ve adresi ve ismi/soyismi “Üyelik
              Bilgileri” nin ilgili alanlarında beyan olunan kişi ("Üye")
              arasında, aşağıdaki hüküm ve koşullarda yapılmıştır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 2-</Text>{' '}
              Tanımlar: Aşağıdaki terimler işbu sözleşme kapsamında aşağıdaki
              anlamlarda kullanılmaktadır. Buna göre;
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye:</Text>{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>
              internet adres üzerinden her türlü KNO oyununu oynayacak veya 106
              Dijital'in çeşitli ürün veya hizmetlerinden yararlanacak ve işbu
              Sözleşmeyi kabul eden herhangi bir kişi.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Hesap Numarası:</Text>{' '}
              106 Dijital tarafından üyelere tahsis edilen ve üyelik sırasında
              kullanılacak olan, değiştirilmeyen ve her üye için özel olan
              numaradır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Şifre:</Text> Üyenin
              sistem tarafından tanınmasını sağlayan 106 Dijital’in kanallarına
              erişmek için kullanılabilen ve ilk kullanımdan sonra üye
              tarafından değiştirilmesi gereken, hesap numarası ile birlikte
              kullanılan şifredir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye Hesabı:</Text>{' '}
              Üyelerin, 106 Dijital tarafından sağlanan çeşitli ürün veya
              hizmetlerden faydalanmaları ve para transferi için gerekli olan
              106 Dijital hesabıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Üye Banka Hesabı:</Text>{' '}
              Üyelerin 106 Dijital’e kayıtlı banka hesaplarıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>SOMOS:</Text> Tüm
              bilgilerin toplandığı, işlendiği ve depolandığı, yüksek kapasite
              ve işlem gücüne sahip yedekleme özelliği bulunan donanımların
              bütününün oluşturduğu 106 Dijital online merkezi sistemi,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Bilet:</Text> KNO’lara
              iştiraki kanıtlayan bilgilerin yer aldığı bilişim ürünlerini,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>KNO:</Text> Elektronik
              olarak üretilmiş numaralı biletlerin satılarak, adet ve tutarları
              oyun planları ile önceden belirlenmiş ikramiyeleri kazanacak
              numaraların belirli günde yapılacak çekilişle belirlenmesi esasına
              dayanan ve piyangosepeti.com.tr sanal ortamında, üyelerin
              beğenilerine göre oynayacakları her türlü karşılığı nakit olmayan
              şans oyunlarını,
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Oyun Ücreti (leri):
              </Text>{' '}
              Üyelerin oyun kanalları üzerinden KNO oynamak için bankaların
              ödeme kanalları üzerinden 106 Dijital’e ödedikleri ücret.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Ödeme Kanalları:</Text>{' '}
              İnternet bankacılığı, ATM, telefon bankacılığı ve mobil bankacılık
              ve tüm alternatif bankacılık kanalları.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Oyun Kanalları:</Text>{' '}
              www.piyangosepeti.com altyapısı altındaki elektronik ve interaktif
              platformalar ve benzerleri.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Hesabım Menüsü:</Text>{' '}
              Üyelerin, piyangosepeti.com.tr bünyesindeki Üye Hesabı'na yapılan
              para transferlerinin hesap işlemlerine erişebilecekleri, diğer
              hesap işlemlerine erişebilecekleri, banka havalesi taleplerini
              gerçekleştirebilecekleri, oynanan kupon bilgilerini takip
              edebilecekleri ve izin verilen diğer işlemleri
              gerçekleştirebilecekleri kişisel alanlarıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Banka(lar):</Text>{' '}
              Bankacılık sistemindeki herhangi bir bankayı ifade eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Anlaşmalı Banka(lar):
              </Text>{' '}
              Bankacılık sisteminde bulunan ve çevrimiçi bir iletişim ağı
              üzerinden piyangosepeti.com.tr sistemlerine bağlı bankalardır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>SMS:</Text> Kısa Mesaj
              Servisi
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>JAVA:</Text> Cep
              telefonları için geliştirilen bir programlama dilidir,
              piyangosepeti.com.tr platformlarından oyun oynamayı sağlayan
              uygulamadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>WAP:</Text> Kablosuz
              Uygulama Protokolü, mobil cihazlardan internet erişimi sağlayan
              teknolojidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Müşteri Hizmetleri:
              </Text>{' '}
              Üyelerin yazılı veya sözlü olarak iletişim kurabilecekleri bilgi
              ve danışmanlık hizmeti alabilecekleri 106 Dijital’in ilgili
              departmanıdır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Kişisel Veriler:</Text>{' '}
              6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kimliği
              belirli veya belirlenebilir gerçek kişiye ilişkin her türlü
              bilgiyi ifade eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Üyeliğin Sona Ermesi:
              </Text>{' '}
              Bir üyelik başvurusu yapıldıktan sonra ve bu üyelik hesabı adına
              bir kupon oluşturulmadığında, aktif hesabın, belirli bir süre
              içinde, ilgili maddeye göre feshini talep eden üyenin hesabının
              devre dışı bırakılarak pasifleştirilmesi işlemidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>
                Madde 3- Sözleşmenin Amacı ve Konusu:
              </Text>
            </Text>
            <Text>
              İşbu Sözleşme, Üyenin 106 Dijital ile yaptığı üyelik
              sözleşmesidir. Söz konusu hizmet ilişkisi kapsamında üyelerin
              verilen hizmetlerden faydalanmasını sağlamak ve tarafların hak ve
              yükümlülüklerini belirlemek amacıyla düzenlenmiştir.
            </Text>
            <Text>Madde 4- Üyelik Koşulları:</Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1</Text> Üyelik
              Başvurusu ve Üyeliğin Başlaması:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.1</Text> Nüfus ve
              Vatandaşlık İşleri Genel Müdürlüğü tarafından kimlik numarası
              verilen ve 18 yaşını dolduran herkes, piyangosepeti.com.tr’ye üye
              olabilir. Piyangosepeti.com.tr’ye herhangi bir kanaldan giren üye,
              işbu Sözleşmeyi okumuş ve şartlarını kabul etmiş sayılır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.2</Text> Üyelik
              tesisinin ilk ve en önemli koşulu "18 yaşından büyük olmak" tır.
              18 yaş kriteri Merkezi Nüfus İdaresi Sistemine göre
              belirlenmiştir. Üye, Başvuru Formunda ve işbu Sözleşme kapsamında
              18 yaşından büyük olduğunu beyan ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.3</Text> 18 yaşından
              büyük olduğunu taahhüt eden kişi, üyelik başlangıcında bildirdiği
              tüm bilgilerin gerçeğe uygun olmasından ve doğruluğundan
              sorumludur. 106 Dijital Üye ile ilgili tüm işlemlerde bunu
              varsayar ve buna göre hareket eder. Bu bilgilerin gerekli olduğu
              (şifre unutma gibi) durumlarda bilginin hatalı veya eksik
              olmasından doğacak zararlardan dolayı da sorumluluğun kendisine
              ait olacağını kabul ve taahhüt etmiştir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.4</Text> Üyelik
              kriterlerini karşılayan kişiler, fiil ehliyetine sahip
              olduklarını, ruh sağlıklarının yerinde olduğunu ve eylemlerinden
              sorumlu olduklarını önceden kabul ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.5</Text> Üyelik
              başvurularında, başvurunun kabulü için Üyelik Başvuru Formu'ndaki
              zorunlu bilgilerin girilmesi gereklidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.6</Text> Üyelik
              kriterlerini karşılayan kişilerin üyeliği, üyelik formunu
              doldurduktan sonra mümkün olan en kısa sürede
              etkinleştirilecektir. Üyeliğin etkinleştirilmesinin ardından oyun
              oynanabilir. Aktivasyon bilgileri üyelere sms veya e-posta ile
              gönderilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.7</Text> İşbu
              Sözleşmede belirtilen tüm Üyelik şartlarının yerine getirilmesi ve
              sürdürülmesi durumunda üyelik devam edecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.1.8</Text> Üye olacak
              kişi, işbu Sözleşme’nin tüm şartlarını kabul edip onayladığını
              peşinen taahhüt eder. 106 Dijital işbu Sözleşme konusu hizmetten
              yararlanmak isteyen herhangi bir kişi ve/veya kuruluşun üyelik
              başvurusunu kabul etmeme hakkını saklı tutar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2</Text> Üyelik
              Hesabını Kullanma
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.1</Text> Her Üyenin
              yalnızca bir Üye Hesabı olabilir. Üye Hesabı yalnızca işbu
              Sözleşmede açıklanan oyunları oynamak için kullanılabilir. Üye,
              106 Dijital tarafından kendisine izin verilen oyunları, herhangi
              bir ticari amaç için ve/veya hizmeti başkalarına satmak ve/veya
              herhangi bir ticari amaç için, kamu düzenini ihlal etmek amacıyla,
              etik olmayan bir şekilde, başkalarını rahatsız ederek veya gelir
              ve/veya kayıp sağlamak amacıyla işbu Sözleşmenin amaçları dışında
              kullanamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.2</Text> Aynı kişi
              tarafından kullanılan birden fazla Üyelik varsa veya Üye Hesabı
              amacının dışında kullanılırsa, ilgili Üyelikler 106 Dijital
              tarafından herhangi bir açıklama yapılmaksızın derhal
              feshedilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.3</Text> Üye, hesap
              numarası ve şifrenin herhangi bir üçüncü şahıs tarafından
              kullanılmasının sonuçlarından tamamen kendisi sorumludur ve bu tür
              işlemlerin kendisi tarafından yapılmadığına dair itirazlardan
              önceden feragat etmiş sayılır ve 106 Dijital bu tür yasadışı
              kullanımı yapan kişilerin kimliğini tespit etmekle yükümlü
              olmadığını kabul ve taahhüt eder. Hesap numarasının ve şifrenin
              herhangi bir üçüncü taraf tarafından kullanıldığının farkına
              vardığında, Üye, bu durumu derhal 106 Dijital’e bildirmekle
              yükümlüdür. 106 Dijtal, Üye hesabının Üye dışındaki kişiler
              tarafından kullanıldığı tespit ettiğinde ilgili üyeliği sona
              erdirebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.2.4</Text> 106 Dijital
              üyeliği süresince, Üye tarafından kullanılacak olan şifreyi koruma
              sorumluluğu ve şifre kullanımına dair her türlü sorumluluk Üye'ye
              ait olacak olup şifrenin Üye dışındaki üçüncü şahıslar tarafından
              kötü niyetli olarak kullanılmasından kaynaklı 106 Dijital’in
              üçüncü kişilere ödemek zorunda kalabileceği her türlü tazminat
              için Üye'ye aynen rücu hakkı saklıdır. 106 Dijital, Şifre ve Oyun
              oynayabilmek için gerekli bilgileri haiz üçüncü şahıslar
              tarafından oynanan Oyunları geçerli sayacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3</Text> Üyenin
              Kişisel Bilgileri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.1</Text> 106
              Dijital, üyeyi tanımlamak amacıyla Üyenin ad soyadı, adresi,
              kimlik numarası, telefon numarası, kredi kartı bilgileri gibi 106
              Dijital Aydınlatma metninde yer verilen kategorilerdeki kişisel
              verilerini, 106 Dijital’in faaliyetleriyle sınırlı olmak üzere ve
              106 Dijital aydınlatma metninde açıklanan amaçlarla işlemektedir.
              Üye tarafından üyelik başlangıcında adı, soyadı, kimlik numarası,
              doğum tarihi ve güvenliği açısından verilen bilgiler dışındaki
              Üyenin kişisel bilgileri, üye tarafından Web sitesi aracılığıyla
              veya Müşteri Hizmetleri ile iletişime geçerek değiştirilebilir.
              Müşteri Hizmetlerinin gerekli değişiklikleri yapabilmesi için
              Üyenin güvenlik kontrolünü sorunsuz bir şekilde geçmesi veya
              gerektiğinde kimlik bilgilerini doğrulaması önemlidir. Bu bilgiler
              dışındaki bilgilerin üye tarafından değiştirilip
              değiştirilemeyeceği konusundaki değişiklik 106 Dijital tarafından
              belirlenecek ve piyangosepeti.com.tr web sitesinde ilan
              edilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.2</Text> 106
              Dijital, kişisel verilerin KVKK kapsamında korunması, yetkisiz
              erişime maruz kalmaması ve veri ihlallerinin önüne geçmek için
              uygun güvenlik düzeyini sağlamaya yönelik gerekli tüm teknik ve
              idari tedbirleri almıştır. Bu kapsamda faaliyetleri süresince
              uygun güvenlik düzeyini sağlamaya yönelik gerekli tüm teknik ve
              idari tedbirleri ve gerekli özeni göstermeyi taahhüt eder. 106
              Dijital, Üye’nin sözleşme konusu kişisel bilgilerini yasal
              zorunluluklar ve hizmetlerini yerine getirmek amacıyla zorunlu
              olan haller haricinde üçüncü kişilerle paylaşmayacaktır. Her
              halükarda ilgili paylaşımlar, 6698 sayılı Kişisel Verilerin
              Korunması Kanunu’na uygun olarak ve Aydınlatma Metni ve Rıza
              Beyanı kapsamında yapılmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.3</Text> 106 Dijital
              tarafından işlenen kişisel verileriniz ile ilgili detaylı bilgi
              Aydınlatma Metninde yer almaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.4</Text> 106
              Dijital, KVKK’na uygun sosyal eklentileri kullanmaktadır ve
              gerektiğinde sosyal eklentilerin kullanımı için üyelerin rızasını
              alır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.5</Text> Üyelere
              yönelik pazarlama faaliyetleri KVKK'ya ve Elektronik Ticaretin
              Düzenlenmesi Hakkında Kanun’a uygun olarak açık rıza ile
              yürütülmekte ve açık rızasını vermeyen üyelere yönelik pazarlama
              faaliyeti gerçekleştirilmemektedir. Üyeler herhangi bir zamanda
              ticari elektronik mesajlar almayı durdurabilir. Üyenin 106
              Dijital’e ulaşması halinde, ticari elektronik mesajlar göndermeyi
              durdurulacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.6</Text> Üye, KVKK
              Madde 11'den kaynaklı halklarını her zaman kullanabilir. Kişisel
              Verilerin Korunması Kanunu kapsamındaki haklarınıza,
              www.piyangosepeti.com.tr web sitesindeki Bilgi Edinme Başvurusu
              bölümünden erişebilirsiniz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.7</Text> Üyeler,{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>
              web sitesini kullanırken yürürlükteki tüm ilgili mevzuat
              hükümlerine ve 106 Dijital tarafından yayınlanan bildirimlere söz
              konusu mevzuat doğrultusunda uymayı taahhüt ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.8</Text> Üyeler,
              sponsorluk reklamlarının veya{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>
              web sitesi aracılığıyla bağlantılı benzer 3. taraf web sitelerinin
              içeriğinden hiçbir şekilde106 Dijital'i sorumlu tutamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.3.9</Text> Üyeliğin
              herhangi bir nedenle askıya alınması ve / veya sonlandırılması
              durumunda, üyenin ikramiye dahil tüm kazanılmış hakları bundan
              etkilenmeyecektir. Süresi dolmuş ve / veya askıya alınmış üyelik
              bilgileri, 6698 sayılı Kişisel Verileri Koruma Kanunu’na uygun
              olarak Kişisel Veri Saklama ve İmha Politikasında yer alan
              sürelere uygun olarak imha edilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.</Text> Üyeliğin
              Sona Ermesi:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.1.</Text> Üye
              istediği an 106 Dijital üyeliğinden kendi talebi ile çıkma hakkına
              sahiptir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.2.</Text> 106
              Dijital, gerekli gördüğü takdirde, herhangi bir sebep göstermek
              zorunda olmaksızın üyeliği askıya alabilir ve/veya
              sonlandırabilir. Üye, üyeliğinin sona ermesine ilişkin olarak
              herhangi bir zarar - ziyan ve/veya hangi nam altında olursa olsun
              herhangi bir tazminat talebinde bulunmayacağını kabul ve beyan
              eder. İşbu madde uyarınca üyeliğin askıya alınması ve/veya
              sonlandırılması durumunda, Üye’nin ikramiye kazanımları da dahil
              kazanılmış hakları söz konusu halden etkilenmeyecektir. İptal
              edilen üyelik bilgileri 106 Dijital tarafından 6698 sayılı Kişisel
              Verilerin Korunması Kanunu uyarınca belirlenecek süre boyunca
              SOMOS veri tabanında saklanmaya devam eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.3.</Text> 106
              Djital’in kuruluş amacı KNO’lar dahil olmak üzere Milli Piyango
              İdaresi’nin onay verdiği şans ve bahis oyunları biletlerini
              satmaktan ibaret olup; 106 Dijital , üyelerinin bu amaçlar dışında
              hesaplarını kullandığını tespit ettiği takdirde, bu üyelere ait
              üyelikleri derhal kapatma hakkını haiz olmakla birlikte, 5549
              sayılı Suç Gelirlerinin Aklanması Hakkında Kanun uyarınca yükümlü
              sayıldığından, işbu durum derhal ilgili yetkili makamlara
              bildirilecektir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.4.</Text> Üye suç
              teşkil edecek, yasal takip gerektirecek; yerel, ulusal ya da
              uluslararası düzeyde hukuka ve kanunlara aykırı bir durum teşkil
              eden ya da teşvik eden hiçbir yasadışı, tehditkar, rahatsızlık
              verici hakaret ve küfür içeren, küçük düşürücü, kaba, pornografik
              ya da ahlaka aykırı hiçbir bilgiyi 106 Dijital’e hiçbir kanaldan
              iletemez. Ayrıca virüs veya başka zararlı unsur içeren türde
              bilgiyi, yazılımı ya da malzemeyi postalayamaz ya da iletemez. Bu
              hallerden en az birini gerçekleştirdiği tespit edilen üyelerin
              üyeliği 106 Dijital tarafından sonlandırılır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>4.4.5.</Text> 106
              Dijital, ilgili üyeliklerin ve bu üyeliklere bağlı 106 Dijital
              nezdinde açılan hesapların yasadışı para transferleri dahil olmak
              üzere kanunlara aykırı olarak kullanıldığını tespit etmesi halinde
              ilgili üyelikleri derhal hiçbir bildirimde bulunmaksızın
              sonlandırma, ilgili tutarları uygulanabilir mevzuat kapsamında
              aksi emredilmediği sürece aktarmayı reddetme ve/veya gönderilen
              kaynağa geri aktarma hakkını saklı tutar. Bu takdirde ilgili Üye
              hesabında bulunan ikramiye bedelleri Üye Banka Hesabı’na
              aktarılmaz ve ilgili bedellere dair yasal mercilerin vereceği
              kararlar nezdinde hareket edilir. Üye bu hallerde 106 Dijital’e
              karşı hiçbir talepte bulunmayacağını kabul, beyan ve taahhüt
              taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.</Text> Üye Hesabına
              Para Transferi İçin Genel Koşullar:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.1.</Text> Üyelerin
              Oyun Kanallarında oyun oynamaya başlayabilmeleri için, Sözleşmeli
              Bankaların 106 Dijital’deki Üye Hesabına alternatif ödeme
              kanalları veya EFT yoluyla para transferi yapması gerekmektedir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.2.</Text> Yabancı
              para cinsinden yapılan para transferleri Merkez Bankası Alış Kuru
              üzerinden hesaplanmakta ve Üye Hesaplarına aktarılmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.3.</Text> Bankalarca
              belirlenen minimum transfer tutarı, EFT ile üye hesabına yapılacak
              transferlerde geçerli olup, bankalarca tahsil edilen EFT giderleri
              üyeye aittir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.4.</Text> Üye
              tarafından üye hesabına yatırılan ve oyun ücreti olarak
              kullanılmayan tutarlar, işbu Sözleşme, mücbir sebepler ve kanunla
              getirilen düzenlemeler tarafından getirilen istisnai durumlar
              dışında, 106 Dijital’in garantisi altındadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.</Text> Üyeler,
              Üye hesaplarına yaptıkları transfer tutarlarından ve Üye hesabına
              doğru hesap numarasını girerek para transferi yapmaktan yalnızca
              kendileri sorumludur. Üye tarafından verilen ödeme emirlerinin tam
              ve doğru bir şekilde yerine getirilmemesi nedeniyle ortaya
              çıkabilecek her türlü hasar, kayıp ve tüm sorumluluk Üye'ye
              aittir. 106 Dijital, üye tarafından yapılan hatalı işlemlerde
              herhangi bir yasal sorumluluğa sahip değildir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.1.</Text> 106
              Dijital, kendi takdirine bağlı olarak, yanlış transferleri diğer
              üyenin Üye hesabına veya ödeme Üye olmayan bir kişi tarafından
              kendi takdirine bağlı olarak yapılmışsa ilgili kişinin banka
              hesabına yatırmayabilir. Ödemesi yanlış yapılan Üye, ödeme yapan
              ve Hesap Numarası yapılan ödeme eşleşmiyorsa bu iade işlemini geri
              çevrilemez şekilde kabul eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.5.2.</Text> 106
              Dijital, yapılan ödemeleri yanlış Hesap Numarasına iade etme
              yükümlülüğü altında değildir. Bu tutarlar ilgili kişinin banka
              hesabına yatırılabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.6.</Text> 106
              Dijital, Bankalardan kaynaklanan sorunlar ve / veya sistemik
              nedenlerden dolayı üyelerin, anlaşmalı bankaların alternatif ödeme
              kanalları aracılığıyla yaptığı ödemelerden veya üye hesaplarına
              geç EFT transferlerinden sorumlu değildir. Ancak, 106 Dijital
              üyenin başvurusunu dikkate alarak araştırma yapabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.7.</Text> Anlaşmalı
              banka bilgileri ve çalışılan banka kanalları, uygun görüldüğü
              üzere 106 Dijital tarafından değiştirilebilir. Üye, banka
              bilgileri ve çalışılan banka kanallarının 106 Dijital tarafından
              değiştirilmesi durumunda herhangi bir isim altında herhangi bir
              zarar ve/veya tazminat talep etmeyeceğini önceden kabul eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.1.8.</Text> 106
              Dijital, ilgili üyeliklerin ve bu üyeliklere bağlı
              piyangosepeti.com.tr’de açılan hesapların yasadışı para
              transferleri de dahil olmak üzere yasalara aykırı kullanıldığını
              tespit ederse, ilgili üyelikleri herhangi bir bildirimde
              bulunmaksızın feshetme, geçerli yasalar uyarınca aksi
              belirtilmedikçe ilgili tutarların aktarılmasını reddetme ve
              kaynağa geri aktarma hakkını saklı tutar. Bu durumda, ilgili Üye
              hesabındaki ikramiye ücretleri Üye hesabına aktarılmayacak ve
              ilgili ücretlerle ilgili yasal makamların kararları doğrultusunda
              hareket edecektir. Üye, bu durumlarda 106 Dijital aleyhinde
              herhangi bir iddiada bulunmayacağını önceden taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.</Text> Oyun
              Sırasında Genel Koşullar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.1.</Text> 106
              Dijital, hali hazırda oynanıp oynanmadıklarına bakılmaksızın, işbu
              Sözleşmede tanımlanan Oyun Kanallarını değiştirebilir, iptal
              edebilir veya yenilerini ekleyebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.2.</Text> 106
              Dijital tarafından belirlenen oyun kuralları (oyun açılış-kapanış
              bilgileri ve / veya oyun, sütun, bilet fiyatları, iptal prosedürü,
              vb.) Üyeler tarafından oynanan Oyunlar için geçerlidir. Bu oyun
              kuralları (oyun açılış-kapanış bilgileri ve / veya oyun, sütun,
              bilet fiyatları, iptal prosedürü, vb.) ilgili kurumlar tarafından
              ve/veya ilgili mevzuattaki değişiklik nedeniyle herhangi bir
              zamanda değiştirilebilir. Üyenin bu değişiklikler nedeniyle 106
              Dijital’den herhangi bir talep ve/veya tazminat hakkı yoktur. Oyun
              kuralları (oyun açılış-kapanış bilgileri ve / veya oyun, sütun,
              bilet fiyatları, iptal prosedürü vb.) ve yasal değişiklikler gibi
              detaylar{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>
              adresinden takip edilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.3.</Text> 106
              Dijital, oynanan oyunlar için limitler belirlemekte veya
              belirlememekte serbesttir. Üyeler, oyun kanallarında oynadıkları
              oyunlarda 106 Dijital tarafından bir limit belirlenirse, bu
              limitleri önceden kabul etmiş sayılırlar. 106 Dijital, limitler
              için belirlenen miktarı herhangi bir zamanda değiştirme hakkına
              sahiptir. Üyeler limit artışı talep edebilir. Bununla birlikte,
              Üyeler tarafından talep edilen ve 106 Dijital tarafından uygun
              görülen yeni Üye limitleri de 106 Dijital’in takdirindedir ve 106
              Dijital bu limitleri değiştirme hakkını saklı tutar. Üyeler, 106
              Dijital tarafından belirlenen dokümanları limit artışı için 106
              Dijital’e teslim etmekten sorumludur. Üyeler, oynadıkları şans
              oyunlarında, limitler dahilinde yaşadıkları maddi kayıplardan da
              kişisel olarak sorumludur, bu nedenle üyeler, 106 Dijital’in
              sorumlu olduğunu iddia edemez. 106 Dijital’in limit koyma
              konusunda herhangi bir sorumluluğu yoktur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.4.</Text> Oynanan
              oyunlarda, üye tarafından girilen oyunla ilgili bilgiler 106
              Dijital tarafından üstlenilecek ve işlenecektir. Bu nedenle, Üye,
              oyun tercihlerinin belirlenmesinden münhasıran sorumlu olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.2.5.</Text>{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('https://www.piyangosepeti.com.tr/')
                }
              >
                www.piyangosepeti.com.tr{' '}
              </Text>
              oyun kanallarına bağlantı fiyatı (İnternet, televizyon, cep
              telefonu aboneliği, wap / internet bağlantısı, SMS ücreti vb.) ve
              abonelik ve / veya ekstra kullanım ücretleri Üyeye aittir.
              <Text>
                SMS kanalı üzerinden yapılacak işlemler bir ücrete tabidir ve
                işlem türüne bağlı olarak farklı şekilde ücretlendirilebilir.
                106 Dijital, SMS kanalını kullanarak sağlanan tüm hizmetlerin
                fiyatlarını değiştirme hakkını saklı tutar. Üye, fiyat
                değişikliği nedeniyle 106 Dijital’den herhangi bir zarar ve
                tazminat talep etmeyeceğini önceden kabul, beyan ve taahhüt
                eder. SMS fiyatı faturalı hatlarda ilgili operatör faturasına
                yansıtılacak ve ön ödemeli hatlar için krediden düşülecektir.
                106 Dijital, operatörlerin tarifelerindeki değişikliklerden
                sorumlu değildir.
              </Text>
              <Text>
                106 Dijital, müşteri hizmetlerinden yapılacak işlemler için
                çağrı başına servis ücreti almakta serbesttir. 106 Dijital
                alınan hizmet kullanım ücretini değiştirme hakkını saklı tutar.
                Bu ücrette değişiklik yapıldığı takdirde, 106 Dijital bu
                bilgileri üyeleriyle paylaşmayı taahhüt eder.
              </Text>
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.3.</Text> Oyun İptal
              İşlemleri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>5.3.1.</Text> Üyenin
              satın aldığı Bilet iptal edilemez ve hiçbir şekilde
              değiştirilemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 6-</Text> Ek
              Hizmetler:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.1.</Text> İşbu
              Sözleşmenin ile etkileşimli alanların (forum alanları) kullanım
              koşulları da kabul edilmiş olmaktadır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.2.</Text> 106 Dijital
              tarafından verilen örnek Bilet, bilgilendirme vb. gibi ek
              hizmetler gibi alanlarda verilen bilgiler sadece yorum ve öneri
              amaçlıdır, 106 Dijital’in %100 doğru bilgi içerdiği iddia
              edilmemektedir ve bu konularda hiçbir sorumluluk kabul
              edilmemektedir. 106 Dijital’in bu yazı, biletler ve diğer ek
              hizmetlerden doğan sorumluluğu yoktur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.</Text> Kampanyalar
              ve Promosyonlar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.1.</Text> Üye, 106
              Dijital tarafından belirlenen kullanım / faydalanma koşulları
              çerçevesinde kampanya ve promosyonlardan yararlanabileceğini
              beyan, kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.2.</Text> 106
              Dijital, herhangi bir zamanda, kampanyaların ve promosyonların
              genel uygulama ve kullanım koşullarında tek taraflı değişiklik
              yapma hakkını saklı tutar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>6.3.3.</Text> 106
              Dijital, üyelerinin oyun oynama ve davranış analizlerini, kampanya
              ve promosyonlarda veya genel uygulamalarda dikkate alarak
              üyelerine farklı teklifler sunma, bu analizleri gerçekleştirme
              ve/veya sadakat programlarında değişiklik yapma hakkını saklı
              tutar. Tüm bu uygulamalar 106 Dijital tarafından belirlenen süre
              içinde geçerlidir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 7-</Text> İkramiye
              Teslimatları ve Hesap İşlemleri
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.</Text> Teslimatlar
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.1.</Text> İkramiye
              teslimleri 106 Dijital ya da alt bayiler tarafından kargo ile
              yapılabileceği gibi tescile tabi ödüller 106 Dijital ya da alt
              bayinin merkezinde de teslim edilebilir. İkramiye teslimi
              sırasında yasaların öngördüğü vergi ve diğer kesintiler
              dolayısıyla, üye tarafından 106 Dijital’den herhangi bir zarar ve
              kayıp talep edemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.2.</Text> KNO
              oyunlarında kazanılan ikramiyeler İdareye ait Şubeler aracılığıyla
              da talihlilere teslim edilebilir. Yurtdışına gönderilecek
              ikramiyeler için her türlü gönderi masrafı üyeler tarafından
              karşılanacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.3.</Text> Üyenin 106
              Dijital nezdindeki hesabına yatırdığı tutarlar, üyenin takdirine
              bağlı olsa bile, üçüncü tarafların banka hesaplarına aktarım
              yapılamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.4.</Text> Üye
              Hesaplarından iş emriyle Üye Banka Hesaplarına aktaracakları tutar
              en az 10 TL (On Türk Lirası) olmalıdır. Bu miktar 106 Dijital
              tarafından değiştirilebilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.5.</Text> 106
              Dijital yabancı hesaplara ödeme yapmak zorunda değildir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.6.</Text> 106
              Dijital genellikle para yatırmak veya para çekmek için bir ücret
              talep etmeyecektir. Ancak, para yatırma ve / veya para çekme
              işlevini kötüye kullandığınızdan şüphelenirsek, bu tür yanlış
              kullanımlarla ilgili olarak tarafımızdan yapılan masrafları
              karşılamak için sizden bir ücret talep etme hakkımızı saklı
              tutarız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.7.</Text> 106
              Dijital, kendi takdirine bağlı olarak, zaman zaman promosyonlar,
              ikramiyeler veya diğer özel teklifler sunma ve reklam verme
              hakkını saklı tutar ve bu tekliflerin her biri sınırlı bir süre
              için geçerli olacak belirli hüküm ve koşullara tabi olacaktır.
              Aşağıdakilerden herhangi birini kötüye kullandığınızdan veya
              kötüye kullanmaya çalıştığınızdan şüphelenmemiz durumunda,
              herhangi bir ödemeyi veya kazanç miktarını kesintiye uğratma veya
              reddetme veya tersine çevirme hakkımız olacaktır: (i) Üye
              hesaplarına yatırılan tutarlar; (ii) diğer promosyonlar; veya
              (iii) mevcut bir oyun veya yeni bir oyun ile ilgili olarak
              belirlenen belirli kurallar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.8.</Text> 106
              Dijital, üye tarafında dolandırıcılık veya hileli faaliyetlerden
              şüpheleniyorsa veya ödemelerinizden herhangi biri reddedilirse,
              hesabınızdan orijinal depozitonuzu aşan herhangi bir miktarı
              alıkoyma ve tarafımızdan gerekli görüldüğü takdirde, borçlusu
              olduğunuz ödemeleri tahsil etmek için herhangi bir yasal işlem
              başlatma hakkına sahip olacağız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>7.1.9.</Text> 106
              Dijital, ikramiyelerin doğru kişiye teslim edilmesini sağlamak
              için kazanan kişinin kimliği, bundan tatmin olacağımız
              doğrultusunda doğrulanana kadar herhangi bir teslimat yapmayı
              durdurma hakkına sahip olacaktır. Bu amaçla, tamamen kendi
              takdirimize bağlı olarak, yetki alanınızın yürürlükteki yasalarına
              göre veya başka bir şekilde bize noter tasdikli bir kimlik veya
              eşdeğer bir sertifikalı kimlik sağlamanızı talep etme hakkına
              sahip olacağız.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 8-</Text>{' '}
              Sorumluluk:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.1.</Text> 106 Dijital,
              oyun kanallarında vb. olası bağlantı kesilmesi, sistem arızaları,
              teknik mesajlar vb. nedeniyle hata, gecikmiş veri aktarımı veya
              iletişim hataları da dahil olmak üzere, ancak bunlarla sınırlı
              olmamak üzere, gönderilememe veya ertelenme nedeniyle ortaya çıkan
              ve/veya oluşabilecek zararlardan hiçbir şekilde sorumlu tutulamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.2.</Text> Oyunlarla
              ilgili bilgi girişi yalnızca 106 Dijital’in kontrolü altındadır.
              106 Dijital'den, oyunlar hakkında gerekli bilgiler verilmemesinden
              kaynaklı herhangi bir kayıp veya hasar talep edilemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.3.</Text> Üye,
              piyangosepeti.com.tr’ye işbu sözleşme kapsamındaki hizmetlere
              ilişkin yazılı, sözlü, internet ve / veya diğer elektronik medya
              aracılığıyla ilettiği bilgilerin doğru, eksiksiz ve güncel
              olduğunu beyan eder; bununla ilgili zararlardan sadece Üye sorumlu
              olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.4.</Text> 106 Dijital,
              Üye tarafından bildirilen yanlış bilgiler nedeniyle (GSM numarası
              ve e-posta adresinin doğru ve/veya etkin olmaması da dahil olmak
              üzere) veya teknik nedenlerden dolayı (SMS'in gönderildiği Üyenin
              SMS hattı açık olmaması, Üyenin telefon ayarları SMS almak için
              uygun olmaması nedeniyle bilgi mesajları vb. hava ve karasal
              iletim şebekesinde arızalar vb.) meydana gelen eksiklik, gecikme,
              doğrudan ve / veya dolaylı zararlardan sorumlu tutulamaz.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.5.</Text> İşbu
              Sözleşme uyarınca üyeye sunulan hizmetlerin kapsamı, 106 Dijital
              tarafından herhangi bir zamanda tek taraflı olarak
              genişletilebilir veya daraltılabilir veya durdurulabilir. 106
              Dijital, işbu Sözleşmedeki maddelerde değişiklik yapma hakkını
              saklı tutar. Bu nedenle, Üye, işbu Sözleşme ile kendisine sunulan
              hizmet kapsamının bir taahhüt olmadığını ve değişebileceğini
              önceden kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.6.</Text> Üye, 106
              Dijital tarafından sunulan hizmetlerin kullanımı sırasında üçüncü
              şahıslara ve/veya 106 Dijital’e ve piyangosepeti.com.tr’ye zarar
              vermesi durumunda bu tür hasarlardan kişisel olarak sorumlu
              olduğunu kabul, beyan ve taahhüt eder. Böyle bir durumda, ilgili
              üyelik 106 Dijital tarafından sonlandırılabilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.7.</Text> 106 Dijital
              web sitesinde yayınlanan tüm yazılı, resimli, ses grafik ve / veya
              grafik olmayan malzemeler ile tüm malzemelerin kullanım hakkını
              saklı tutar. Üyelik, 106 Dijitalin fikri mülkiyetidir ve 106
              Dijital’in sunduğu hizmet ve ürünlerle ilgili her türlü görsel ve
              işitsel materyaller ve bunların sunumları, 106 Dijital’in yazılı
              izni olmadan üye tarafından sahiplenilemez ve kullanılamaz ve
              bunları kopyalamak suretiyle kişisel ve genel kullanıma açamaz.
              Üye, bunları internet sayfalarında kullanmayacağını,
              yayınlamayacağını ve / veya pazarlama hakkına sahip olmayacağını
              kabul, beyan ve taahhüt eder. 106 Dijital’in hizmetin sağlanması
              için kullanılan yazılımın telif hakları Milli Piyango İdaresi’ne
              aittir ve Üye, bu yazılımı çoğaltmamayı, bir şekilde hizmet almak
              için hiçbir şekilde kullanmamayı taahhüt eder. 106 Dijital,
              üyelerin bu materyalleri kullanmaları veya
              piyangosepeti.com.tr’den bilgisi olmadan alıntı yapmaları
              durumunda herhangi bir sorumluluk kabul etmeyeceğini önceden beyan
              eder. Bu gibi durumlarda, tazminat hakkı, Milli Piyango
              idaresi’nin maruz kalacağı hasar ve kayıplar için saklı tutulur.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.8.</Text> Üçüncü
              şahıslarla ilgili olarak ortaya çıkabilecek ihtilaflarda; Üye,
              üçüncü şahısların tazminat taleplerinden 106 Dijital’in sorumlu
              tutulamayacağını önceden kabul ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.9.</Text> Üyeler, 106
              Dijital’i üçüncü şahıslar aracılığıyla 106 Dijital hesaplarına
              gönderdikleri paralar hakkında uğradıkları / uğrayabilecekleri
              kayıplardan sorumlu tutamazlar.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.10.</Text> İşbu
              Sözleşmedeki, 106 Dijital’in mesuliyetsizliğini öngören tüm
              düzenlemeler, 106 Dijital’in ağır kusuru halinde de geçerli
              olacaktır.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>8.11.</Text> İşbu
              Sözleşme kapsamında Üyelerin sorumluluğu altındaki konularda, 106
              Dijital’in tabi olacağı her türlü talep ve / veya ödeme için
              ilgili Üyelere rücu edilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Madde 9-</Text> Ortak
              Hükümler:
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.1.</Text> Bu Üyelik
              ilişkisi sanal bir ortamda oluştuğu için işbu Sözleşme, üyelik
              başvurusu talebi ve başvurunun 106 Dijital tarafından kabul
              edilmesi üzerine kurulur. Karşılıklı haklar ve yükümlülükler
              başvurunun kabulü üzerine yürürlüğe girer. Sözleşme tarihi,
              sözleşmenin yapıldığı tarih olarak kabul edilir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.2.</Text> Üye hiçbir
              şekilde işbu Sözleşmeden doğan hak ve yükümlülüklerini üçüncü
              kişilere aktaramaz ve devredemez.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.3.</Text> Üye, 106
              Dijital kayıtlarının geçerliliğini önceden kabul eder ve 106
              Dijital’in her türlü kayıt, belge ve defter kaydı ile 106
              Dijital’in her türlü bilgisayar ve ses kaydı, mikrofilmleri ve
              mikrofişlerinin bağlayıcı ve kesin delil teşkil edeceğini bunlara
              karşı her türlü defi ve itiraz haklarından feragat ettiğini; 106
              Dijital’i yemin teklifinden ber'i kıldığını ve Sözleşme’nin bu
              maddesinin 6100 sayılı Hukuk Muhakemeleri Kanunu’nun 193’üncü
              maddesi anlamında kesin delil sözleşmesi niteliğinde olduğunu
              kabul, beyan ve taahhüt eder.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.4.</Text> Taraflar,
              işbu Sözleşmenin uygulanmasından ve yorumlanmasından kaynaklanan
              uyuşmazlıkların çözümünde Türk Hukuku'nun uygulanmasını ve her
              türlü hukuki ilişkilerin yerine getirilme yeri konusunda İstanbul
              Çağlayan Mahkemeleri ve İcra dairelerinin yargı yetkisini kabul ve
              beyan etmişlerdir.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>9.5.</Text> Taraflar,
              yukarıda belirtilen adreslerinin yazılı olarak aksi
              belirtilmedikçe yasal bildirim adresleri olduğunu ve bu adreslere
              yapılacak yazılı bildirimlerin yasal olarak geçerli bildirimin tüm
              hukuki sonuçlarını doğuracağını kabul ve beyan etmişlerdir.
            </Text>
            <Text>
              İşbu Sözleşme 9 (dokuz) maddeden oluşmaktadır. Üye olmak
              isteyenler, Sözleşmenin tamamını okuduklarını, içeriklerindeki tüm
              makaleleri koşulsuz olarak kabul ettiklerini ve onayladıklarını
              taahhüt ederler.
            </Text>
            <Text>
              <Text style={[styles.staticPageSubTitle]}>Erişim bilgileri:</Text>
            </Text>
            <Text>106 DİJİTAL HİZMETLER VE ŞANS OYUNLARI A.Ş.</Text>
            <Text>
              Adres: İnönü Mh. Cumhuriyet Cd. Park Ap. No. 109/8 Şişli/İSTANBUL
            </Text>
            <Text>Destek Hattı: 0 850 260 11 60 Faks: 0 212 247 03 75</Text>
            <Text>
              E-Mail Addres:{' '}
              <Text
                style={{ color: 'blue' }}
                onPress={async () =>
                  await Linking.openURL('mailto:İnfo@piyangosepeti.com.tr')
                }
              >
                info@piyangosepeti.com.tr{' '}
              </Text>
              {/* <a href="mailto:İnfo@piyangosepeti.com.tr">İnfo@piyangosepeti.com.tr</a> */}
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default MembershipAgreementScreen;
