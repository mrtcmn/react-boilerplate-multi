import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_REGULAR,
} from '@mobile/src/styles/font.util';
import styleUtil from './styleUtil';

export default EStyleSheet.create({
  'sl-message': {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  leftArea: {
    ...styleUtil.verticalAlign,
    flexDirection: 'row',
    marginBottom: 10,
  },
  rightArea: {
    ...styleUtil.verticalAlign,
  },
  leftAreaText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    marginLeft: 5,
  },
  rightAreaText: {
    fontSize: FONT_SIZE_REGULAR,
    ...FONT_REGULAR,
  },
});
