import { createAction } from '../../utils/ActionUtil'
import * as Types from './actionType'

// define actions
const Actions = {
  changeName: name => createAction(Types.CHANGE_NAME, name),
}

export default Actions
