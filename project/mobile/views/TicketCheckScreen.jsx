import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { connect } from 'react-redux';
import styles from '@mobile/src/styles/common';
import { TouchableRipple } from 'react-native-paper';
import MessagesUtil from '@mobile/utils/MessageUtil';
import { StackActions } from '@react-navigation/native';
const GetEnv = require('@envFile');

const TicketCheckScreen = ({ navigation, mainState, token }) => {
  const { t } = useTranslation();

  // #region FORMIK
  const validationSchema = () => {
    return Yup.object().shape({
      hashCode: Yup.string().required(t('Register_Field_Text_9')),
    });
  };

  const formikInitialValues = {
    hashCode: '',
  };

  const OnSubmit = (values) => {
    navigation.navigate('ticketChecksDrawList', {
      hashCode: values.hashCode,
    });
  };
  // #endregion

  useLayoutEffect(() => {
    if (token) {
      navigation.dispatch(StackActions.replace('myTickets'));

      return;
    }

    if (GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE') {
      navigation.dispatch(StackActions.replace('login'));
    }
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
    >
      <MessagesUtil
        messageType="info"
        isShow
        customMessage="Ticket_Check_Info"
      />

      <View style={[styles.ticketCheckMain]}>
        <Text style={[styles.profileSectionMainTitle]}>
          {t('Ticket_Checks_Title_Text_1')}
        </Text>
        <Formik
          enableReinitialize
          initialValues={formikInitialValues}
          validationSchema={validationSchema()}
          onSubmit={(values) => {
            return OnSubmit(values);
          }}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <>
              <Field
                name="hashCode"
                label={t('Ticket_Checks_Text_3')}
                placeholder={t('Ticket_Checks_Text_3')}
                type="text"
                component={PSInputMobil}
                value={values.hashCode}
                onChange={(value) => setFieldValue('hashCode', value)}
              />
              <ButtonCLR
                tText="Ticket_Checks_Button_Text_1"
                mainState={mainState}
                whenResultCameSuccessDisabled
                onPressF={handleSubmit}
              />
            </>
          )}
        </Formik>

        <View>
          <Text style={[styles.ticketCheckOrText]}>veya</Text>
          <View style={[styles.ticketCheckLoginOrRegisterMain]}>
            <TouchableRipple onPress={() => {}}>
              <Text
                style={[styles.ticketCheckLoginOrRegisterText]}
                onPress={() => navigation.navigate('login')}
              >
                Giriş Yap{'  '}
              </Text>
            </TouchableRipple>
            <Text>yada{'  '}</Text>
            <TouchableRipple onPress={() => {}}>
              <Text
                style={[styles.ticketCheckLoginOrRegisterText]}
                onPress={() => navigation.navigate('register')}
              >
                Kayıt Ol{'  '}
              </Text>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.Ui_F_RegisterReducer.isOpen,
    token: state.UserReducer.token,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TicketCheckScreen);
