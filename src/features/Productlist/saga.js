import { call, put, takeLatest, takeEvery, fork, select } from "redux-saga/effects";
import * as Types from "./actionType";
import { Actions } from "./action";
import ProductlistApi from "../../apis/Productlist";
import { getIndex, getCounts } from "./selector";

export function* workGetlist({ payload }) {
  const req = {
    name: payload,
    index: yield select(getIndex),
    counts: yield select(getCounts)
  }
  try {
    console.log("saga: ProductlistApi.getlist:", req);
    const response = yield call(ProductlistApi.getlist, req);//调用异步函数
    if (response.data.code === 0) {
      yield put(Actions.success(response.data.data));//等于dispatch
    } else {
      yield put(Actions.failure(response.data.message));
    }
  } catch (error) {
    yield put(Actions.failure(error));
  }
}

function* watchGetlist() {
  console.log("watching GETLIST_REQUEST");
  yield takeLatest(Types.GETLIST_REQUEST, workGetlist);//监听action，每个action都触发一次
}

export default [fork(watchGetlist)];//非阻塞任务调用机制
