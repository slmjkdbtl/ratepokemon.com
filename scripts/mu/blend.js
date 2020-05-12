// wengwengweng

function blend(attrs, conf) {

	let c = Object.assign({}, attrs, conf)

	if (attrs.class && conf.class) {
		c.class = attrs.class.split(" ")
			.concat(conf.class.split(" "))
			.join(" ")
	}

	return c

}

export default blend

