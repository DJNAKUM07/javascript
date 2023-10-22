// console.log('D')
// console.log('J')

// function printName() {
//     console.log('DJ');
// }
// printName();
// console.log("--------");

// for (let index = 0; index < 5; index++) {
//     printName();
// }
// console.log("--------");

/*
    printName - reference of the function
    printName() - execute a function
 */

function addTwoNumber(num1, num2){
    console.log(num1 + num2);
}

// when declared a function then it have variables then it's called parameter.

// when calling that function that we pass variables it's called arguments.

addTwoNumber(2,3);

function addThreeNumber(num1,num2,num3){
    return num1 + num2 + num3;
}

const ans = addThreeNumber(1,2,3);
console.log(`ans : ${ans}`);

function loginmsg(userName){
    // if(userName === undefined){
    //     console.log("Enter User Name");
    //     return;
    //console.log(Boolean(undefined));
    // }
    if(!userName || Number(userName))
        return "Enter User Name";
    return `Hello ${userName}`;
}

console.log(loginmsg("DJ"));
console.log(loginmsg());
console.log(loginmsg(5));