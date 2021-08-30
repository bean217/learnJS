const os = require('os');

// *** OS Module Methods ***

// Get Platform
console.log(os.platform());

// Get CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Get amount of free memory
console.log(os.freemem());

// Get total amount of memory
console.log(os.totalmem());

// Get Home directory
console.log(os.homedir());

// Get uptime
console.log(os.uptime());