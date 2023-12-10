"use strict";

let scoreP1 = document.querySelector("#score-0");
let scoreP2 = document.querySelector("#score-1");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");
let dicePL = document.querySelector(".dice");
let currentscore1 = document.querySelector("#current-0");
let currentscore2 = document.querySelector("#current-1");
const btnNew = document.querySelector(".btn-new-game");
const btnRoll = document.querySelector(".btn-roll-game");
const btnHold = document.querySelector(".btn-hold-game");

const scores = [0, 0];
scoreP1.textContent = 0;
scoreP2.textContent = 0;
let currentscore = 0;
let score = 0;
let playing = true;
let activeplayer = 0;
let randomdiceNumber = Number(Math.trunc(Math.random() * 6) + 1);
dicePL.classList.add("hidden");

const switchfunc = function () {
  document.getElementById(`current-${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    dicePL.classList.remove("hidden");
    dicePL.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current-${activeplayer}`).textContent =
        currentscore;
    } else {
      switchfunc();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += currentscore;

    document.getElementById(`score-${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.remove("player-active");
    } else {
      switchfunc();
    }
  }
});

btnNew.addEventListener("click", function () {
  currentscore = 0;
  scores[0] = 0;
  scores[1] = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currentscore1.textContent = 0;
  currentscore2.textContent = 0;
  dicePL.classList.add("hidden");
  playing = true;
  player0.classList.remove("player-winner");
  player0.classList.add("player-active");
  player1.classList.remove("player-winner");
  player1.classList.remove("player-active");
});
