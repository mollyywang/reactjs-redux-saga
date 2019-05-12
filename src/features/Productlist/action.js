import * as Types from "./actionType";
import { createAction } from "../../utils/ActionUtil";
  
  // define actions
  export const Actions = {
    request: (name) => createAction(Types.GETLIST_REQUEST, name),
    success: (res) => createAction(Types.GETLIST_SUCCESS, res),
    failure: (error) =>
      createAction(Types.GETLIST_FAILURE,error),
    reset: ()=> createAction(Types.RESET_INDEX)
  };
  