import Reducer from '../reducer'
import * as Types from '../actionType'

const INITIAL_STATE = {
    username: '',
    token: '',
    processing: false,
    isLogin: false,
    msg: '',
}

describe('User reducer', () => {
    it('should return the initial state', () => {
        expect(Reducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle LOGIN_REQUEST', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.LOGIN_REQUEST,
                payload: {
                    username: 'wang',
                    password: '33'
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            processing: true
        })
    })

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.LOGIN_SUCCESS,
                payload: {
                    username: 'wang',
                    token: 'esdlfhosfsjjlfs',
                }
            })
        ).toEqual({
            ...INITIAL_STATE,
            username: 'wang',
            token: 'esdlfhosfsjjlfs',
            isLogin: true,
            processing: false
        })
    })

    it('should handle GETLIST_FAILURE', () => {
        expect(
            Reducer(INITIAL_STATE, {
                type: Types.LOGIN_FAILURE,
                payload: { error: 'this is an error msg' }
            })
        ).toEqual({
            ...INITIAL_STATE,
            isLogin: false,
            processing: false,
            msg: 'login fail, username or password is wrong !',
        })
    })
})