
# FUNCTIONS.

## Parameter Type Annotations

- In Typescript, function parameters may be given type annotations with the same syntax as variable declarations: a colon next to the name.
- The type annotations ensure that the parameters are the correct type

## Optional Parameters

- TypeScript normally gives an error if we don’t provide a value for all arguments in a function. This isn’t always desirable; sometimes we’d like to skip providing values.

> __Example__

```TypeScript
function greet(name: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}
 
greet('Liam'); // Prints: Hello, Anders!
greet(); // TypeScript Error: Expected 1 arguments, but got 0.
```

## Inferring Return Types

- TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s ```return``` statements.

## Explicit Return Types

- If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis. Here, we use the same syntax as other type annotations, a colon followed by the type. TypeScript will produce an error for any return statement in that function that doesn’t return the right type of value


## Documenting Functions
- Typescript recognizes Javascript Comment Syntax

- ```JavaScript
    //Single Line Comments


    /*
    Multiline comments
    */
    ```

    - It is common to see a third comment style in Typescript ie. ``Documentation Comments``

    - They start with ``/**`` and end with ``*/``, it is common to see each line witha comment start with (``*``).

    - These comments are useful for documenting function. They are placed directly above the function declaration.

    - You may use special tags to describe certain aspects of the function.

    - You can use ```@param``` to describe the parameters and ```@returns``` to describe what the function returns.

    __example__

    ```TypeScript
    
    /**
     * Returns the sum of two numbers
     *
     * @param x - The first input number.
     * @param y - The second input number.
     * @returns the sum of `x` and `y`
    */

    function getSum(x:number, y:number):number{
        return x + y;
    }
    ```

    