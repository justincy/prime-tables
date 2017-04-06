const limit = require('./limit');

/**
 * Generate a list of N prime numbers
 */
module.exports = function(n){

  // Calculate an upper bound on the number for the nth prime.
  // This keeps our sieve to a reasonable size.
  const upperBound = limit(n);

  // Array representing the numbers (by index). The values are booleans specify
  // whether that number (index) is a prime.
  let numbers = Array(upperBound).fill(true);
  
  let p = 2;
  let i;
  
  do {
    for(i = 2 * p; i < numbers.length; i += p){
      numbers[i] = false;
    }
    for(i = p; i < numbers.length; i++){
      if(numbers[i]){
        p = i;
        break;
      }
    }
    break;
  } while (p < upperBound);
  
  let primes = [];
  for(i = 2; i < numbers.length; i++){
    if(numbers[i]){
      primes.push(i);
    }
  }
  
  return primes;
};