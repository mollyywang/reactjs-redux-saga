import { createReducer } from 'reduxsauce'
import * as Types from './actionType'

const INITIAL_STATE = {
  name: '',
}

function handleChangeName(state = INITIAL_STATE, { payload }) {
  return {
    ...state,
    name: payload,
  }
}

export const HANDLERS = {
  [Types.CHANGE_NAME]: handleChangeName,
}

export default createReducer(INITIAL_STATE, HANDLERS)
