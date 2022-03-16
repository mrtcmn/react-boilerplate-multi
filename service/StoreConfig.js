import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { toolbar } from '@service/repState/toolbarREP';
import { creteREPState } from './REPState';
// todo to be delete imports

const { createEpicMiddleware } = require('redux-observable');
const { applyMiddleware, createStore, compose } = require('redux');
const GetEnv = require('@envFile');

const AsyncStorage =
  GetEnv.REACT_APP_PROJECT === 'MOBILE1'
    ? require('@react-native-async-storage/async-storage').default
    : {};

const storage =
  GetEnv.REACT_APP_PROJECT !== 'MOBILE1'
    ? require('@react-native-async-storage/async-storage').default
    : {};

// todo to be delete imports

const composeEnhancers =
  GetEnv.IS_PRODUCTION === 'no' || GetEnv.REACT_APP_IS_PRODUCTION === 'no'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          actionsDenylist: ['NOT'],
        })
      : null || compose
    : null || compose;
const epicMiddleware = createEpicMiddleware();

let whiteList = [];
if (GetEnv.PROJECT === 'PROJECT1' || GetEnv.PROJECT === 'PROJECT2') {
  whiteList = [];
} else if (GetEnv.REACT_APP_PROJECT === 'MOBILE1') {
  whiteList = [];
}

const persistConfig = {
  key: 'root',
  storage: GetEnv.REACT_APP_PROJECT === 'MOBILE1' ? AsyncStorage : storage,
  whitelist: whiteList,
  blacklist: [],
};

const REPSTATE = {
  toolbar,
};

const _REPState = creteREPState(REPSTATE);
const repEpics = combineEpics(..._REPState.epics);
const persistReducers = persistReducer(
  persistConfig,
  combineReducers(_REPState.combineReducers)
);

export const store = createStore(
  persistReducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(repEpics);
export const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => store.getState();
const getAction = () => _REPState.actions;
export { getStore, getState, getPersistor, getAction };
export default {
  getStore,
  getState,
  getPersistor,
  getAction,
};

// todo to be delete end
