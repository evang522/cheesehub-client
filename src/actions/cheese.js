
import {API_BASE_URL} from '../config';

export const fetchCheeses = () => dispatch => {
	console.log('fetchCheeses Called');
	dispatch(fetchCheesesRequest());
	return fetch(`${API_BASE_URL}/cheeses`)
	.then(res => {
		if (!res.ok) {
			return new Error({
				message: 'There was a problem and everything is NOT ok!'
			})
		}
	return res.json()
})
	.then(data => {
		console.log('response received');
	dispatch(fetchCheesesSuccess(data));
})
	.catch(err => {
		dispatch(fetchCheesesError(err));
	})
}


export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
	console.log('fetchCheeseRequest called');
	return {
	type: FETCH_CHEESES_REQUEST
	}
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (err) => ({
	type: FETCH_CHEESES_ERROR,
	err
})

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
	type: FETCH_CHEESES_SUCCESS,
	cheeses
})
