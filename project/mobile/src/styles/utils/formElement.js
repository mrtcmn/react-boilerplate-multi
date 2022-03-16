import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_EXTRA_LARGE,
  RESPONSIVE_LAYOUT,
} from '@mobile/src/styles/font.util';
import styleUtil from './styleUtil';

export default EStyleSheet.create({
  'ps-input': {
    marginVertical: 10,
  },
  textInput: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
  },
  errorText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
  },
  helperText: {
    textAlign: 'right',
  },
  'ps-checkbox': {},
  checkboxLabel: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_REGULAR,
  },
  'ps-radio': {},
  radioLabel: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_REGULAR,
  },
  dropdownText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
  },
  dropdownSelectedText: {
    color: '$primaryColorVivid',
  },
  'ps-datepicker': {
    paddingVertical: 10,
  },
  datePickerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '$mainBackground',
    borderRadius: 5,
    borderWidth: 0,
  },
  dateText: {
    color: '$primaryColorVivid',
    backgroundColor: '$mainBackground',
  },
});
