import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import _styles from '@mobile/src/styles/common';
import { useTranslation } from 'react-i18next';
import exact from 'prop-types-exact';
import PropTypes from 'prop-types';

const DataTableRN = ({ tableTitle, titleArray, dataArray, errorRender }) => {
  const { t } = useTranslation();

  return (
    <View style={_styles.dataTable}>
      {tableTitle ? (
        <View style={_styles.tableTitle}>
          <Text style={_styles.tableTitleText}>{tableTitle}</Text>
        </View>
      ) : (
        <View />
      )}
      {dataArray?.length > 0 ? (
        <View style={_styles.dataTableContent}>
          <View style={_styles.dataTableContentItem}>
            {React.Children.toArray(
              titleArray.map((item) => (
                <View>
                  <Text style={_styles.dataTableContentItemTextBold}>
                    {item}
                  </Text>
                </View>
              ))
            )}
          </View>
          <View>
            {React.Children.toArray(
              dataArray.map((item, index) => (
                <View
                  style={[
                    _styles.dataTableContentItem,
                    {
                      borderBottomWidth: index + 1 === dataArray.length ? 0 : 1,
                    },
                  ]}
                >
                  {React.Children.toArray(
                    item.map((items, i) =>
                      items.onPress ? (
                        <TouchableOpacity
                          style={[_styles.dataTableCellButton, items.style]}
                          onPress={() => items.onPress()}
                        >
                          <Text
                            style={[_styles.dataTableContentItemTextButton]}
                          >
                            {items.value}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View style={[_styles.dataTableCell, items.style]}>
                          <Text
                            style={[
                              _styles[
                                i === 0
                                  ? 'dataTableContentItemTextBold'
                                  : 'dataTableContentItemText'
                              ],
                            ]}
                          >
                            {items.value}
                          </Text>
                        </View>
                      )
                    )
                  )}
                </View>
              ))
            )}
          </View>
        </View>
      ) : (
        <View style={_styles.dataTableContent}>{errorRender()}</View>
      )}
    </View>
  );
};

DataTableRN.propTypes = exact({
  tableTitle: PropTypes.string,
  titleArray: PropTypes.array,
  dataArray: PropTypes.array,
  errorRender: PropTypes.func,
});
DataTableRN.defaultProps = {
  tableTitle: '',
  titleArray: [],
  dataArray: [],
  errorRender: () => {},
};

export default DataTableRN;
