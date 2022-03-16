import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_EXTRA_LARGE_2,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_REGULAR,
  FONT_SIZE_X_EXTRA_LARGE,
  FONT_SIZE_XX_EXTRA_LARGE,
  RESPONSIVE_LAYOUT,
} from '@mobile/src/styles/font.util';
import styleUtil from './styleUtil';

export default EStyleSheet.create({
  buttonBasket: {
    height: 60,
    marginHorizontal: 10,
  },
  buttonC: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftArea: {
    ...RESPONSIVE_LAYOUT.WIDTHs.w16,
    ...styleUtil.verticalAlign,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightArea: {
    ...RESPONSIVE_LAYOUT.WIDTHs.w7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
  },
  leftAreaReverse: {
    ...RESPONSIVE_LAYOUT.WIDTHs.w16,
    ...styleUtil.verticalAlign,
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  rightAreaReverse: {
    ...RESPONSIVE_LAYOUT.WIDTHs.w7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
  },
  leftAreaText: {
    fontSize: FONT_SIZE_EXTRA_LARGE_2,
    ...FONT_BOLD,
    marginRight: 20,
    marginLeft: 10,
  },
  priceText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_BOLD,
  },
  priceTextCount: {
    fontSize: FONT_SIZE_XX_EXTRA_LARGE,
    ...FONT_BOLD,
    marginRight: 5,
    marginBottom: 3,
  },
  priceTextBottom: {
    fontSize: FONT_SIZE_REGULAR,
    ...FONT_BOLD,
    marginBottom: 5,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
