const path = require("path");

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename);

const resolvedPath = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(resolvedPath);
