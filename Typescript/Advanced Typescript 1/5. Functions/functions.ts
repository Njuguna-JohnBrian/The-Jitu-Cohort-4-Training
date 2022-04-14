// Parameter Type Annotations
function printKeyValue(key: string, value: any) {
  console.log(`${key}:${value}`);
}

printKeyValue("Cohort", 4);

//Todo: Peer Exercise:use correct types
function triple(value: any) {
  return value * 3;
}

function greetTripled(greeting: any, value: any) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled(5, "Hey");

// Optional Parameters
function greet(name?: string) {
  console.log(`Hello, ${name || "Unknown"}`);
}

greet();

// Default Values
function sayHelo(greeting: string = "Hello") {
  console.log(greeting);
}

sayHelo(); //if no arguement is provided it will default to "Hello"

// Inferring Return Types
function getRandomNumber() {
  return Math.random();
}

let myVar = getRandomNumber();

// Explicit Return Types
function getRandom(id: number): number {
  if (id > 1) {
    return Math.random();
  }
  return id;
}

// Documenting Functions

function getFullName(firstName: string, lastName: string): string {
  let fullName = firstName + lastName;
  console.log(fullName);
  return fullName
}
