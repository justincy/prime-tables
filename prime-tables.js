var argv = require('minimist')(process.argv.slice(2));
var primes = require('./lib/primes');

var n = parseInt(argv._[0], 10);
if(!Number.isInteger(n)){
  console.error(n + ' is not an integer.');
}

console.log(primes(n));