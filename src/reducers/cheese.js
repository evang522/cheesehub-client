
import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_ERROR,
   FETCH_CHEESES_SUCCESS
  } from '../actions/cheese';

const initialState =    {
  cheeses: [],
  loading: false,
  error: null
}


export default function reducer (state=initialState, action)  {
  if (action.type=== FETCH_CHEESES_REQUEST) {
    return Object.assign({},state, {loading:true});
  }
  if (action.type=== FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {loading:false, error:action.err});
  }
  if (action.type=== FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {loading:false, cheeses: action.cheeses});
  } 
  return state;
};