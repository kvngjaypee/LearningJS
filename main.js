//Displaying a message using the console.log function
//console.log('Hello World!');

//Variables
//var, let, const; var is the outdated version of declaring variable. let and const is the updated version. The difference between let amd const is that let can be reassigned while const cant be reassigned
//Assigning variable with let
/*let age = 30;

console.log(age);*/

let myName;

myName = "Amaka";

console.log(myName);

//Assigning variable with const
const score = 15;

console.log(score);

//Data Types
//Strings, Number, Boolean, Undefined, null, symbol

//Creating variables and checking for their data types
const place = "Lagos";
const age = 30;
const rating = 4.76;
const isCool = true;
const x = null;
const k = undefined;

//Checking for the data types of the above declared variables
console.log(typeof x); //object
console.log(typeof place); //string
console.log(typeof isCool); //boolean
console.log(typeof age); //number
console.log(typeof k); //undefined

//Implementing Concantenation

const nickName = "Jaypee";
const height = 120;

//Concantenation
console.log("My nickname is " + nickName + " and i am " + height + " tall ");

//Template string
//const hello = "My nickname is ${nickName}  and i am  ${height}";
//console.log(hello);

//Implementing the length method

const m = "Hello World!";
console.log(m.length);

//Uppercase
console.log(k.toUpperCase());

//Lowercase
console.log(k.toLowerCase());

//Substring
console.log(k.substring(0, 5));

//Split by
console.log(k.split(""));

//Arrays = They are variables that holds multiple values

const fruits = ["apple", "oranges", "pears"];
fruits[3] = "bananas";

fruits.push("Strawberries");

fruits.unshift("pineapples");

fruits.pop();

console.log(Array.isArray("hello"));

console.log(fruits.indexOf("oranges"));

console.log(fruits[1]);
//Object literals

const person = {
  firstName: "Young",
  lastName: "Matt",
  age: 19,
  hobbies: ["singing", "dancing"],
  address: {
    street: "50 moshalashi st",
    city: "Lagos",
    state: "Osapa London",
  },
};
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = "jondoe@gmail.com";

console.log(person);

//Arrays of object
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Responding to mails",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Preparation for stand up meeting",
    isCompleted: false,
  },
];

console.log(todos[1].text);

//for loops
for (let i = 0; i <= 10; i++) {
  console.log("For Loop Number: ${i}");
}

//While
let i = 0;
while (i < 10) {
  console.log("While Loop Number: ${i}");
  i++;
}

//forEach, map, filter
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.next;
  });

console.log(todoCompleted);

//Conditionals
//Implementing the if, else if and else
const y = 25;
if (y === 25) {
  console.log("y is 25");
} else if (y > 25) {
  console.log("y is greater than 25");
} else {
  console.log("y is less than 25");
}

//Ternary operator
const v = 10;

const color = v > 10 ? "red" : "blue";

//switch statement
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

//function
function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(5, 4));

//Loops
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
