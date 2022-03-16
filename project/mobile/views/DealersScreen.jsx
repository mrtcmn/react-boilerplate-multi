import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import styles from '@mobile/src/styles/common';
import HepsiBuradaLogo from '@asset/images/logos/bayiler-logo/hepsiburada.png';
import TatilSepetiLogo from '@asset/images/logos/bayiler-logo/tatilsepeti.png';
import GarajSepetiLogo from '@asset/images/logos/bayiler-logo/garaj-sepeti-logo.png';
import MisliLogo from '@asset/images/logos/bayiler-logo/misli.png';

const screen = Dimensions.get('window');

const DealersScreen = () => {
  return (
    <ScrollView>
      <View
        style={[
          styles.staticPageMainWrapper,
          { minHeight: screen.height - 60 },
        ]}
      >
        <Text
          style={[
            styles.staticPageSubTitle,
            { fontStyle: 'italic', textAlign: 'center', marginBottom: 40 },
          ]}
        >
          Piyangosepeti eşya piyangosu biletlerini elektronik bayilerimiz
          kanalıyla da alıp, heyecana ortak olabilirsiniz...
        </Text>

        <Text style={[styles.staticPageMainTitle]}>Bayilerimiz</Text>

        <View style={[styles.dealersImageMain]}>
          <TouchableOpacity
            onPress={async () =>
              await Linking.openURL(
                'https://www.hepsiburada.com/staticpage/312056580590808'
              )
            }
          >
            <Image style={[styles.dealersImage]} source={HepsiBuradaLogo} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              await Linking.openURL('https://www.misli.com/dijital-oyunlar')
            }
          >
            <Image style={[styles.dealersImage]} source={MisliLogo} />
          </TouchableOpacity>
        </View>

        {/* <Text style={[styles.staticPageMainTitle, { marginTop: 40 }]}>
          YAKINDA BİZLERLE
        </Text>

        <View style={[styles.dealersImageMain]}>
          <TouchableOpacity
            onPress={async () =>
              await Linking.openURL('https://www.tatilsepeti.com/')
            }
          >
            <Image style={[styles.dealersImage]} source={TatilSepetiLogo} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () =>
              await Linking.openURL('https://www.araba.com/cekilisler')
            }
          >
            <Image style={[styles.dealersImage]} source={GarajSepetiLogo} />
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default DealersScreen;
