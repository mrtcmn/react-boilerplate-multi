import React, { useEffect, useState } from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '@f/utils/locale/i18n';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { store, persistor } from '@service/StoreConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import merge from 'deepmerge';
import Wrapper from './src/Wrapper';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <I18nextProvider i18n={i18n}>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <Wrapper />
              </PersistGate>
            </Provider>
          </I18nextProvider>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
