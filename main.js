// ==========================================
// 1. INICJALIZACJA GRAFIK ORAZ BEZPIECZNIKI
// ==========================================
const wallImg = new Image();
wallImg.src = "assets/wall.png";

const keyImg = new Image();
keyImg.src = "assets/key.png";

// Grafika wyjścia (np. drzwi lub portal)
const exitImg = new Image();
exitImg.src = "assets/exit.png";

// Licznik ładowania grafik (.png)
let loadedImages = 0;
const totalImages = 3; 

function imageLoaded() {
  loadedImages++;
  if (loadedImages === totalImages) {
    console.log("Grafiki PNG (ściana, klucz, wyjście) załadowane!");
  }
}

wallImg.onload = imageLoaded;
keyImg.onload = imageLoaded;
exitImg.onload = imageLoaded;

// AUTOMATYCZNE TWORZENIE ELEMENTU DLA PLAYER.GIF
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

// TABLICA NA GIF-Y PRZECIWNIKÓW
let enemyGIFs = [];

if (typeof player === "undefined") {
  window.player = { x: 0, y: 0, hp: 3, keys: 0 };
}

// ==========================================
// 2. KONFIGURACJA ZMIENNYCH GLOBALNYCH
// ==========================================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const menu = document.getElementById("menu");
const tileSize = 40;

let currentLevel = 0;
let levelMap = [];

// ==========================================
// 3. LOGIKA AKCJI I MENU
// ==========================================
function startGame() {
  if (loadedImages < totalImages) {
    alert("Grafiki jeszcze się ładują... Spróbuj ponownie za sekundę!");
    return;
  }

  menu.style.display = "none";
  if (playerDOM) playerDOM.style.display = "block"; 
  
  currentLevel = 0;
  player.hp = 3;
  player.keys = 0;

  loadLevel();
  drawGame();
}

function showOptions() {
  alert("Sterowanie: WASD lub strzałki.");
}

function showCredits() {
  alert("Autorzy gry: wpiszcie swoje imiona.");
}

function loadLevel() {
  enemyGIFs.forEach(img => img.remove());
  enemyGIFs = [];

  levelMap = levels[currentLevel].map(
    row => row.split("")
  );

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
// 4. RYSOWANIE GRAFIKI (SILNIK RENDERA)
// ==========================================
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const rect = canvas.getBoundingClientRect();

  let enemyIndex = 0;

  for (let y = 0; y < levelMap.length; y++) {
    for (let x = 0; x < levelMap[y].length; x++) {
      const tile = levelMap[y][x];

      // Podłoga / tło gry
      if (tile !== "#") {
        ctx.fillStyle = "#151515";
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }

      // MAPOWANIE GRAFIK DO LTEREK NA MAPIE
      if (tile === "#") {
        ctx.drawImage(wallImg, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (tile === "K") {
        ctx.drawImage(keyImg, x * tileSize, y * tileSize, tileSize, tileSize);
      } else if (tile === "E") {
        // TERAZ 'E' TO NA 100% WYJŚCIE (Rysuje drzwi exit.png)
        ctx.drawImage(exitImg, x * tileSize, y * tileSize, tileSize, tileSize); 
      } else if (tile === "X" || tile === "M") {
        // NOWA LITERA DLA PRZECIWNIKA (GIF-a). Jeśli gra używa innej litery na potwora (np. M), dopisz ją tutaj
        if (!enemyGIFs[enemyIndex]) {
          const newEnemyDOM = document.createElement("img");
          newEnemyDOM.src = "assets/enemy.gif"; 
          newEnemyDOM.style.position = "absolute";
          newEnemyDOM.style.zIndex = "9"; 
          newEnemyDOM.style.pointerEvents = "none";
          document.body.appendChild(newEnemyDOM);
          enemyGIFs.push(newEnemyDOM);
        }

        const currentEnemyDOM = enemyGIFs[enemyIndex];
        currentEnemyDOM.style.display = "block";
        currentEnemyDOM.style.left = (rect.left + window.scrollX + x * tileSize) + "px";
        currentEnemyDOM.style.top = (rect.top + window.scrollY + y * tileSize) + "px";
        currentEnemyDOM.style.width = tileSize + "px";
        currentEnemyDOM.style.height = tileSize + "px";

        enemyIndex++;
      } else if (tile === "H") {
        drawTile(x, y, "#00ff66");
      } else if (tile === "T") {
        drawTile(x, y, "#ff3333");
      }
    }
  }

  // Ukrywanie nieaktywnych potworów
  for (let i = enemyIndex; i < enemyGIFs.length; i++) {
    enemyGIFs[i].style.display = "none";
  }

  // POZYCJONOWANIE GIF-A GRACZA
  if (playerDOM && playerDOM.style.display !== "none") {
    playerDOM.style.left = (rect.left + window.scrollX + player.x * tileSize) + "px";
    playerDOM.style.top = (rect.top + window.scrollY + player.y * tileSize) + "px";
    playerDOM.style.width = tileSize + "px";
    playerDOM.style.height = tileSize + "px";
  }

  drawUI();
}

function drawTile(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
    x * tileSize + 8,
    y * tileSize + 8,
    tileSize - 16,
    tileSize - 16
  );
}

function hideAllGIFs() {
  if (playerDOM) playerDOM.style.display = "none";
  enemyGIFs.forEach(img => img.style.display = "none");
}

function nextLevel() {
  currentLevel++;

  if (currentLevel >= levels.length) {
    alert("Wygrałeś grę!");
    menu.style.display = "flex";
    hideAllGIFs();
    return;
  }

  loadLevel();
  drawGame();
}

function gameOver() {
  alert("Koniec gry!");
  menu.style.display = "flex";
  hideAllGIFs();
}

// ==========================================
// 5. OBSŁUGA KLAWIATURY I RUCHU
// ==========================================
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();

  if (menu.style.display !== "none") {
    return;
  }

  let moved = false;

  if (key === "w" || e.key === "ArrowUp") {
    movePlayer(0, -1);
    moved = true;
  }
  if (key === "s" || e.key === "ArrowDown") {
    movePlayer(0, 1);
    moved = true;
  }
  if (key === "a" || e.key === "ArrowLeft") {
    movePlayer(-1, 0);
    moved = true;
  }
  if (key === "d" || e.key === "ArrowRight") {
    movePlayer(1, 0);
    moved = true;
  }

  if (moved) {
    drawGame();
  }
});

window.addEventListener("resize", drawGame);
window.addEventListener("scroll", drawGame);