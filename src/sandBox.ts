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



//Function 
function addTwoNumbers(a:number,b:number):number {
    return a+b;
}

const substructTwoNumbers = (a:number,b:number):number =>{
return a+b;
}


let arryNumber=[1,2,3,4,5];
const addAllNumbers = function (arryNumber:number[]):void {
    const total=arryNumber.reduce((a:number,b:number)=>{
        return a+b;
    },0)  
    console.log(total);
}

addAllNumbers(arryNumber);
console.log(arryNumber)






//any type in typescript 

let values:any = 10;
let title:any[]=["hello", "world"]
title.push({id:10})

console.log(title)


//add any function

function addTogather(value:any):any {
    return value+value
}

const addTogatherOne = addTogather("hello")
const addTogatherTwo=addTogather({id:17})


//Tuples

let hsla:[number,string,string,number]
hsla=[100, "red", "green", 0.5]

let xy:[number,number]
xy=[100,200]


function coordinateSystem():[number,number]{
    const long=10;
    const lat=20;
    return [long,lat]
}

const [long,lat]=coordinateSystem()


let user:[name:string,age:number]
user=["samson",26]
console.log(user[0])




//interfaces

interface Author{
    Fname:string,
    avator:string}

const authorOne:Author ={Fname:"samson",avator:"https://avatars.githubusercontent.com/u/123456789?v=4"}

interface Post{
    title:string,
    body:string,
    tag:string[],
    create_at:Date,
    author:Author
    
}


const newPost: Post={
    title:"hello",
    body:"world",
    tag:["javascript","typescript"],
    create_at:new Date(),
    author:authorOne
}
//use function on inteface
function createPost(Post:Post):void {
    console.log(`createPost${Post.title} by ${Post.author.Fname} `);
}

createPost(newPost);

//array in interfacce

let posts:Post [] = [];
posts.push(newPost)





//type aliases

type rgb=[number, number, number]

function getRandomNumber():rgb {
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)

    return [r,g,b]
}
const getRandomNumberOne=getRandomNumber()
getRandomNumber()

console.log (getRandomNumberOne)

//type on object
type user={name:string,score:number}

const userOne:user={
    name:"samson",
    score:2}

function formatUser(user:user):void{

    console.log(`the${user.name} is ${user.score}`)
}

formatUser(userOne)


//union types
let someId:string|number
someId=10
someId="1heltyuio"


type email=number|string

let emailOne:email

emailOne=134
emailOne="jhgtrdtfyguhijko"


//tagged interface

type Id=string|number
function swapId(id:Id):Id{
    if (typeof id==='string'){
        return parseInt(id);    
    }
    else{
        return id.toString();
    }
}

const idOne=swapId("hello");
const idTwo=swapId(25)




interface users{
    type:"user"
    firstname:string,
    email:string
    id:Id

}
interface person{
    type:"person"
    firstname:string,
    age:number
    id:Id

}

let person1={
    type:"person",
    firstname:"abrham",
    age:13,
    id:"hsuhdias"
}

function loginDetails(value:person|users):void {
    if (value.type === "user"){
        console.log(value.firstname,value.email,value.id)
        
    }
    if(value.type === "person"){
        console.log(value.age,value.firstname)
    }
}