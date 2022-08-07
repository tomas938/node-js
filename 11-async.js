const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
	if (err) {
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf-8", (err, result) => {
		if (err) {
			return;
		}
		const sec = result;
		writeFile("./content/async-cthrid.txt", `Here it is some bundled content ${first + sec}`, (err, result) => {
			console.log(result);
		});
	});
});
