import {
  FONT_BOLD,
  FONT_SIZE_REGULAR,
  FONT_SIZE_LARGE,
  FONT_REGULAR,
} from '../font.util';

export default {
  verticalAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxMarginVertical: {
    marginVertical: 5,
  },
  profileMargin: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profileTableTitle: {
    borderBottomWidth: 0,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '$primaryGrayBright',
    backgroundColor: '$primaryGrayBright',
    padding: 10,
  },
  profileTableTitleText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  subTitleConstant: {
    subtitle: {
      marginVertical: 10,
    },
    subtitleText: {
      fontSize: FONT_SIZE_LARGE,
      ...FONT_BOLD,
      color: '$primaryGrayDarker',
    },
    subtitleTextLabel: {
      fontSize: FONT_SIZE_LARGE,
      ...FONT_BOLD,
      color: '$primaryGrayDarker',
    },
    inputSub: {
      marginVertical: 10,
    },
    inputSubText: {
      fontSize: FONT_SIZE_LARGE,
      ...FONT_REGULAR,
      color: '$primaryGray',
    },
    inputLinkText: {
      fontSize: FONT_SIZE_LARGE,
      ...FONT_REGULAR,
      color: '$primaryColorVivid',
    },
  },
};
