# prime-tables

Usage:

```
node prime-tables.js <N>
```

Requires a node version that supports template strings (v4).

__I'm pleased with:__

* Calculating the upper bound on the Nth prime so that I could dynamically
calculate how large the list of numbers needed to be in the sieve.
* Generating prime numbers is fast.
* 
__Possible improvements:__

* When printing the table I could use an algorithm that doesn't repeat the
multiplication of cells [i,j] and [j,i] (when i!=j). But even then it would
only increase the time by a little less than half. In other words, it would
still be really slow for large values of N.