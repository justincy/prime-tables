var bignum = require('bignum');

/**
 * Print the multiplcation table of a list of numbers
 * 
 * @param {Integer[]} numbers
 */
module.exports = function(numbers){
  
  var n = numbers.length;
  
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
        process.stdout.write(numbers[(i || j) - 1] + '');
      }
      
      // Show the multiple
      else {
        process.stdout.write(bignum.mul(numbers[i-1], numbers[j-1]).toString());
      }
      
      // Close the cell
      process.stdout.write('|');
    }
    
    // End the line
    process.stdout.write('\n');
  }
  
};