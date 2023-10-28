// const language = ["java","js","python","c#"]

// // foreach loop
// // forEach loop take callback function as argument.
// // callback function doesn't have function name

// language.forEach( function(val) {
//     console.log(val);
// })

// console.log("now using arrow function");

// language.forEach( (val) => {
//     console.log(val);
// })

// // we can make function any where and just pass it's reference into 
// //  forEach

// function printMe(val){
//     console.log(val);
// }
// console.log("using reference of function");
// language.forEach(printMe);  
// //  printMe - this is function reference  &&   
// //  printMe() - this is function call

// // other arguments

// language.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// })

// const coding = [
//     {
//         languageName : "javascript",
//         languageFileName : "js"
//     },
//     {
//         languageName : "java",
//         languageFileName : "java"
//     },
//     {
//         languageName : "python",
//         languageFileName : "py"
//     },
// ]

// coding.forEach((element) => {
//     console.log(element.languageFileName);
// });

// // const value = coding.forEach((element) => {
// //     return element.languageFileName;
// // });
// // console.log(value); //it's doesn't return anything - undefined - actully we can't do this why return. // bcz forEach doesn't return anything.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const numFilter = myNums.filter( (num) => num > 5 ); // here you can see return array
const numforEach = myNums.forEach(  (num) => num > 5 ); // you can see in documentation it's doesn't return anything.

console.log(numFilter);
console.log(numforEach);


console.log("implicit return in arrow function");
console.log(myNums.filter( (num) => (num % 2 == 0))) // even number
console.log(myNums.filter( (num) => (num % 2 != 0))) // odd number

console.log("explicit return in arrow function");
console.log(myNums.filter( (num) => { 
     return num % 2 == 0
    })) // even number // here if you don't write return it's return []  in this filter

console.log("also we can do same using forEach");

const oddNums = [];

myNums.forEach( (num) => {
    if(num % 2 != 0)
        oddNums.push(num);
})

console.log(`oddNums ${oddNums}`); // string interpolation conver arr into string.
console.log(oddNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  console.log("find History Book")

  let book = books.filter( (bk) => bk.genre === 'History');
  console.log(book);

  console.log("find history and edition > 2000")

  book = books.filter( (bk) => {
    return bk.genre === 'History' && bk.edition >= 2000;
  })

  console.log(book);

 console.log("want all unique genre");
  let uniqueGenre = [];
  books.forEach( (bk) => {
    if(!uniqueGenre.includes(bk.genre))
        uniqueGenre.push(bk.genre);
  });
  console.log(uniqueGenre);

  console.log("use map to add 10 in all numbers");

  const numsplus10 = myNums.map( (num) => {
    return num + 10;
  } )
    console.log(numsplus10);

console.log("use multiple maps & Filter");

const ans = myNums.map( (num) => num * 10).map((num) => num + 1)
console.log(ans);

console.log("now i want onlt that number which is greater then 40");

const ans2 = myNums
             .map( (num) => num * 10)
             .map((num) => num + 1)
             .filter((num) => num > 40)
console.log(ans2);


 

