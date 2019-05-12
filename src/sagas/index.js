import { all } from 'redux-saga/effects'
import { UserSaga } from '../features/User'
import { StarSaga } from '../features/Star'
import { ProductlistSaga } from '../features/Productlist'


// combine all the sagas
export default function* rootSaga() {
  yield all([
    ...UserSaga,
    ...StarSaga,
    ...ProductlistSaga,
  ])
}
