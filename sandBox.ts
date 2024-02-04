//arrays
let num:Number=10;
let str:string="Hello";
let bool:boolean=true;
let arr:Array<number>=[1,2,3,4,5];
let arrStr:Array<string>=["abrham","amanuel"]
let tup:[string,number]=["abrham",1]
//enum
enum colors {
    red,
    green,
    blue
};




let myColor:colors=colors.blue;
//any value
let anyValue:any = 1;
anyValue = "Hello";

//object

let person:{name:string, age:number} = {
    name: "Abraham",
    age: 25
}






//Array(CRUD opration on array)

let fruits:string[]= ['banana','apple','orange',];
//create

fruits.push("apple")//to the end
fruits.unshift("ananas")//to the beginning

//read
console.log(fruits[0])
console.log(fruits.length)

//update
fruits[0]="mango"
//delate
let indexToRemove =fruits.indexOf("apple")
if (indexToRemove !== -1){
    fruits.splice(indexToRemove,1)
}

//delate by index
let indexRemove=fruits.slice(1,3)



//Object
let person2:{name:string,age:number}={
    name:"samson",
    age: 26
}

person2.name="hayla"
person2.age=25



