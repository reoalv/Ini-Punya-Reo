import {put, takeLatest} from 'redux-saga/effects';
import {GET_HOME} from './actionHome';

function dataHome(action) {
  try {
  } catch (e) {
    console.log(e);
  }
}

function* sagaHome() {
  yield takeLatest(GET_HOME, dataHome);
}

export default sagaHome;
