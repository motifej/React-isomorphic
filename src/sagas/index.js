import { call, put, takeLatest } from 'redux-saga/effects'
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAILURE
} from '../constants'
import * as Api from '../api'

function* signUp(action) {
  try {
    const userData = yield call(() => Api.signUp(action.payload))
    yield put({ type: REGISTER_USER_SUCCESS, userData })
  } catch(error) {
    yield put({ type: REGISTER_USER_FAILURE, error })
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER_REQUEST, signUp),
  ]
}