import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import Actions from '../action'
import StarApi from '../../../apis/Star'
import { workGet } from '../saga'


const getAction = Actions.getStar_request();

describe('fetch starlist flow', () => {
    const generator = cloneableGenerator(workGet)(getAction);
    expect(generator.next().value).toEqual(call(StarApi.getlist));

    test('fetch success', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                data: {
                    starsData: []
                },
                code: 0
            }
        }).value).toEqual(put(Actions.getStar_success({ starsData: [] })));
        expect(clone.next().done).toEqual(true);
    });

    test('fetch failure', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                message: 'getlist fail',
                code: 1
            }
        }).value).toEqual(put(Actions.getStar_failure('getlist fail')));
        expect(clone.next().done).toEqual(true);
    });
});


