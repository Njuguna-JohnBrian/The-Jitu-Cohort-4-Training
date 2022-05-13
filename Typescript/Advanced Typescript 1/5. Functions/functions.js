"use strict";
// Parameter Type Annotations
function printKeyValue(key, value) {
    console.log(`${key}:${value}`);
}
printKeyValue("Cohort", 4);
//Todo: Peer Exercise:use correct types
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log(`${greeting}, ${triple(value)}!`);
}
greetTripled(5, "Hey");
// Optional Parameters
function greet(name) {
    console.log(`Hello, ${name || "Unknown"}`);
}
greet();
// Default Values
function sayHelo(greeting = "Hello") {
    console.log(greeting);
}
sayHelo(); //if no arguement is provided it will default to "Hello"
// Inferring Return Types
function getRandomNumber() {
    return Math.random();
}
let myVar = getRandomNumber();
// Explicit Return Types
function getRandom(id) {
    if (id > 1) {
        return Math.random();
    }
    return id;
}
// Documenting Functions
function getFullName(firstName, lastName) {
    let fullName = firstName + lastName;
    console.log(fullName);
    return fullName;
}
