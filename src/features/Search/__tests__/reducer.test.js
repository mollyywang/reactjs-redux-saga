import Reducer from '../reducer'
import * as Types from '../actionType'
import { statement } from '@babel/template';

const INITIAL_STATE = {
    name: '',
}

describe('research reducer', () => {
    it('should return the initial state', () => {
        expect(Reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle CHANGE_NAME', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.CHANGE_NAME,
                payload: 'product name'
            })
        ).toEqual({
            ...INITIAL_STATE,
            name: 'product name'
        })
    })
})