const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b390c2c42emsha0691cffe81cf71p1fef12jsnd25f4ff9d644',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));