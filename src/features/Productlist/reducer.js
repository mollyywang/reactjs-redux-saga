import { createReducer } from "reduxsauce";
import * as Types from "./actionType";

const INITIAL_STATE = {
  items: [],
  counts: 16,
  index: 0,
  allNums: 0,
  processing: false,
}

function handleIndexReset(state = INITIAL_STATE) {
  console.log("reset----------");
  return INITIAL_STATE
}

function handleGetlistRequest(state = INITIAL_STATE, { payload }) {
  console.log("request----------", payload);
  return {
    ...state,
    processing: true,
  };
}

function handleGetlistSucceeded(state = INITIAL_STATE, { payload }) {
  console.log("succeeded----------", payload);
  return {
    ...state,
    index: state.index + state.counts,
    processing: false,
    allNums: payload.allNums,
    items: state.items.concat(payload.productData),
  };
}

function handleGetlistFailed(state = INITIAL_STATE, { payload }) {
  console.log("failed----------", payload);
  return {
    ...state,
    processing: false
  };
}

export const HANDLERS = {
  [Types.GETLIST_REQUEST]: handleGetlistRequest,
  [Types.GETLIST_SUCCESS]: handleGetlistSucceeded,
  [Types.GETLIST_FAILURE]: handleGetlistFailed,
  [Types.RESET_INDEX]: handleIndexReset
};

export default createReducer(INITIAL_STATE, HANDLERS);
