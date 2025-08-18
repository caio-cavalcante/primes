# Primes
Generate a database with index and prime numbers determined by your limit

Currently primes_db.json has 78498 primes, up until 999983.

# How to use
Clone the repo and run the terminal in the folder (change the upper limit if needed)

Transfer the resulting JSON file to your desired folder

Use the search.js functions to load and search within the database

As they are set to export, you have to use "import { getPrimeIndex } from './search.js';" in your main JS file

Also, if you are using the object output as a parameter, you might need to make the function asynchronous, as getPrimeIndex is already a async function.

# Motivation
I started my MathHub project and implemented a function to return wheter a number was prime. Later I wanted for it to also tell me which was the prime's position. As I didn't find a easy database online (only the 5000 biggest primes...), I developed this weekend project to supply my need.