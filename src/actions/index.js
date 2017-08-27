//third party imports
import axios from 'axios';

//local impors
import * as types from '../types/index';

//constants
const ROOT_URL = 'localhost:8080';

export function fetch(tokenFromStorage) {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/api/test`,
      headers: { 'Authorization': `Bearer ${tokenFromStorage}` }
    });
  
    return {
      type: types.FETCH,
      payload: request
    };
  }
  
  export function fetchSuccess(res) {
    return {
      type: types.FETCH_SUCCESS,
      payload: res
    };
  }
  
  export function fetchFailure(error) {
    return {
      type: types.FETCH_FAILURE,
      payload: error
    };
  }
  
  export function resetPosts() {
    return {
      type: types.RESET
    };
  }
  