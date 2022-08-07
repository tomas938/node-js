const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const sec = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(sec);

writeFileSync("./content/result-txt", `Here it is some bundled content ${first + sec}`, {
	flag: "a",
});
