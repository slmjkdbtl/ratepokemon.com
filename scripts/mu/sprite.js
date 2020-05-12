// wengwengweng

import blend from "./blend.js"

const sprite = {

	oninit({ attrs }) {

		this.index = attrs.start || 1

		this.play = () => {

			const start = this.start || 1
			const end = this.end || 1

			if (this.index <= end - 1) {
				this.index += 1
			} else {
				if (this.loop) {
					this.index = start
				}
			}

			m.redraw()

			if (this.playing) {
				setTimeout(this.play, this.speed)
			}

		}

	},

	onupdate({ attrs }) {

		if (attrs.playing == this.playing) {
			return
		}

		this.playing = attrs.playing
		this.speed = attrs.speed
		this.start = attrs.start || 1
		this.end = attrs.end || 1
		this.loop = attrs.loop == undefined ? true : attrs.loop

		if (this.playing) {
			this.play()
		}

	},

	view({ attrs }) {
		return m("img", blend(attrs, {
			src: attrs.src.replace("${index}", this.index),
		}))
	}

}

export default sprite

