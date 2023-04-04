let coffeeOrder = [ 
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

// The below code reads out the list of items in the array
console.log (coffeeOrder);

// The below code shows the data for the 1st item in the Array, as it starts from 0 it will show Ben-Cortado
console.log (coffeeOrder [1]);

coffeeOrder[1] = "Ann - Vanilla latte";

// The below code will output how many items are in the array variable
console.log ( coffeeOrder.length);

// adds an item into the array you forgot to add using PUSH
coffeeOrder.push("Donna - espresso");

// the use of pop removes the last item added to the array
coffeeOrder.pop();

// Activity 1: Make an array of 3 of your favourite favouriteSongs. and then log them to the console.
// Activity 1 Stretch: Can you add another two songs to the list using a method and then remove the last one added

let favouriteSongs = [
    "Eminem - Not Afraid",
    "Ellie Goulding - Bounce",
    "Calvin Harris - Summer"
];
console.log(favouriteSongs);
favouriteSongs.push("Ellie Goulding - Lights")
favouriteSongs.push("Ellie Goulding - Outside")
console.log(favouriteSongs);

favouriteSongs.pop("Ellie Goulding - Outside")
console.log(favouriteSongs);

Activity 2: Using MDN choose one of the following methods: 
map(), shift(), unshift(), splice(), slice()

let letters = ['a', 'b', 'c', 'd', 'e'];

letters.splice(2, 0, 'x', 'y');

console.log(letters);

// Practice code for  drinks: 

let favouriteDrinks=[ 
    "Monster Energy",
    "Pepsi Max",
    "Mcdonalds Coke"
];
// as you can see below when i am console logging, i put 0 for the first item 1 for the second and 2 for the third, this then reads out each one
    console.log(favouriteDrinks[0]);
    console.log(favouriteDrinks[1]);
    console.log(favouriteDrinks[2]);

let favouriteDrinks=[ 
    "Monster Energy",
    "Pepsi Max",
    "Mcdonalds Coke"
];
for (let i = 0; i < favouriteDrinks.length; i++){
    console.log(favouriteDrinks[i]);
}



// Activity 1 - Create an array that lists your favourite films, up to 
// 5 elements

let favouriteFilms=[
    "Pulp Fiction",
    "Gladiator",
    "Avatar"
];
favouriteFilms.push("Men In Black");
favouriteFilms.push("8 Mile");
for (let i = 0; i < favoriteFilms.length; i++) {
console.log(favouriteFilms[i]);
}

// Activity 2: Generate 6 random numbers between 1 - 50 and log them to the console using a for loop

for (let i = 0; i < 6; i++) {
    const RandomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(RandomNumber);
  }

// Activity 3:If we can create a loop to put 0 - 9 on the screen, how can we count from 9 - 0? Create a program that does this 
for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
  