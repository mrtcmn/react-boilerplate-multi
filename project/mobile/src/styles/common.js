import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, Platform } from 'react-native';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_REGULAR,
  FONT_SIZE_X_EXTRA_LARGE,
  FONT_SIZE_X_MEDIUM,
} from '@mobile/src/styles/font.util';
import styleUtil from '@mobile/src/styles/utils/styleUtil';

const snippet = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
};

const { width, height } = Dimensions.get('window');
export default EStyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '$mainBackground',
  },
  matchDetailsScrollMargin: {
    marginTop: 290,
  },
  matchDetailsScrollSubMargin: {
    marginTop: 330,
  },

  statusbar: '$topStatusSafe',
  safeAreaTop: {
    flex: 0,
    backgroundColor: '$topStatusSafe',
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: '$primaryColor',
    paddingBottom: 24,
  },
  homeHeader: {
    backgroundColor: '$mainBackground',
  },
  balanceContainer: {
    position: 'absolute',
    right: 40,
    display: 'flex',
    flexDirection: 'column',
  },
  balanceText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_BOLD,
    color: '$primaryGray',
  },
  bonusText: {
    fontSize: FONT_SIZE_MEDIUM,
    ...FONT_REGULAR,
    color: '$primaryGray',
    textAlign: 'right',
  },
  homeHeaderIcon: {
    paddingLeft: 5,
    paddingRight: 5,
  },

  logoWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    flex: 1,
  },
  homeLogoMPI: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  homeLogo: {
    width: 90,
    height: 35,
    resizeMode: 'contain',
  },
  cyprusHomeLogo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
  homeSliderImage: {
    width,
    height: width / 2.4,
    resizeMode: 'contain',
  },
  colorfulTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '$primaryColorVivid',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  drawBoxMain: {
    backgroundColor: '$mainBackground',
    width: width - 20,
    height: width * 0.65,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    ...snippet.shadow,
    borderRadius: 10,
  },
  drawBoxPrice: {
    position: 'absolute',
    height: width * 0.53,

    top: 0,
    right: 5,
    width: 50,
    zIndex: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawBoxPriceMain: {
    width: 30,
    height: 30,
    zIndex: 10,
    borderRadius: 10,
    backgroundColor: '$mainBackground',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...snippet.shadow,
  },
  drawBoxAddMenu: {},
  drawBoxAddTR: {
    zIndex: 30,
    bottom: 0,
    width: 30,
    height: 30,
  },
  drawBoxAdd: {
    bottom: 0,

    width: 30,
    height: 30,
    backgroundColor: '$mainBackground',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...snippet.shadow,
  },
  drawBoxPriceText: {
    fontSize: 15,
    fontWeight: '600',
    color: '$primaryGrayDarker',
  },
  drawBoxImage: {
    zIndex: 1,
    width: width - 20,
    height: width * 0.53,
    resizeMode: 'cover',
    backgroundColor: '$primaryColor',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  drawBoxBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  drawBoxBottomLeft: {
    flexGrow: 1,
  },
  drawBoxBottomRight: {
    width: width / 4,
  },
  drawBoxBottomRightWrapper: {
    display: 'flex',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  drawBoxBottomRightText: {
    fontSize: 12,
    color: '$primaryGrayDarker',
  },

  profileMenuScreenItemMain: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    // height: '11.11%',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '$primaryGrayBright',
    borderTopWidth: 1,
  },
  profileMenuScreenItemText: {
    fontWeight: 'bold',
    color: '$primaryBlack',
  },

  sectionMain: {
    padding: 10,
    backgroundColor: '$mainBackground',
    ...styleUtil.boxMarginVertical,
    borderRadius: 10,
    shadowColor: '$shadowColor',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileSectionMainTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileSectionsAreaMain: {
    marginVertical: 20,
  },
  profileMailInfoRowMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profileMailActivatedIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  profileMailIsActivated: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  staticPageMainWrapper: {
    backgroundColor: '#fff',
    padding: 20,
  },
  staticPageMainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  staticPageSubTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cookieUlMain: {
    marginLeft: 35,
  },
  cookieUlLiMain: {
    flexDirection: 'row',
  },
  cookieUlLiDotIcon: {
    marginTop: 8,
    marginRight: 8,
  },

  contactBlockMain: {
    marginVertical: 20,
  },
  contactIconTitleMain: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  contactInfoTextsMain: {
    marginLeft: 40,
  },
  contactInfoText: {
    marginVertical: 10,
  },
  contactIcon: {
    marginRight: 15,
  },

  dealersImageMain: {
    alignItems: 'center',
  },
  dealersImage: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },

  faqRowMain: {
    width: '100%',
    flex: 1,
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  faqTitleAndIconMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  faqActiveColor: {
    color: '$primaryColor',
  },
  faqRowDescriptionClose: {
    display: 'none',
  },

  drawModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  drawModalContentContainer: {
    alignItems: 'center',
    display: 'flex',
    height,
  },
  drawModalContentContainerInside: {
    display: 'flex',
    flexGrow: 1,
  },

  drawModalWrapper: {
    ...snippet.shadow,
    // rmarginTop: Platform.OS === 'ios' ? 44 : 0,
  },
  prizeTabWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 150,
  },

  prizeTabTR: {},

  prizeTab: {
    width: 86,
    marginLeft: 5,
    marginRight: 5,
  },

  prizeTabPrizeCount: {
    position: 'absolute',
    right: 7,
    top: 7,
    backgroundColor: '$mainBackground',
    borderRadius: 5,

    ...snippet.shadow,
  },
  prizeTabPrizeCountText: {
    fontSize: 16,
    color: '$primaryColorVivid',
    paddingLeft: 3,
    paddingRight: 3,
  },
  prizeTabImageWrapper: {
    borderRadius: 40,
    paddingLeft: 3,
    paddingRight: 3,
  },
  prizeTabImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: '$primaryGray',
  },
  prizeTabImageSelected: {
    borderColor: '$primaryColorVividBright',
  },
  prizeTabNameWrapper: {
    height: 86,
  },
  prizeTabNameText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    paddingTop: 6,
  },
  drawModalTopAreaTitle: {
    flexGrow: 1,
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
    zIndex: 50,
  },
  drawModalTopArea: {
    height: 180,
    backgroundColor: '$mainBackground',
    ...snippet.shadow,
  },
  drawModalTopAreaTitleArea: {
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  drawModalPrizeScroll: {
    width,
    height: 140,
  },
  prizeImageSlider: {
    width,
    height: width / 1.2,
    resizeMode: 'contain',
  },
  propertiesList: {
    borderWidth: 1,
    borderColor: '$primaryGrayBright',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
  },
  prizeContent: {
    // height: height - 180 - 75 - (Platform.OS !== 'ios' ? 80 : 100),
  },
  propertiesListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderColor: '$primaryGrayBright',
  },
  propertiesListWrapperNoBorder: {
    borderBottomWidth: 0,
  },
  propertiesListIcon: {
    marginLeft: 10,
    marginRight: 20,
  },
  propertiesListValue: {
    fontSize: 11,
  },
  propertiesListOptionValue: {
    fontSize: 16,
    paddingRight: 20,
  },
  propertiesPropsWrapper: {
    position: 'absolute',
    top: 10,
    width,
    alignItems: 'center',
    display: 'flex',
    zIndex: 50,
  },
  propertiesPropsWrapperBox: {
    backgroundColor: '$mainBackground',
    borderWidth: 1,
    borderColor: '$primaryGrayBright',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
  propertiesPropsText: {
    fontSize: 12,
  },
  profileMenuModalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    marginHorizontal: 20,
    height: width * 0.65,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    borderRadius: 10,
  },
  profileMenuDescription: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileMenuDescriptionText: {
    textAlign: 'center',
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  profileMenuButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonStyle: {
    width: '50%',
  },

  drawResultDetailRenderMain: {
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
  },
  drawResultDetailRenderTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '$primaryGrayBright',
  },
  drawResultDetailTicketNumberMain: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  drawResultDetailTicketNumberText: {
    width: '33%',
    textAlign: 'center',
  },

  drawResultRenderMain: {
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
  },
  drawResultRenderImage: {
    width: '100%',
    height: 250,
  },
  drawResultRenderTextMain: {
    marginVertical: 10,
  },

  ticketCheckMain: {
    flex: 1,
    padding: 20,
  },
  ticketCheckOrText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  ticketCheckLoginOrRegisterMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ticketCheckLoginOrRegisterText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '$primaryColorVivid',
  },
  bankAccountPage: {},
  ...styleUtil.subTitleConstant,
  tableTitle: {
    ...styleUtil.profileTableTitle,
  },
  tableTitleText: {
    ...styleUtil.profileTableTitleText,
  },
  manageBankAccount: {
    flex: 1,
    marginTop: 10,
  },
  addBankAccount: {
    flex: 1,
    backgroundColor: '$mainBackground',
    borderRadius: 10,
    padding: 10,
  },
  withdrawalPage: {},
  profileWithdrawal: {
    flex: 1,
    backgroundColor: '$mainBackground',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  profileWithdrawalList: {
    flex: 1,
    backgroundColor: '$mainBackground',
    borderRadius: 10,
    marginBottom: 10,
  },
  dataTable: {},
  dataTableContent: {
    backgroundColor: '$mainBackground',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: '$primaryGrayBright',
    padding: 10,
    paddingTop: 5,
  },
  dataTableContentItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '$primaryGrayBright',
  },
  dataTableContentItemTextBold: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  dataTableContentItemText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
    color: '$primaryGrayDarker',
  },
  dataTableContentItemTextButton: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$mainBackground',
  },
  dataTableCellButton: {
    borderWidth: 1,
    padding: 10,
    borderColor: '$primaryGrayBright',
    borderRadius: 5,
    backgroundColor: '$primaryColorVivid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  myCouponPage: {},
  profileAddMyCoupon: {
    backgroundColor: '$mainBackground',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  profileManageMyCoupon: {},
  scrollView: {
    ...styleUtil.profileMargin,
  },
  scrollViewMenu: {
    paddingVertical: 10,
  },

  basketItemMainWrapper: {
    // flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '$primaryGraySofter',
    // paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  basketItemMain: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  basketNoTicketMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketSelectTicketSwitchMain: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  basketSelectTicketSwitchTextColor: {
    color: '#0270bd',
  },
  basketImageAreMain: {
    width: 110,
    borderRadius: 5,
  },
  basketCountTools: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$mainBackground',
    shadowColor: '$primaryGray',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  basketMiddleContent: {
    width: Dimensions.get('window').width - 110 - 30 - 50,
    paddingHorizontal: 15,
  },
  basketMaxText: {
    color: '$redWarning',
    paddingVertical: 5,
  },
  basketSelectTicketNumber: {
    color: '$primaryColorVivid',
    paddingVertical: 5,
  },
  basketMessageArea: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  ticketNumberSelectList: {
    flexDirection: 'column',
    width: '100%',
  },
  ticketNumberMain: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  containerHead: {
    flexDirection: 'row',
    fontSize: 14,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    opacity: 0.7,
  },
  refreshTicket: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  allTicketNumberArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  ticketNumberSelectOnePieceMain: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '$primaryGrayBright',
  },
  ticketNumberChecked: {
    color: '$primaryColorVivid',
  },
  ticketNumberCheckedWithBorder: {
    color: '$primaryColorVivid',
    borderColor: '$primaryColorVivid',
  },
  stackScreenHeaderStyle: {
    shadowColor: '$primaryGray',
    shadowOffset: {
      height: 2,
      width: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  tabBarBadgeStyle: {
    color: 'white',
    backgroundColor: '$primaryColorVivid',
  },
  basketNoTicketText: {
    marginBottom: 10,
  },
  propertiesMargin: {
    marginHorizontal: 5,
    marginBottom: 20,
  },
  transactionTableRN: {
    ...styleUtil.boxMarginVertical,
  },
  depositCardTextIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  depositCardAmountBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  depositCardAmountBoxItem: {
    width: width / 2 - 27.5,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 1,
    borderColor: '$primaryGrayBright',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '$primaryColorVivid',
  },
  depositCardAmountBoxItemActive: {
    backgroundColor: '$primaryColorVividBright',
  },
  depositCardAmountBoxItemText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
    color: '$mainBackground',
  },
  paymentMethodsItem: {
    marginTop: 10,
  },
  paymentMethodsItemImageText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  paymentMethodsItemText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
    marginLeft: 10,
  },
  detailBackIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  paymentTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  paymentCenterButton: {
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#038dab',
    marginVertical: 10,
  },
  paymentCenterButtonText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
    color: '$mainBackground',
    padding: 10,
  },
  paymentBottomText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
    color: '$primaryGrayDarker',
  },
  paymentDescriptionLink: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  depositNormalText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_REGULAR,
    color: '$primaryGrayDarker',
    width: width - 20,
    marginBottom: 5,
  },
  depositBoldText: {
    fontSize: FONT_SIZE_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  depositMoreInformation: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
  },
  depositMoreInformationImageC: {
    display: 'flex',
    flexDirection: 'column',
  },
  depositMoreInformationImage: {
    width: width - 40,
    height: width - 40,
    resizeMode: 'cover',
    marginVertical: 5,
  },
  appVersionControl: {
    backgroundColor: '$mainBackground',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  versionControlDescriptionText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_REGULAR,
    color: '$primaryGray',
    marginHorizontal: 50,
    textAlign: 'center',
  },
  versionControlButton: {
    backgroundColor: '$primaryGrayBrighter',
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 50,
    width: width - 50,
  },
  versionControlButtonText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_REGULAR,
    color: '$primaryColorVivid',
    textAlign: 'center',
  },
  appVersionLogoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
  },
  appVersionHomeLogoMPI: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  appVersionHomeLogo: {
    width: 100,
    height: 45,
    resizeMode: 'contain',
  },
  appVersionCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketCreditCardModal: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    height,
    width,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    borderRadius: 10,
  },
  drawModalGame6Container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
  },
  game6Selector: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectorMain: {
    width,
    justifyContent: 'center',
    padding: 10,
  },
  selectorItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectorItemDisabled: {
    opacity: 0.6,
  },
  selectorItemTop: {
    display: 'flex',
    flexDirection: 'column',
  },
  selectorItemText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_BOLD,
  },
  selectorItemType: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginTop: 20,
  },
  selectorItemC: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  selectorItemTypeText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_BOLD,
  },
  selectorItemTicketAmount: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  selectorItemTicketAmountText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_BOLD,
    textAlign: 'center',
  },
  buttonBasketCyprus: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonBasketRightArea: {
    borderRightWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    height: 49,
    width: (width - 20) / 4,
  },
  buttonBasketRightAreaText: {
    fontSize: FONT_SIZE_X_EXTRA_LARGE,
    ...FONT_BOLD,
    marginLeft: 10,
  },
  buttonBasketRightAreaLowerText: {
    fontSize: FONT_SIZE_REGULAR,
    ...FONT_BOLD,
    marginLeft: 10,
  },
  buttonBasketLeftArea: {
    backgroundColor: 'transparent',
    height: 49,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ((width - 20) / 4) * 3,
  },
  buttonBasketLeftAreaText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_BOLD,
  },
  quarterColor: {
    color: '$primaryGrayDarker',
    borderColor: '$primaryGrayDarker',
  },
  halfColor: {
    color: '$cyprusColor1',
    borderColor: '$cyprusColor1',
  },
  fullColor: {
    color: '$cyprusColor2',
    borderColor: '$cyprusColor2',
  },
  buttonBasketLeftAreaFull: {
    width,
  },
  homepageDrawListBottom: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
  },
  homePageDrawList: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryShowMoreC: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  categoryShowMoreCText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
  },
  categoryShowMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryShowMoreText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    ...FONT_BOLD,
    color: '$primaryGrayDarker',
    marginRight: 5,
    marginBottom: 3,
  },
  drawListMain: {},
  activationSms: {
    padding: 10,
  },
  scratchCard: {
    width: '100%',
    height: height - 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  drawBoxBottomRightGame7: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
