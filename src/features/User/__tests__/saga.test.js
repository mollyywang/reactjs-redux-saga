import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import Actions from '../action'
import UserApi from '../../../apis/User'
import { workLogin } from '../saga'

const username = 'testUser';
const password = 'testPassword';
const loginAction = Actions.request({ username, password });

describe('login flow', () => {
    const generator = cloneableGenerator(workLogin)(loginAction);
    expect(generator.next().value).toEqual(call(UserApi.login, { username, password }));

    test('credentials success', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                data: {
                    username: 'testUser', token: 'ewweqf'
                },
                code: 0
            }
        }).value).toEqual(put(Actions.success({ username: 'testUser', token: 'ewweqf' })));
        expect(clone.next().done).toEqual(true);
    });

    test('or credentials invalid', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                message: 'login fail',
                code: 1
            }
        }).value).toEqual(put(Actions.failure('login fail')));
        expect(clone.next().done).toEqual(true);
    });
});


