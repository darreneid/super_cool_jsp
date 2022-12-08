// JS Entry File

import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const cnv = document.querySelector('#game-canvas');
  const ctx = cnv.getContext('2d');
  const game = new Game(ctx, 3);
})