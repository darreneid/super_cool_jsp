import SpongeBob from "./scripts/spongeBob";

console.log('asset path relative to root');

const root = document.querySelector('#root');

const canvas = document.createElement('canvas');
canvas.height = 400;
canvas.width = 800;
const ctx = canvas.getContext('2d');
root.appendChild(canvas);

const sb = new SpongeBob(ctx);