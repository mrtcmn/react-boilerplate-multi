import React from 'react';
import { View } from 'react-native';
import styles from '@mobile/src/styles/common';

const Section = ({ children }) => {
  return <View style={[styles.sectionMain]}>{children}</View>;
};

export default Section;
