import Actions from '../action'
import * as Types from '../actionType'

describe('request actions', () => {
  it('should create an action to request a list', () => {
    const name = 'product name'
    const expectedAction = {
      "payload": name,
      "type": Types.GETLIST_REQUEST,
    }
    expect(Actions.request(name)).toEqual(expectedAction)
  })
})

describe('success actions', () => {
  it('should create an action to return the success data', () => {
    const data = {
      "allNums": 245,
      "productData": [],
    }
    const expectedAction = {
      "payload": data,
      "type": Types.GETLIST_SUCCESS,
    }
    expect(Actions.success(data)).toEqual(expectedAction)
  })
})

describe('should return the error', () => {
  it('should create an action to report a error', () => {
    const msg = 'this is an error'
    const expectedAction = {
      "payload": msg,
      "type": Types.GETLIST_FAILURE,
    }
    expect(Actions.failure(msg)).toEqual(expectedAction)
  })
})

describe('reset actions', () => {
  it('should create an action to reset the data', () => {
    const expectedAction = {
      payload:{},
      "type": Types.RESET_INDEX,
    }
    expect(Actions.reset()).toEqual(expectedAction)
  })
})
