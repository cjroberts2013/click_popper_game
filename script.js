const playArea = {};
const player = {};
let gameObj;

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btn = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
document.addEventListener("DOMContentLoaded", getData);

playArea.btn.forEach(function(item) {
  item.addEventListener("click", handleBtn);
});

function getData() {
  playArea.main.classList.add("visable");
  fetch("https://api.myjson.com/bins/gungm")
    .then(function(rep) {
      return rep.json();
    })
    .then(function(data) {
      gameObj = data.data;
      buildBoard();
    });
}

function buildBoard() {
  let rows = 4;
  let cols = 4;
  let cnt = 0;
  playArea.game.getElementsByClassName.width = cols * 100 + cols * 2;
  playArea.game.getElementsByClassName.margin = "auto";
  for (let y = 0; y < cols; y++) {
    let divMain = document.createElement("div");
    divMain.setAttribute("class", "row");
    divMain.style.width = cols * 100 + cols * 2;
    for (let x = 0; x < rows; x++) {
      let div = document.createElement("div");
      div.setAttribute("class", "pop");
      cnt++;
      div.innerText = cnt;
      div.cnt = cnt;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}

function handleBtn(e) {
  if (e.target.classList.contains("newGame")) {
    startGame();
  }
}

function startGame() {
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove("visable");
  playArea.game.classList.add("visable");
}
