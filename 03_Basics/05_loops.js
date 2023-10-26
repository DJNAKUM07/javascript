// basic  - if,else , &&,|| , comparing

//. for,while, do while

// for of loop

let arr = [1,2,3,4,5];
for (const ele of arr) {
    console.log(`value : ${ele}`);
}

let words = "Hello World!";

for(const word of words){
    console.log(`character : ${word}`);
}

// Maps - key - value pair store unique value

const map1 = new Map();
map1.set("IN","India");
map1.set("FR","France")

console.log(map1);

// using loop

for (const [key,value] of map1) {
    console.log(`${key} :- ${value}`);
}

console.log("using entries")
for (const [key,value] of map1.entries()) {
    console.log(`${key} :- ${value}`);
}

// we can't use this forof loop on objects

console.log("we can iterate using forin")
let obj = {
"user1" : "DJ",
"user2" : "demo"
}

for (const property in obj) {
    console.log(`${property} : ${obj[property]}`);
}
// using default for in
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key} : ${element}`)
    }
}

// forin also work in array also but in return index as key
