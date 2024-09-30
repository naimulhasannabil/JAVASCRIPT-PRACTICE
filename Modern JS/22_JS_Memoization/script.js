// JavaScript Memoization

function square(num) {
  return num * num;
}

/*
 * Name : memoSqr()
 * This function creates a closure to Implement Memoization(caching results)
 * It initialized an empty objects cache to store previously calculated square
 * It Returns an inner function OptimizedSrq()
 */

function memoSqr() {
  let cache = {};

  return function OptimizedSrq(num) {
      if (num in cache) {
          console.log('Returning from Cache');
          console.log(cache);    // to check Cache
             return cache[num];
      } else {
        const result = square(num);
        cache[num] = result;
        console.log('Computing Square');
       return result;
      }
  };
}

// Usage
const memoSquare = memoSqr();

console.log(memoSquare(4));
console.log(memoSquare(4));
console.log(memoSquare(5));
console.log(memoSquare(5));
