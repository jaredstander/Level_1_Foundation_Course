/*
🔭 Scope & Hoisting Lab — 

TOPICS:
- Global scope vs function scope (local scope)
- What variables a function can "see"
- Hoisting (what gets lifted to the top)
  - Function declarations are hoisted
  - Function expressions (with const/let) are NOT hoisted

RULES:
- Write code under each step.
- Read the comments carefully — this project is about "why" things work.
*/

/* -----------------------------------------
   STEP 1 — Global vs Local
   -----------------------------------------
   1) Create a global variable called city (string)
   2) Create a function called printCity
      - Inside the function, console.log city
   3) Call printCity()
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let city = "Manchester";

function printCity() {
   console.log(city);
}

console.log(printCity());

/* -----------------------------------------
   STEP 2 — Local variables stay inside the function
   -----------------------------------------
   1) Create a function called makeSecret
   2) Inside it, create a variable secret (string)
   3) console.log secret inside the function
   4) Call makeSecret()

   IMPORTANT:
   - Do NOT try to console.log(secret) outside the function
   - That would cause an error (secret is local)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
function makeSecret() {
   let secret = "shhhhhhhh...";
   console.log(secret);
}
makeSecret();

/* -----------------------------------------
   STEP 3 — Scope shadowing (same name, different place)
   -----------------------------------------
   1) Create a global variable called level (number)
   2) Create a function called printLevel
      - Inside, create ANOTHER variable called level (different value)
      - console.log("inside:", level)
   3) Outside the function, console.log("outside:", level)
   4) Call printLevel()
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let level = 1;

function printLevel() {
   let level = 2;
   console.log("Inside:", level);
}
console.log("Outside:", level);
printLevel();

/* -----------------------------------------
   STEP 4 — Hoisting: function declaration
   -----------------------------------------
   Create a function named hoistedHello() using a FUNCTION DECLARATION.
   Then call it BEFORE its written (above it in the file).

   Example:
   hoistedHello();
   function hoistedHello() { ... }

   It works because declarations are hoisted.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
hoistedHello();
function hoistedHello() {
   console.log("Called hoistedHello.");
}

/* -----------------------------------------
   STEP 5 — NOT hoisted: function expression
   -----------------------------------------
   Create a function expression stored in const notHoistedHello.

   Try calling it BEFORE it is defined.
   Then comment that call out (so your file doesn't crash).

   Explain in a comment:
   - Why does it fail?
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
notHoistedHello();
const notHoistedHello = () => console.log("Called notHoistedHello.");
/*
   notHoistedHello fails to be hoisted because it's an expression.
   Any declarations (variables, functions) are processed first, then expressed are processed when JavaScript is executed.
   Since notHoistedHello is an expression (=) and not a declaration, it cannot be hoisted because it is not initilized in the first pass JavaScript does.
*/