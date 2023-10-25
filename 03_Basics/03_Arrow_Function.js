const user  = {
    username : "DJ",
    price : 999,
    welcomeMessage : function(){
        console.log(this);
        console.log(`${this.username}, welcome to website`);
    }
}

// this refer -  to current context

user.welcomeMessage();
user.username = "NewUser";
user.welcomeMessage();

console.log(this) //. when use print this - it's return empty object
// when you print in browser it's return window object

// when you print in function

// const chai = function(){
//     console.log(this);
// }
// chai()

// const chai2 = function(){
//     const name = "name"
//     console.log(this.name);
// }
// chai2() // it's return undefined - we see later why? this not work in function like this. it's work only in object


// Arrow Function
console.log("Arrow Function");
const chai3 = () => {
    const name = "name"
    console.log(this.name);
}
chai3()


const addTwo = (num1,num2) =>{
    return num1 + num2;
} // it's simple called explicit return

console.log(addTwo(2,3));

// implicit return -  without writing return - when you have only one line

const sumOfTwo = (n1,n2) => (n1 + n2)


console.log(sumOfTwo(2,3));

// when we use curly {} brace then we must have to write return keyword
// we don't write it in parenthesis ()

const returnObjectInArrow = () => ({username : "Digvijay"});

console.log(returnObjectInArrow()); // when returning a object we must have to use parenthesis ()

