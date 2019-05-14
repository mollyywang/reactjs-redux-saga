import {
  call, put, takeEvery, fork,
} from 'redux-saga/effects'
import Actions from './action'
import * as Types from './actionType'
import UserApi from '../../apis/User'

export function* workLogin({ payload }) {
  try {
    console.log('saga: ', payload)
    const response = yield call(UserApi.login, payload)// handle functions asynchronously
    console.log(response)
    if (response.data.code === 0) {
      yield put(Actions.success(response.data.data))// equal dispatch
    } else {
      yield put(Actions.failure(response.data.message))
    }
  } catch (error) {
    yield put(Actions.failure(error))
  }
}

function* watchLogin() {
  console.log('watching LOGIN_REQUEST')
  yield takeEvery(Types.LOGIN_REQUEST, workLogin)// listen action
}

export default [fork(watchLogin)]
