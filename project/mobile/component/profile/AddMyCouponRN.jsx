import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { AddCouponAction } from '@service/actions/F_Actions';
import _styles from '@mobile/src/styles/common';
import { Text, View } from 'react-native';
import { PSInputMobil } from '@mobile/utils/FormElementUtil';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import {
  Ui_AddCouponButtonAction,
  Ui_AddCouponMessageAction,
} from '@service/actions/Ui_F_Actions';

const validationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    couponCode: Yup.string().required(t('Register_Field_Text_9')),
  });
};

const AddMyCouponRN = ({
  AddCouponA,
  buttonState,
  isOpen,
  messageType,
  message,
  Ui_AddCouponButtonA,
  Ui_AddCouponMessageA,
}) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({
    couponCode: '',
  });

  const OnSubmit = (values) => {
    AddCouponA({
      couponCode: values.couponCode,
    });
  };

  useEffect(() => {
    return () => {
      Ui_AddCouponButtonA({ mainState: 'initial' });
      Ui_AddCouponMessageA({
        isOpen: false,
        message: '',
        messageType: '',
      });
    };
  }, []);

  return (
    <View style={_styles.profileAddMyCoupon}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return OnSubmit(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <View style={_styles.formContainer}>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('Withdrawal_Text_5')}</Text>
            </View>
            <Field
              name="couponCode"
              type="number"
              label={t('Coupon_Text_2')}
              placeholder="XXXX"
              component={PSInputMobil}
              value={values.couponCode}
              onChange={(value) => setFieldValue('couponCode', value)}
            />
            <View style={_styles.subtitle}>
              <Text style={_styles.inputLinkText}>
                {`- ${t('Coupon_Text_4')}`}
              </Text>
            </View>
            <ButtonCLR
              tText="Coupon_Text_3"
              mainState={buttonState}
              onPressF={handleSubmit}
            />
            {isOpen ? (
              <MessagesUtil
                isShow={isOpen}
                tText={message}
                messageType={messageType}
                pageName="AddCoupon"
              />
            ) : null}
          </View>
        )}
      </Formik>
    </View>
  );
};

AddMyCouponRN.propTypes = {
  AddCouponA: PropTypes.func.isRequired,
  Ui_AddCouponButtonA: PropTypes.func.isRequired,
  Ui_AddCouponMessageA: PropTypes.func.isRequired,
  buttonState: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  buttonState: state.Ui_F_AddCouponButtonReducer.mainState,
  isOpen: state.Ui_AddCouponMessageReducer.isOpen,
  message: state.Ui_AddCouponMessageReducer.message,
  messageType: state.Ui_AddCouponMessageReducer.messageType,
});

const mapDispatchToProps = {
  AddCouponA: AddCouponAction,
  Ui_AddCouponButtonA: Ui_AddCouponButtonAction,
  Ui_AddCouponMessageA: Ui_AddCouponMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMyCouponRN);
