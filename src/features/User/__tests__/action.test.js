import Actions from '../action'
import * as Types from '../actionType'

describe('request actions', () => {
  it('should create an action to login', () => {
    const req = {
      username: 'wang',
      password: '33'
    }
    const expectedAction = {
      "payload": req,
      "type": Types.LOGIN_REQUEST,
    }
    expect(Actions.request(req)).toEqual(expectedAction)
  })

  it('should create an action to return the success data', () => {
    const data = {
      username: 'wang',
      token: 'esdlfhosfsjjlfs',
    }
    const expectedAction = {
      "payload": data,
      "type": Types.LOGIN_SUCCESS,
    }
    expect(Actions.success(data)).toEqual(expectedAction)
  })

  it('should create an action to report a error', () => {
    const msg = 'this is an error'
    const expectedAction = {
      "payload": msg,
      "type": Types.LOGIN_FAILURE,
    }
    expect(Actions.failure(msg)).toEqual(expectedAction)
  })

  it('should create an action to reset the data', () => {
    const expectedAction = {
      payload: {},
      "type": Types.RESET,
    }
    expect(Actions.reset()).toEqual(expectedAction)
  })
})
