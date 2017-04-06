const limit = require('../lib/limit');
const assert = require('chai').assert;

describe('limit', function(){
  
  it('returns an integer', function(){
    isInteger(10);
    isInteger(100);
    isInteger(1000);
    isInteger(10000);
  });
  
  it('10', function(){
    assert(limit(10) > 29);
  });
  
  it('100', function(){
    assert(limit(100) > 541);
  });
  
  it('1000', function(){
    assert(limit(1000) > 7919);
  });
  
  it('10000', function(){
    assert(limit(10000) > 104729);
  });
  
});

function isInteger(n){
  return assert(n - Math.round(n) === 0, n + 'is not an integer.');
}