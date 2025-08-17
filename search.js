const fs = require('fs');

function loadPrimeDB() {
    try {
        const jsonData = fs.readFileSync('primes_db.json', 'utf8');
        const primeArray = JSON.parse(jsonData);
        const primeMap = new Map();

        for (const prime of primeArray) {
            primeMap.set(prime.index, prime.value);
        }

        console.log('Database loaded and ready for search.');
        return primeMap;
    } catch (error) {
        console.error('Error loading database. Run "node main.js" first.', error);
        return null;
    }
}

const suffix = (n) => {
    if (n % 100 >= 11 && n % 100 <= 13) return "th";
    switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
    }
};

function getPrimeIndex(number, db) {
    if(db.has(number)) {
        const index = db.get(number);
        return `${number} is the ${index}${suffix(index)} prime number.`;
    } else {
        return `${number} is not in the database or is not a prime number.`;
    }
}

const primeDatabase = loadPrimeDB();
