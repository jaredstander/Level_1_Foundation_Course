/*
🧰 Array Toolbox — 

GOAL:
Practice basic array skills:
- Create an array
- Check its size with .length
- Read/update items by index
- Use push, pop, shift, unshift
- Use splice to remove/insert in the middle

RULES:
- Write code under each step.
- Use console.log() to prove the array changes.
*/

/* -----------------------------------------
   STEP 1 — Create an array + check size
   -----------------------------------------
   1) Create an array called groceries with 4 strings
      Example: ["eggs", "milk", "rice", "coffee"]
   2) console.log the array
   3) console.log("length:", groceries.length)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let groceries = ["coffee", "chips", "salsa", "hummus"];
console.log(groceries);
console.log("Length:", groceries.length);

/* -----------------------------------------
   STEP 2 — Read and update by index
   -----------------------------------------
   1) console.log the FIRST item in the array (index 0)
   2) Change the second item (index 1) to a new value
   3) console.log the updated array
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(groceries[0]);
groceries[1] = "candy";
console.log(groceries);

/* -----------------------------------------
   STEP 3 — push + pop (end of array)
   -----------------------------------------
   1) push "chocolate" into the array
   2) console.log after push
   3) pop the last item into a variable called removedEnd
   4) console.log removedEnd
   5) console.log the array after pop
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
groceries.push("chocolate");
console.log(groceries);
let removedEnd = groceries.pop();
console.log(removedEnd);
console.log("post-pop", groceries);

/* -----------------------------------------
   STEP 4 — unshift + shift (start of array)
   -----------------------------------------
   1) unshift "water" to the start
   2) console.log after unshift
   3) shift the first item into a variable called removedStart
   4) console.log removedStart
   5) console.log the array after shift
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
groceries.unshift("water");
console.log("unshift water", groceries);
let removedStart = groceries.shift();
console.log("removedStart", removedStart);
console.log("post-shift", groceries);

/* -----------------------------------------
   STEP 5 — splice (middle edit)
   -----------------------------------------
   Your groceries array is your "editable list".

   1) Use splice to remove 1 item starting at index 2
   2) console.log the removed item (splice returns an array)
   3) console.log groceries after removal

   Then:
   4) Use splice to INSERT "tea" at index 1 (remove 0)
   5) console.log groceries after insert
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let splicedArry = groceries.splice(2, 1); // Using index 2, below index 1 seems to be referring to position 0, but just using 2 since it says 2.
console.log("returned value from splice", splicedArry);
console.log(groceries);
groceries.splice(0, 1, "tea"); // It says remove 0 but index 1, so using index 0.
console.log(groceries);