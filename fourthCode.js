// Check whether a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Is 17 prime?", isPrime(17)); // true
console.log("Is 20 prime?", isPrime(20)); // false
