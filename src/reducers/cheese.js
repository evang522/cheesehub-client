
import {FETCH_CHEESES_REQUEST,FETCH_CHEESES_ERROR, FETCH_CHEESES_SUCCESS}

const initialState =    {
  cheeses: [],
  loading: false,
  error: null
}

const reducer = (state=initialState, action) => {
  if (action.type=== FETCH_CHEESES_REQUEST) {
    return Object.assign({},state, {loading:true});

  }
  if (action.type=== FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {error:action.err});
  }
  if (action.type=== FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {cheeses: action.cheeses});
  }
};