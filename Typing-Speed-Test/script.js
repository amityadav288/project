const passages = [
    "The quick brown fox jumps over the lazy dog. Good typing speed comes with regular practice and patience.",

    "Learning to type faster can save a lot of time. Focus on accuracy first and speed will improve naturally.",

    "Technology has changed the way we communicate, work and learn. Good typing skills are useful in almost every field.",

    "Practice makes progress. Every mistake is an opportunity to improve your accuracy and become a better typist.",

    "A calm mind and steady fingers can help you type faster. Do not rush and always focus on the next word.",

    "The internet gives us access to a huge amount of information. Typing efficiently makes working online much easier.",

    "Small improvements every day can create big results over time. Keep practicing and enjoy the process of learning."
];

const textDisplay = document.getElementById("textDisplay");
const typingInput = document.getElementById("typingInput");

const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

const progressBar = document.getElementById("progressBar");
const statusElement = document.getElementById("status");

const restartBtn = document.getElementById("restartBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

const timeSelect = document.getElementById("timeSelect");

const resultCard = document.getElementById("resultCard");

const finalWpm = document.getElementById("finalWpm");
const finalAccuracy = document.getElementById("finalAccuracy");
const finalCharacters = document.getElementById("finalCharacters");

const bestScoreElement = document.getElementById("bestScore");

let currentText = "";
let timeLeft = 30;
let timer = null;
let started = false;
let finished = false;
let startTime = null;


/* =========================
   Load Best Score
========================= */

let bestScore = localStorage.getItem("typingBestScore") || 0;

bestScoreElement.textContent = bestScore;


/* =========================
   Start New Test
========================= */

function newTest() {

    clearInterval(timer);

    started = false;
    finished = false;
    startTime = null;

    timeLeft = Number(timeSelect.value);

    timerElement.textContent = timeLeft;
    wpmElement.textContent = "0";
    accuracyElement.textContent = "100%";

    typingInput.value = "";
    typingInput.disabled = false;

    statusElement.textContent = "Ready to type...";

    progressBar.style.width = "0%";

    resultCard.classList.add("hidden");

    currentText =
        passages[Math.floor(Math.random() * passages.length)];

    textDisplay.innerHTML = "";

    currentText.split("").forEach((character, index) => {

        const span = document.createElement("span");

        span.classList.add("char");
        span.textContent = character;

        if (index === 0) {
            span.classList.add("current");
        }

        textDisplay.appendChild(span);
    });

    typingInput.focus();
}


/* =========================
   Start Timer
========================= */

function startTest() {

    if (started || finished) return;

    started = true;
    startTime = Date.now();

    statusElement.textContent = "Typing...";

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        updateStats();

        if (timeLeft <= 0) {
            finishTest();
        }

    }, 1000);
}


/* =========================
   Handle Typing
========================= */

typingInput.addEventListener("input", () => {

    if (finished) return;

    if (!started && typingInput.value.length > 0) {
        startTest();
    }

    const typedText = typingInput.value;

    const characters = textDisplay.querySelectorAll(".char");

    characters.forEach((char, index) => {

        char.classList.remove(
            "correct",
            "incorrect",
            "current"
        );

        if (index < typedText.length) {

            if (typedText[index] === currentText[index]) {
                char.classList.add("correct");
            } else {
                char.classList.add("incorrect");
            }

        } else if (index === typedText.length) {

            char.classList.add("current");
        }
    });

    updateStats();

    const progress =
        Math.min(
            (typedText.length / currentText.length) * 100,
            100
        );

    progressBar.style.width = progress + "%";

    if (typedText.length >= currentText.length) {
        finishTest();
    }
});


/* =========================
   Calculate Stats
========================= */

function updateStats() {

    const typedText = typingInput.value;

    if (typedText.length === 0) {
        wpmElement.textContent = "0";
        accuracyElement.textContent = "100%";
        return;
    }

    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {

        if (typedText[i] === currentText[i]) {
            correctCharacters++;
        }
    }

    const accuracy =
        Math.round(
            (correctCharacters / typedText.length) * 100
        );

    accuracyElement.textContent = accuracy + "%";


    let elapsedSeconds;

    if (started && startTime) {
        elapsedSeconds =
            (Date.now() - startTime) / 1000;
    } else {
        elapsedSeconds = 1;
    }

    elapsedSeconds = Math.max(elapsedSeconds, 1);

    const words =
        correctCharacters / 5;

    const wpm =
        Math.round(words / (elapsedSeconds / 60));

    wpmElement.textContent = wpm;
}


/* =========================
   Finish Test
========================= */

function finishTest() {

    if (finished) return;

    finished = true;

    clearInterval(timer);

    typingInput.disabled = true;

    statusElement.textContent = "Test finished!";

    updateStats();

    const finalWpmValue =
        Number(wpmElement.textContent) || 0;

    const finalAccuracyValue =
        accuracyElement.textContent;

    const charactersTyped =
        typingInput.value.length;

    finalWpm.textContent = finalWpmValue;

    finalAccuracy.textContent =
        finalAccuracyValue;

    finalCharacters.textContent =
        charactersTyped;

    resultCard.classList.remove("hidden");


    /* Save Best Score */

    if (finalWpmValue > Number(bestScore)) {

        bestScore = finalWpmValue;

        localStorage.setItem(
            "typingBestScore",
            bestScore
        );

        bestScoreElement.textContent =
            bestScore;
    }
}


/* =========================
   Restart
========================= */

restartBtn.addEventListener("click", () => {
    newTest();
});


tryAgainBtn.addEventListener("click", () => {
    newTest();
});


/* =========================
   Time Selection
========================= */

timeSelect.addEventListener("change", () => {
    newTest();
});


/* =========================
   Keyboard Shortcut
========================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        newTest();
    }

});


/* =========================
   Start
========================= */

newTest();
