import {
  call, put, takeEvery, fork,
} from 'redux-saga/effects'
import { Actions } from './action'
import * as Types from './actionType'
import UserApi from '../../apis/User'

export function* workLogin({ payload }) {
  try {
    console.log('saga: ', payload)
    const response = yield call(UserApi.login, payload)// 调用异步函数
    console.log(response)
    if (response.data.code === 0) {
      yield put(Actions.success(response.data.data))// 等于dispatch
    } else {
      yield put(Actions.failure(response.data.message))
    }
  } catch (error) {
    yield put(Actions.failure(error))
  }
}

function* watchLogin() {
  console.log('watching LOGIN_REQUEST')
  yield takeEvery(Types.LOGIN_REQUEST, workLogin)// 监听action，每个action都触发一次
}

export default [fork(watchLogin)]// 非阻塞任务调用机制
