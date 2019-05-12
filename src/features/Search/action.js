import { createAction } from "../../utils/ActionUtil";
import * as Types from "./actionType";

  // define actions
  export const Actions = {
    changeName: (name)=> createAction(Types.CHANGE_NAME,name)
  };
  