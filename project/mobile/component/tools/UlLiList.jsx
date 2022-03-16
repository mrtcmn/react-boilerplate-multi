import React from 'react';
import { View, Text } from 'react-native';
import DotIcon from '@asset/images/icons/black-circle.svg';
import { SvgXml } from 'react-native-svg';
import styles from '@mobile/src/styles/common';

const UlLiList = ({ list }) => {
  return (
    <View style={[styles.cookieUlMain]}>
      {list.map((x, index) => (
        <View style={[styles.cookieUlLiMain]} key={index}>
          <SvgXml
            width={5}
            height={5}
            xml={DotIcon}
            fill="#000"
            style={[styles.cookieUlLiDotIcon]}
          />
          <Text>{x.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default UlLiList;
