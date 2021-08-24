/* Using the console */

// console.log('Hello World'); will display a message in the console
// log is just one method of the console object (Look up in the MDN, "Mozilla Developer Network")


/* Using variables */
// var, let, const -- used for primitive datatypes (strings, numbers, boolean, null, undefined, symbols)
// 'var' is globally scoped (shouldn't use this)
// 'let' is a mutable variable, while 'const' is an immutable variable
// ** Always use const unless you plan on reassigning a variable

const name = 'John';
const age = 30;
const rating = 4.5; // there are no float or decimal data types in js, just numbers
const isCool = true;
const x = null;
const y = undefined; // youll never do this since its pointless to have an undefined constant
let z; // this is essentially the same as doing let z = undefined;

// The 'typeof' operator reports the type of a variable


/* Inserting variables into strings */
// use '${varname}' or %d/%s
console.log(`My name is ${name} and I am ${age}`);
console.log('My name is %s and I am %d', name, age);


/* Arrays */
// Create an array by:
const numbers = new Array(1, 2, 3, 4, 5); // Using the Array object constructor (uncommon)
//console.log(numbers); //outputs: Array(5) [ 1, 2, 3, 4, 5 ]
const fruits = ['apples', 'oranges', 'pears']; // like python, can have multiple types
// ** JAVASCRIPT IS DYNAMICALLY TYPED (TypeScript is statically typed)


/* Object Literals */
// Basically, key-value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// Can also pull values out of a literal object's scope:
const {firstName, lastName, address: {city}} = person;
// This pulls the firstName, lastName, city variables out of person's scope
//console.log(firstName); // sends 'John' to the console
// **THIS IS CALLED "DESTRUCTURING", added from ES6

// Can add properties too:
person.email = 'john@gmail.com';

// Most commonly, you will be dealing with arrays of objects in javascript
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false
    }
];

/* The JSON Data Format */
const todoJSON = JSON.stringify(todos); // Converts an object to a JSON string


/* Loops */
// For Loops:
    // for (let i = 0; i < 10; i++) {}
// While Loops:
    // while (i < 10) {}
// For each using for():
    // for (let temp of array) {}


/* High-Order Array Methods */
// forEach()
    // loops through each value in the array, taking a function with a placeholder variable (temp) as the value
    // array.forEach(function(temp) { console.log(temp.text); });
// map()
    // loops through each value in the array, returning an array of the returned values from each iteration
    // const returnedArray = array.map(function(temp) { return temp.text; });
// filter()
    // loops through each value in the array, only adding them to the returned array if the returned condition is true
    // const returnedArray = array.filter(function(temp) { return temp.isCompleted === true; });


/* Conditionals and Switches */
// '==' checks if the values of two operands are equal
// '===' checks if the values and types of two operands are equal

/* switch(variable) {
    case 'op1':
        //do something
        break;
    case 'op2':
        //do something
        break;
    default:
        //do default
        break;
} */


/* Functions and Arrow Functions (ES6)*/
// Functions:
/* function funcName(num1 = 1, num2 = 1) {
    return num1 + num2;
} */

// Arrow Function: assign function as if it were a variable:
/* const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2;
} */
// ^^^^ This is a callable functions ^^^^


/* Object Oriented Programming and ES6 Classes */
// Constructor function (starts with a capital letter)
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // using the Date object, constructed with dob
    // Adding a method:
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object
const person1 = new Person('John', 'Doe', '3-6-1970');
console.log(person1.getFullName());