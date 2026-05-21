const player = {
  x: 1,
  y: 1,
  hp: 3,
  keys: 0
};

function movePlayer(dx, dy) {

  const newX = player.x + dx;
  const newY = player.y + dy;

  const tile = levelMap[newY][newX];

  if (tile === "#") {
    return;
  }

  player.x = newX;
  player.y = newY;

  checkItems(tile, newX, newY);

  drawGame();
}