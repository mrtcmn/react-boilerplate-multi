import React from 'react';
import { render } from 'react-dom';
import App from '@f/components/App';
import { Provider } from 'react-redux';
import { getStore, getPersistor } from '@service/StoreConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@f/utils/locale/i18n';
import { BrowserRouter } from 'react-router-dom';

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;

const setDimensions = (_vh, _vw) => {
  const rs = _vh / _vw < 0.8 ? vh : vw;

  document.documentElement.style.setProperty('--vh', `${_vh}px`);
  document.documentElement.style.setProperty('--vw', `${_vw}px`);
  document.documentElement.style.setProperty('--rs', `${rs}px`);
};

setDimensions(vh, vw);

window.addEventListener('resize', () => {
  // We execute the same script as before
  // vh = window.innerHeight * 0.01;
  vh = window.innerHeight * 0.01;
  vw = window.innerWidth * 0.01;
  setDimensions(vh, vw);
});

const rootEl = document.getElementById('root');

render(
  <I18nextProvider i18n={i18n}>
    <Provider store={getStore()}>
      <BrowserRouter>
        <PersistGate persistor={getPersistor()}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  rootEl
);
