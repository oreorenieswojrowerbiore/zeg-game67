let musicOn = true;

let storyIndex = 0;
let endingShown = false;

const storyImages = [
    "images/Fabula 1.png",
    "images/Fabula 2.png",
    "images/Fabula 3.png"
];

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document
        .getElementById(screenId)
        .classList.add("active");
}

/* MUZYKA */

function playMusic() {

    const music = document.getElementById("music");

    music.volume = 0.05;

    if (musicOn) {

        music.play().catch(() => {
            console.log("Kliknij ekran aby uruchomić muzykę");
        });

    }

}

function stopMusic() {

    const music = document.getElementById("music");

    music.pause();

}

/* FABUŁA */

function startStory() {

    storyIndex = 0;

    document
        .getElementById("storyImage")
        .src = storyImages[storyIndex];

    playMusic();

    showScreen("story");
}

document
    .getElementById("story")
    .addEventListener("click", function(event) {

        if (event.target.tagName === "BUTTON") {
            return;
        }

        storyIndex++;

        if (storyIndex < storyImages.length) {

            document
                .getElementById("storyImage")
                .src = storyImages[storyIndex];

        } else {

    if (endingShown) {

        endingShown = false;

        backToMenu();

        return;

    }

    startGame();

}

    });

function skipStory() {

    startGame();

}

/* START GRY */

function startGame() {

    showScreen("game");

    playMusic();

    currentLevel = 0;

    player.x = 1;
    player.y = 1;

    playerDirection = "right";

    hasKey = false;

    hearts = 3;

    canTakeDamage = true;

    document
        .getElementById("keyInfo")
        .textContent = "Klucz: NIE";

    document
        .getElementById("floor")
        .textContent = "Piętro: 1/30";

    updateHearts();

    resetMedics();

    renderLevel();

}

/* MENU */

function showSettings() {

    showScreen("settings");

}

function showCredits() {

    showScreen("credits");

}

function showInstructions() {

    showScreen("instructions");

}

function backToMenu() {

    showScreen("menu");

}

/* MUZYKA ON/OFF */

function toggleMusic() {

    const music = document.getElementById("music");

    const musicText = document.getElementById("musicText");

    musicOn = !musicOn;

    if (musicOn) {

        musicText.textContent =
            "Muzyka: WŁĄCZONA";

        music.play();

    } else {

        musicText.textContent =
            "Muzyka: WYŁĄCZONA";

        music.pause();

    }

}

/* LABIRYNT */

function renderLevel() {

    const board =
        document.getElementById("gameBoard");

    const level =
        LEVELS[currentLevel];

    board.innerHTML = "";

    board.style.gridTemplateColumns =
        `repeat(${level[0].length}, 1fr)`;

    board.style.gridTemplateRows =
        `repeat(${level.length}, 1fr)`;

    for (let y = 0; y < level.length; y++) {

        for (let x = 0; x < level[y].length; x++) {

            const tile =
                document.createElement("div");

            tile.classList.add("tile");

            if (level[y][x] === "1") {

                tile.classList.add("wall");

            } else {

                tile.classList.add("floor");

            }

            /* EXIT */

            if (
                exits[currentLevel].x === x &&
                exits[currentLevel].y === y
            ) {

                const exit =
                    document.createElement("img");

                exit.src =
                    "images/door.png";

                exit.classList.add("exit");

                tile.appendChild(exit);

            }

            /* KEY */

            if (
                keys[currentLevel].x === x &&
                keys[currentLevel].y === y &&
                !hasKey
            ) {

                const keyImg =
                    document.createElement("img");

                keyImg.src =
                    "images/key.png";

                keyImg.classList.add("key");

                tile.appendChild(keyImg);

            }

            /* ENEMY */

            const levelEnemies =
                enemies[currentLevel];

            if (levelEnemies) {

                levelEnemies.forEach(function(enemy) {

                    if (
                        enemy.x === x &&
                        enemy.y === y
                    ) {

                        const enemyImg =
                            document.createElement("img");

                        enemyImg.src =
                            enemy.img;

                        enemyImg.classList.add("enemy");

                        if (enemy.direction === -1) {
                            enemyImg.classList.add("flip");
                        }

                        tile.appendChild(enemyImg);

                    }

                });

            }

            /* MEDIC */

            const medic =
                medics[currentLevel];

            if (
                medic &&
                medic.x === x &&
                medic.y === y &&
                !medic.taken
            ) {

                const medicImg =
                    document.createElement("img");

                medicImg.src =
                    "images/medic.png";

                medicImg.classList.add("medic");

                tile.appendChild(medicImg);

            }
            /* RIDDLE */

const riddle = riddles[currentLevel];

if (
    riddle &&
    riddle.x === x &&
    riddle.y === y &&
    !riddle.taken
) {
    const riddleImg = document.createElement("img");

    riddleImg.src = "images/riddle.png";
    riddleImg.classList.add("riddle");

    tile.appendChild(riddleImg);
}

            /* PLAYER */

            if (
                player.x === x &&
                player.y === y
            ) {

                const img =
                    document.createElement("img");

                img.src =
                    "images/player.gif";

                img.classList.add("player");

                if (playerDirection === "left") {
                    img.classList.add("flip");
                }

                tile.appendChild(img);

            }

            board.appendChild(tile);

        }

    }

}

/* RUCH ENEMY */

function moveEnemies() {

    const levelEnemies =
        enemies[currentLevel];

    if (!levelEnemies) {
        return;
    }

    levelEnemies.forEach(function(enemy) {

        enemy.x += enemy.direction;

        if (enemy.x >= enemy.endX) {
            enemy.x = enemy.endX;
            enemy.direction = -1;
        }

        if (enemy.x <= enemy.startX) {
            enemy.x = enemy.startX;
            enemy.direction = 1;
        }

    });

    renderLevel();

    checkEnemyCollision();

}

setInterval(function() {

    if (
        document
            .getElementById("game")
            .classList
            .contains("active")
    ) {

        moveEnemies();

    }

}, 600);

/* RESET APTECZEK */

function resetMedics() {

    medics.forEach(function(medic) {

        if (medic) {
            medic.taken = false;
        }

    });

}

function showFloorTransition() {
    const floorTransition =
        document.getElementById("floorTransition");

    floorTransition.textContent =
        "PIĘTRO " + (currentLevel + 1);

    floorTransition.style.display = "block";

    setTimeout(function() {
        floorTransition.style.display = "none";
    }, 900);
}
function playClickSound() {

    const sound =
        document.getElementById("clickSound");

    sound.currentTime = 0;

    sound.play();

}
function skipFloor() {

    currentLevel++;

    if (currentLevel >= LEVELS.length) {
        currentLevel = 0;
    }

    player.x = 1;
    player.y = 1;

    playerDirection = "right";

    hasKey = false;

    document
        .getElementById("keyInfo")
        .textContent = "Klucz: NIE";

    document
        .getElementById("floor")
        .textContent =
            "Piętro: " +
            (currentLevel + 1) +
            "/30";

    showFloorTransition();

    renderLevel();

}
function showEnding() {

    endingShown = true;

    document
        .getElementById("storyImage")
        .src = "images/Fabula 4.png";

    showScreen("story");

}