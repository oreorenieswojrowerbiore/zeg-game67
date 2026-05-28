function movePlayer(dx, dy) {

  const newX = player.x + dx;
  const newY = player.y + dy;

  // ZABEZPIECZENIE MAPY
  if (
    newY < 0 ||
    newY >= levelMap.length ||
    newX < 0 ||
    newX >= levelMap[newY].length
  ) {
    return;
  }

  const tile = levelMap[newY][newX];

  // ŚCIANA
  if (tile === "#") {
    return;
  }

  // EXIT WYMAGA KLUCZA
  if (tile === "E" && player.keys <= 0) {
    alert("Potrzebujesz klucza!");
    return;
  }

  player.x = newX;
  player.y = newY;

  checkItems(tile, newX, newY);

  drawGame();
}
