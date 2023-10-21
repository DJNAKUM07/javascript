let lastname = "Digvijay";
let firstname = "Nakum";

// concat string - old method
console.log(lastname + " " + firstname + " hello");

// use new method String interpolation - using backtrack

console.log(`Hello my name is ${lastname} ${firstname}`);

// object
let gameName = new String("Digvijay");

console.log(gameName);
console.log(gameName[0]); // get 0th index character
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.charAt(1));
console.log(gameName.indexOf('i'));

console.log(gameName.toUpperCase());

// other methods like - split,replace,trim
