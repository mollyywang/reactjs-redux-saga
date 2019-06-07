import Actions from '../action'
import * as Types from '../actionType'

describe('Star actions', () => {
  it('should create an action to request a list', () => {
    const expectedAction = {
      "payload": {},
      "type": Types.GETSTAR_REQUEST,
    }
    expect(Actions.getStar_request()).toEqual(expectedAction)
  })

  it('should create an action to return the success data', () => {
    const data = {
      "starsData": [],
    }
    const expectedAction = {
      "payload": data,
      "type": Types.GETSTAR_SUCCESS,
    }
    expect(Actions.getStar_success(data)).toEqual(expectedAction)
  })

  it('should create an action to report a error', () => {
    const msg = 'this is an error'
    const expectedAction = {
      "payload": msg,
      "type": Types.GETSTAR_FAILURE,
    }
    expect(Actions.getStar_failure(msg)).toEqual(expectedAction)
  })

  it('should create an action to removeStar', () => {
    const expectedAction = {
      payload:{},
      "type": Types.REMOVESTAR_REQUEST,
    }
    expect(Actions.removeStar_request()).toEqual(expectedAction)
  })

  it('should create an action to addstar', () => {
    const expectedAction = {
      payload:{},
      "type": Types.ADDSTAR_REQUEST,
    }
    expect(Actions.addStar_request()).toEqual(expectedAction)
  })
})
