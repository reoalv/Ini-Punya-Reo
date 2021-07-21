import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import {addItem, GET_HOME, POST_DATA, REMOVE_HOME, setHome} from './actionHome';

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

function* postData(action) {
  try {
    const res = yield axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts?userId=1',
      data: action.payload,
    });
    console.log(res, 'INI KEMBALIAN POST');
    if (res.status === 201) {
      yield put(addItem(res.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* removeData(action) {
  console.log(action.payload.id, 'INI LHOOO');
  const idDelete = action.payload.id;
  try {
    const res = yield axios({
      method: 'delete',
      url: `https://jsonplaceholder.typicode.com/posts/${idDelete}`,
    });
    console.log(res, 'INI KEMBALIAN REMOVE');
  } catch (e) {
    console.log(e);
  }
}

function* sagaHome() {
  yield takeLatest(GET_HOME, dataHome);
  yield takeLatest(POST_DATA, postData);
  yield takeLatest(REMOVE_HOME, removeData);
}

export default sagaHome;
