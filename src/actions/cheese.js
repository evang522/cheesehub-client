import {fetchCheesesRequest, fetchCheesesSuccess, fetchCheesesError} from './syncActions';



export const fetchCheeses = () => {
	dispatch(fetchCheeseRequest());	
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
		return new Error({
			message:'There was a problem and I have reached the catch block'
		})
	})

}