import {
  call, put, takeLatest, fork, select,
} from 'redux-saga/effects'
import * as Types from './actionType'
import Actions from './action'
import ProductlistApi from '../../apis/Productlist'
import { getIndex, getCounts } from './selector'

export function* workGetlist(getlistRequest) {
  const req = {
    name: getlistRequest.payload,
    index: yield select(getIndex),
    counts: yield select(getCounts),
  }
  try {
    console.log('saga: ProductlistApi.getlist:', req)
    const response = yield call(ProductlistApi.getlist, req)// use asynchronous function 调用异步函数
    if (response.data.code === 0) {
      yield put(Actions.success(response.data.data))// like dispatch
    } else {
      yield put(Actions.failure(response.data.message))
    }
  } catch (error) {
    yield put(Actions.failure(error))
  }
}

function* watchGetlist() {
  console.log('watching GETLIST_REQUEST')
  yield takeLatest(Types.GETLIST_REQUEST, workGetlist)// listen action，if it dispatch "GETLIST_REQUEST",then trigger function "workGetlist"
}

export default [fork(watchGetlist)]// Non-blocking task invocation mechanism 非阻塞任务调用机制
