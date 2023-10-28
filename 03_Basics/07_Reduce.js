// use Reduce

let nums = [1,2,3];

console.log("using function")
const totalSum = nums.reduce( function(acc, currval) {
    console.log(`acc : ${acc} currval from nums : ${currval} runningTotal : ${acc + currval}`);
    return acc + currval;
},0);
console.log(totalSum);

console.log("using arrow function")

const totalusingReduce = nums.reduce((acc,currval)=>(acc + currval),0)

console.log(totalusingReduce);

const shoppingCart = [
    {
        couurseName : "js course",
        price : 2999,
    },
    {
        couurseName : "py course",
        price : 5999,
    },
    {
        couurseName : "Data Science course",
        price : 15999,
    }
]

console.log("now we want to find total price to pay");

const totalToPay = shoppingCart.reduce( (acc,shoppingCart) => acc+ shoppingCart.price,0)

console.log(totalToPay);

