const primes = require('../lib/primes');
const assert = require('chai').assert;
const primesList = require('./primes.json');

describe('primes', function(){
  
  it('<=5 primes', function(){
    for(var i = 1; i <= 5; i++){
      assert.deepEqual(primes(i), primesList.slice(0, i), `Error generating ${i} primes`);
    }
  });
  
  it('10 primes', function(){
    assert.deepEqual(primes(10), primesList.slice(0, 10));
  });
  
  it('100 primes', function(){
    assert.deepEqual(primes(100), primesList.slice(0, 100));
  });
  
  it('1000 primes', function(){
    assert.deepEqual(primes(1000), primesList.slice(0, 1000));
  });
  
  it('10000 primes', function(){
    assert.deepEqual(primes(10000), primesList);
  });
  
});