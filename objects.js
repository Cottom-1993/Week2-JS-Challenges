// Activity 1:JSLet’s edit our person object to include...A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

const person = {
    name: "Jamie",
    age: 29,
    sayHi: function() {
      return `Hello my name is ${this.name}`;
    }
  };
  
  console.log(person.sayHi()); 
//   