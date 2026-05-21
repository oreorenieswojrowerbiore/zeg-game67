// ==========================================
// 1. GRAFIKI
// ==========================================
const wallImg = new Image();
wallImg.src = "assets/wall.png";

const enemyImg = new Image();
enemyImg.src = "assets/enemy.png";

const keyImg = new Image();
keyImg.src = "assets/key.png";

let loadedImages = 0;
const totalImages = 3;

function imageLoaded() {
  loadedImages++;
}

wallImg.onload = imageLoaded;
enemyImg.onload = imageLoaded;
keyImg.onload = imageLoaded;

// ==========================================
// PLAYER DOM (GIF)
// ==========================================
let playerDOM = document.getElementById("playerGif");

if (!playerDOM) {
  playerDOM = document.createElement("img");
  playerDOM.id = "playerGif";
  playerDOM.src = "assets/player.gif";

  playerDOM.style.position = "absolute";
  playerDOM.style.zIndex = "10";
  playerDOM.style.pointerEvents = "none";
  playerDOM.style.display = "none";

  document.body.appendChild(playerDOM);
}

// PLAYER DATA
if (typeof player === "undefined") {
  window.player = {
    x: 0,
    y: 0,
    hp: 3,
    keys: 0
  };
}

// ==========================================
// KONFIG
// ==========================================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const menu = document.getElementById("menu");

const tileSize = 40;

let currentLevel = 0;
let levelMap = [];

// ==========================================
// START
// ==========================================
function startGame() {

  if (loadedImages < totalImages) {
    alert("Ładowanie grafik...");
    return;
  }

  menu.style.display = "none";
  playerDOM.style.display = "block";

  currentLevel = 0;

  player.hp = 3;
  player.keys = 0;

  loadLevel();
  drawGame();
}

// ==========================================
// LEVEL
// ==========================================
function loadLevel() {

  levelMap = levels[currentLevel].map(row => row.split(""));

  canvas.width = levelMap[0].length * tileSize;
  canvas.height = levelMap.length * tileSize;

  for (let y = 0; y < levelMap.length; y++) {
    for (let x = 0; x < levelMap[y].length; x++) {

      if (levelMap[y][x] === "P") {
        player.x = x;
        player.y = y;
        levelMap[y][x] = " ";
      }
    }
  }
}

// ==========================================
// RYSOWANIE
// ==========================================
function drawGame() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < levelMap.length; y++) {
    for (let x = 0; x < levelMap[y].length; x++) {

      const tile = levelMap[y][x];

      // PODŁOGA
      ctx.fillStyle = "#151515";
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

      // ŚCIANA
      if (tile === "#") {
        ctx.drawImage(wallImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      // KLUCZ
      else if (tile === "K") {
        ctx.drawImage(keyImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      // PRZECIWNIK (NIE MYLIĆ Z EXIT)
      else if (tile === "M") {
        ctx.drawImage(enemyImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }

      // EXIT
      else if (tile === "E") {
        drawTile(x, y, "#00ff66");
      }

      // HEAL
      else if (tile === "H") {
        drawTile(x, y, "#00ccff");
      }

      // TRAP
      else if (tile === "T") {
        drawTile(x, y, "#ff3333");
      }
    }
  }

  // PLAYER
  const rect = canvas.getBoundingClientRect();

  playerDOM.style.left =
    rect.left + window.scrollX + player.x * tileSize + "px";

  playerDOM.style.top =
    rect.top + window.scrollY + player.y * tileSize + "px";

  playerDOM.style.width = tileSize + "px";
  playerDOM.style.height = tileSize + "px";

  drawUI();
}

// ==========================================
// TILE
// ==========================================
function drawTile(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
    x * tileSize + 8,
    y * tileSize + 8,
    tileSize - 16,
    tileSize - 16
  );
}

// ==========================================
// NEXT LEVEL
// ==========================================
function nextLevel() {
  currentLevel++;

  if (currentLevel >= levels.length) {
    alert("Wygrałeś!");
    menu.style.display = "flex";
    playerDOM.style.display = "none";
    return;
  }

  loadLevel();
  drawGame();
}

// ==========================================
// GAME OVER
// ==========================================
function gameOver() {
  alert("Koniec gry!");
  menu.style.display = "flex";
  playerDOM.style.display = "none";
}

// ==========================================
// STEROWANIE
// ==========================================
document.addEventListener("keydown", e => {

  const key = e.key.toLowerCase();

  if (menu.style.display !== "none") return;

  if (key === "w" || key === "arrowup") movePlayer(0, -1);
  if (key === "s" || key === "arrowdown") movePlayer(0, 1);
  if (key === "a" || key === "arrowleft") movePlayer(-1, 0);
  if (key === "d" || key === "arrowright") movePlayer(1, 0);

  drawGame();
});

// ==========================================
// ODŚWIEŻANIE
// ==========================================
window.addEventListener("resize", drawGame);
window.addEventListener("scroll", drawGame);