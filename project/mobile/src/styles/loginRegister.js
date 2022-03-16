import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_REGULAR,
  FONT_SIZE_X_EXTRA_LARGE,
  RESPONSIVE_LAYOUT,
} from '@mobile/src/styles/font.util';
import { Dimensions } from 'react-native';
import styleUtil from './utils/styleUtil';

const { width } = Dimensions.get('window');

export default EStyleSheet.create({
  loginRegister: {
    padding: 10,
    marginTop: 10,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'column',
  },
  registerRoute: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 20,
  },
  registerRouteText: {
    textAlign: 'center',
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
    marginBottom: 10,
  },
  dividerLR: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  dividerLRText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  textOverflow: {
    position: 'absolute',
    top: -10,
    width: width - 20,
    display: 'flex',
    alignItems: 'center',
  },
  textWrapper: {
    backgroundColor: '$primaryGrayBrighter',
    paddingHorizontal: 5,
  },
});
