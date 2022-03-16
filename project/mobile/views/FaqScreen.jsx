import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from '@mobile/src/styles/common';
import { connect } from 'react-redux';
import { FaqAction } from '@service/actions/F_Actions';
import { Ui_FaqAction } from '@service/actions/Ui_F_Actions';
import { useTranslation } from 'react-i18next';
import PlusIcon from '@asset/images/icons/plus.svg';
import MinusIcon from '@asset/images/icons/minus.svg';
import { SvgXml } from 'react-native-svg';

const FaqScreen = ({
  UiFaqA,
  isOpen,
  currentStatus,
  customText,
  faqA,
  faqData,
}) => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    faqA();

    if (isOpen) {
      return () =>
        UiFaqA({
          isOpen: false,
          currentStatus: '',
          customText: '',
        });
    }
  }, []);

  const activeFaqF = (index) => {
    if (activeFaq === index) {
      return setActiveFaq(null);
    }

    return setActiveFaq(index);
  };

  return (
    <ScrollView>
      <View style={[styles.staticPageMainWrapper]}>
        <Text style={[styles.staticPageMainTitle]}>{t('Faq_Title')}</Text>
        {isOpen ? null : faqData && faqData.data && faqData.data.length > 0 ? ( // /> //   customText={customText} //   currentStatus={currentStatus} //   btnBackIsNotVisible // <LoaderUi
          <View>
            {React.Children.toArray(
              faqData.data.map((item, index) => (
                <TouchableOpacity onPress={() => activeFaqF(index)}>
                  <View style={[styles.faqRowMain]}>
                    <View style={[styles.faqTitleAndIconMain]}>
                      <View
                        style={[
                          {
                            width: Dimensions.get('window').width - 40 - 50,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            { fontWeight: 'bold' },
                            activeFaq === index
                              ? styles.faqActiveColor
                              : { color: '#000' },
                          ]}
                        >
                          {item.question}
                        </Text>
                      </View>
                      {activeFaq === index ? (
                        <SvgXml
                          width={20}
                          height={20}
                          xml={MinusIcon}
                          fill="#003e66"
                        />
                      ) : (
                        <SvgXml
                          width={20}
                          height={20}
                          xml={PlusIcon}
                          fill="#000"
                        />
                      )}
                    </View>
                    <View
                      style={[
                        activeFaq !== index
                          ? styles.faqRowDescriptionClose
                          : {},
                      ]}
                    >
                      <Text>{item.answer}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    faqData: state.FaqReducer.faqData,
    isOpen: state.Ui_FaqReducer.isOpen,
    currentStatus: state.Ui_FaqReducer.currentStatus,
    customText: state.Ui_FaqReducer.customText,
  };
};

const mapDispatchToProps = {
  faqA: FaqAction,
  UiFaqA: Ui_FaqAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FaqScreen);
