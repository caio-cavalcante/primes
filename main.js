const fs = require('fs');

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function generateDatabase(limit) {
    console.log(`Generating database of prime numbers up to ${limit}`);
    const primes = [];
    let index = 1;

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push({
                index: index,
                value: number,
            });
            index++;
        }
    }

    console.log(`Generated ${primes.length} prime numbers.`);
    return primes;
}

const UPPER_LIMIT = 1000000;

const primeDatabase = generateDatabase(UPPER_LIMIT);

const jsonData = JSON.stringify(primeDatabase, null, 2);
// 'null, 2' formata o JSON para ser legível

try {
    fs.writeFileSync('primes_db.json', jsonData, 'utf8');
    console.log('Database successfully saved to "primes_db.json"!');
} catch (error) {
    console.error('Error saving the file:', error);
}