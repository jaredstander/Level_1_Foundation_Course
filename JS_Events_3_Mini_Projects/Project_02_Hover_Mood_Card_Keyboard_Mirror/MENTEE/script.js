/*
  PROJECT 02 — Hover Mood Card + Keyboard Mirror 

  ✅ Events you will practice:
  - "mouseover"  (mouse enters an element)
  - "mouseout"   (mouse leaves an element)
  - "keydown"    (a key is pressed down)
  - "keyup"      (a key is released)

  You will build two interactive features:
  1) A card that changes "mood" when you hover in and out
  2) An input that mirrors what the user types + shows key info

  IMPORTANT:
  - For hover events, you will add/remove CSS classes on the card.
  - For keyboard events, you will use the `event` object.
*/

// =====================================================
// STEP 1) SELECT the elements you need
// -----------------------------------------------------
// Select:
// - #moodCard
// - #moodText
// - #typeInput
// - #mirrorText
// - #lastKey
// - #eventType
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
let moodCard = document.querySelector("#moodCard");
let moodText = document.querySelector("#moodText");
let typeInput = document.querySelector("#typeInput");
let mirrorText = document.querySelector("#mirrorText");
let lastKey = document.querySelector("#lastKey");
let eventType = document.querySelector("#eventType");

// =====================================================
// STEP 2) HOVER IN: mouseover on the card
// -----------------------------------------------------
// ✅ Goal: when the mouse goes over the card:
//
// 1) add the class "isHappy" to the card
// 2) update #moodText to: "Current mood: happy"
// 3) console.log a message for debugging
//
// 💡 Tip: moodCardEl.classList.add("isHappy")
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
moodCard.addEventListener("mouseover", (event) => {
  moodCard.classList.add("isHappy");
  moodText.textContent = "Current mood: happy";
  console.log("Mouseover moodCard, current mood: happy");
});

// =====================================================
// STEP 3) HOVER OUT: mouseout on the card
// -----------------------------------------------------
// ✅ Goal: when the mouse leaves the card:
//
// 1) remove the class "isHappy"
// 2) update #moodText back to: "Current mood: calm"
// 3) console.log a message
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
moodCard.addEventListener("mouseout", (event) => {
  moodCard.classList.remove("isHappy");
  moodText.textContent = "Current mood: calm";
  console.log("Mouseout moodCard, current mood: calm");
});

// =====================================================
// STEP 4) KEYDOWN: show live typing + key info
// -----------------------------------------------------
// ✅ Goal: when a key is pressed while typing in the input:
//
// 1) Set #mirrorText to the input's current value
// 2) Set #lastKey to event.key  (example: "a", "Enter", "Backspace")
// 3) Set #eventType to "keydown"
// 4) console.log(event.key) for debugging
//
// 💡 Tip: inputEl.value gives you the current input text
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
typeInput.addEventListener("keydown", (event) => {
  mirrorText.textContent = typeInput.value;
  lastKey.textContent = event.key;
  eventType.textContent = "keydown";
  console.log(`Keydown event: ${event.key}`);
});

// =====================================================
// STEP 5) KEYUP: update event label
// -----------------------------------------------------
// ✅ Goal: when a key is released:
//
// 1) Update #eventType to "keyup"
// 2) (Optional) add the class "isFocused" to the card for 200ms
//    to give a tiny "feedback" effect while typing.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
typeInput.addEventListener("keyup", (event) => {
  eventType.textContent = "keyup";
  let theCard = event.target.closest(".card");
  theCard.classList.add("isFocused");
  setTimeout(() => {
    theCard.classList.remove("isFocused");
  }, 200);
});

// =====================================================
// STEP 6) DEBUG CHECK
// -----------------------------------------------------
// console.log your elements to confirm selectors worked.
// =====================================================

// ✅ WRITE YOUR CODE UNDER THIS LINE
console.log(moodCard);
console.log(moodText);
console.log(typeInput);
console.log(mirrorText);
console.log(lastKey);
console.log(eventType);