// import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import XHR from 'i18next-xhr-backend';
// import localeFileTr from '@f/utils/locale/tr.json';

// i18n
//   .use(XHR)
//   .use(LanguageDetector)
//   .init({
//     // we init with resources
//     resources: {
//       tr: {
//         translations: localeFileTr,
//       },
//     },
//     fallbackLng: 'tr',
//     debug: true,

//     // have a common namespace used around the full app
//     ns: ['translations'],
//     defaultNS: 'translations',

//     keySeparator: false, // we use content as keys

//     interpolation: {
//       escapeValue: false, // not needed for react!!
//       formatSeparator: ',',
//     },

//     react: {
//       wait: true,
//       useSuspense: false,
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import localeFileTr from '@f/utils/locale/tr.json';

// the translations
const resources = {
  tr: {
    translation: {
      ...localeFileTr,
    },
  },
};

i18n
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tr',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
