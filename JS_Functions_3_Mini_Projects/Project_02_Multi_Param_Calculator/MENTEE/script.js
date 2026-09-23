/*
🧰 Multi-Parameter Calculator — 

TOPICS:
- Functions with multiple parameters
- Arrow functions
- Function expressions
- Using return to reuse results

RULES:
- Write code under each step.
- Use console.log() to prove the function outputs are correct.
*/

/* -----------------------------------------
   STEP 1 — add(a, b)
   -----------------------------------------
   Create a function named add that:
   - takes 2 parameters: a and b
   - returns a + b
   Then console.log(add(2, 3))
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
function add(a, b) {
   return a + b;
}
console.log(add(2, 3));

/* -----------------------------------------
   STEP 2 — calcTotal(price, qty, taxRate)
   -----------------------------------------
   Create a function named calcTotal that:
   - takes price, qty, taxRate
   - calculates subtotal = price * qty
   - calculates tax = subtotal * taxRate
   - returns subtotal + tax

   Then test:
   calcTotal(10, 3, 0.16)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
function calcTotal(price, qty, taxRate) {
   let subtotal = price * qty;
   let tax = subtotal * taxRate;
   let total = subtotal + tax;
   return total;
}
console.log(calcTotal(10, 3, 0.16));

/* -----------------------------------------
   STEP 3 — Arrow function version
   -----------------------------------------
   Rewrite calcTotal as an arrow function.
   Name it calcTotalArrow.

   Then test it with the same numbers.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const calcTotalArrow = (price, qty, taxRate) => {
   let subtotal = price * qty;
   let tax = subtotal * taxRate;
   let total = subtotal + tax;
   return total;
};
console.log(calcTotalArrow(10, 3, 0.16));

/* -----------------------------------------
   STEP 4 — Function expression: formatMoney(amount)
   -----------------------------------------
   Create a function expression stored in a variable called formatMoney.
   It should:
   - take an amount (number)
   - return a string like "$10.00"

   Hint:
   amount.toFixed(2)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
const formatMoney = (number) => `$${number.toFixed(2)}`;

/* -----------------------------------------
   STEP 5 — Combine your functions
   -----------------------------------------
   1) Use calcTotalArrow to get a total
   2) Pass that total into formatMoney
   3) console.log the final formatted result
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(formatMoney(calcTotalArrow(12, 4, 0.0625)));