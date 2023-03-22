//1. First function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(34, 12, 86));

//2. Second function
function colorCar(color) {
    console.log(`A ${color} car`)
}

colorCar("purple");

//3. Function and object
const myDreamHouse = {
    name: "myDreamHouse",
    rooms: 5,
    area: "185mp",
    bathrooms: 3,
    utilities: "floor heating",
}

function myDreamHousePrinted(object) {
    for (key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

myDreamHousePrinted(myDreamHouse);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.

function vehicleType(color, code) {
    if (code == 1) {
      console.log(`a ${color} car`);
    } else if (code ===2) {
      console.log(`a ${color} motorbike`);
    } 
  };
vehicleType("blue", 2);

/*5. Can you write the following without the if statement, but with just as a single line with console.log(...);?*/


console.log(3 === 3 ? "yes" : "no");

/*6. Create a function called vehicle */

function vehicle(color, code, age) {
    const vehicleType = code === 1 ? "car" : "motorbike";
    const vehicleAge = age > 0 ? "used" : "new";
    console.log(`a ${color} ${vehicleAge} ${vehicleType}`)
}
vehicle("blue", 1, 5) 

// 7. A list of vehicle

let listOfVehicles = ["car", "bike", "motorcycle", "scooter", "tractor", "airplane"];
let theThirdVehicle = listOfVehicles[2];
console.log(theThirdVehicle);

// 9. Change the function vehicle

function secondVehicle(color, code, age) {
    let secondVehicleType = listOfVehicles[code -1];
    let secondVehicleAge = age > 10 ? "used" : "new" ;
    console.log(`a ${color} ${secondVehicleAge} ${secondVehicleType}`)
}
secondVehicle("green", 3, 1);

// 10. Use the list of vehicles to write an advertisement.

let advertisement = "Amazing Joe's Garage, we service ";

for (let i = 0; i < listOfVehicles.length; i++) {
  advertisement += listOfVehicles[i] + "s";
  if (i < listOfVehicles.length - 2) {
    advertisement += ", ";
  } else if (i === listOfVehicles.length - 2) {
    advertisement += " and ";
  } else {
    advertisement += ".";
  }
}

console.log(advertisement);


//11. Add one more vehicle 

listOfVehicles.push("boat");
console.log(listOfVehicles);

//12. Create an empty object

let emptyObjet = {};
console.log(emptyObjet);


// 13. An object that contains the teachers that we had so far

let ourTeachers = {
    Tommy : "",
    Cris : "",
    Sagin : "",
}

//14.

ourTeachers["Tommy"] = "HTML, CSS";
ourTeachers["Cris"] = "Agile";
ourTeachers["Sagin"] = "JavaScript";

console.log(ourTeachers);

// 15. Write some code to test two arrays for equality using == and ===. 

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function compareTheNumbers(first, second) {
    return first == second;
}

console.log(compareTheNumbers(x, y));
console.log(compareTheNumbers(y, z));
console.log(compareTheNumbers(x, z));

function compareTheArrays(first, second) {
    return first === second;
}

console.log(compareTheArrays(x, y));
console.log(compareTheArrays(z, y));
console.log(compareTheArrays(x, z));

// 16. Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(compareTheArrays(o1, o2));//false
console.log(compareTheArrays(o2, o3));// true
console.log(compareTheArrays(o3, o2));// true 

 o1 = { foo: "cat" };
 o2 = { foo: "fish" };
 o3 = o2;

console.log(compareTheArrays(o1, o2));//false
console.log(compareTheArrays(o2, o3));// true
console.log(compareTheArrays(o3, o2));// true, even if we modify the o2 the o3 will be equal with it 

o1 = { foo: "mouse" };
o2 = { foo: "tiger" };
o2 = o3;

console.log(compareTheArrays(o1, o2));//false
console.log(compareTheArrays(o2, o3));// true
console.log(compareTheArrays(o3, o2));// true 

// 17. What does the following code return? (And why?)

let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar);
/* It will return 'string', and I think because first typeof is for bar, and the second is for the result that it receive, that is a number.*/