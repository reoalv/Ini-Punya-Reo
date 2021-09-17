import {all} from 'redux-saga/effects';
import sagaHome from '../Home/sagaHome';

export function* sagaWatcher() {
  yield all([sagaHome()]);
}
