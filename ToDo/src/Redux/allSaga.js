import {all} from 'redux-saga/effects'
import sagaHome from './sagaHome'

export function allSaga() {
    yield all([
        sagaHome(),
    ])
}