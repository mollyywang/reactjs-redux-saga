import { createAction } from '../../utils/ActionUtil'
import * as Types from './actionType'

// define actions
export const Actions = {
  getStar_request: req => createAction(Types.GETSTAR_REQUEST, req),
  getStar_success: res => createAction(Types.GETSTAR_SUCCESS, res),
  getStar_failure: error => createAction(Types.GETSTAR_FAILURE, error),
  // todo
  removeStar_request: req => createAction(Types.REMOVESTAR_REQUEST, req),
  addStar_request: req => createAction(Types.ADDSTAR_REQUEST, req),
}
