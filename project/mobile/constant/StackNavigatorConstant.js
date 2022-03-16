import i18n from '@f/utils/locale/i18n';
import About106DijitalScreen from '@mobile/views/About106DijitalScreen';
import AboutDrawsScreen from '@mobile/views/AboutDrawsScreen';
import AboutMPIScreen from '@mobile/views/AboutMPIScreen';
import BasketScreen from '@mobile/views/BasketScreen';
import ContactScreen from '@mobile/views/ContactScreen';
import CookiePolicyScreen from '@mobile/views/CookiePolicyScreen';
import DealersScreen from '@mobile/views/DealersScreen';
import DrawResultScreen from '@mobile/views/DrawResultScreen';
import FaqScreen from '@mobile/views/FaqScreen';
import HomepageScreen from '@mobile/views/HomepageScreen';
import KVKKScreen from '@mobile/views/KVKKScreen';
import MembershipAgreementScreen from '@mobile/views/MembershipAgreementScreen';
import ProfileMenuScreen from '@mobile/views/account/ProfileMenuScreen';
import ProfileAccountInfoScreen from '@mobile/views/account/ProfileAccountInfoScreen';
import ResponsibleGameScreen from '@mobile/views/ResponsibleGameScreen';
import RulesScreen from '@mobile/views/RulesScreen';
import DrawListScreen from '@mobile/views/DrawListScreen';
import TicketCheckScreen from '@mobile/views/TicketCheckScreen';
import DrawResultDetailScreen from '@mobile/views/DrawResultDetailScreen';
import SummaryScreen from '@mobile/views/account/SummaryScreen';
import RegisterScreen from '@mobile/views/RegisterScreen';
import ProfileMyTicketsScreen from '@mobile/views/account/ProfileMyTicketsScreen';
import TransactionHistoryScreen from '@mobile/views/account/TransactionHistoryScreen';
import ProfileBankAccountScreen from '@mobile/views/account/ProfileBankAccountScreen';
import ProfileWithdrawalScreen from '@mobile/views/account/ProfileWithdrawalScreen';
import ProfileCouponScreen from '@mobile/views/account/ProfileCouponScreen';
import TicketNumberAreaScreen from '@mobile/views/TicketNumberAreaScreen';
import ProfileDepositScreen from '@mobile/views/account/ProfileDepositScreen';
import ProfilePaymentCreditCardScreen from '@mobile/views/account/ProfilePaymentCreditCardScreen';
import DepositPaymentEFTScreen from '@mobile/views/account/DepositPaymentEFTScreen';
import ForgetPasswordScreen from '@mobile/views/ForgetPasswordScreen';
import ForgetPasswordSmsVerifyScreen from '@mobile/views/ForgetPasswordSmsVerifyScreen';
import LoginRegister from '@mobile/component/LoginRegister';
import ActivationSmsScreen from '@mobile/views/ActivationSmsScreen';
import TicketChecksDrawListScreen from '@mobile/views/TicketChecksDrawListScreen';
import TicketChecksDrawDetailScreen from '@mobile/views/TicketChecksDrawDetailScreen';
import PrePaymentBasketScreen from '@mobile/views/PrePaymentBasketScreen';
import ScratchPageScreen from '@mobile/views/ScratchPageScreen';
import AboutCyprusScreen from '@mobile/views/AboutCyprusScreen';

const GetEnv = require('@envFile');

const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';

const navigationConst = [
  {
    component: DrawResultScreen,
    name: 'drawResults',
    title: 'Çekiliş Sonuçları',
  },
  {
    component: ProfileMenuScreen,
    name: 'profileMenu',
    title: 'Profilim',
  },
  {
    component: LoginRegister,
    name: 'login',
    title: 'Giriş Yap',
  },
  {
    component: ProfileAccountInfoScreen,
    name: 'myProfile',
    title: 'Profilim',
  },
  {
    component: DealersScreen,
    name: 'dealers',
    title: i18n.t('header_dealers'),
  },
  {
    component: AboutMPIScreen,
    name: 'aboutMPI',
    title: 'Milli Piyango İdaresi',
  },
  {
    component: AboutCyprusScreen,
    name: 'aboutCyprus',
    title: 'KKTC Piyangolar Birimi',
  },
  {
    component: CookiePolicyScreen,
    name: 'cookiePolicy',
    title: 'Çerez Politikası',
  },
  {
    component: MembershipAgreementScreen,
    name: 'membershipAgreement',
    title: 'Üyelik Sözleşmesi',
  },
  {
    component: ContactScreen,
    name: 'contact',
    title: 'İletişim',
  },
  {
    component: ResponsibleGameScreen,
    name: 'responsibleGame',
    title: 'Sorumlu Oyun',
  },
  {
    component: AboutDrawsScreen,
    name: 'aboutDraws',
    title: 'Çekilişlerimiz Hakkında',
  },
  {
    component: About106DijitalScreen,
    name: 'about106Dijital',
    title: '106 Dijital',
  },
  {
    component: KVKKScreen,
    name: 'kvkk',
    title: 'Bilgi Edinme',
  },
  {
    component: RulesScreen,
    name: 'rules',
    title: 'Kurallar',
  },
  {
    component: FaqScreen,
    name: 'faq',
    title: 'Sık Sorulan Sorular',
  },
  {
    component: TicketCheckScreen,
    name: 'ticketCheck',
    title: 'Bilet Sorgulama',
  },
  {
    component: DrawResultDetailScreen,
    name: 'drawResultDetail',
    title: 'Kazanan Biletler Listesi',
  },
  {
    component: SummaryScreen,
    name: 'accountSummary',
    title: 'Hesap Özeti',
  },
  {
    component: RegisterScreen,
    name: 'register',
    title: i18n.t('clickForRegister'),
  },
  {
    component: ProfileMyTicketsScreen,
    name: 'myTickets',
    title: i18n.t('Account_Menu_DrawHistory'),
  },
  {
    component: TransactionHistoryScreen,
    name: 'transactionHistory',
    title: i18n.t('Account_Menu_History'),
  },
  {
    component: ProfileCouponScreen,
    name: 'myCoupon',
    title: i18n.t('Coupon_Text_1'),
  },
  {
    component: ForgetPasswordScreen,
    name: 'forgetPassword',
    title: 'Şifremi Unuttum',
  },
  {
    component: ForgetPasswordSmsVerifyScreen,
    name: 'forgetPasswordSmsVerify',
    title: 'SMS Doğrulama',
  },
  {
    component: ActivationSmsScreen,
    name: 'activationSms',
    title: 'Telefon Doğrulama',
  },
  {
    component: TicketChecksDrawListScreen,
    name: 'ticketChecksDrawList',
    title: 'Biletlerim',
  },
  {
    component: TicketChecksDrawDetailScreen,
    name: 'ticketChecksDrawDetail',
    title: 'Biletlerim',
  },
  {
    component: ProfilePaymentCreditCardScreen,
    name: 'paymentCreditCard',
    title: i18n.t('Deposit_Text_1'),
  },
  {
    component: DepositPaymentEFTScreen,
    name: 'depositPaymentEFT',
    title: i18n.t('Deposit_Text_7'),
  },
  {
    component: ProfileDepositScreen,
    name: 'deposit',
    title: i18n.t('Deposit_Text_1'),
  },
  {
    component: PrePaymentBasketScreen,
    name: 'prePaymentScreen',
    title: i18n.t('Site_Title_33'),
  },
];

export const mainStackNavigatorConst = isCyprus
  ? [
      ...navigationConst,
      {
        component: ScratchPageScreen,
        name: 'scratchPageScreen',
        title: 'Kazı Kazan',
      },
    ]
  : [
      ...navigationConst,
      {
        component: ProfileWithdrawalScreen,
        name: 'withdrawal',
        title: i18n.t('Account_Menu_Withdrawal'),
      },
      {
        component: ProfileBankAccountScreen,
        name: 'bankAccount',
        title: i18n.t('manage_bank_table_title'),
      },
    ];

// #region BOTTOM STACK NAVIGATOR CONSTATNS
export const bottom_homepageStackNavConst = [
  {
    component: HomepageScreen,
    name: 'homepage',
    title: i18n.t('homepage'),
  },
];

export const bottom_basketStackNavConst = [
  {
    component: BasketScreen,
    name: 'basket',
    title: i18n.t('basket'),
    headerShown: false,
  },
];

export const bottom_drawListStackNavConst = [
  {
    component: DrawListScreen,
    name: 'drawlist',
    title: i18n.t('basket'),
  },
];
// #endregion
