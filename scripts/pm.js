// wengwengweng

import "./utils.js";

const pmCount = 807;

async function getPokemon(id) {

	const res = await m.request("https://pokeapi.co/api/v2/pokemon/:id", {
		method: "GET",
		params: {
			id: id,
		},
	});

	return {
		id: id,
		image: res.sprites["front_default"],
		name: res.name,
	};

}

async function getPokemons(ids) {
	return Promise.all(ids.map((id) => {
		return getPokemon(id);
	}));
}

async function getRandomPokemon() {
	return await getPokemon(Math.ceil(Math.random() * pmCount));
}

async function getRandomPokemons() {

	const pmIDs = [...Array(pmCount).keys()]
		.map((i) => i + 1)
		.shuffle()
		;

	return await getPokemons(pmIDs);

}

export {
	getPokemon,
	getPokemons,
	getRandomPokemon,
	getRandomPokemons,
};

