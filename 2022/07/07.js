const fs = require('fs')

fs.readFile('07.txt', 'utf-8', (err, data) => {
	const lines = data.split(`$ `).flatMap(e => e.split(`\n`)).filter(x => !!x)
	console.log(dirSize(lines));
})

const dirSize = commands => {
	const dirSizeRec = (commands, dir="", start) => {
		let size = 0
	
		for (let i = start; i < commands.length; ++i) {
			let args = commands[i].split(' ')
			if (args[0] === 'cd') {
				if (args[1] === '..') {
					// cut path
				} else {
					dir += args[1]
				}
			} else if (args[0] === 'ls') {
				for (commands)
				size += computeSize(commands, start)
			}
		}
	
		return size
	}

	return dirSizeRec(commands, dir="", 0)
}

const computeSize = (commands, start) => {
	let size = 0

	return size
}