import EStyleSheet from 'react-native-extended-stylesheet';
import { FONT_BOLD, FONT_SIZE_LARGE } from '@mobile/src/styles/font.util';

export default EStyleSheet.create({
  buttonCLR: {
    height: 50,
  },
  buttonText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
  },
  isActiveButton: {
    display: 'flex',
  },
  fullWidth: {
    width: '100%',
  },
  loading: {
    display: 'flex',
  },
  'res-success': {
    display: 'flex',
  },
  'res-failed': {
    display: 'flex',
  },
});
