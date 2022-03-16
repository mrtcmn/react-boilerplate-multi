import { useTranslation } from 'react-i18next';
import React, { memo, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '@mobile/src/styles/common';
import { Field, Formik, useFormik } from 'formik';
import { tr } from 'date-fns/locale';
import { connect } from 'react-redux';
import { DrawResultListAction } from '@service/actions/F_Actions';
import { Ui_DrawResultListButtonAction } from '@service/actions/Ui_F_Actions';
import * as Yup from 'yup';
import GetYears from '@f/utils/years';
import { PSDropdownMobil } from '@mobile/utils/FormElementUtil';
import ButtonCLR from '@mobile/utils/ButtonCLR';
import { TouchableRipple } from 'react-native-paper';
import ImageViewerRN from '@mobile/component/Image.viewer.rn';
import { format } from 'date-fns';
import LoaderUtil from '@mobile/utils/LoaderUtil';

const DrawResultScreen = ({
  navigation,
  getDrawResultList,
  drawResultListData,
  drawResultListState,
  mainState,
  currentStatus,
  message,
}) => {
  const { t } = useTranslation();
  const [ddlYearsOptions, setDdlYearsOptions] = useState([]);
  const [drawResultArrayList, setDrawResultArrayList] = useState([]);

  const monthsA = () => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      months.push({
        key: i + 1,
        value: tr.localize.month(i),
        label: tr.localize.month(i),
      });
    }

    return months;
  };

  const apiDrawResult = (value) => {
    const mouthKey = monthsA().filter((item) => item.value === value.month)[0]
      .key;

    const drawDate = `${value.year}-${mouthKey}-1`;

    return getDrawResultList({
      drawDate,
    });
  };

  // #region FORMIK
  const validationSchema = () => {
    return Yup.object().shape({
      year: Yup.string(),
      month: Yup.string(),
    });
  };

  const initialValues = {
    year: new Date().getFullYear().toString(),
    month: monthsA()[new Date().getMonth()].value,
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit: (values) => {
      apiDrawResult(values);
    },
    enableReinitialize: true,
    validationSchema: validationSchema(),
  });
  // #endregion

  // #region useEffects
  useEffect(() => {
    const years = GetYears();
    const newDdlYearsOptions = [];

    years.map((x) =>
      newDdlYearsOptions.push({
        label: x.text,
        value: x.value,
        key: x.key,
      })
    );

    setDdlYearsOptions(newDdlYearsOptions);

    apiDrawResult(initialValues);
  }, []);

  useEffect(() => {
    const newArray = [];
    if (Object.keys(drawResultListData).length > 0) {
      Object.keys(drawResultListData).map((x) =>
        newArray.push(drawResultListData[x])
      );
    }
    setDrawResultArrayList(newArray);
  }, [drawResultListData]);
  // #endregion

  // #region FLATLIST
  const header = memo(() => {
    return (
      <View
        style={[{ padding: 10, marginBottom: 10, backgroundColor: 'white' }]}
      >
        <Text style={[styles.profileSectionMainTitle]}>
          {t('Draw_Result_List_Title')}
        </Text>

        <Formik>
          <View>
            <Field
              name="year"
              id="year"
              listData={ddlYearsOptions}
              value={formikProps.values.year}
              label={`${t('Draw_History_Field_Text_1')}`}
              placeholder={t('Draw_History_Field_Text_1')}
              fluid
              selection
              component={PSDropdownMobil}
              onChange={(val) => {
                formikProps.setFieldValue('year', val);
              }}
            />
            <Field
              name="month"
              id="month"
              listData={monthsA()}
              value={formikProps.values.month}
              label={`${t('Draw_History_Field_Text_2')}`}
              placeholder={t('Draw_History_Field_Text_2')}
              fluid
              selection
              component={PSDropdownMobil}
              onChange={(val) => {
                formikProps.setFieldValue('month', val);
              }}
            />
            <ButtonCLR
              tText="Ticket_Checks_Button_Text_1"
              mainState={mainState}
              whenResultCameSuccessDisabled
              onPressF={formikProps.handleSubmit}
            />
          </View>
        </Formik>
      </View>
    );
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableRipple
        onPress={() => {
          navigation.navigate('drawResultDetail', { drawID: item.DrawId });
        }}
        style={[styles.drawResultRenderMain]}
      >
        <View>
          <ImageViewerRN
            sizeEnum="box-thumb"
            imageName={item.DrawPicture}
            style={[styles.drawResultRenderImage]}
          />

          <View style={[{ paddingHorizontal: 10 }]}>
            <View style={[styles.drawResultRenderTextMain]}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {item.DrawName}
              </Text>
              <Text style={{ textAlign: 'center' }}>
                {format(new Date(item.StartDate), 'dd-MM-yyyy')}
              </Text>
            </View>

            <ButtonCLR
              tText="Draw_Result_List_Tickets_Button"
              type="button"
              onPressF={() =>
                navigation.navigate('drawResultDetail', { drawID: item.DrawId })
              }
            />
          </View>
        </View>
      </TouchableRipple>
    );
  };
  // #endregion

  return (
    <FlatList
      ListHeaderComponent={header}
      data={drawResultArrayList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => {
        return (
          <LoaderUtil
            currentStatus={currentStatus}
            customText={
              message === '-1000'
                ? t('generic_response_code_-1000')
                : t('generic_response_code_-502')
            }
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    drawResultListData: state.DrawResultReducer.drawResultList,
    drawResultListState: state.DrawResultReducer.drawResultListState,
    mainState: state.Ui_F_DrawResultListReducer.mainState,
    message: state.Ui_F_DrawResultListReducer.message,
    currentStatus: state.Ui_F_DrawResultListReducer.currentStatus,
  };
};

const mapDispatchToProps = {
  getDrawResultList: DrawResultListAction,
  setButtonError: Ui_DrawResultListButtonAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawResultScreen);
