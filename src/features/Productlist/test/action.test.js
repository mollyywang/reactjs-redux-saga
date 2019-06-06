import configureMockStore from 'redux-mock-store';
import * as Types from '../actionType';
import actions from '../action';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('request action', () => {

    let store;
    let httpMock;
  
    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  
    beforeEach(() => {
      httpMock = new MockAdapter(axios);
      const mockStore = configureMockStore();
      store = mockStore({});
    });
  
    it('fetches a productlist', async () => {
      // given
      httpMock.onGet('http://127.0.0.1:5001/public/products/getlist').reply(200, {
        "data":[],
        "code":0///
      });
      
    })
  });
  