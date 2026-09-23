/*
📊 Compare Numbers — 

GOAL:
Practice:
- Math.max()
- Math.min()
- Math.abs()

RULES:
- Use console.log() for every result
*/

/* STEP 1 — Create numbers */
// Create 3 numbers (one should be negative)
// console.log them
// ✅ WRITE YOUR CODE UNDER THIS LINE
let numbers = [-1, 2, 7];
console.log("Initial Numbers", numbers);

/* STEP 2 — Math.max() */
// Find the largest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
let maxNumber = Math.max(...numbers);
console.log("Math.max", maxNumber);

/* STEP 3 — Math.min() */
// Find the smallest number
// console.log it
// ✅ WRITE YOUR CODE UNDER THIS LINE
let minNumber = Math.min(...numbers);
console.log("Math.min", minNumber);

/* STEP 4 — Math.abs() */
// Use Math.abs() on the negative number
// console.log the result
// ✅ WRITE YOUR CODE UNDER THIS LINE
let absNumber = Math.abs(numbers[0]);
console.log("Math.abs", absNumber);