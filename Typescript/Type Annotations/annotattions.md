# Variable Type Annotations

- In some situations, we’d like to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as any, TypeScript won’t be able to protect us from accidentally assigning a variable to an incorrect type that could break our code

- We can tell TypeScript what type something is or will be by using a ``type annotation`` also known as ``type declaration``.

- We provide type annotation by appending a variable with a colon ``:`` and the type eg (``number, string`` or ``any``)