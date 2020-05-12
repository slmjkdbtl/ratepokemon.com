// wengwengweng

function classes(ll) {

	return (() => {

		let list = []

		for (let c of ll) {
			if (typeof c == "string") {
				list.push(c)
			} else if (typeof c === "object") {
				for (let name in c) {
					const cond = c[name]
					if (typeof cond === "function") {
						if (cond()) {
							list.push(name)
						}
					}
				}
			}
		}

		return list.join(" ")

	})()

}

export default classes

