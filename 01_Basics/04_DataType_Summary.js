// 1.   Primitive Data Type

// like - String , number , null , boolean ,Symbol,undefiend ,BigInt

const name = 'DJ';
const pass = 123;
const pass2 = 123.3;
let temp = null;
const IsLogIn = false;

// symbol - it is use to make value unique

const id = Symbol('123')
console.log(id);
const anotherid = Symbol('123')
console.log(anotherid);
console.log(id === anotherid);

const bigNumber = 12345678901234567n

// 2.   Non Primitive. - reference

// like
// - Arrays , objects , functions

const arr = ["abc" , "ced"];
console.log(arr);
let myobj = {
    name : "dj",
    age : 99,
}
console.log(myobj);

const myFunction = function(){
    console.log("this is function call")
}

const arrowFun = () => {
    console.log("Arrow Function");
}

myFunction();
arrowFun();
console.log(myFunction);
console.log(typeof myFunction);


/*
    stack & Heap Memory

    -> stack - all Primitive type - call by value
    -> Heap - Non Primitive type - call by reference
 */

let nameOne = "nameOne";
let nameTwo = nameOne;

console.log(nameOne);
console.log(nameTwo);

nameTwo = "nameTwo";

console.log(nameOne);
console.log(nameTwo); // only change in copied variable - called - call by value in heap;

// Non Primitive

let obj = {
    name : "DJ",
    age : 18
}
let obj2 = obj;

obj2.age = 22;

console.log(obj.age);
console.log(obj2.age); // pass reference call change in referece also change in original one