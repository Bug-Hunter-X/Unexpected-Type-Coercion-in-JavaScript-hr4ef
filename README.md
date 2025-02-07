# Unexpected Type Coercion in JavaScript

This repository demonstrates a common but easily overlooked bug in JavaScript: unexpected type coercion. JavaScript's loose typing system allows for automatic type conversion, which can lead to surprising results if not handled carefully.

## The Bug

The `foo` function is intended to add two numbers. However, when a string is passed as an argument, JavaScript concatenates the string and the number instead of performing numeric addition. This is because JavaScript attempts to perform the most reasonable operation considering the input types.

## The Solution

To avoid this issue, it is always best to explicitly check the data types of inputs and perform explicit type conversions when necessary.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the solution code that addresses this problem.
4. Run the code using Node.js or your preferred JavaScript runtime.  You will see the different outcomes clearly.