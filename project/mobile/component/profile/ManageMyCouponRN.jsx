import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ManageCouponAction } from '@service/actions/F_Actions';
import format from 'date-fns/format';
import DataTableRN from '@mobile/utils/DataTableRN';
import { View } from 'react-native';
import _styles from '@mobile/src/styles/common';
import LoaderUtil from '@mobile/utils/LoaderUtil';
import exact from 'prop-types-exact';

const ManageMyCouponRN = ({
  ManageCouponA,
  currentStatus,
  couponData,
  messageTypeAddCoupon,
}) => {
  const { t } = useTranslation();

  const dataR = () => {
    const data = [];
    if (couponData?.length > 0) {
      couponData.forEach((a) =>
        data.push([
          {
            value: format(new Date(a.expireDate.toString()), 'dd/MM/yyyy H:mm'),
            style: { flex: 1 },
            onPress: false,
          },
          { value: a.giftName, style: { flex: 1 }, onPress: false },
          {
            value: !a.isUsed ? t('Coupon_Text_10') : t('Coupon_Text_11'),
            style: { flex: 1 },
            onPress: false,
          },
          {
            value: a.description,
            style: { flex: 1 },
            onPress: false,
          },
        ])
      );
    }

    return data;
  };

  useEffect(() => {
    ManageCouponA();
  }, [messageTypeAddCoupon]);

  return (
    <View style={_styles.profileManageMyCoupon}>
      <DataTableRN
        tableTitle={t('Coupon_Text_6')}
        titleArray={[
          t('Coupon_Text_7'),
          t('Coupon_Text_8'),
          t('Coupon_Text_9'),
          t('Coupon_Text_13'),
        ]}
        dataArray={dataR()}
        errorRender={() =>
          currentStatus === 'loading' ? (
            <LoaderUtil currentStatus="loading" />
          ) : couponData <= 0 ? (
            <LoaderUtil
              currentStatus="error"
              customText={t('Coupon_Text_12')}
              btnBackIsNotVisible
            />
          ) : (
            <></>
          )
        }
      />
    </View>
  );
};

ManageMyCouponRN.propTypes = exact({
  ManageCouponA: PropTypes.func.isRequired,
  messageTypeAddCoupon: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
  couponData: PropTypes.array.isRequired,
});
ManageMyCouponRN.defaultProps = {};

const mapStateToProps = (state) => ({
  couponData: state.ManageCouponReducer.couponData,
  currentStatus: state.Ui_ManageCouponMessageReducer.currentStatus,
  messageTypeAddCoupon: state.Ui_AddCouponMessageReducer.messageType,
});

const mapDispatchToProps = {
  ManageCouponA: ManageCouponAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMyCouponRN);
