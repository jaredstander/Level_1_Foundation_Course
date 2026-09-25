/*
===========================================================
PROJECT 2 — Focus Sprint Timer (setInterval)
===========================================================

🎯 WHAT YOU ARE BUILDING
A usable mini "pomodoro-style" timer with:
- big timer display (mm:ss)
- Start / Pause / Reset
- progress bar that fills up as time passes
- "Sprint Complete" message when done

-----------------------------------------------------------
STEP 1 — Grab DOM elements (IDs already exist)
Use document.getElementById(...) to select:

Inputs:
- minutesInput
- secondsInput

Buttons:
- startBtn
- pauseBtn
- resetBtn

UI:
- timeDisplay
- statusText
- progressBarFill

-----------------------------------------------------------
STEP 2 — Create state variables
You need to store:
- intervalId (the id returned by setInterval)
- totalSeconds (full sprint length in seconds)
- remainingSeconds (countdown value)
- isRunning (boolean, optional but helps prevent duplicate intervals)

-----------------------------------------------------------
STEP 3 — Helper functions
A) readInputSeconds()
   - read the inputs
   - convert to a single number (mins*60 + secs)
   - validate > 0 (if not, show warning in statusText)

B) formatTime(seconds)
   - convert seconds into a string "mm:ss"
   - use Math.floor + %
   - padStart for 2 digits

C) render()
   - update timeDisplay.textContent using formatTime(remainingSeconds)
   - update progress bar width:
     progress = (timePassed / totalSeconds) * 100
     width should clamp between 0 and 100

D) stopInterval()
   - if intervalId exists: clearInterval(intervalId)
   - set intervalId back to null
   - set isRunning to false

-----------------------------------------------------------
STEP 4 — Start button behavior
When user clicks Start:
1) If already running, do nothing
2) If remainingSeconds is 0, load a new sprint from inputs
3) Disable Start, enable Pause
4) statusText = "Running..."
5) setInterval every 1000ms:
   - remainingSeconds -= 1
   - render()
   - if remainingSeconds <= 0:
     - stopInterval()
     - statusText = "✅ Sprint Complete!"
     - enable Start, disable Pause

-----------------------------------------------------------
STEP 5 — Pause button behavior
Pause should stop the interval but keep remainingSeconds:
- stopInterval()
- statusText = "Paused"
- enable Start, disable Pause

-----------------------------------------------------------
STEP 6 — Reset button behavior
Reset should:
- stopInterval()
- load inputs into totalSeconds + remainingSeconds
- render()
- statusText = "Idle — set a sprint and press Start"
- enable Start, disable Pause

-----------------------------------------------------------
✅ TEST YOUR APP
- Set 0:10 and press Start → should finish and show complete
- Pause mid-way → time stops
- Start again → continues from remaining time
- Reset → returns to input time
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

// Step 1
// Inputs
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
// Buttons
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
// UI
const timeDisplay = document.getElementById("timeDisplay");
const statusText = document.getElementById("statusText");
const progressBarFill = document.getElementById("progressBarFill");

// Step 2
let intervalId = null;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;

// Step 3
function readInputSeconds() {
   // console.log("Event: readInputSeconds()");
   console.log("minutesInput", minutesInput);
   console.log("secondsInput", secondsInput);
   totalInputTime = Number((Number(minutesInput.value) * 60) + Number(secondsInput.value));
   console.log("total", totalInputTime);

   if(totalInputTime <= 0) {
      statusText.textContent = "❌ Invalid Time.";
      return 0;
   } else {
      return totalInputTime;
   }
}

function formatTime(seconds) {
   // console.log("Event: formatTime(seconds)");
   let formattedMinutes = Math.floor(remainingSeconds / 60);
   let formattedSeconds = Math.floor(remainingSeconds % 60);
   return `${formattedMinutes.toString().padStart(2, "0")}:${formattedSeconds.toString().padStart(2, "0")}`;
}

function render() {
   // console.log("Event: render()");
   timeDisplay.textContent = formatTime(remainingSeconds);
   let timePassed = totalSeconds - remainingSeconds;
   progressBarFill.style.width = `${Math.round((timePassed / totalSeconds) * 100)}%`;
}

function stopInterval() {
   if(intervalId) {
      clearInterval(intervalId);
   }
   intervalId = null;
   isRunning = false;
}

// Step 4
startBtn.addEventListener("click", (event) => {
   // console.log("Event: startBtn click");
   if(isRunning) return;
   
   // Edit this. Since reset reads the inputs and sets both total and remaining
   // (because render only uses remaining so that the numbers decrease)
   // then this needs to check for two things:
   //    remainingSeconds == 0 (just finished) AND totalSeconds > 0 (or else the message from the check in readInputSeconds will be overwritten)
   //    remainingSeconds == totalSeconds (just reset)
   if((remainingSeconds == 0 && totalSeconds > 0) || remainingSeconds == totalSeconds) {
      // Start new sprint
      totalSeconds = readInputSeconds();
      remainingSeconds = readInputSeconds();
      if(totalSeconds <= 0) {
         return;
      } else {
         isRunning = true;
         // Need to call render here rigth away to make the starting value show before the first interval.
         render();
      }
      startBtn.setAttribute("disabled", "true");
      pauseBtn.removeAttribute("disabled");
      statusText.textContent = "Running...";
      intervalId = setInterval(() => {
         remainingSeconds -= 1;
         render();
         if(remainingSeconds <= 0) {
            stopInterval(intervalId);
            statusText.textContent = "✅ Sprint Complete!";
            startBtn.removeAttribute("disabled");
            pauseBtn.setAttribute("disabled", "true");
         }
      }, 1000);
   } else if(remainingSeconds > 0 && remainingSeconds < totalSeconds) {
      // Continue sprint from where it left off after being paused
      intervalId = setInterval(() => {
         remainingSeconds -= 1;
         render();
         if(remainingSeconds <= 0) {
            stopInterval(intervalId);
            statusText.textContent = "✅ Sprint Complete!";
            startBtn.removeAttribute("disabled");
            pauseBtn.setAttribute("disabled", "true");
         }
      }, 1000);
   }
});

// Step 5
pauseBtn.addEventListener("click", (event) => {
   // console.log("Event: pauseBtn click");
   stopInterval(intervalId);
   statusText.textContent = "Paused";
   startBtn.removeAttribute("disabled");
   pauseBtn.setAttribute("disabled", "true");
});

// Step 6
resetBtn.addEventListener("click", (event) => {
   // console.log("Event: resetBtn click");
   stopInterval(intervalId);
   totalSeconds = readInputSeconds();
   remainingSeconds = readInputSeconds();
   render();
   statusText.textContent = "Idle — set a sprint and press Start";
   startBtn.removeAttribute("disabled");
   pauseBtn.setAttribute("disabled", "true");
});