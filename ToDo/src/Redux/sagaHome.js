import {put, takeLatest} from 'redux-saga/effects';
import {GET_HOME} from './actionHome';

function* sagaHome() {
  yield takeLatest(GET_HOME, dataHome);
}

export default sagaHome;
