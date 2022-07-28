const os = require("os");

console.log( os.platform() ); // Operating system platform : win32
console.log( os.hostname() ); // hostname
console.log( os.type() );     // Operating system platform returned by uname(3) : Windows_NT
console.log( os.release() );  // Operatng system as a string
console.log( os.cpus() );     // each logical CPU core
