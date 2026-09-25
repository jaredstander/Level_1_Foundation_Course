/*
===========================================================
PROJECT 3 — Mystery Box Reward Loader
(Promises + then/catch + async/await + try/catch)
===========================================================

🎯 WHAT YOU ARE BUILDING
A mini UI where you click "Open Mystery Box".
The app "loads" for a moment (suspense)... then:
✅ shows a reward (success)
OR
❌ shows an error (failure)
(It fails sometimes ON PURPOSE so you can practice errors.)

You also have a toggle:
- Use then/catch
- Use async/await

-----------------------------------------------------------
STEP 1 — Grab DOM elements (IDs already exist)
Use document.getElementById(...) to select:

Buttons:
- openBtn
- resetBtn

Toggle:
- thenModeRadio
- asyncModeRadio
  (OR select by name="mode")

UI:
- loadingText
- resultCard, rewardEmoji, rewardName, rewardMeta
- errorCard, errorMessage

-----------------------------------------------------------
STEP 2 — Create a function that RETURNS a Promise
Create a function like:

function loadReward() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Decide success vs failure using Math.random()
      // If success: resolve(rewardObject)
      // If fail: reject("some message")
    }, 1200);
  });
}

Reward object example:
{ emoji: "🧿", name: "Neon Charm", rarity: "Rare", points: 120 }

Make the app succeed ~70% of the time:
if (Math.random() < 0.7) success else failure

-----------------------------------------------------------
STEP 3 — UI helper functions (loading/success/error/reset)
A) showLoading()
   - show loadingText ("Loading...")
   - hide resultCard and errorCard
   - disable openBtn

B) showSuccess(reward)
   - hide loadingText
   - show resultCard
   - fill rewardEmoji/rewardName/rewardMeta
   - hide errorCard
   - enable openBtn

C) showError(message)
   - hide loadingText
   - show errorCard with message
   - hide resultCard
   - enable openBtn

D) resetUI()
   - hide loadingText
   - hide both cards
   - clear previous text
   - enable openBtn

-----------------------------------------------------------
STEP 4 — Implement then/catch flow (mode 1)
If user chose "then/catch":
1) showLoading()
2) call loadReward()
3) .then(reward => showSuccess(reward))
4) .catch(err => showError(err))

-----------------------------------------------------------
STEP 5 — Implement async/await flow (mode 2)
If user chose "async/await":
1) showLoading()
2) inside an async function:
   try {
     const reward = await loadReward();
     showSuccess(reward);
   } catch (err) {
     showError(err);
   }

-----------------------------------------------------------
STEP 6 — Reset button
resetBtn should call resetUI()

-----------------------------------------------------------
✅ TEST YOUR APP
- Click Open 10 times: you should see BOTH success and error.
- Switch mode and try again.
- Confirm button disables while loading.
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

// Step 1
// Buttons
const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");
// Toggle
const thenModeRadio = document.getElementById("thenModeRadio");
const asyncModeRadio = document.getElementById("asyncModeRadio");
// UI
const loadingText = document.getElementById("loadingText");
const resultCard = document.getElementById("resultCard");
const rewardEmoji = document.getElementById("rewardEmoji");
const rewardName = document.getElementById("rewardName");
const rewardMeta = document.getElementById("rewardMeta");
const errorCard = document.getElementById("errorCard");
const errorMessage = document.getElementById("errorMessage");


// Step 2
function loadReward() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve({ emoji: "🧿", name: "Neon Charm", rarity: "Rare", points: 120 });
      } else {
        reject("Loading Failed");
      }
    }, 1200);
  });
}


// Step 3
function showLoading() {
  // show loadingText ("Loading...")
  loadingText.style.display = "block";
  // hide resultCard and errorCard
  resultCard.style.display = "none";
  // disable openBtn
  openBtn.setAttribute("disabled", "true");
}
function showSuccess(reward) {
  // hide loadingText
  loadingText.style.display = "none";
  // show resultCard
  resultCard.style.display = "block";
  // fill rewardEmoji/rewardName/rewardMeta
  rewardEmoji.textContent = reward.emoji;
  rewardName.textContent = reward.name;
  rewardMeta.textContent = reward.meta;
  // hide errorCard
  errorCard.style.display = "none";
  // enable openBtn
  openBtn.removeAttribute("disabled");
}
function showError(message) {
  // hide loadingText
  loadingText.style.display = "none";
  // show errorCard with message
  errorCard.textContent = message;
  errorCard.style.display = "block";
  // hide resultCard
  resultCard.style.display = "none";
  // enable openBtn
  openBtn.removeAttribute("disabled");
}
function resetUI() {
  // hide loadingText
  loadingText.style.display = "none";
  // hide both cards
  resultCard.style.display = "none";
  errorCard.style.display = "none";
  // clear previous text
  loadingText.textContent = "Loading... decoding reward signal...";
  // enable openBtn
  openBtn.removeAttribute("disabled");
}


// Step 4
openBtn.addEventListener("click", (event) => {
  // Adding a resetUI call here to make it look nice;
  // then when you click Open Reward again, it reset to be clearer to the user that this
  // is a new reward.
  resetUI();
  if(thenModeRadio.checked) {
    thenFetchReward();
  } else if(asyncModeRadio.checked) {
    awaitFetchReward();
  }
});
// I am making then and await separate functions to illustrate the difference between those
function thenFetchReward() {
  showLoading();
  loadReward().then(reward => showSuccess(reward)).catch(err => showError(err));
}


// Step 5
async function awaitFetchReward() {
  showLoading();
  try {
    const reward = await loadReward();
    showSuccess(reward);
  } catch (err) {
    showError(err);
  }
}

// Step 6
resetBtn.addEventListener("click", (event) => {
  resetUI();
});