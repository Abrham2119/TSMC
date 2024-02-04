//arrays
var num = 10;
var str = "Hello";
var bool = true;
var arr = [1, 2, 3, 4, 5];
var arrStr = ["abrham", "amanuel"];
var tup = ["abrham", 1];
//enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
;
var myColor = colors.blue;
//any value
var anyValue = 1;
anyValue = "Hello";
//object
var person = {
    name: "Abraham",
    age: 25
};
//Array(CRUD opration on array)
var fruits = ['banana', 'apple', 'orange',];
//create
fruits.push("apple"); //to the end
fruits.unshift("ananas"); //to the beginning
//read
console.log(fruits[0]);
console.log(fruits.length);
//update
fruits[0] = "mango";
//delate
var indexToRemove = fruits.indexOf("apple");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}
//delate by index
var indexRemove = fruits.slice(1, 3);
//Object
var person2 = {
    name: "samson",
    age: 26
};
person2.name = "hayla";
person2.age = 25;
