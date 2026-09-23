// 🎛️ Class Switchboard —
// LESSON TARGETS:
// - Selecting elements (querySelector)
// - Modifying elements (textContent)
// - Adding/removing classes (classList)
// - Temporary class using setTimeout
//
// GOAL:
// Buttons control ONE box:
// - Toggle Highlight: adds/removes a class
// - Shake: adds a class briefly, then removes it
// - Reset: removes classes and resets text

// --------------------------------------------
// STEP 1 — Select the elements you will control
// --------------------------------------------
// Select and store variables for:
// 1) #highlightBtn
// 2) #shakeBtn
// 3) #resetBtn
// 4) #messageBox
// 5) #statusText
//
// Then console.log each one.

// ✅ WRITE YOUR CODE UNDER THIS LINE
let highlightButton = document.getElementById("highlightBtn");
let shakeButton = document.getElementById("shakeBtn");
let resetButton = document.getElementById("resetBtn");
let messageBox = document.getElementById("messageBox");
let statusText = document.getElementById("statusText");
console.log(highlightButton);
console.log(shakeButton);
console.log(resetButton);
console.log(messageBox);
console.log(statusText);

// --------------------------------------------
// STEP 2 — Toggle highlight class
// --------------------------------------------
// On highlightBtn click:
// 1) toggle the class "highlight" on messageBox
// 2) if messageBox HAS the class "highlight":
//      statusText.textContent = "highlight ON"
//    else:
//      statusText.textContent = "highlight OFF"
//
// Hint: messageBox.classList.contains("highlight")

// ✅ WRITE YOUR CODE UNDER THIS LINE
highlightButton.addEventListener("click", (event) => {
    // New JS function does this automatically, including both solutions:
    messageBox.classList.toggle("highlight");

    // The way from the example:
    // if(messageBox.classList.contains("highlight")) {
    //     messageBox.classList.remove("highlight");
    // } else {
    //     messageBox.classList.add("highlight");
    // }

    // But contains is needed still for the statusText:
    if(messageBox.classList.contains("highlight")) {
        statusText.textContent = "Highlight ON.";
    } else {
        statusText.textContent = "Highlight OFF.";
    }
});

// --------------------------------------------
// STEP 3 — Shake the box (temporary class)
// --------------------------------------------
// On shakeBtn click:
// 1) add class "shake" to messageBox
// 2) statusText.textContent = "shaking..."
// 3) after 350ms remove class "shake"
// 4) after removing: statusText.textContent = "done shaking"

// ✅ WRITE YOUR CODE UNDER THIS LINE
shakeButton.addEventListener("click", (event) => {
    if(messageBox.classList.contains("shake")) return;

    messageBox.classList.add("shake");
    statusText.textContent = "Shaking...";
    setTimeout(() => {
        messageBox.classList.remove("shake");
        statusText.textContent = "Done shaking.";
    }, 350);
});

// --------------------------------------------
// STEP 4 — Reset everything
// --------------------------------------------
// On resetBtn click:
// 1) remove class "highlight"
// 2) remove class "shake" (just in case)
// 3) statusText.textContent = "reset complete"

// ✅ WRITE YOUR CODE UNDER THIS LINE
resetButton.addEventListener("click", (event) => {
    removeClasses = ["highlight", "shake"];
    messageBox.classList.remove(...removeClasses);
    statusText.textContent = "Reset complete.";
});