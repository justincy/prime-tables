var argv = require('minimist')(process.argv.slice(2));
var generatePrimes = require('./lib/primes');
var printTable = require('./lib/printTable');

var n = parseInt(argv._[0], 10);
if(!Number.isInteger(n)){
  console.error(n + ' is not an integer.');
  process.exit(1);
}

printTable(generatePrimes(n));
