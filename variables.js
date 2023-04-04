// Activity 1:Create a program that stores someone’s name, ageand favourite colour and log it to the console in a complete sentence using Template Literals.

let name = 'Jamie Cottom';
let age = 29;
let colour = 'Green'

console.log(`Hi my name is ${name}. I am ${age}, and my favourite colour is ${colour}.`)


// Activity 2: Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.
// Create an object to store breakfast data

let Breakfast = 'Mcdonalds';
let Lunch = 'KFC';
let Dinner = 'Chinese'

console.log(`I started the day with eating ${Breakfast}. I then had ${Lunch} for my lunch, and for my dinner i had ${Dinner}.`)

// Activity 3: Create a program that calculates the number of days from today to your birth date.

let todaysDate = new Date().getTime();

let birthDate = new Date("30 December 1993").getTime();

let dateDifference = (todaysDate - birthDate) / (1000 * 60 * 60 * 24)

// console.log(todaysDate)

// console.log(birthDate)

// console.log(todaysDate - birthDate);

console.log( `I have been alive for ${Math.floor(dateDifference)} days`);
