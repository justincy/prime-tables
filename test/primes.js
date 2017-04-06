const primes = require('../lib/primes');
const assert = require('chai').assert;

describe('primes', function(){
  
  it.only('5 primes', function(){
    assert.deepEqual(primes(5), [2, 3, 5, 7, 11]);
  });
  
  it('10 primes', function(){
    assert.deepEqual(primes(10), [2, 3, 5, 7, 11, 13, 17, 19, 23,	29]);
  });
  
});