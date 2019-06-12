import { put, call, select } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import Actions from '../action'
import ProductlistApi from '../../../apis/Productlist'
import { workGetlist } from '../saga'
import { getIndex, getCounts } from '../selector'


const getAction = Actions.request('product name');


describe('fetch productlist flow', () => {
    const generator = cloneableGenerator(workGetlist)(getAction);

    test('select getIndex',()=>{
        expect(generator.next().value).toEqual(select(getIndex));
    })

    test('select getCounts',()=>{
        expect(generator.next(0).value).toEqual(select(getCounts));
    })

    test('call ProductlistApi',()=>{
        const req = {
            name: 'product name',
            index: 0,
            counts: 16,
        }
        expect(generator.next(16).value).toEqual(call(ProductlistApi.getlist, req));
    })

    test('fetch productlist success', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                data: {
                    productsData: [],
                    allNums: 234
                },
                code: 0
            }
        }).value).toEqual(put(Actions.success({ productsData: [], allNums: 234 })));
        expect(clone.next().done).toEqual(true);
    });

    test('fetch productlist invalid', () => {
        const clone = generator.clone();
        expect(clone.next({
            data: {
                message: 'getlist fail',
                code: 1
            }
        }).value).toEqual(put(Actions.failure('getlist fail')));
        expect(clone.next().done).toEqual(true);
    });
});


