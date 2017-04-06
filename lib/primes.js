var limit = require('./limit');
var debug = require('debug')('primes');

/**
 * Generate a list of N prime numbers.
 * 
 * Decided to use the Sieve of Eratosthenes because the algorithm is easier.
 */
module.exports = function(n){
  debug(`calculating ${n} primes`);
  
  // Shortcut for simple numbers.
  if(n <= 3){
    return [2,3,5].slice(0, n);
  }

  // Calculate an upper bound on the number for the nth prime.
  // This keeps our sieve to a reasonable size.
  var upperBound = limit(n);
  debug(`upper bound of ${upperBound}`);

  // Array representing the numbers (by index). The values are booleans specify
  // whether that number (index) is a prime.
  var numbers = Array(upperBound+1).fill(true);
  
  var p = 2;
  var i;
  
  do {
    
    debug(`do p=${p}`);
    
    // Mark all multiples of p as not a prime
    for(i = 2 * p; i < numbers.length; i += p){
      numbers[i] = false;
    }
    
    // Find the next candidate
    for(p++; p < numbers.length; p++){
      debug(`next p=${p}?`);
      if(numbers[p]){
        break;
      }
    }
    
  } while (p < upperBound);
  
  // Gather the list of all primes we found
  var primes = [];
  for(i = 2; i < numbers.length; i++){
    if(numbers[i]){
      primes.push(i);
    }
  }
  
  // Ensure we only return n primes
  return primes.slice(0, n);
};