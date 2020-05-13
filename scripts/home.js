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

const home = {

	async oninit() {

		const pokemons = await getRandomPokemons();

		data = {
			pokemons: pokemons,
		};

	},

	view() {

		return data ? (() => {

			const pm = data.pokemons[state.curIdx];

			return [
				m("img#avatar", {
					src: pm.image,
				}),
				m("p#name", pm.name),
				m("button", {
					onclick: () => {
						dope(pm.id);
						state.curIdx = (state.curIdx + 1) % data.pokemons.length;
					},
				}, "dope"),
				m("button", {
					onclick: () => {
						lame(pm.id);
						state.curIdx = (state.curIdx + 1) % data.pokemons.length;
					},
				}, "lame"),
				m("a#rank-link", {
					href: "/rank",
				}, "rank"),
			];

		})() : m("p#loading", "loading pokemons...");

	},

}

export default home;

