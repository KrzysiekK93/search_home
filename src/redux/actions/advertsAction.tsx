import * as types from "../types";
import axios from 'axios';

export function loadAdvertsPending(): types.LoadAdvertPending {
  return { 
        type: types.LOAD_ADVERTS_PENDING, 
    };
}

export function loadAdvertsSuccess(adverts: types.IAdvertDatas): types.LoadAdvertSuccess {
    return { 
        type: types.LOAD_ADVERTS_SUCCESS, 
        adverts
    };
  }

export function loadAdvertsError(error: any): types.LoadAdvertError {
    return { 
        type: types.LOAD_ADVERTS_ERROR, 
        error
    };
}

export function loadAdverts(adverts: types.IAdvertDatas) {
    return (dispatch: any) => {
        dispatch(loadAdvertsPending());
        axios.get('/server/data.json')
        .then((response: any) => {
            dispatch(loadAdvertsSuccess(response.data));
            return response.data;
        })
        .catch((error: any) => {
            dispatch(loadAdvertsError(error));
        })
    }
}