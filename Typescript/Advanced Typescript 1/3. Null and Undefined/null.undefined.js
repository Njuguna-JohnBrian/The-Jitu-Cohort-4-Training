"use strict";
// The following Indicate some use cases for undefined
/**
 * 1.Uninitialized Variable
 *
 * Every TS variable we create without assigning any value
 * gets the value of undefined by default.
 *
 */
let myAge;
console.log(myAge)
/**
 * 2.Optional Function Arguement
 *
 * TS does not allow us to omit function arguement
 *  unless we declare it by adding ? in the parameter declaration.
 * When we do not pass a value to an optional parameter,
 * it's value is set to undefined
 *
 */
function getUser(id) {
    console.log("Optional Arguements are always ", id);
}
getUser();
/**
 * 3.Non Existing Array Elements
 *
 * Non-existing array elements return undefined.
 */
const frameworks = ["Angular", "Vue"];
console.log("Accessing an non-existent array element", frameworks[3]);
// The following Indicate some use cases for null
let isNull = null;
console.log(isNull);
//! You can only assign null to a variable of type null or any
let car;
car = null;
console.log(car);
// Null is falsy
if (car)
    console.log(true);
if (!car)
    console.log(false);
