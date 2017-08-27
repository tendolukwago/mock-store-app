
//third party imports
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
//local imports
import * as actions from '../index';

const initialState = {}; 

const middlewares = [thunk];    
const mockStore = configureStore(middlewares);
const token = "token";  

describe('Actions for Fetch', () => {

    beforeEach(() => {
        mockStore.clearActions();
    });


     //Fetch Posts
    describe('Fetch', () => {
        it('creates a FETCH action', async () => {

            //arrage
            const store = mockStore(initialState);
            //act
            nock(BASE_URL)
            .get('/api/test')
            .reply(200);

            await store.dispatch(actions.fetch(token));

            //assert
            expect(store.getActions()).toMatchSnapshot();

        });
        it('creates a FETCH_SUCCESS action', () => {
            //arrange
            const store = mockStore(initialState);
            const res = {data: [
                {
                    id:"1",
                    title:"title",
                    body:"body"
                },
                {
                    id:"2",
                    title:"title",
                    body:"body"
                }
            ]};
            //act
            store.dispatch(actions.fetchSuccess(res));

            //assert
            expect(store.getActions()).toMatchSnapshot();
        });
        it('creates a FETCH_FAILURE action', () => {
            //arrage
            const store = mockStore(initialState);
            const err = {message:"internal server error"};

            //act
            store.dispatch(actions.fetchFailure(err));

            //assert
            expect(store.getActions()).toMatchSnapshot();
        });
        it('creates a RESET_FETCH action', () => {
            //arrage
            const store = mockStore(initialState);

            //act
            store.dispatch(actions.resetFetch());

            //assert
            expect(store.getActions()).toMatchSnapshot();   
        });
    });
});