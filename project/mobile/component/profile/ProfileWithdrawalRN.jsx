import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ListBankAccountAction,
  ManageWithdrawalAction,
  ManageWithdrawalResetAction,
  WithdrawalListAction,
  UserBalanceAction,
} from '@service/actions/F_Actions';
import { GetSplitNumberToDigits } from '@utils/numberFormat';
import ProfileWithdrawalListRN from '@mobile/component/profile/ProfileWithdrawalListRN';
import { Text, View, TouchableOpacity } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { PSDropdownMobil, PSInputMobil } from '@mobile/utils/FormElementUtil';
import MessagesUtil from '@mobile/utils/MessageUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';

const limit = {
  limitAmount: 500,
  withdrawableAmount: 450,
};

const ProfileWithdrawalRN = ({
  ddlBankList,
  ListBankAccount,
  addBankAccountMessageType,
  userData,
  buttonState,
  messageCode,
  messageShow,
  messageType,
  ManageWithdrawal,
  ManageWithdrawalReset,
  WithdrawalListAct,
  UserBalanceAct,
  navigation,
}) => {
  const { t } = useTranslation();
  const [listData, setListData] = useState([]);
  const [initialValues, setInitialValues] = useState({
    iban: '',
    amount: '',
  });
  const [withdrawalListCurrentStatus, setWithdrawalListCurrentStatus] =
    useState(-1);

  const validationSchema = () => {
    return Yup.object().shape({
      iban: Yup.string().required(t('Register_Field_Text_9')),
      amount: Yup.lazy((value) => {
        if (value) {
          const replaceValue = value.replace(/[^0-9]+/g, '');

          return Yup.mixed().test(
            'amount',
            t('Withdrawal_Error_Text_4'),
            () => !(limit.withdrawableAmount - Number(replaceValue) < 0)
          );
        }

        return Yup.string().required(t('Withdrawal_Error_Text_3'));
      }),
    });
  };

  const changeTarget = (value) => {
    const replaceValue = value.replace(/[^0-9]+/g, '');

    const formatter = new Intl.NumberFormat('tr-TR', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      style: 'currency',
      currency: 'TRY',
    });
    if (replaceValue === '') {
      return undefined;
    }

    return formatter.format(replaceValue);
  };

  // #region useEffects
  useEffect(() => {
    ListBankAccount();
    ManageWithdrawalReset();
  }, []);

  useEffect(() => {
    const data = [];
    if (ddlBankList?.length > 0) {
      ddlBankList.forEach((a) =>
        data.push({ key: a.key, label: a.text, value: a.value })
      );

      return setListData(data);
    }
  }, [ddlBankList]);

  useEffect(() => {
    if (addBankAccountMessageType === 'success') {
      ListBankAccount();
    }
  }, [addBankAccountMessageType]);

  useEffect(() => {
    if (messageType === 'success') {
      const x = setTimeout(() => {
        clearTimeout(x);
        WithdrawalListAct(withdrawalListCurrentStatus);
        UserBalanceAct();
        ManageWithdrawalReset();
      }, 1500);
    }
  }, [messageType]);
  // #endregion

  const OnSubmit = (values) => {
    ManageWithdrawal({
      customerIbanId: values.iban,
      amount: values.amount,
      requestType: 'INSERT',
    });
  };

  return (
    <>
      <View style={_styles.profileWithdrawal}>
        <View style={_styles.subtitle}>
          <Text style={_styles.subtitleText}>{t('Withdrawal_Text_4')}</Text>
        </View>
        <View style={_styles.withdrawalCard}>
          <View style={_styles.subtitle}>
            <Text style={_styles.subtitleText}>{`${t(
              'Withdrawal_Text_3'
            )}: `}</Text>
            <Text style={_styles.subtitleText}>
              {GetSplitNumberToDigits(userData.Balance)} ₺
            </Text>
          </View>
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
                <Field
                  name="iban"
                  placeholder={t('Withdrawal_Field_Text_1')}
                  label={t('Withdrawal_Field_Text_4')}
                  component={PSDropdownMobil}
                  value={values.iban}
                  listData={listData}
                  onChange={(value) => setFieldValue('iban', value)}
                />
                <TouchableOpacity
                  style={[_styles.inputSub, { marginTop: -10 }]}
                  onPress={() => navigation.navigate('bankAccount')}
                >
                  <Text style={_styles.inputLinkText}>
                    {t('goBankAccount')}
                  </Text>
                </TouchableOpacity>
                <Field
                  name="amount"
                  type="number"
                  label={t('Withdrawal_Field_Text_2')}
                  placeholder={t('Withdrawal_Field_Text_2')}
                  component={PSInputMobil}
                  value={values.amount}
                  onChange={(value) => setFieldValue('amount', value)}
                />
                <View style={_styles.subtitle}>
                  <Text style={_styles.subtitleText}>
                    - Para çekme işlemleriniz hafta içi 08:00 - 18:00 saatleri
                    arasında uygulanır.
                  </Text>
                </View>
                <ButtonCLR
                  tText="btnWithdrawal"
                  mainState={buttonState}
                  whenResultCameSuccessDisabled
                  onPressF={handleSubmit}
                />
                {messageShow ? (
                  <MessagesUtil
                    messageType={messageType}
                    tText={messageCode}
                    isShow={messageShow}
                    pageName="withdrawal"
                  />
                ) : (
                  <View />
                )}
              </View>
            )}
          </Formik>
        </View>
      </View>
      <ProfileWithdrawalListRN
        setWithdrawalListCurrentStatus={setWithdrawalListCurrentStatus}
      />
    </>
  );
};

ProfileWithdrawalRN.propTypes = {
  ddlBankList: PropTypes.array.isRequired,
  ListBankAccount: PropTypes.func.isRequired,
  addBankAccountMessageType: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
  buttonState: PropTypes.string.isRequired,
  messageCode: PropTypes.number.isRequired,
  messageShow: PropTypes.bool.isRequired,
  messageType: PropTypes.string.isRequired,
  ManageWithdrawal: PropTypes.func.isRequired,
  ManageWithdrawalReset: PropTypes.func.isRequired,
  WithdrawalListAct: PropTypes.func.isRequired,
  UserBalanceAct: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ddlBankList: state.ListBankAccountReducer.ddlBankList,
  addBankAccountMessageType: state.ManageBankAccountReducer.messageType,
  userData: state.UserReducer.userData,
  buttonState: state.ManageWithdrawalReducer.buttonState,
  messageCode: state.ManageWithdrawalReducer.messageCode,
  messageShow: state.ManageWithdrawalReducer.messageShow,
  messageType: state.ManageWithdrawalReducer.messageType,
});

const mapDispatchToProps = {
  ListBankAccount: ListBankAccountAction,
  ManageWithdrawal: ManageWithdrawalAction,
  ManageWithdrawalReset: ManageWithdrawalResetAction,
  WithdrawalListAct: WithdrawalListAction,
  UserBalanceAct: UserBalanceAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileWithdrawalRN);
