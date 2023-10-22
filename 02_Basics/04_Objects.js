// singletone object
const tinder = new Object();
console.log(tinder);

// non singletone object
const obj = {};
console.log(obj); 

// both are same no internal difference

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4: "d"};
const obj3 = {obj1 , obj2};
const obj4 = {5:"c", 6: "d"};

console.log(obj3);

const mergedobj = Object.assign({},obj1,obj2); // here target us new created object

// console.log(Object.assign(obj1,obj2)); // here we didn't give any thing so it's take obj1 as a target and add other object value into obj1
// console.log(obj1);

console.log(mergedobj);

// also can use sprade  operator same as array

const obj5 = {...obj1,...obj2,...obj4}
console.log(obj5);

    // tinder user
    tinder.name = "DJ", 
    tinder.age = 22,
    tinder.isLoggedIn = false,
    tinder.lastLogInDays = ["sunday", "monday"]

console.log(tinder);

console.log(tinder.lastLogInDays?.[0]) // ? to check  if lastLogInDays exists or have value

console.log(Object.keys(tinder)); // return array of key of that object

console.log(Object.values(tinder)); // return all values

console.log(Object.keys(tinder).length);
console.log(tinder.hasOwnProperty('age'));

console.log(tinder.name);
// we can use another method also to get objects property and can change it's name also
const {name} = tinder;
const {lastLogInDays : lastLog} = tinder // it's callled destructure object
console.log(name);
console.log(lastLog); // this is how use can use it .