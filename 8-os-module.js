const os = require("os");

const user = os.userInfo();
console.log(user);

// system uptime

console.log(`The system uptime ${os.uptime / 60 / 60}`);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOs);
