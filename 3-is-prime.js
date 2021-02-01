/***************************************************************************
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(10); // => false
isPrime(11); // => true
isPrime(9); // => false
isPrime(2017); // => true
***************************************************************************/
// even numbers are prime because they have >1 factor

function isPrime(number) {
    for (let i=2; i < number; i++) {
        // check that the correct thing is targeted 
        // console.log(i);
        if (number % i === 0) {
            // return number, not prime
            return false            
        }
    }  
    return true
    // return controls flow of the function (rest of the function is ignored)

    // divide the number by all the numbers leading up to it
    // if any of those return a whole number, not it is not prime
    // if we get this far without a NO, then YES 
}

primeUnderHundo = []
for (let i = 0; i <100; i++) {
    if (isPrime(i)) {
        primeUnderHundo.push(i)
    }
}

for (let i in array) {
    console.log(i); // index: 0, 1 , 2, 3... (i stands for 'index')
}

for (let i of array) {
    console.log(i); // object: 3, 1, 7 ... (o stands for 'object') 
}
