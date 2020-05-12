// wengwengweng

import home from "./home.js";
import rank from "./rank.js";
import err from "./err.js";

m.route.prefix = "";

m.route(document.body, "/", {
	"/": home,
	"/rank": rank,
	"/:404...": err,
});

