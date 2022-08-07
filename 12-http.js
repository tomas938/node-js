const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Hello world home");
	}
	if (req.url === "/about") {
		res.end("about");
	}
	res.end(`
		<h1>Not found</h1>
		<a href="/">baclk</a>
	`);
});

server.listen(5000);
