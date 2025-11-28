console.log("Hello World");
let Me = "Olamide";
console.log(Me);

let data = String(23);

console.log(data);

let page = Number("56");
console.log(page);
console.log(typeof page);
let reels = null;
console.log(reels);
console.log(typeof reels);

const gender = "female";
console.log(gender);
let age = null;
console.log(age);
age = 18;
console.log(age);

// console.log(me);

// var me = "name";

// me = "ola";

//template literal
let tp = `i am good`;
console.log(tp);
let he = `my name is ${Me}`;
console.log(he);
let add = `1+1 = ${1 + 1}`;
console.log(add);

let myFirstJob = "coder";
let myCurrentJob = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

console.log(40 + 25 + 16 - 5); // console.log also does
//                            mathematical operations

//     if and else with else if
console.log(3 > 4);
console.log(3 < 4);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 === 3);

let firstName = "Rachel";
let secondName = "Prisca";
let girl = "Gem";
if (girl == "Gem") {
  alert("javascript is fun");
} else {
  alert("javascript is boring");
}

if (5 >= 5) {
  console.log("i passed");
} else {
  console.log("we go again");
}
let button = "hi";

if (button == "Hello") {
  alert("hi");
} else if (button == "hi") {
  alert("go back");
} else {
  alert("shift");
}
if (button == "hi") {
  alert("welcome");
}
let trial = 555;

// mathematical operations
let now = 12;
console.log(now);
// let,s make 12 a variable since we have used it more than one
//  so we don,t have to be changing in every where but in our place

let ageSarah = now + 45; // We can add in our defining variable through
//  the use of mathemitacal operations
console.log(ageSarah);

let ageJonas = now + 35;
console.log(ageJonas);

// you can also log different values at the same time on one
//  console.log

//functions

function logger() {
  console.log("Olamide");
}
logger();
// functions can also be used to receive and return data
//  through the use of parameters and return

function welcome(me) {
  let greet = `Hello, welcome ${me}`;
  alert(greet);
  console.log(greet);
  return greet;
}

welcome("Olamide");
const olamide = welcome("Olamide");
console.log(olamide);

let person = `hello ${olamide}`;
console.log(person);

console.log(welcome("Olamide"));

// all these are function declaration

function calcage1(birthyear) {
  return 2037 - birthyear;
}
console.log(calcage1(2020));

const age1 = calcage1(2020);
console.log(age1);

//function expression

const calcage2 = function (birthdate) {
  return 2037 - birthdate;
};
const age2 = calcage2(2019);
console.log(age2);

//arrow function
const calcage3 = (birthmonth) => 2037 - birthmonth;
const age3 = calcage3(2018);
console.log(age3);
// when the parameters is more than one and what is meant to return is more than one
//   you would end up using the curly bracket and the return statement

// functions calling other functions

//lets make a function for food processor that returns a processed juice but needs another function to
// cut the fruit into pieces before it can process the fruit to juice

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces}
   pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

const mixture = fruitProcessor(2, 3);
console.log(mixture);

//     ARRAYS
//First way of writing arrays

const friends = ["micheal", "angel", "stephen"];
console.log(friends);

//another way of writing arrays

const years = new Array(1991, 1996, 2008, 2020);
console.log(years);
// To call out a value in an array

console.log(friends[0]);
//we are starting with zero because arrays are 0 based,
//  which means you start counting a value from zero

// to check the amount of elements in an arrays

console.log(friends.length);

// we can also use the length properties to get name of the last element.

console.log(friends[friends.length - 1]);

// then to change or modify a particylar element in
//  the array like maybe change stephen to jay . you do this.

friends[2] = "jay";
console.log(friends);

// arrays can hold all types of values including variables and arrays

const myName = "Olamide";
const mide = [myName, "Ogunjobi", 2037 - 2022, 5, friends];
console.log(mide);

// we can use arrays in a function

const personAge = function (year) {
  return 2037 - year;
};
const currentYear = [1991, 2020, 1996, 2015];
const year1 = personAge(currentYear[0]);
const year2 = personAge(currentYear[1]);
console.log(year1, year2);
//create another new array

const ages = [personAge(currentYear[0]), personAge(currentYear[1])];
console.log(ages);
const ages2 = [year1, year2];
console.log(ages2);

OBJECTS;

//in arrays we can define the elements of the arrays but in the objects we can define the elements .
//For example

ARRAYS;

const olaIdentity = ["Olamide", "ogunjobi", 22, ["Ella", "Joy"]];
console.log(olaIdentity);

//  OBJECTS

const olaIdentity1 = {
  personName: "Olamide",
  lastName: "Ogunjobi",
  girlAge: 22,
  girlFriends: ["Ella", "Joy"],
};
console.log(olaIdentity1);
//the object gave us the option to define our elements not
// like arrays that do not give us that opportunity. when defining my elements
//  in objects , i use the colon sign not equal to.
// the difined elements are called key value pairs or properties.

// how to get the object elements using the key value pair

//      DOT AND BRACKET NOTATION
// the dot notation helps us get the obect elements using the key value pairs

console.log(olaIdentity1.lastName);

// for the bracket notation, you write it this way

console.log(olaIdentity1["lastName"]);

// for the bracket notation, you can write an expression in the bracket.
//  for example

//let say

const nameKey = "Name";
console.log(olaIdentity1["person" + nameKey]);

// let us say we need to get a reply for the user
// to know what he would to know about ola.
// prompt, check notebook

const interestedIn = prompt(
  "What do you want to know about Ola. Choose between personName, lastName, girlAge, girlFriends"
);
console.log(olaIdentity1[interestedIn]);

if (olaIdentity1[interestedIn]) {
  console.log(olaIdentity1[interestedIn]);
} else {
  console.log(
    "Wrong request.Choose between personName, lastName, girlAge, girlFriends"
  );
}
// we can use the dot and bracket notation to add more key value pair.

olaIdentity1.location = "NIGERIA";
console.log(olaIdentity1);
