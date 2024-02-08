// 1. Write a function that takes a number and determines if it is a prime number. Return true if prime, false if not.

function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


const number: number = 3;
console.log(isPrime(number));
