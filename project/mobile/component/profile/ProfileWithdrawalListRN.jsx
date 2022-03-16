import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { WithdrawalListAction } from '@service/actions/F_Actions';
import * as DateFns from 'date-fns';
import { Field, Formik } from 'formik';
import { Text, View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { PSDropdownMobil } from '@mobile/utils/FormElementUtil';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import { DataTable, Modal, Portal, Provider } from 'react-native-paper';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import DataTableRN from '@mobile/utils/DataTableRN';

const ProfileWithdrawalListRN = ({
  WithdrawalListAct,
  withdrawalData,
  listState,
  buttonState,
  setWithdrawalListCurrentStatus,
}) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({
    ddlStatus: -1,
  });
  const [visible, setVisible] = useState({ state: false, value: '' });
  const showModal = (a) => setVisible({ state: true, value: a });
  const hideModal = () => setVisible({ state: false, value: '' });
  const status = [
    {
      label: 'Hepsi',
      value: -1,
      key: -1,
    },
    {
      label: 'Onay Bekleyen',
      value: 0,
      key: 0,
    },
    {
      label: 'Onaylanmış',
      value: 1,
      key: 2,
    },
    {
      label: 'İptal Edilen',
      value: 2,
      key: 2,
    },
  ];

  useEffect(() => {
    WithdrawalListAct(initialValues.ddlStatus);
  }, []);

  const OnSubmit = (values) => {
    WithdrawalListAct(values.ddlStatus);
  };

  const dataR = () => {
    const data = [];
    if (withdrawalData?.length > 0) {
      withdrawalData.forEach((a) =>
        data.push([
          { value: a.AccountName, style: { flex: 1 }, onPress: false },
          { value: a.IBAN, style: { flex: 1 }, onPress: false },
          { value: `${a.Amount} ₺`, style: { flex: 1 }, onPress: false },
          {
            value: DateFns.format(
              new Date(a.RequestDate),
              'dd/MM/yyyy - HH:mm'
            ),
            style: { flex: 1 },
            onPress: false,
          },
          { value: a.Isapproved, style: { flex: 1 }, onPress: false },
        ])
      );
    }

    return data;
  };

  return (
    <View style={[{ marginBottom: 0 }]}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => {
          return OnSubmit(values);
        }}
      >
        {({ handleSubmit, values, setFieldValue, touched, errors }) => (
          <View style={_styles.profileWithdrawal}>
            <View style={_styles.subtitle}>
              <Text style={_styles.subtitleText}>{t('withdrawalHistory')}</Text>
            </View>
            <Field
              name="ddlStatus"
              id="ddlStatus"
              placeholder={t('Draw_History_Field_Text_2')}
              label={t('status')}
              component={PSDropdownMobil}
              value={values.ddlStatus}
              listData={status}
              onChange={(value) => {
                setInitialValues({ ...initialValues, ddlStatus: value });
                setWithdrawalListCurrentStatus(value);
              }}
            />
            <ButtonCLR
              tText="History_Button_5"
              mainState={buttonState}
              onPressF={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <View style={{ marginBottom: 0 }}>
        <DataTableRN
          tableTitle={t('withdrawalHistory')}
          titleArray={[
            t('accountName'),
            'IBAN No',
            t('transactionAmount'),
            t('transactionDate'),
            t('status'),
          ]}
          dataArray={dataR()}
          errorRender={() =>
            listState === 'loading' ? (
              <LoaderUtil currentStatus="loading" />
            ) : listState === 'error' ? (
              <LoaderUtil currentStatus="error" />
            ) : withdrawalData <= 0 ? (
              <LoaderUtil
                currentStatus="error"
                customText={t('dataIsNotFound')}
                btnBackIsNotVisible
              />
            ) : (
              <></>
            )
          }
        />
      </View>
    </View>
  );
};

ProfileWithdrawalListRN.propTypes = {
  WithdrawalListAct: PropTypes.func.isRequired,
  withdrawalData: PropTypes.array.isRequired,
  listState: PropTypes.string.isRequired,
  buttonState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  withdrawalData: state.WithdrawalListReducer.withdrawalData,
  listState: state.WithdrawalListReducer.listState,
  buttonState: state.WithdrawalListReducer.buttonState,
});

const mapDispatchToProps = {
  WithdrawalListAct: WithdrawalListAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileWithdrawalListRN);
