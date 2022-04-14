let var1; //created with a default type of any

let var2:any; //created with a type of any

/**
 * When you use the type Any 
 * you are basically opting out of type checking
 * 
 */

let games:any;
games = 1234
games.toLowerCase()//!
games = "basketball"