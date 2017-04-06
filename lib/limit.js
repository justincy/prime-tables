/**
 * Generate an upper bound for the nth prime.
 * 
 * @param {Integer} n nth prime
 * @returns {Integer}
 */
module.exports = function(n){
  return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));
};