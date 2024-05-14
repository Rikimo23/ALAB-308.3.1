// Using a for loop for iterating through numbers from 1 to 100

function fizzbuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizz buzz", i);
        } else if (i % 5 === 0) {
            console.log("buzz", i);
        } else if (i % 3 === 0) {
            console.log("fizz", i);
        } else {
        console.log(i);
        }
    }

}
    console.log(fizzbuzz(100));


    // Using a while loop to find the next prime number starting from n
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            console.log(n);
            break;
        }
        n++;
    }
}

// Example usage
findNextPrime(4);
findNextPrime(5);
findNextPrime(9);


// Using a for loop to iterate through characters of a CSV string
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

const rows = csvString.split('\n');
for (let row of rows) {
    const cells = row.split(',');
    console.log(cells.join(', ')); // Log each row of data
}


    







    