/*
===========================================================
PROJECT 1 — Coffee Order Status Tracker (setTimeout)
===========================================================

🎯 WHAT YOU ARE BUILDING
A small UI where you click “Place Order” and the order progresses:
Idle → Pending → Brewing → Ready

You will SEE the difference between:
✅ Synchronous code (runs immediately)
✅ Asynchronous code (runs later)

-----------------------------------------------------------
IMPORTANT CONCEPT (READ THIS)
When you click a button:
1) Your click handler runs synchronously (right now)
2) Any setTimeout callbacks run later (after the delay)
That’s why your first console logs appear before the status changes.

-----------------------------------------------------------
STEP 1 — Grab all DOM elements (IDs already exist in HTML)
Use document.getElementById(...) to store these in variables:

Buttons:
- placeBtn
- cancelBtn
- resetBtn

Status UI:
- statusText (the big status text)
- orderIdText (the order id label)
- stepPending, stepBrewing, stepReady (timeline rows)

-----------------------------------------------------------
STEP 2 — Create "state" variables (memory in JS)
You need to remember things between clicks.

Create:
- currentOrderId (string)
- timeoutIds (array) to store each setTimeout id

Why array?
Because you might schedule more than 1 timeout and need to cancel ALL of them.

Example idea:
const timeoutIds = [];
const id = setTimeout(...);
timeoutIds.push(id);

-----------------------------------------------------------
STEP 3 — Create small UI helper functions (clean code)
Create functions that do ONE job each:

A) resetTimeline()
   - remove classes "active" and "done" from all steps
   - set statusText back to "Idle"
   - set orderIdText to "—"

B) setStep(stepElement, state)
   - state can be "active" or "done"
   - if "active": add class active
   - if "done": remove active, add done

C) setStatus(text, tone)
   - set statusText.textContent to text
   - tone can be "neutral", "warn", "good", "bad"
   - update a CSS class on the statusText OR body to change color

D) clearAllTimeouts()
   - loop through timeoutIds and call clearTimeout(id)
   - then empty the array (timeoutIds = [])

-----------------------------------------------------------
STEP 4 — Place Order button (setTimeout chain)
When user clicks Place Order:

1) console.log("SYNC: Place Order clicked")
   (This proves this part runs immediately)

2) clearAllTimeouts()
   (If user clicks Place Order twice, you don't want old timers still running)

3) generate an order id:
   Example: "CF-" + random 4 digits
   Save to currentOrderId and show in orderIdText

4) disable placeBtn, enable cancelBtn

5) Immediately show "Pending"
   - setStatus("Pending", "warn")
   - setStep(stepPending, "active")

6) Schedule "Brewing" after ~1500ms
   - mark pending done
   - mark brewing active
   - setStatus("Brewing", "warn")
   - store the timeout id

7) Schedule "Ready" after ~3500ms total
   - mark brewing done
   - mark ready active
   - setStatus("Ready", "good")
   - disable cancelBtn, enable placeBtn
   - store the timeout id

-----------------------------------------------------------
STEP 5 — Cancel button (clearTimeout)
When user clicks Cancel:

1) console.log("SYNC: Cancel clicked")
2) clearAllTimeouts()  ✅ (this stops future steps)
3) setStatus("Cancelled", "bad")
4) enable placeBtn, disable cancelBtn

-----------------------------------------------------------
STEP 6 — Reset button
Reset should always bring you back to Idle:
- clearAllTimeouts()
- resetTimeline()
- enable placeBtn, disable cancelBtn

-----------------------------------------------------------
✅ TEST YOUR APP
- Click Place Order → Cancel quickly → should stop progressing
- Click Place Order and wait → should reach Ready
- Click Reset at any time → should return to Idle cleanly
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

// Step 1
const placeBtn = document.getElementById("placeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("statusText");
const orderIdText = document.getElementById("orderIdText");
const stepPending = document.getElementById("stepPending");
const stepBrewing = document.getElementById("stepBrewing");
const stepReady = document.getElementById("stepReady");
const stepElements = [stepPending, stepBrewing, stepReady];
const stepNames = ["active", "done"];
// Similar to the theme selector, the classes in the CSS do not exactly match neutral, warn, good, etc;
// So, sourcing these classes from the CSS directly.
const toneStatuses = ["toneNeutral", "toneWarn", "toneGood", "toneBad"];

// Step 2
let currentOrderId = new String;
let timeoutIds = new Array;

// Step 3
function resetTimeline() {
   stepElements.forEach(step => {
      step.classList.remove(...stepNames);
   });
   statusText.textContent = "Idle";
   orderIdText.textContent = "—";
}

function setStep(stepElement, state) {
   if(state === "active") {
      stepElement.classList.add("active");
   } else if(state === "done") {
      stepElement.classList.remove("active");
      stepElement.classList.add("done");
   } else {
      console.error("Error in setStep: Invalid State");
   }
}

function setStatus(text, tone) {
   statusText.textContent = text;
   statusText.classList.remove(...toneStatuses);
   statusText.classList.add(tone);
}

function clearAllTimeouts() {
   timeoutIds.forEach((id) => {
      clearTimeout(id);
   });

   timeoutIds = [];
}

// Step 4
placeBtn.addEventListener("click", (event) => {
   console.log("SYNC: Place Order clicked");
   
   clearAllTimeouts();
   
   let newOrderId = `CF-${Math.floor(1000 + Math.random() * 9000)}`;
   currentOrderId = newOrderId;
   orderIdText.textContent = newOrderId;
   
   placeBtn.setAttribute("disabled", "true");
   cancelBtn.removeAttribute("disabled");

   setStatus("Pending", "warn");
   setStep(stepPending, "active");
   
   const brewingTimeout = setTimeout(() => {
      setStep(stepPending, "done");
      setStep(stepBrewing, "active");
      setStatus("Brewing", "warn");
   }, 1500);
   // This push needs to exist outside of the declaration
   timeoutIds.push(brewingTimeout);
   
   const readyTimeout = setTimeout(() => {
      setStep(stepBrewing, "done");
      setStep(stepReady, "active");
      setStatus("Ready", "good");
      cancelBtn.setAttribute("disabled", "true");
      placeBtn.removeAttribute("disabled");
   }, 3500);
   // This push needs to exist outside of the declaration
   timeoutIds.push(readyTimeout);
});

// Step 5
cancelBtn.addEventListener("click", (event) => {
   console.log("SYNC: Cancel clicked");

   clearAllTimeouts();
   setStatus("Cancelled", "bad");
   placeBtn.removeAttribute("disabled");
   cancelBtn.setAttribute("disabled", "true");
});

// Step 6
resetBtn.addEventListener("click", (event) => {
   console.log("SYNC: Reset clicked");

   clearAllTimeouts();
   resetTimeline();
   placeBtn.removeAttribute("disabled");
   cancelBtn.setAttribute("disabled", "true");
});