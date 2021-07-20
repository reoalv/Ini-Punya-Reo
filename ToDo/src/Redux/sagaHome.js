import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {GET_HOME, setHome} from './actionHome';

function* dataHome() {
  try {
    const result = yield axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts?userId=1',
    });
    if (result.status === 200) {
      yield put(setHome(result.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* sagaHome() {
  yield takeLatest(GET_HOME, dataHome);
}

export default sagaHome;
