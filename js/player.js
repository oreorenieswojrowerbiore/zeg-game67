let player = {
    x: 1,
    y: 1
};

let playerDirection = "right";

let hasKey = false;

let hearts = 3;

let canTakeDamage = true;

/* RUCH */

function movePlayer(dx, dy) {

    const level = LEVELS[currentLevel];

    const newX = player.x + dx;
    const newY = player.y + dy;

    /* ŚCIANY */

    if (level[newY][newX] === "1") {
        return;
    }

    /* KIERUNEK */

    if (dx < 0) {
        playerDirection = "left";
    }

    if (dx > 0) {
        playerDirection = "right";
    }

    /* RUCH */

    player.x = newX;
    player.y = newY;

    /* KLUCZ */

    checkKey();

    /* APTECZKA */

    checkMedic();

    /* ZAGADKA */

    checkRiddle();

    /* RENDER */

    renderLevel();

    /* WYJŚCIE */

    checkExit();

    /* ENEMY */

    checkEnemyCollision();

}

/* STEROWANIE */

document.addEventListener("keydown", function(event) {

    if (
        !document
            .getElementById("game")
            .classList
            .contains("active")
    ) {
        return;
    }

    /* GÓRA */

    if (
        event.key === "w" ||
        event.key === "W" ||
        event.key === "ArrowUp"
    ) {

        movePlayer(0, -1);

    }

    /* DÓŁ */

    if (
        event.key === "s" ||
        event.key === "S" ||
        event.key === "ArrowDown"
    ) {

        movePlayer(0, 1);

    }

    /* LEWO */

    if (
        event.key === "a" ||
        event.key === "A" ||
        event.key === "ArrowLeft"
    ) {

        movePlayer(-1, 0);

    }

    /* PRAWO */

    if (
        event.key === "d" ||
        event.key === "D" ||
        event.key === "ArrowRight"
    ) {

        movePlayer(1, 0);

    }

});

/* SERCA */

function updateHearts() {

    let heartsText = "";

    for (let i = 0; i < hearts; i++) {

        heartsText += "❤️";

    }

    document
        .getElementById("hearts")
        .textContent = heartsText;

}

/* DAMAGE */

function takeDamage() {

    document
        .getElementById("hitSound")
        .play();

    if (!canTakeDamage) {
        return;
    }

    hearts--;

    canTakeDamage = false;

    updateHearts();

    if (hearts <= 0) {

        document
            .getElementById("deathSound")
            .play();

        alert("GAME OVER!");

        currentLevel = 0;

        hearts = 3;

        hasKey = false;

        player.x = 1;
        player.y = 1;

        playerDirection = "right";

        document
            .getElementById("keyInfo")
            .textContent = "Klucz: NIE";

        document
            .getElementById("floor")
            .textContent = "Piętro: 1/30";

        updateHearts();

        renderLevel();

        canTakeDamage = true;

        return;

    }

    setTimeout(function() {

        canTakeDamage = true;

    }, 1000);

}

/* KLUCZ */

function checkKey() {

    const key = keys[currentLevel];

    if (
        player.x === key.x &&
        player.y === key.y &&
        !hasKey
    ) {

    hasKey = true;

document
    .getElementById("pickupSound")
    .play();

document
    .getElementById("keyInfo")
    .textContent = "Klucz: TAK";
    }

}

/* APTECZKA */

function checkMedic() {

    const medic = medics[currentLevel];

    if (!medic) {
        return;
    }

    if (
        player.x === medic.x &&
        player.y === medic.y &&
        !medic.taken
    ) {

        if (hearts < 3) {

            hearts++;

            updateHearts();

        }

        medic.taken = true;

document
    .getElementById("pickupSound")
    .play();

    }

}

/* ENEMY */

function checkEnemyCollision() {

    const levelEnemies = enemies[currentLevel];

    if (!levelEnemies) {
        return;
    }

    levelEnemies.forEach(function(enemy) {

        if (
            player.x === enemy.x &&
            player.y === enemy.y
        ) {

            takeDamage();

        }

    });

}

/* WYJŚCIE */

function checkExit() {

    const exit = exits[currentLevel];

    if (
        player.x === exit.x &&
        player.y === exit.y
    ) {

        /* BRAK KLUCZA */

        if (!hasKey) {

            alert("Najpierw znajdź klucz!");

            return;

        }

        /* DŹWIĘK */

        document
            .getElementById("doorSound")
            .play();

        /* NEXT FLOOR */

        currentLevel++;

        /* KONIEC */

   if (currentLevel >= LEVELS.length) {

    showEnding();

    return;

}

        /* RESET */

        player.x = 1;
        player.y = 1;

        playerDirection = "right";

        hasKey = false;

        /* HUD */

        document
            .getElementById("keyInfo")
            .textContent = "Klucz: NIE";

        document
            .getElementById("floor")
            .textContent =
                "Piętro: " +
                (currentLevel + 1) +
                "/30";

        /* ANIMACJA PIĘTRA */

        showFloorTransition();

        /* RENDER */

        renderLevel();

    }

}