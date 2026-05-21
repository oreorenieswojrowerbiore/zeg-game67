function checkItems(tile, x, y) {

  if (tile === "K") {

    player.keys++;

    levelMap[y][x] = " ";

    alert("Zebrano klucz!");
  }

  if (tile === "H") {

    player.hp++;

    levelMap[y][x] = " ";

    alert("Odzyskano zdrowie!");
  }

  if (tile === "T") {

    player.hp--;

    alert("Wpadłeś w pułapkę!");

    if (player.hp <= 0) {

      gameOver();
    }
  }

  if (tile === "E") {

    nextLevel();
  }
}function checkItems(tile, x, y) {

  if (tile === "K") {

    player.keys++;

    levelMap[y][x] = " ";

    alert("Zebrano klucz!");
  }

  if (tile === "H") {

    player.hp++;

    levelMap[y][x] = " ";

    alert("Odzyskano zdrowie!");
  }

  if (tile === "T") {

    player.hp--;

    alert("Wpadłeś w pułapkę!");

    if (player.hp <= 0) {

      gameOver();
    }
  }

  if (tile === "E") {

    nextLevel();
  }
}function checkItems(tile, x, y) {

  if (tile === "K") {

    player.keys++;

    levelMap[y][x] = " ";

    alert("Zebrano klucz!");
  }

  if (tile === "H") {

    player.hp++;

    levelMap[y][x] = " ";

    alert("Odzyskano zdrowie!");
  }

  if (tile === "T") {

    player.hp--;

    alert("Wpadłeś w pułapkę!");

    if (player.hp <= 0) {

      gameOver();
    }
  }

  if (tile === "E") {

    nextLevel();
  }
}