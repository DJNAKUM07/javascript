const num = 900;
console.log(num);

const num1 = new Number(100);
console.log(num1);
console.log(num1.toString().length);
console.log(num1.toFixed(2));

const num2 = 101.902;
console.log(num2.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'));

// ------ Maths -------

console.log(Math);

console.log(Math.abs(-1));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,3,2));
console.log(Math.max(4,3,2));

console.log(Math.random());

//  get value between 10 - 20 using random

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
