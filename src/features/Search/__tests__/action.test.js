import Actions from '../action'
import * as Types from '../actionType'

describe('Search actions', () => {
  it('should create an action to changeName', () => {
    const name = 'product name'
    const expectedAction = {
      payload: name,
      type: Types.CHANGE_NAME,
    }
    expect(Actions.changeName(name)).toEqual(expectedAction)
  })
})

