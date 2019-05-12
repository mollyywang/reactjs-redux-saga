import { resettableReducer } from 'reduxsauce'
import { UserReducer } from '../features/User'
import { StarReducer } from '../features/Star'
import { SearchReducer } from '../features/Search'
import { ProductlistReducer } from '../features/Productlist'

const resettable = resettableReducer('RESET')
// combine all the reducers
const rootReducers = {
  user: resettable(UserReducer),
  star: resettable(StarReducer),
  search: SearchReducer,
  productlist: ProductlistReducer,
}
export default rootReducers
