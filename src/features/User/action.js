import { createAction } from '../../utils/ActionUtil'
import * as Types from './actionType'

// define actions
const Actions = {
  request: req => createAction(Types.LOGIN_REQUEST, req),
  success: res => createAction(Types.LOGIN_SUCCESS, res),
  failure: error => createAction(Types.LOGIN_FAILURE, error),
  reset: () => createAction(Types.RESET),
}

export default Actions
