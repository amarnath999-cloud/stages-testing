// Add all numbers in an array
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Sum of array:", sum);


// Reverse a given string
const text = "NodeJS";

const reversed = text.split("").reverse().join("");     
console.log("Reversed string:", reversed);


// Find the largest number in an array      
const nums = [15, 42, 7, 89, 33];

const max = Math.max(...nums);      
console.log("Maximum number:", max);
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


