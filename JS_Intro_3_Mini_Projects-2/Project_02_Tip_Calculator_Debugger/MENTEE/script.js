/*
  🧠 Project 2 — Tip Calculator Debugger 
  IMPORTANT RULES:
  - After each step: SAVE → REFRESH → check the CONSOLE.
*/

// ------------------------------
// SYNTAX SPOTLIGHT (read this!)
// ------------------------------
// ;  semicolon → ends a statement (often optional, but we will use it for clarity).
// () parentheses → used to CALL a function, like console.log(...), and in if (condition).
// {} curly braces → create a BLOCK of code, like if (...) { ... } else { ... }
// "" or '' quotes → make a STRING.
// numbers → like 10, 3.14, 520

// STEP 1 — Set the inputs (numbers)
/*
  Create these numbers:
  - billAmount (example: 520)
  - tipPercentWhole (example: 15 for 15%)
  - peopleCount (example: 2)
  Console.log the inputs so you can SEE them.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let billAmount = 520;
let tipPercentWhole = 20;
let peopleCount = 2;
console.log(billAmount);
console.log(tipPercentWhole);
console.log(peopleCount);

// STEP 2 — Percentage logic (15% → decimal)
/*
  Convert the whole percent into a decimal:
  Example: 15% becomes 15 / 100 which equals 0.15
  Create: tipPercentDecimal = tipPercentWhole / 100
  Console.log tipPercentDecimal.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let tipPercentDecimal = tipPercentWhole / 100;
console.log(tipPercentDecimal);

// STEP 3 — Calculate the tip (multiplication)
/*
  Create tipAmount = billAmount * tipPercentDecimal
  Console.log tipAmount (debug step).
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let tipAmount = billAmount * tipPercentDecimal;
console.log(tipAmount);

// STEP 4 — Calculate total bill (addition)
/*
  Create totalAmount = billAmount + tipAmount
  Console.log totalAmount.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let totalAmount = billAmount + tipAmount;
console.log(totalAmount);

// STEP 5 — Split per person (division)
/*
  Create perPerson = totalAmount / peopleCount
  Console.log perPerson.
  Note: you might see decimals — that's normal.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let perPerson = totalAmount / peopleCount;
console.log(perPerson);

// STEP 6 — Use % (remainder) operator (requested)
/*
  Use % to check if the bill is divisible evenly by peopleCount.
  Create remainder = billAmount % peopleCount
  Console.log remainder.
  If remainder is 0, it divides evenly. If not, there's a leftover remainder.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let remainder = billAmount % peopleCount;
console.log(remainder);

// STEP 7 — Debugging checks (>, <)
/*
  Console.log booleans that answer:
  - Is tipAmount > 0 ?
  - Is totalAmount > billAmount ?
  - Is remainder < peopleCount ? (it should be!)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(tipAmount > 0);
console.log(totalAmount > billAmount);
console.log(remainder < peopleCount);