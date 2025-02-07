function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: both arguments must be numbers";
  }

  return a + b;
}

console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2
console.log(foo("hello",1)); //Output: Invalid input: both arguments must be numbers