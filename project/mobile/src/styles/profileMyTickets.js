import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FONT_BOLD,
  FONT_SIZE_LARGE,
  RESPONSIVE_LAYOUT,
} from '@mobile/src/styles/font.util';
import styleUtil from '@mobile/src/styles/utils/styleUtil';

export default EStyleSheet.create({
  drawPage: {
    ...styleUtil.profileMargin,
  },
  buttonGroup: {
    ...styleUtil.boxMarginVertical,
  },
  buttonItem: {
    paddingBottom: 0,
  },
  drawHistory: {},
  drawHistoryTitle: {
    ...styleUtil.profileTableTitle,
  },
  drawHistoryTitleText: {
    ...styleUtil.profileTableTitleText,
  },
  drawHistoryCard: {},
  dataTable: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '$primaryGrayBright',
  },
});
