const myArr = [1,2,3];

console.log(myArr);
console.log(myArr.length);
console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

myArr.push(4);
console.log(myArr);
console.log(myArr.toString()); // return string type

myArr.pop(); // pop last ele

console.log(myArr);

myArr.unshift(0); // add ele in start
console.log(myArr);
myArr.shift(); //. remove first ele
console.log(myArr);

const myArr2 = new Array(4,5,6);
console.log(myArr2);

const myArr3 = myArr.join(' - ');
console.log(myArr3);

console.log(myArr2.reverse());

// slice , splice

console.log(" ------- splice & slice Difference ------");


const origional = [0,1,2,3,4,5];

console.log("origional - " + origional);

const slice = origional.slice(1,3); // get ele from start to end idx - end excluded -- doesn't change in origional array

console.log("slice - " + slice);
console.log("origional - " + origional);

const splice = origional.splice(1,3); //  get ele from start to end - both include and also remove it from origional array

console.log("splice - " + splice);
console.log("origional - " + origional);