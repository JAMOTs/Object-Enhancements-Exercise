// Using ES2015 syntax, we can define a function using arrow function syntax
// This function takes two parameters, firstName and lastName
// It returns an object with properties named firstName and lastName
// The values of these properties are the arguments passed into the function
const createInstructor = (firstName, lastName) => ({firstName, lastName});

// We define a variable, favoriteNumber
let favoriteNumber = 42;

// We then define an object, instructor, with a property, firstName, and a computed property
// The computed property's key is the value of favoriteNumber, and its value is a string
let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// We define an object, instructor, with a property, firstName, and two methods, sayHi and sayBye
// The sayHi method returns the string "Hi!"
// The sayBye method returns a string that includes the value of the firstName property
let instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
  }
  
// This function creates an animal object
// It takes three parameters: species, verb, and noise
// The function returns an object with a property, species, and a method with a name of the value of verb
// The method, when called, returns the value of noise
const createAnimal = (species, verb, noise) => {
    return {
      species,
      [verb]() {
        return noise;
      }
    }
  }
  