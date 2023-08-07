const accountID = 1;
let accountEmail = "demo@gmail.com"
var accountPassword = "12345"
accountCity = "Rajkot"
//accountID =  2; // we can't modify const variables.
console.log(accountID);

accountEmail = "dj@dj.com"
accountPassword = "dj@123"

// console.table is used to print all variables in tabular format.
console.table([accountID , accountEmail , accountPassword , accountCity])

/*
    prefer not to use var
    bcz issue of block scope & functional  - it's like shadowing.- a gobal variable. 
*/
