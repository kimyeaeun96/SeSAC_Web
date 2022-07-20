const os = require('os');
console.log(os.freemem());  // 1-1)
console.log(os.totalmem()); // 1-2)
console.log(os.homedir()); // 1-3)

const path = require('path');
console.log(path.sep); // 2-1)

const string = __filename;
console.log(path.extname(string)); //2-2)

console.log(path.parse('./week4/prc23.js')); //2-3
