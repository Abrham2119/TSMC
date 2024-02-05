"use strict";
//arrays
let num = 10;
let str = "Hello";
let bool = true;
let arr = [1, 2, 3, 4, 5];
let arrStr = ["abrham", "amanuel"];
let tup = ["abrham", 1];
//enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
;
let myColor = colors.blue;
//any value
let anyValue = 1;
anyValue = "Hello";
//object
let person = {
    name: "Abraham",
    age: 25
};
//Array(CRUD opration on array)
let fruits = ['banana', 'apple', 'orange',];
//create
fruits.push("apple"); //to the end
fruits.unshift("ananas"); //to the beginning
//read
console.log(fruits[0]);
console.log(fruits.length);
//update
fruits[0] = "mango";
//delate
let indexToRemove = fruits.indexOf("apple");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}
//delate by index
let indexRemove = fruits.slice(1, 3);
//Object
let person2 = {
    name: "samson",
    age: 26
};
person2.name = "hayla";
person2.age = 25;
//Function 
function addTwoNumbers(a, b) {
    return a + b;
}
const substructTwoNumbers = (a, b) => {
    return a + b;
};
let arryNumber = [1, 2, 3, 4, 5];
const addAllNumbers = function (arryNumber) {
    const total = arryNumber.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(total);
};
addAllNumbers(arryNumber);
console.log(arryNumber);
