
// Use the BMI example from Challenge #1, and the code you already wrote
// and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. 
// The message is either "Mark's BMI is higher than John's!" 
// or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. 
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement.

// Data 1
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

let bmiMark = marksWeight / marksHeight ** 2;
let bmiJohn = johnsWeight / (johnsHeight * johnsHeight);

console.log(bmiMark, bmiJohn);

// let markHigherBmi = bmiMark > bmiJohn;
// console.log(markHigherBmi);

// if/else statement
if( bmiMark > bmiJohn ) {
  // console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  // console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
};

// Data 2
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

let secondBmiMark = marksWeight / marksHeight ** 2;
let secondBmiJohn = johnsWeight / (johnsHeight * johnsHeight);

console.log(secondBmiMark, secondBmiJohn);

// let secondMarkHigherBmi = secondBmiMark > secondBmiJohn;
// console.log(secondMarkHigherBmi);

// if/else statement
if( secondBmiMark > secondBmiJohn ) {
  // console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${secondBmiMark}) is higher than John's (${secondBmiJohn})!`);
} else {
  // console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${secondBmiJohn}) is higher than Mark's (${secondBmiMark})!`);
};
