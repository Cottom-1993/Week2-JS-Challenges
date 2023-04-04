// // Activity 1: Create a variable called age. Write an if statementthat logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.

let age = 20;


if (age > 17) {
    console.log("Yes i can serve you");
} else {
        console.log("you are not old enough");
    }
// // // Activity 2: Create a variable for any pizza topping. Create a switch statement, if the topping is one of your favourite ingredients, 
// // // log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console 
// // // “I don’t mind having ${topping} on my pizza. Finally, for any topping you don’t like log “${topping} should not be on a pizza.” 

let topping = 'Mushroom'

switch(topping) {
    // case 'Chicken':
    case 'BBQ Sauce':
    case 'Mozzarella':
    case 'cheese':
    // case 'Mushroom':
    case 'pineapple':
    case 'pepperoni':
    console.log (` These are important ingredients for my pizza.`);
    break;
    case 'Chicken':
    case 'BBQ Sauce':
    console.log(`I dont mind having ${topping} on my pizza`);
    break;
    case 'Mushroom':
    console.log(`${topping} should not be on a pizza.`);
    case "Pineapple":
}

// // // Activity 3:Create a variable called password. Check how many letters are in the password, if there are less than 8, 
// // // log to the console that the password is too short. Otherwise log the password to the console. 

let password = 'cottom1993'

if (password.length < 8 ) {

    console.log("password is too short");
} else {
    console.log(password);

}

// // // Activity 4: Create a variable called num.If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, 
// // // if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

let num = 15; 

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}

// // // Activity 5:Create a variable called num.Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202). 

let num = 0000; 
let numStr = num.toString();
let reversedNumStr = numStr.split("").reverse().join("");

if (numStr === reversedNumStr) {
  console.log(num + " is a palindrome.");
} else {
  console.log(num + " is not a palindrome.");
}

// // // Activity 6: Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
// // // Create an if statement that logs to the console where someone is at times of the day. 
// // // E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

let time = 11; 
let placeOfWork = "Eximius Distribution ltd.";
let townOfHome = "Liverpool";

if (time >= 9 && time < 17) {
  console.log("I'm at work in " + placeOfWork);
} else if (time >= 17 || time < 8) {
  console.log("I'm at home in " + townOfHome);
} else {
  console.log("I'm commuting");
}

// // Activity 7: Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";


let vowels = ['a', 'e', 'i', 'o', 'u'];


for (let i = str.length - 1; i >= 0; i--) {

  if (vowels.includes(str[i])) {
    console.log(`The index of the last vowel in the string is ${i}.`);
    break; 
  }
}

// // Activity 8: Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

const word = "Eximius"; 

if (word[0] === word[word.length - 1]) {
  console.log(true); 
} else {
  console.log(false);
}





// // Activity 9: Create two variables called num1 and num2.Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

let num1 = 20;
let num2 = 10;
// the below code is using the extra variable sum to add both the above variables together with the +
let sum = num1 + num2;
if (sum % 2 ===0) {
  console.log(sum);
} else {
  // the below is using to times the 2 variables together and post the answer
console.log (num1 * num2);
}

// Practice code: below --------------------------------------//

let age = 61;


if (age > 17 && age < 60 ) {
    console.log("Adult 18+ £10.95");
} else {
  if (age < 18) {
        console.log("Child below 18 £8");
    }
  else if (age > 60){
        console.log("Senior 60+");
      }
  }


let location = "Wales";
let forecast = "Tornado";
// The below if statement is made up of == which means the outcome for the variables can have either of the match to produce the console.log
if (location =="Liverpool" && forecast == "Stormy" ) {
  console.log("Check again");
}
// the below else if has 3 === which means both the variables need to be met to produce the obviously console.log
  else if (location === "manchester" && forecast === "raining dogs") {
    console.log("Obviously");
  }
  else{ 
    console.log("What it isnt Snowing?");
  }


  let Cars = "BMW";
  let TopSpeed = "150mph";

  if (Cars =="Audi" || TopSpeed == "160mph" ) {
    console.log("Max Speed");
  }
    else if (Cars === "BMW" && TopSpeed === "150mph") {
      console.log("Slow Speed");
    }
    else{ 
      console.log("What you drive a slow car!");
    }
  
 