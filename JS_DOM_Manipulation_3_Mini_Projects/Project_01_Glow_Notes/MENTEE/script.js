// 📝 Glow Notes —
// LESSON TARGETS:
// - Selecting elements (getElementById, querySelector, querySelectorAll)
// - Modifying elements (textContent)
// - Creating / adding / removing elements (createElement, appendChild, remove)
// - Event delegation (one listener on the parent <ul>)
// - BONUS: classList (flash effect)
//
// GOAL:
// When the user types a note and clicks "Add Note":
// - A new <li> note appears
// - It has the note text + a Remove button
// - Clicking Remove deletes that note

// --------------------------------------------
// STEP 1 — Select important elements
// --------------------------------------------
// Select and store these DOM elements:
// 1) input with id "noteInput" (use getElementById)
// 2) button with id "addBtn" (use querySelector)
// 3) ul with id "noteList" (use querySelector)
//
// Then console.log all 3 variables to prove your selectors worked.

// ✅ WRITE YOUR CODE UNDER THIS LINE
let addNoteInput = document.getElementById("noteInput");
let addNoteButton = document.querySelector("#addBtn");
let addNoteUl = document.querySelector("#noteList");
console.log(addNoteInput);
console.log(addNoteButton);
console.log(addNoteUl);

// --------------------------------------------
// STEP 2 — Create a function that builds ONE note <li>
// --------------------------------------------
// Create a function: createNoteElement(noteText)
//
// Inside the function:
// 1) create an <li> and give it class "note"
// 2) create a <p> with class "noteText" and set p.textContent = noteText
// 3) create a <button> with classes "btn", "danger", "removeBtn"
// 4) set button.textContent = "Remove"
// 5) append p + button into the li
// 6) return the li

// ✅ WRITE YOUR CODE UNDER THIS LINE
function createNoteElement(noteText) {
    let liClasses = ["note"];
    let pClasses = ["noteText"];
    let buttonClasses = ["btn", "danger", "removeBtn"];

    // Create new list item and append the class.
    let noteLi = document.createElement("LI");
    noteLi.classList.add(...liClasses);

    // Create new p tag, add classes, and set value based on function input.
    let noteP = document.createElement("P");
    noteP.classList.add(...pClasses);
    noteP.textContent = noteText;

    let noteButton = document.createElement("BUTTON");
    noteButton.classList.add(...buttonClasses);
    noteButton.textContent = "Remove";
    noteButton.setAttribute("type", "button");

    noteLi.innerHTML = noteP.outerHTML + noteButton.outerHTML;
    return noteLi;
}

// --------------------------------------------
// STEP 3 — Add click behavior to "Add Note"
// --------------------------------------------
// Add a click event listener to the Add button.
//
// When clicked:
// 1) read the input value (string)
// 2) if the input is empty (""), do nothing (return)
// 3) build a new <li> using createNoteElement(...)
// 4) append the new <li> into the noteList
// 5) clear the input (input.value = "")
// 6) console.log("Added note:", text)

// ✅ WRITE YOUR CODE UNDER THIS LINE
addNoteButton.addEventListener("click", (event) => {
    // Pull value from field into internal function variable.
    inputValue = addNoteInput.value;

    // Check for empty note.
    if(inputValue == "") return;

    // Get element based on text and append it to the list.
    let newNote = createNoteElement(inputValue);
    addNoteUl.append(newNote);

    // Adding the flash from Step 5... Which I can do because of hoisting.
    // Also putting this into a timeout so that the element can appear before this is executed and the transition can have flash fade in before fading out.
    setTimeout(() => {
        flashNote(newNote);
    }, 100);

    // Clear input for new note.
    addNoteInput.value = "";
    console.log("Added Note:", inputValue);
});

// --------------------------------------------
// STEP 4 — Remove notes (event delegation)
// --------------------------------------------
// We attach ONE click listener to the parent <ul> (#noteList).
// This works even for notes created later.
//
// On noteList click:
// 1) check if the clicked element has class "removeBtn"
//    (event.target.classList.contains("removeBtn"))
// 2) if yes, remove the closest <li> (event.target.closest("li").remove())
// 3) console.log("Removed a note")

// ✅ WRITE YOUR CODE UNDER THIS LINE
addNoteUl.addEventListener("click", (event) => {
    if(event.target.classList.contains("removeBtn")) {
        event.target.closest("li").remove();
        console.log("Removed a note.");
    }
});

// --------------------------------------------
// STEP 5 — BONUS: Add a "flash" class when adding
// --------------------------------------------
// When a new note is added:
// 1) add class "flash" to the new li
// 2) remove it after 300ms using setTimeout
//
// (CSS already exists for .flash)

// ✅ WRITE YOUR CODE UNDER THIS LINE
function flashNote(noteElem) {
    noteElem.classList.add("flash");
    setTimeout(() => {
        noteElem.classList.remove("flash");
    }, 300);
}