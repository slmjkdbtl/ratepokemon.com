// wengwengweng

function camelToKebab(str) {
	return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

function styles(...sheets) {

	let str = ""

	sheets.forEach((sheet) => {
		for (let prop in sheet) {
			str += `${camelToKebab(prop)}: ${sheet[prop]}; `
		}
	});

	return str

}

export default styles

