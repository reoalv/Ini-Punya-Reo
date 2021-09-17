import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {GET_API, setApi} from './actionHome';

function* getDataApi(action) {
  try {
    const result = yield axios({
      method: 'get',
      url: 'https://api.kanye.rest/',
    });
    console.log('INI RESULT GET API', result.data);
    if (result.status === 200) {
      yield put(setApi(result.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* sagaHome() {
  yield takeLatest(GET_API, getDataApi);
}

export default sagaHome;
