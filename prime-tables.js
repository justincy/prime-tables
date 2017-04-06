var argv = require('minimist')(process.argv.slice(2));
var generatePrimes = require('./lib/primes');
var bignum = require('bignum');

var n = parseInt(argv._[0], 10);
if(!Number.isInteger(n)){
  console.error(n + ' is not an integer.');
}

var primes = generatePrimes(n);

// Naive table generation. i = row; j = column
for(var i = 0; i <= n; i++){
  
  // Start the line
  process.stdout.write('|');
  
  for(var j = 0; j <= n; j++){
    
    // Empty square in the top-left corner
    if(i === 0 && j === 0){
      process.stdout.write(' ');
    } 
    
    // Show the prime number on the top and left edges
    else if(i === 0 || j === 0){
      process.stdout.write(primes[(i || j) - 1] + '');
    }
    
    // Show the multiple
    else {
      process.stdout.write(bignum.mul(primes[i-1], primes[j-1]).toString());
    }
    
    // Close the cell
    process.stdout.write('|');
  }
  
  // End the line
  process.stdout.write('\n');
}