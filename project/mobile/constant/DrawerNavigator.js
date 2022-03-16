const GetEnv = require('@envFile');

const isCyprus = GetEnv.REACT_APP_PROJECT === 'CYPRUS_MOBILE';
const drawerMenuListPS = [
  {
    sectionTitle: 'Eşya Piyangosu',
    menuItems: [
      {
        title: 'Aktif Çekilişler',
        navigateKey: 'drawlist',
      },
      {
        title: 'Sonuçlar',
        navigateKey: 'drawResults',
      },
      {
        title: 'Bilet Sorgulama',
        navigateKey: 'ticketCheck',
      },
      {
        title: 'Bayilerimiz',
        navigateKey: 'dealers',
      },
      {
        title: 'Sorumlu Oyun',
        navigateKey: 'responsibleGame',
      },
      {
        title: 'Çekilişlerimiz Hakkında',
        navigateKey: 'aboutDraws',
      },
    ],
  },
  {
    sectionTitle: 'Hakkımızda',
    menuItems: [
      {
        title: 'Milli Piyango İdaresi',
        navigateKey: 'aboutMPI',
      },
      {
        title: '106 Dijital',
        navigateKey: 'about106Dijital',
      },
    ],
  },
  {
    sectionTitle: 'Kurallar',
    menuItems: [
      {
        title: 'Üyelik Sözleşmesi',
        navigateKey: 'membershipAgreement',
      },
      {
        title: 'Çerez Politikası',
        navigateKey: 'cookiePolicy',
      },
      {
        title: 'Bilgi Edinme',
        navigateKey: 'kvkk',
      },
      {
        title: 'Kurallar',
        navigateKey: 'rules',
      },
    ],
  },
  {
    sectionTitle: 'Yardım',
    menuItems: [
      {
        title: 'İletişim',
        navigateKey: 'contact',
      },
      {
        title: 'Sık Sorulan Sorular',
        navigateKey: 'faq',
      },
    ],
  },
];

const drawerMenuListCYPRUS = [
  {
    sectionTitle: 'Eşya Piyangosu',
    menuItems: [
      {
        title: 'Aktif Çekilişler',
        navigateKey: 'drawlist',
      },
      {
        title: 'Sonuçlar',
        navigateKey: 'drawResults',
      },
      {
        title: 'Bilet Sorgulama',
        navigateKey: 'ticketCheck',
      },
      {
        title: 'Bayilerimiz',
        navigateKey: 'dealers',
      },
      {
        title: 'Sorumlu Oyun',
        navigateKey: 'responsibleGame',
      },
      {
        title: 'Çekilişlerimiz Hakkında',
        navigateKey: 'aboutDraws',
      },
    ],
  },
  {
    sectionTitle: 'Hakkımızda',
    menuItems: [
      {
        title: 'KKTC Piyangolar Birimi',
        navigateKey: 'aboutCyprus',
      },
    ],
  },
  {
    sectionTitle: 'Oyunlar',
    menuItems: [
      {
        title: 'Kazı Kazan',
        navigateKey: 'scratchPageScreen',
      },
    ],
  },
  {
    sectionTitle: 'Kurallar',
    menuItems: [
      {
        title: 'Üyelik Sözleşmesi',
        navigateKey: 'membershipAgreement',
      },
      {
        title: 'Çerez Politikası',
        navigateKey: 'cookiePolicy',
      },
      {
        title: 'Bilgi Edinme',
        navigateKey: 'kvkk',
      },
      {
        title: 'Kurallar',
        navigateKey: 'rules',
      },
    ],
  },
  {
    sectionTitle: 'Yardım',
    menuItems: [
      {
        title: 'İletişim',
        navigateKey: 'contact',
      },
      {
        title: 'Sık Sorulan Sorular',
        navigateKey: 'faq',
      },
    ],
  },
];

export const drawerMenuList = isCyprus
  ? drawerMenuListCYPRUS
  : drawerMenuListPS;
