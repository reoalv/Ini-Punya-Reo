import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaHome from '../Home/sagaHome';
import {allReducer} from './allReducer';
import {sagaWatcher} from './sagaWatcher';

const saga = createSagaMiddleware();

export const store = createStore(allReducer, applyMiddleware(saga));

saga.run(sagaHome);
