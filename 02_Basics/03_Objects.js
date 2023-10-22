// Objects

// singletone
// object.create
// object literal

// use symbol in object **

const mysym = Symbol("myKey1"); // too use it in object we have to use []

const jsUser = {
    name : "DJ", // this is also same as "name" in internally - string
    "full Name" : "Digvijay", // if we want space in key then we have to use ""
    [mysym] : "key",
    age : 22,
    isLoggedIn : false,
    lastLogInDays : ["sunday", "monday"]
}


console.log(jsUser.name);
//console.log(jsUser[name]); can't work this have to pass string
console.log(jsUser["name"]); // other method to access objects key

console.log(jsUser["full Name"]);
console.log(jsUser[mysym]); // use to get symbol value

jsUser.isLoggedIn = true;
// Object.freeze(jsUser); // after freeze no one can change in that object
// jsUser.isLoggedIn = false;
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello js User");
}

console.log(jsUser.greetings); // give function reference
console.log(jsUser.greetings());

jsUser.greetingsTo = function(){
    console.log(`Hello js user : ${this["full Name"]}`);
}

console.log(jsUser.greetingsTo());