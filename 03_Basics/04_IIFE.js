// Immediately Invoked Function Expression (IIFE)

// for Ex : we want to call some function when we run our app

// real ex: database connection function.

// some time we have problem in global scope pollution
// so we use IIF - so we directly run - invoke function

function fn1(){
    console.log(`simple function we have to call it`);
}
fn1(); // calling function

// it's called named IIF function

(function namedIIFFunction(){
    console.log(`Immediately Invoked Function`);
})();


// remember - when we want to write two iif function in one file then we have have to end it with ;

// iif with arrow function - unnamed namedIIFFunction

(() => {
    console.log(`This is IIF function Using Arrow Function`);
})();

// pass parameter in IIF function

((name) => {
    console.log(`With Parameter IIF Funtion : ${name}`)
})("Digvijay");
