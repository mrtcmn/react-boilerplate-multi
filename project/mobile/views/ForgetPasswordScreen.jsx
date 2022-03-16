import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as DateFns from 'date-fns';
import * as Yup from 'yup';
import { tcNumberControl } from '@f/utils/tcNumberControl.util';
import { connect } from 'react-redux';
import {
  ForgetPasswordAction,
  ForgetPasswordResetAction,
} from '@service/actions/F_Actions';
import PropTypes from 'prop-types';
import { telephoneNumberInput } from '@f/utils/input.util';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { Field, Formik } from 'formik';
import { PSInputMaskMobil, PSInputMobil } from '@mobile/utils/FormElementUtil';
import _styles from '../src/styles/registerStyle';
const GetEnv = require('@envFile');

const initialValues = {
  tcNumber: '',
  telephoneNumber: '',
};

const validationSchema = (isCyprus) => {
  const { t } = useTranslation();
  const tcValidation = () => {
    if (!isCyprus) {
      return Yup.lazy((value) => {
        if (value) {
          if (value.toString().length < 11) {
            return Yup.string().min(11, t('Register_Error_Text_3'));
          }

          return Yup.mixed().test(
            'tcNumber',
            t('Register_Error_Text_12'),
            (item) => tcNumberControl(item)
          );
        }

        return Yup.number().required(t('Register_Field_Text_9'));
      });
    }

    return null;
  };

  return Yup.object().shape({
    ...tcValidation(),
    telephoneNumber: Yup.string()
      .min(14, t('Register_Error_Text_6'))
      .required(t('Register_Field_Text_9')),
  });
};

let routeTimeOut;
const ForgetPasswordScreen = ({
  FnForgetPassword,
  ForgetPasswordReset,
  buttonState,
  bottomMessageCode,
  bottomMessageIsOpen,
  bottomMessageType,
  forgetPassUserInfo,
  navigation,
}) => {
  const { t } = useTranslation();
  // const history = useHistory();
  const [telephoneNumberFormat, setTelephoneNumberFormat] = useState('');
  const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
  const handleChangeTelephone = (value) => {
    setTelephoneNumberFormat((prevState) =>
      telephoneNumberInput(value, prevState)
    );
  };

  const loginButtonState = (value, inputName) => {
    if (inputName === 'telephoneNumber') {
      handleChangeTelephone(value);
    }
  };

  useEffect(() => {
    if (
      DateFns.addMinutes(new Date(forgetPassUserInfo.addedDate), 3).getTime() >=
      new Date().getTime()
    ) {
      navigation.navigate('forgetPasswordSmsVerify');
    }
  }, []);

  useEffect(() => {
    if (bottomMessageType === 'success') {
      routeTimeOut = setTimeout(() => {
        ForgetPasswordReset();

        return navigation.navigate('forgetPasswordSmsVerify');
      }, 2500);
    }

    return () => {
      clearTimeout(routeTimeOut);
    };
  }, [bottomMessageType]);

  return (
    <View style={[_styles.loginRN]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(isCyprus)}
        onSubmit={(values) => {
          const tc = isCyprus ? {} : values.tcNumber;
          FnForgetPassword({
            phoneNumber: values.telephoneNumber.replace(/[^\d]/g, ''),
            ...tc,
          });
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <View>
            {isCyprus ? (
              <View />
            ) : (
              <Field
                name="tcNumber"
                label={t('Register_Field_Text_3')}
                placeholder={t('Register_Field_Text_3')}
                type="number"
                component={PSInputMobil}
                // maxLength="11"
                value={values.tcNumber}
                onChange={(val) => setFieldValue('tcNumber', val)}
              />
            )}

            <Field
              name="telephoneNumber"
              label={t('Register_Field_Text_6')}
              placeholder="(555) 555-55-55"
              type="text"
              value={values.telephoneNumber}
              component={PSInputMaskMobil}
              mask="([000]) [000] [00] [00]"
              onChange={(val) => setFieldValue('telephoneNumber', val)}
            />
            <ButtonCLR
              tText="ForgetPassword_Button_1"
              type="submit"
              mainState={buttonState}
              onPressF={handleSubmit}
              whenResultCameSuccessDisabled
            />
            {bottomMessageIsOpen ? (
              <MessagesUtil
                isShow={bottomMessageIsOpen}
                tText={bottomMessageCode}
                messageType={bottomMessageType}
                pageName="forgetPass"
              />
            ) : null}
          </View>
        )}
      </Formik>
    </View>
  );
};

ForgetPasswordScreen.defaultProps = {
  buttonState: 'initial',
  bottomMessageCode: 0,
  bottomMessageIsOpen: false,
  bottomMessageType: '',
};

ForgetPasswordScreen.propTypes = {
  FnForgetPassword: PropTypes.func.isRequired,
  ForgetPasswordReset: PropTypes.func.isRequired,
  buttonState: PropTypes.string,
  bottomMessageCode: PropTypes.number,
  bottomMessageIsOpen: PropTypes.bool,
  bottomMessageType: PropTypes.string,
  forgetPassUserInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  buttonState: state.ForgetPasswordReducer.buttonState,
  bottomMessageCode: state.ForgetPasswordReducer.bottomMessageCode,
  bottomMessageIsOpen: state.ForgetPasswordReducer.bottomMessageIsOpen,
  bottomMessageType: state.ForgetPasswordReducer.bottomMessageType,
  forgetPassUserInfo: state.ForgetPasswordUserInfoReducer,
});

const mapDispatchToProps = {
  FnForgetPassword: ForgetPasswordAction,
  ForgetPasswordReset: ForgetPasswordResetAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordScreen);
