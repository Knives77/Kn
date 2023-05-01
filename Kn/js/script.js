const ifr = document.getElementById("juegoF");
const aside = document.getElementById("inf");

function iff(dir) {
  ifr.setAttribute("src", dir);
  if (dir == "gm/NM.html") {
    draw("black");
  }
}

function setup() {
  const canvas = createCanvas(aside.clientWidth, aside.clientHeight);
  canvas.parent("#inf");
  noLoop();
}

function draw(color) {
  fill(color);
  noStroke();
  rect(0, 0, aside.clientWidth, 200);
}