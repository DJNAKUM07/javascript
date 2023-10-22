const arr1 = ["spidermen", "ironmen"];
const arr2 = ["batmen", "supermen"];

console.log(arr1);
console.log(arr2);

//arr1.push(arr2); // push arr2 as a single ele in -- just like 2D array
// console.log(arr1); 
// console.log(arr1[2][0]);

// concate all ele

const arr3 = arr1.concat(arr2); // return concated array
console.log(arr3);

// we all other method

const concatMultipleArr = [...arr1,...arr2]; // using this we can concate multiple arrays at once.
console.log(concatMultipleArr);


const complexarr = [0,1,2,[4,5,6],7,[8,[9,10,11]]];

// if we want all ele in a single ele
// simply concate all subarr ele into a single ele

const depth_zero = complexarr.flat(0);
const depth_one = complexarr.flat(1);

const real_arr = complexarr.flat(Infinity); //. remove all subarrays  & add ele into one arr


console.log(complexarr);
console.log(depth_zero);
console.log(depth_one);
console.log(real_arr);


console.log(Array.isArray("Digvijay"));
console.log(Array.from("Digvijay")); //  can make arrays of any ele,variable we passed

console.log(Array.from({name : "DJ"})); // also make objects into arr //. Interesting - will see later


let num1 = 100,num2 = 200,name = "dj";

console.log(Array.of(num1,num2,name)); // pass multiple parameters to make array of it