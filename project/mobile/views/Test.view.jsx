import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  PSCheckboxMobil,
  PSInputMobil,
  PSRadioMobil,
  PSInputMaskMobil,
  PSDropdownMobil,
  PSDatePickerMobil,
} from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import _styles from '../src/styles/utils/buttonBasket';

const TestView = ({}) => {
  const { t } = useTranslation();
  const [formikInitialValues, setFormikInitialValues] = useState({
    username: '',
    phone: '',
    password: '',
    rememberMe: 'unchecked',
    colors: '',
    date: new Date(),
  });

  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string()
        .min(3, t('Login_Error_Text_2'))
        .required(t('Register_Field_Text_9')),
      password: Yup.string().required(t('Register_Field_Text_9')),
      phone: Yup.string().required(t('Register_Field_Text_9')),
      rememberMe: Yup.lazy((value) => {
        console.log('dasd', value);
        if (value === 'unchecked') {
          return Yup.string().matches(
            value === 'unchecked',
            t('Register_Error_Text_4')
          );
        }

        return Yup.string();
      }),
      colors: Yup.string().required(t('Register_Field_Text_9')),
      date: Yup.string().required(t('Register_Field_Text_9')),
    });
  };

  const colorList = [
    {
      label: 'White',
      value: 'white',
    },
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ];

  return (
    <View style={[_styles.login]}>
      <Formik
        enableReinitialize
        initialValues={formikInitialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return console.log(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <>
            <Field
              name="date"
              placeholder="fdfd"
              label="fdfd"
              component={PSDatePickerMobil}
              value={values.date}
              onChange={(value) => setFieldValue('date', value)}
            />
            <Field
              name="username"
              placeholder="fdfd"
              label="fdfd"
              type="text"
              component={PSInputMobil}
              value={values.username}
            />
            <Field
              name="rememberMe"
              label="fdfd"
              component={PSCheckboxMobil}
              value={values.rememberMe}
              onChange={(value) => setFieldValue('rememberMe', value)}
            />
            <Field
              name="password"
              option={[
                { label: 'ddfd', valueKey: 'fdfd' },
                { label: 'ddfd', valueKey: 'fdfdr' },
              ]}
              component={PSRadioMobil}
              value={values.password}
              onChange={(value) => setFieldValue('password', value)}
            />
            <Field
              name="phone"
              placeholder="fdfd"
              label="fdfd"
              type="text"
              component={PSInputMaskMobil}
              value={values.phone}
              mask="([000]) [000] [00] [00]"
            />
            <Field
              name="colors"
              placeholder="fdfd"
              label="fdfd"
              component={PSDropdownMobil}
              value={values.colors}
              listData={colorList}
              onChange={(value) => setFieldValue('colors', value)}
            />

            <ButtonCLR
              tText="save"
              mainState="initial"
              whenResultCameSuccessDisabled
              onPressF={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

TestView.propTypes = exact({});

TestView.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TestView);
