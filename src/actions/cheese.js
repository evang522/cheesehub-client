const fetchCheeses = () => {
    return fetch("localhost:8080/api/cheeses")
	.then(data => {
	return data.json()
})
	.then(data => {
	console.log(data);

});

}