/* 01. Write a console.log statement saying "Hello World!" for each language that you know. */

console.log("Hello World!");
console.log("Buna Lume!");
console.log("Ciao mondo!");
console.log("Hej världen!");

// 02. SyntaxError

console.log('I\'m awesome');

// 03. Declare a variable x and initialize it with an integer

let thisX;
console.log("the value of thisX will be: 1977");
console.log(thisX);
thisX = 1977;
console.log("the value of thisX is: 1977");
console.log(thisX);

// 04.  Declare a variable y and assign a string to it.

let y = "Hey there folks!";
console.log("the value of y will be: Hey there Folks!");
console.log(y);
y = "Bye for now!";
console.log("the value of y now will be: Bye for now!");
console.log(y);

/* 05.  How do you round the number 7.25, to the nearest integer (i.e., whole number)? */

let z = 7.25;
console.log(z);
let a = (Math.round(7.25));
console.log(a);
let highestValue;
if (z > a) {
    highestValue = z;
} else {
    highestValue = a; 
}
console.log(highestValue);

// 06. Arrays

let shoppingList = [];
console.log("the value of shoppingList will be: carrot, tomato, meat, milk");
console.log(shoppingList);
let myFavoritePets = ["cat, caw, dog, chicken"];
console.log(myFavoritePets);
myFavoritePets.push("baby pig");
console.log(myFavoritePets);

// 07. String 

let myString = "this is a test"
console.log(myString);
myString.length;
console.log(myString.length);

/* 08.  Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. */

let numNum = 274;
console.log(numNum);
console.log("The type of the a is: number");
console.log(typeof numNum);

let greetings = "Hey there!"
console.log(greetings);
console.log("The type of the a is: string");
console.log(typeof greetings);

let colors = ["blue, green, red, yellow"];
console.log(colors);
console.log("The type of the a is: array");
console.log(typeof colors);

let scope = false;
console.log(scope);
console.log("The type of the a is: boolean");
console.log(typeof scope);



if (numNum ===greetings) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}
if (greetings === colors) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}
if (colors === scope) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}
if (numNum === scope) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}
if (numNum === colors) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}
if (scope === colors) {
    console.log("SAME TYPE");
} else {
    console.log("DIFFERENT TYPE");
}


// 09. The Remainder

let x = 7;
console.log(x);
x = x % 3
console.log(x);
x = 20;
x = x % 6;
console.log(x);
x = 2984;
x = x % 9;
console.log(x);


// 10. Infinity

let myTest = ["cat", 12, false ];
console.log(myTest);
console.log("the values of an array can me mixed")

if (10/0 === 6/0) {
    console.log("Yes, they ar equal!")
} else {
    console.log("They are not equal!")
}

console.log("After the example from up above we can conclude that the infinities can be compared!")