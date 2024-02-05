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
//any type in typescript 
let values = 10;
let title = ["hello", "world"];
title.push({ id: 10 });
console.log(title);
//add any function
function addTogather(value) {
    return value + value;
}
const addTogatherOne = addTogather("hello");
const addTogatherTwo = addTogather({ id: 17 });
//Tuples
let hsla;
hsla = [100, "red", "green", 0.5];
let xy;
xy = [100, 200];
function coordinateSystem() {
    const long = 10;
    const lat = 20;
    return [long, lat];
}
const [long, lat] = coordinateSystem();
let user;
user = ["samson", 26];
console.log(user[0]);
const authorOne = { Fname: "samson", avator: "https://avatars.githubusercontent.com/u/123456789?v=4" };
const newPost = {
    title: "hello",
    body: "world",
    tag: ["javascript", "typescript"],
    create_at: new Date(),
    author: authorOne
};
//use function on inteface
function createPost(Post) {
    console.log(`createPost${Post.title} by ${Post.author.Fname} `);
}
createPost(newPost);
//array in interfacce
let posts = [];
posts.push(newPost);
function getRandomNumber() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const getRandomNumberOne = getRandomNumber();
getRandomNumber();
console.log(getRandomNumberOne);
const userOne = {
    name: "samson",
    score: 2
};
function formatUser(user) {
    console.log(`the${user.name} is ${user.score}`);
}
formatUser(userOne);
//union types
let someId;
someId = 10;
someId = "1heltyuio";
let emailOne;
emailOne = 134;
emailOne = "jhgtrdtfyguhijko";
function swapId(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapId("hello");
const idTwo = swapId(25);
console.log(idOne, idTwo);
function loginDetails(value) {
    if (value.type === "user") {
        console.log(value.firstname, value.email, value.id);
    }
    else {
        console.log(value.age, value.firstname);
    }
}
