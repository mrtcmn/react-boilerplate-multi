import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_REGULAR,
} from '@mobile/src/styles/font.util';
import styleUtil from './styleUtil';

export default EStyleSheet.create({
  loaderUtil: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderUtilText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
});
