/*
  PROJECT 03 — Select Theme + Remove Event Listener 

  ✅ Events you will practice:
  - "change" (when a user changes a select/input value)
  - removeEventListener() (turning off an event listener)

  You will build 2 features:
  1) Theme selector: changes the BODY class when you pick a theme
  2) Listener demo: a button that counts clicks, then can be turned off/on

  IMPORTANT:
  - For change event: themeSelectEl.addEventListener("change", ...)
  - For remove: element.removeEventListener("click", handlerFunction)
  - You MUST use a named function for removeEventListener to work.
*/

// =====================================================
// STEP 1) SELECT the elements you need
// -----------------------------------------------------
// Select:
// - body (document.body is easiest)
// - #themeSelect
// - #themeStatus
// - #listenBtn
// - #stopBtn
// - #startBtn
// - #clickCountText
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
let body = document.body;
let themeSelect = document.querySelector("#themeSelect");
let themeStatus = document.querySelector("#themeStatus");
let listenBtn = document.querySelector("#listenBtn");
let stopBtn = document.querySelector("#stopBtn");
let startBtn = document.querySelector("#startBtn");
let clickCountText = document.querySelector("#clickCountText");
let themes = ["theme-space", "theme-sunset", "theme-ocean"];

// =====================================================
// STEP 2) CHANGE EVENT: Theme dropdown
// -----------------------------------------------------
// ✅ Goal: when the user changes the dropdown:
//
// 1) Read the selected value (themeSelectEl.value)
// 2) Remove ALL theme classes from body (space/sunset/ocean)
// 3) Add the new theme class to body (example: "theme-sunset")
// 4) Update #themeStatus text to show the selected theme
//
// 💡 Tip: bodyEl.classList.remove("theme-space", "theme-sunset", "theme-ocean")
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
themeSelect.addEventListener("change", (event) => {
  // The dropdown has the theme name without the 'theme-' prefix, so I am just fixing this in the script:
  // Seems to have been omitted so that the value can be used directly as the themeStatus value.
  let selectedTheme = `theme-${event.target.value}`;

  body.classList.remove(...themes);
  body.classList.add(selectedTheme);
  themeStatus.textContent = event.target.value;
});

// =====================================================
// STEP 3) Create state for click counting
// -----------------------------------------------------
// ✅ Goal: make a variable `clickCount` that starts at 0.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
let clickCount = 0;

// =====================================================
// STEP 4) Create a NAMED handler function for the listen button
// -----------------------------------------------------
// ✅ Goal: create a function named `handleListenClick`.
//
// When it runs:
//
// 1) increase clickCount by 1
// 2) update #clickCountText to show the number
// 3) change #listenBtn text to include the count
//    example: "Click Me (3)"
//
// WHY NAMED?
/*
  removeEventListener needs the *same* function reference.
  If you use an anonymous function, you can't remove it later.
*/
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
function handleListenClick() {
  clickCount += 1;
  clickCountText.textContent = `Button clicks: ${clickCount}`;
  listenBtn.textContent = `Click Me (${clickCount})`;
}

// =====================================================
// STEP 5) Attach the click listener to the listen button
// -----------------------------------------------------
// ✅ Goal: listenBtnEl.addEventListener("click", handleListenClick)
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
listenBtn.addEventListener("click", handleListenClick);

// =====================================================
// STEP 6) STOP button: removeEventListener
// -----------------------------------------------------
// ✅ Goal: when user clicks Stop Listening:
//
// 1) remove the click listener from listenBtnEl
// 2) update listenBtn text to say: "Click Me (listener OFF)"
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
stopBtn.addEventListener("click", (event) => {
  listenBtn.removeEventListener("click", handleListenClick, false);
  listenBtn.textContent = "Click Me (listener OFF)";
});

// =====================================================
// STEP 7) START button: addEventListener back
// -----------------------------------------------------
// ✅ Goal: when user clicks Start Listening:
//
// 1) add the click listener back to listenBtnEl
// 2) update listenBtn text to say: "Click Me (listener ON)"
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
startBtn.addEventListener("click", (event) => {
  listenBtn.addEventListener("click", handleListenClick);
  listenBtn.textContent = "Click Me (listener ON)";
});

// =====================================================
// STEP 8) DEBUG CHECK
// -----------------------------------------------------
// console.log the elements to confirm selectors worked.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
// I prefer the single line per selector output, but I know I could list these as one console.log statement.
console.log(body);
console.log(themeSelect);
console.log(themeStatus);
console.log(listenBtn);
console.log(stopBtn);
console.log(startBtn);
console.log(clickCountText);