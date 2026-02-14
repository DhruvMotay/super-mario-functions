// Player position
let x = 100;
let y = 300;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky
  
  // block
  
  // ground
  fill(250, 250, 250);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
  drawBlock();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();
}

function moveRight() {
  x = x+5;
}  
function moveLeft() {
  x = x-5;
}
function stopMoving() {
  x = x
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y, 40, 40);
  if (key === "d") moveRight();
  if (key === "a") moveLeft();
}

function drawBlock() {
  fill(250, 250, 0)
  rect(x+50, y, 40, 40);
  fill(0, 250, 0)
  rect(x+100, y, 40, 40);
  fill(0, 0, 250)
  rect(x+150, y, 40, 40);
  fill(0, 250, 250)
  rect(x+200, y, 40, 40);
}