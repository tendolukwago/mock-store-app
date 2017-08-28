
//third party imports
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
//local imports
import * as actions from '../index';

const baseUrl = 'http://localhost:8080';

const middlewares = [thunk]; 
const mockStore = configureStore(middlewares);

describe('Actions for Fetch', () => {

    const initialState = {};       
    const token = "token";  
    const store = mockStore(initialState);

    beforeEach(() => {

        store.clearActions();
    });


     //Fetch Posts
    describe('Fetch', () => {
        it('creates a FETCH action', async () => {

            //arrage

            //act
            nock(baseUrl)
            .get('/api/test')
            .reply(200);

            await store.dispatch(actions.fetch(token));

            //assert
            expect(store.getActions()).toMatchSnapshot();

        });
        it('creates a FETCH_SUCCESS action', () => {
            //arrange
 
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


            //act
            store.dispatch(actions.resetFetch());

            //assert
            expect(store.getActions()).toMatchSnapshot();   
        });
    });
});