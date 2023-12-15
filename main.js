//Displaying a message using the console.log function
//console.log('Hello World!');

//Variables
//var, let, const; var is the outdated version of declaring variable. let and const is the updated version. The difference between let amd const is that let can be reassigned while const cant be reassigned
//Assigning variable with let
/*let age = 30;

console.log(age);*/

let name;

name = 25;

console.log(name);

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
const y = undefined;

//Checking for the data types of the above declared variables
console.log(typeof x); //object
console.log(typeof place); //string
console.log(typeof isCool); //boolean
console.log(typeof age); //number
console.log(typeof y); //undefined

//Implementing Concantenation

const nickName = "Jaypee";
const height = 120;

//Concantenation
console.log("My nickname is " + nickName + " and i am " + height + " tall ");

//Template string
//const hello = "My nickname is ${nickName}  and i am  ${height}";
//console.log(hello);

//Implementing the length method

const k = "Hello World!";
console.log(k.length);

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