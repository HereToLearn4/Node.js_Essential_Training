const {inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
inc(); 

console.log(`the count is ${getCount()}`); 

console.log(myModule.anything);
console.log(myModule.inc());