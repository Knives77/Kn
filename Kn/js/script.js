const ifr = document.getElementById("juegoF");
const aside = document.getElementById("inf");

function iff(dir) {
  ifr.setAttribute("src", dir);
  if (dir == "gm/NM.html") {
    
  }
}

function setup() {
  const canvas = createCanvas(aside.clientWidth, aside.clientHeight);
  canvas.parent("#inf");
}

function draw() {
  fill("black");
  noStroke();
  rect(0, 0, aside.clientWidth, aside.clientHeight);
}