"use strict";
// 1) Create an array
const array = ["John", "Bob", "Mike", "Don"];
// -------------------------------------------------------------------------------------------
// 2) Add another element at the end of the array: "Ruslan"
array.push("Ruslan");
// -------------------------------------------------------------------------------------------
// 3) Remove the last element from the array
array.pop();
// -------------------------------------------------------------------------------------------
// 4) Write a function that will show all items one by one with: index, value
function showArrayItems(arr) {
  arr.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
  });
}

showArrayItems(array);
// -------------------------------------------------------------------------------------------
// 5) Manipulate the given string
const inputString = "HelloworldMishaNeRuslanDota2";

const indexOfMisha = inputString.indexOf("Misha");
console.log(`Misha is at index ${indexOfMisha}`);
const indexOfDima = inputString.indexOf("Dima");
if (indexOfDima !== -1) {
  const ruslan2 = inputString.slice(indexOfDima, indexOfDima + 4);
  console.log(`ruslan2: ${ruslan2}`);
} else {
  console.log("Dima not found!");
}
// -------------------------------------------------------------------------------------------
// Write to console.log("Dimon!!!!!! Ta tara tata ta ta ta")
console.log("Dimon!!!!!! Ta tara tata ta ta ta");
// -------------------------------------------------------------------------------------------
// 6) Write your own examples of arrow function, function expression, and function declaration

// Arrow Function
const multiply = (a, b) => a * b;

// Function Expression
const subtract = function (a, b) {
  return a - b;
};

// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(multiply(5, 3)); // 15
console.log(subtract(10, 7)); // 3
console.log(add(2, 8)); // 10
