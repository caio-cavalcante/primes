async function loadPrimeDB() {
    try {
        const response = await fetch('./primes_db.json'); // set the location of your file
        const primeData = await response.json();

        console.log('Database loaded and ready for search.');
        return primeData;
    } catch (error) {
        console.error('Error loading database. May need to run "node main.js" first.', error); // either not created, wrong path or different name
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

export async function getPrimeIndex(number) {
    const primeDataBase = await loadPrimeDB();

    if (primeDataBase === null) {
        return "Database not loaded.";
    }

    const primeObj = primeDataBase.find(prime => prime.value === Number(number));
    if (primeObj) {
        return `${number} is the ${primeObj.index}${suffix(primeObj.index)} prime number.`;
    } else {
        return `${number} is not in the database or is not a prime number.`;
    }
}