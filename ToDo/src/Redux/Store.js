import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {allSaga} from './allSaga';
import {allReducer} from './allReducer';

const persistConfig = {
  key: 'ToDo',
  Storage: Storage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);

const saga = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(saga, logger),
);

export const persistor = persistStore(store);

saga.run(allSaga);
