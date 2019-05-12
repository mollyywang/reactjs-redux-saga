import * as Types from "./actionType";
import { createReducer } from "reduxsauce";

const INITIAL_STATE = {
  username: "",
  token: "",
  processing: false,
  isLogin: false,
  msg: ""
}

function handleLoginRequest(state = INITIAL_STATE, { payload }){
    console.log("request----------", payload);
    return {
      ...state,
      processing: true
    };
}

function handleLoginSucceeded(state = INITIAL_STATE, { payload }) {
  console.log("succeeded----------", payload);
  return {
    ...state,
    username: payload.username,
    token: payload.token,
    isLogin: true,
    processing: false
  };
}

function handleLoginFailed(state = INITIAL_STATE, { payload }) {
  console.log("failed----------", payload);
  return {
    ...state,
    isLogin: false,
    processing: false,
    msg:'login fail, username or password is wrong !'
  };
}

export const HANDLERS = {
  [Types.LOGIN_REQUEST]: handleLoginRequest,
  [Types.LOGIN_SUCCESS]: handleLoginSucceeded,
  [Types.LOGIN_FAILURE]: handleLoginFailed
};

export default createReducer(INITIAL_STATE, HANDLERS);
