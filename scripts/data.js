// wengwengweng

async function get() {

	return m.request("https://jsonbin.org/me/ratepokemon", {
		method: "GET",
		headers: {
			// really don't care..
			authorization: "token 749437d8-4a58-4a3c-a489-21927325de80",
		},
		body: JSON.stringify({}),
	});

}

async function store(data) {

	m.request("https://jsonbin.org/me/ratepokemon", {
		method: "POST",
		headers: {
			authorization: "token 749437d8-4a58-4a3c-a489-21927325de80",
		},
		body: JSON.stringify(data),
	});

}

export {
	get,
	store,
};

