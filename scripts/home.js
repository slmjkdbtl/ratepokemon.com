// wengwengweng

import { getRandomPokemons, } from "./pm.js"
import { get, store, } from "./data.js"

async function dope(id) {

	const votes = await get();

	if (!votes[id]) {
		votes[id] = 0;
	}

	votes[id] += 1;
	await store(votes);

}

async function lame(id) {

	const votes = await get();

	if (!votes[id]) {
		votes[id] = 0;
	}

	votes[id] -= 1;
	await store(votes);

}

let data;

const state = {
	curIdx: 0,
};

async function init() {

	const pokemons = await getRandomPokemons();

	data = {
		pokemons: pokemons,
	};

}

init();

const home = {

	view() {

		if (data) {

			const pm = data.pokemons[state.curIdx];

			return [
				m("img#avatar", {
					src: pm.image,
				}),
				m("p#name", pm.name),
				m("button", {
					onclick: () => {
						dope(pm.id);
						state.curIdx += 1;
					},
				}, "dope"),
				m("button", {
					onclick: () => {
						lame(pm.id);
						state.curIdx += 1;
					},
				}, "lame"),
				m("a#rank-link", {
					href: "/rank",
				}, "rank"),
			];

		} else {

			return [
				m("p#loading", "loading pokemons..."),
			];

		}

	},

}

export default home;

