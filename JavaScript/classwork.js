let jordan = "Jordan";

// ---------------------Statement Breakdown
let hudaifa = "student";
//keyword--- variableName-- assignmentOperator --- value

// Let  => We use let for reassignment
const instructor = "Brian";
// Const => We use const for something that CANNOT be reassigned
console.log(jordan);
// instructor = "Aziz"; <--- cannot be reassigned value
console.log(instructor);

let greeting = "Click Here To Open Box";
let myAge = 33;
let name = "jordan";

// Declare and Name Values
console.log(myAge, "this is my age now");

// If Statement
if (name === "jordan") {
  console.log("Welcome");
} else {
  console.log("NO");
}

myAge = 36;
// Variable Reassignment --> *alreadyDeclared ^^^
console.log(myAge, "this is my age later");

// Functions
function insertNameInBox() {
  let box = document.querySelector(".box");
  box.innerHTML = `Hi My Name is ${name}, my age is ${myAge};`;
  box.style.padding = "5em";
  box.style.backgroundColor = "pink";
}
// Group Commands to perform actions

// ------------------------------DATA_TYPES
let aNumber = 3;
// Int

let aString = "Any sequence of characters inside doubleQoutes";
// String

let isAStudent = true;
let isAnInstructor = false;
// Booleans --> True or False Values

// undefined= no defined value
let student;
// Null = input doesnot have a value

// objects -> <K,V> key-value pairs (groupData)
let studentOne = {
  name: "Nalini",
  gpa: "3.0",
  location: "Pittsburg",
};
// Object-Oriented Programming*

// LITERAL?
const greeting2 = "Hello";
// console.log("Hi Aziz")<---literal b/c literally just exists
// puts literal in clg
//    vs./
// let sayHello = "Hi Aziz" <---variable b/c its been declared

// Typeof ==> To Ffind Out the datatype:
// typeof(greeting2) ---> String

const checkIfEmail = (input) => {
  console.log(typeof input);
  if (typeof input === String) {
    console.log("They Entered A String");
  }
  if (typeof input === Number) {
    console.log("Please Enter Email as String");
  }
};

// ===================OPERATOR++++++++++++++++++++

// Arithmetic {  +  -  /  *  % } --->
let addition = 1 + 1;

let subtraction = 4 - 3;

let division = 10 / 5;

let modulo = 31 % 10;
// 31/10=3 R1 ---> R1
console.log("Modulo:", modulo);

// Comparison{ < > <= >= != } --->

let olderBro = 21 > 19;

let youngerBro = 19 < 21;

let sibling = 19.5 <= 20;

let playCousin = 100 != 0.5;

let nahh = 100 != 1.0;

// Logical { && || ! } ---> Evaluate to true or false

let concatenation = `I feel like im ${myAge}`;
console.log(concatenation);

let assignment = "Learn HTML";
// console.log("Todays Assignment is",assignment)
console.log(` Todays Assignment is ${assignment}`);

assignment = "Learn JS";

assignment = " Learn Operators";

// Template Literals   ---   ${}
let declaredVariables = "Something";

console.log(`This is how i combine strings and ${declaredVariables}`);

let ekram;
console.log(ekram);
// -------undefined