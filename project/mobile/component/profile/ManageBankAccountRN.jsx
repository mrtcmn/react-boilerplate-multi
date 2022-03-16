import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  ListBankAccountAction,
  ManageBankAccountRestAction,
  DeleteBankAccountAction,
} from '@service/actions/F_Actions';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import { Text, View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import { Modal, Portal, Provider } from 'react-native-paper';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import DataTableRN from '@mobile/utils/DataTableRN';

const ManageBankAccountRN = ({
  ListBankAccount,
  bankList,
  deleteButtonState,
  ManageBankAccountRest,
  DeleteBankAccount,
  listState,
}) => {
  const { t } = useTranslation();
  const [rowIndex, setRowIndex] = useState(-1);
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    ListBankAccount();
  }, []);

  const dataR = () => {
    const data = [];
    if (bankList?.length > 0) {
      bankList.forEach((a, index) =>
        data.push([
          {
            value: a.AccountName,
            style: { flex: 1 },
            onPress: false,
          },
          { value: a.IBAN, style: { flex: 1 }, onPress: false },
          {
            value: t('delete'),
            style: { flex: 1 },
            onPress: () => {
              showModal();
              setRowIndex(index);
            },
          },
        ])
      );
    }

    return data;
  };

  useEffect(() => {
    if (deleteButtonState === 'res-success') {
      const x = setTimeout(() => {
        ListBankAccount();
        ManageBankAccountRest();

        clearTimeout(x);
      }, 1500);
    }
  }, [deleteButtonState]);

  const OnSubmit = () => {
    DeleteBankAccount({
      accName: bankList[rowIndex].AccountName,
      iban: bankList[rowIndex].IBAN,
      requestType: 'DELETE',
    });
    hideModal();
  };

  return (
    <Provider>
      <View style={_styles.manageBankAccount}>
        <DataTableRN
          tableTitle={t('manage_bank_table_title')}
          titleArray={[
            t('table_bank_account_name'),
            'IBAN No',
            t('transactions'),
          ]}
          dataArray={dataR()}
          errorRender={() =>
            listState === 'loading' ? (
              <LoaderUtil currentStatus="loading" />
            ) : bankList <= 0 ? (
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
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={_styles.profileMenuModalContainer}
          >
            <View style={_styles.profileMenuDescription}>
              <Text style={_styles.profileMenuDescriptionText}>
                {t('manage_bank_account_warning_text')}
              </Text>
            </View>
            <View style={_styles.profileMenuButtonGroup}>
              <ButtonCLR
                mainState="initial"
                tText="no"
                onPressF={hideModal}
                fullWidth
                extraClass={[_styles.buttonStyle, { marginRight: 5 }]}
              />
              <ButtonCLR
                mainState="initial"
                tText="yes"
                onPressF={() => OnSubmit()}
                fullWidth
                extraClass={[_styles.buttonStyle, { marginLeft: 5 }]}
              />
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

ManageBankAccountRN.propTypes = {
  ListBankAccount: PropTypes.func.isRequired,
  ManageBankAccountRest: PropTypes.func.isRequired,
  DeleteBankAccount: PropTypes.func.isRequired,
  bankList: PropTypes.array.isRequired,
  deleteButtonState: PropTypes.string.isRequired,
  listState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  bankList: state.ListBankAccountReducer.bankList,
  deleteButtonState: state.ManageBankAccountReducer.deleteButtonState,
  listState: state.ListBankAccountReducer.listState,
});

const mapDispatchToProps = {
  ListBankAccount: ListBankAccountAction,
  ManageBankAccountRest: ManageBankAccountRestAction,
  DeleteBankAccount: DeleteBankAccountAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBankAccountRN);
