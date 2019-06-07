import Reducer from '../reducer'
import * as Types from '../actionType'

const INITIAL_STATE = {
    items: [],
    counts: 16,
    index: 0,
    allNums: 0,
    processing: false,
}

describe('productlist reducer', () => {
    it('should return the initial state', () => {
        expect(Reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle GETLIST_REQUEST', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETLIST_REQUEST,
                payload: { name: 'product name' }
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: true
        })
    })

    it('should handle GETLIST_SUCCESS', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETLIST_SUCCESS,
                payload: {
                    productData: [],
                    allNums: 124,
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            index: 16,
            processing: false,
            allNums: 124,
            items: [],
        })
    })

    it('should handle GETLIST_FAILURE', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.GETLIST_FAILURE,
                payload: { error: 'this is an error msg' }
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: false,
        })
    })

    it('should handle RESET_INDEX', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.RESET_INDEX,
                payload: {}
            })
        ).toEqual({
            ...INITIAL_STATE
        })
    })
})