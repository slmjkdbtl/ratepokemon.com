// wengwengweng

import { getPokemons, } from "./pm.js"
import { get, store, } from "./data.js"

let data;

const row = {
	view(vnode) {
		const pm = vnode.attrs.pm;
		const count = vnode.attrs.count;
		return m("tr", [
			m("td", pm.name),
			m("td", [
				m("img", {
					src: pm.image,
				}),
			]),
			m("td", count),
		]);
	},
}

const rank = {

	async oninit() {

		const votes = await get();
		const rank = Object.keys(votes)
			.sort((a, b) => votes[b] - votes[a]);

		const pokemons = await getPokemons(rank);

		data = {
			votes: votes,
			rank: rank,
			pokemons: pokemons,
		};

	},

	view() {

		return data ? (() => {

			const head = [
				m("tr", [
					m("th", "name"),
					m("th", "img"),
					m("th", "dopeness"),
				]),
			];

			const body = data.pokemons.map((pm, i) => {
				return m(row, {
					pm: pm,
					count: data.votes[pm.id],
				});
			});

			return [
				m("table", head.concat(body)),
			];

		})() : m("p#loading", "loading pokemons...");

	}

};

export default rank;

