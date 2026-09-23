/*
🎛️ Filter & Map Studio — 

GOAL:
Practice the "data transformation" array methods:
- filter (keeps certain items)
- map (transforms every item)

RULES:
- Write code under each step.
- Use console.log() to compare before vs after.
*/

/* -----------------------------------------
   STEP 1 — Create a numbers array
   -----------------------------------------
   1) Create an array called numbers with 10 numbers
      Example: [3, 8, 12, 1, 6, 9, 20, 4, 7, 15]
   2) console.log it
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let numbers = [2, 4, 2, 7, 7, 7, 11, 11, 1, 3];
console.log("Numbers:", numbers);

/* -----------------------------------------
   STEP 2 — filter: keep only numbers >= 10
   -----------------------------------------
   1) Create a new array called bigNumbers using filter
   2) Keep only numbers that are 10 or higher
   3) console.log bigNumbers
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let bigNumbers = numbers.filter((num) => num > 10);
console.log("Big Numbers:", bigNumbers);

/* -----------------------------------------
   STEP 3 — filter: keep only EVEN numbers
   -----------------------------------------
   1) Create a new array called evenNumbers using filter
   2) Keep only numbers that are even
   Hint:
   n % 2 === 0
   3) console.log evenNumbers
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Nubmers:", evenNumbers);

/* -----------------------------------------
   STEP 4 — map: double every number
   -----------------------------------------
   1) Create a new array called doubled using map
   2) Each number should become number * 2
   3) console.log doubled
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
doubled = numbers.map((num) => num * 2);
console.log("Doubled Numbers", doubled);

/* -----------------------------------------
   STEP 5 — Combine filter + map
   -----------------------------------------
   Create a new array called result:
   - Step A: filter numbers to keep only numbers > 5
   - Step B: map those numbers to add 100 to each one

   Then console.log result
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let result = numbers.filter((num) => num > 5);
result = result.map((num) => num += 100);
console.log("Result Numbers", result);