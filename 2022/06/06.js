const fs = require('fs')

fs.readFile('06.txt', 'utf-8', (err, data) => {
	for (let i = 3; i < data.length; ++i) {
		if (different(data, i-3, 4)) {
			console.log("Packet marker", i+1)
			break;
		}
	}

	for (let i = 13; i < data.length; ++i) {
		if (different(data, i-13, 14)) {
			console.log("Message marker:", i+1)
			break;
		}
	}
})

const different = (arr, start, nb) => {
	let different = true

	for (let i = start; i < start + nb; ++i) {
		for (let j = i + 1; j < start + nb; ++j) {
			if (arr[i] === arr[j]) different = false
		}
	}

	return different
}