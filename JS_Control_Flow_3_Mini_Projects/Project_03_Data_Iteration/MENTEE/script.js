/*
🧩 Data Iteration — 

GOAL:
Practice "advanced loops" used constantly in real code:
- forEach (arrays)
- for...of (arrays)
- for...in (objects)

RULES:
- Write code under each step.
- Use console.log() to prove the loop is working.
*/

/* -----------------------------------------
   STEP 1 — Create an array (forEach + for...of)
   -----------------------------------------
   1) Create an array called favoriteCities with 4 strings.
      Example: ["CDMX", "Seoul", "Tokyo", "London"]
   2) console.log the whole array.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let favoriteCities = ["Boston", "Manchester", "Seattle", "Portsmouth"];
console.log(favoriteCities);

/* -----------------------------------------
   STEP 2 — forEach (array loop)
   -----------------------------------------
   Use favoriteCities.forEach(...) to:
   - console.log each city
   - include the index too (so you can see position)
   Format idea:
   "City #0: CDMX"
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
favoriteCities.forEach((city, index) => {
   console.log(`City #${index}: ${city}`);
});

/* -----------------------------------------
   STEP 3 — for...of (array loop)
   -----------------------------------------
   Use a for...of loop to:
   - print every city in ALL CAPS
   Hint:
   - city.toUpperCase()
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
for (const city of favoriteCities) {
   console.log(city.toUpperCase());
}

/* -----------------------------------------
   STEP 4 — Create an object (for...in)
   -----------------------------------------
   Create an object called profile with:
   - name (string)
   - age (number)
   - isMentor (boolean)
   Example:
   { name: "Jocelin", age: 32, isMentor: true }
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let profile = { name: "Jared", age: 41, isMentor: false };

/* -----------------------------------------
   STEP 5 — for...in (object loop)
   -----------------------------------------
   Use for...in to loop through profile:
   - log the KEY
   - log the VALUE
   Format idea:
   "age => 32"
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
for (const key in profile) {
   console.log(`${key} -> ${profile[key]}`);
}

/* -----------------------------------------
   STEP 6 — Mini challenge (combine loops)
   -----------------------------------------
   Create an array of objects called students:
   [
     { name: "Ana", level: 1 },
     { name: "Leo", level: 2 },
     { name: "Mia", level: 1 }
   ]

   Use forEach to:
   - log ONLY the students where level === 1
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
let students = [
   { name: "Alice", level: 1 },
   { name: "Bill", level: 2 },
   { name: "Chelsea", level: 3 },
   { name: "Dan", level: 1 }
];
students.forEach(student => {
   if(student['level'] === 1) {
      console.log(student);
   }
});