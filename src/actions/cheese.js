// import {fetchCheesesRequest, fetchCheesesSuccess, fetchCheesesError} from './syncActions';



export const fetchCheeses = () => (dispatch) => {
	dispatch(fetchCheesesRequest());
	return fetch("http://localhost:8080/api/cheeses")
	.then(res => {
		if (!res.ok) {
			return new Error({
				message: 'There was a problem and everything is NOT ok!'
			})
		}
	return res.json()
})
	.then(data => {
	dispatch(fetchCheesesSuccess(data));
})
	.catch(err => {
		dispatch(fetchCheesesError(err));
	})
}


export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
})

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
