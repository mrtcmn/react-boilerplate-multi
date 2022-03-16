import Section from '@mobile/component/tools/Section';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { PromotionAction } from '@service/actions/F_Actions';
import { Formik, Field } from 'formik';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import MessagesUtil from '@mobile/utils/MessageUtil';
import * as Yup from 'yup';
import { PSCheckboxMobil } from '@mobile/utils/FormElementUtil';
import styles from '@mobile/src/styles/common';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';

const validationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    promotion: Yup.bool().required(t('Register_Field_Text_9')),
  });
};

const ProfilePromotionRN = ({
  userData,
  PromotionA,
  isOpen,
  message,
  messageType,
  mainState,
}) => {
  const { t } = useTranslation();
  const initialValues = {
    promotion: userData.IsPromotion,
  };

  return (
    <Section>
      <Text style={[styles.profileSectionMainTitle]}>
        {t('Profile_Promotion_Title_Text_1')}
      </Text>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={(values) => {
          return console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Field
              name="promotion"
              component={PSCheckboxMobil}
              onChange={(value) => props.setFieldValue('promotion', value)}
              label={t('Profile_Promotion_Field_Text_1')}
              value={props.values.promotion}
            />
            <ButtonCLR
              tText="Profile_Promotion_Button_1"
              // onPressF={props.handleSubmit}
              mainState={mainState}
              disabled={userData.IsPromotion === props.values.promotion}
              onPressF={() =>
                PromotionA({ allowPromotion: props.values.promotion ? 1 : 0 })
              }
            />
            {isOpen ? (
              <MessagesUtil
                isShow={isOpen}
                tText={message}
                messageType={messageType}
                pageName="promotion"
              />
            ) : null}
          </View>
        )}
      </Formik>
    </Section>
  );
};

ProfilePromotionRN.propTypes = exact({
  userData: PropTypes.object,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  messageType: PropTypes.string,
  mainState: PropTypes.string,
  PromotionA: PropTypes.func,
});
ProfilePromotionRN.defaultProps = {
  userData: {},
  isOpen: false,
  message: '',
  messageType: '',
  mainState: 'initial',
  PromotionA: () => {},
};

const mapStateToProps = (state) => {
  return {
    userData: state.UserReducer.userData,
    isOpen: state.Ui_PromotionMessageReducer.isOpen,
    message: state.Ui_PromotionMessageReducer.message,
    messageType: state.Ui_PromotionMessageReducer.messageType,
    mainState: state.Ui_PromotionMessageReducer.mainState,
  };
};

const mapDispatchToProps = {
  PromotionA: PromotionAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePromotionRN);
