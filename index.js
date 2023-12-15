//Learning JavaScript
console.log("Hello World!");

//Variables
//Rules for variables:
//cannot be a reserved word
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
let name = "kvngjaypee";
console.log(name);

//Implementing the CamelCase notation
//JavaScript are case sensitive
let firstName = "Johnpaul";
let lastName = "Anyanwu";

//Practicing variables using camelcase notation
//const cannot be reassigned, let can be reassigned
//let interestRate = 0.5;
const interestRate = 0.5;
console.log(interestRate);

//Types of variables
let nickname = "Jaypee"; //String literal
let age = 34; //Number literal
let isApproved = false; //Boolean literal
let middleName = undefined; //undefined
let selectedSize = null;

//Learning about object
let state = "Abia";
let country = "Nigeria";

let place = {
  state: "Abia",
  country: "Nigeria",
};

//Implementing the dot notation to make changes to the state value
place.state = "Imo";

//Implementing the bracket notation to make changes to the state value
place["state"] = "Enugu";
console.log(place.state);

//Arrays
//Array is an object in JavaScript: Array could also be defined as a data structure that we use to represent a list of an item
let selectedShoe = ["Gucci", "Sneaker", "Canvas"];
selectedShoe[3] = "Boots";
//Implementing the length properties
console.log(selectedShoe.length);

//Function
//The name/lastName stands in as a parameter while 'Jaypee' stands in as an argument.
function greet(name, lastName) {
  console.log("Hello " + name + "" + lastName);
}

greet("Jaypee", "Kvng");

//Performing mathematical operations in a function
function square(number) {
  return number * number;
}

console.log(square(2));
