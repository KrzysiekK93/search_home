import * as types from "../types";
import initialState from "../initialState";

export default function advertsReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_ADVERTS_PENDING:
        return {
            ...state,
            pending: true
    };
    case types.LOAD_ADVERTS_SUCCESS:
        return {
            ...state,
            pending: false,
            adverts: action.adverts
    };
    case types.LOAD_ADVERTS_ERROR:
        return {
            ...state,
            pending: false,
            adverts: action.error
    };
    default:
        return state;
  }
}

export const getAdverts = (state: any) => state.adverts.adverts;
export const getAdvertsPending = (state: any) => state.adverts.pending;
export const getAdvertsError = (state: any) => state.adverts.error;