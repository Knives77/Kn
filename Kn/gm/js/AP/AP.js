//Apuesta y presupuesto

let bonus = 0;
let numero = 7;
let money;
let apuesta;
let img;

let a1 = "?", b1 = "?", c1 = "?";

const juego = () => {
  a = parseInt(Math.random() * 20 + 1);
  b = parseInt(Math.random() * 20 + 1);
  c = parseInt(Math.random() * 20 + 1);
  if (money === 0) {
    alert("lose");
  } else {
    if (money >= apuesta) {
      if (a === numero || b === numero || c === numero) {
        if (bonus <= 0) {
          alert("Ganaste " + (apuesta + apuesta));
          apuesta += apuesta;
          document.getElementById("aña1").innerHTML = `${money + apuesta}`;
          bonus++;
          console.log(apuesta);
        }
        else if (bonus == 2) {
          alert("Ganaste " + (apuesta + apuesta));
          apuesta += apuesta * 2;
          document.getElementById("aña1").innerHTML = `${money + apuesta}`;
          bonus++;
          console.log(apuesta);
        }
        else if (bonus >= 3) {
          alert("Ganaste " + (apuesta + apuesta));
          apuesta += apuesta * 3;
          document.getElementById("aña1").innerHTML = `${money + apuesta}`;
          console.log(apuesta);
        }
      } else {
        alert("Perdiste :c " + apuesta);
        money -= apuesta;
        console.log(money);
        document.getElementById("aña1").innerHTML = `${money}`;
        bonus = 0;
      }
    } else {
      alert("Fondo insuficiente");
      fill("white");
      rect(0,0,500,500)
    }
  }
  return a1 = a, b1 = b, c1 = c;
};

function setup() {
  const canvas = createCanvas(1000, 400, WEBGL);
  canvas.parent("#cont");
  myFont = loadFont("img/Titillium_Web/TitilliumWeb-Light.ttf");
  img = loadImage("img/rosadita.jpg");
  background("black");
}

function draw() {
  document.getElementById("ff").onclick = function fondos() {
    const a = parseInt(document.getElementById("dinero").value);
    return (
      (document.getElementById("aña1").innerHTML += ` ${a}`),
      (document.getElementById("ff").disabled = true),
      (money = a),
      (document.getElementById("dinero").value = "")
    );
  };

  document.getElementById("ap").onclick = function fondos() {
    const b = parseInt(document.getElementById("apuesta").value);
    return (
      (document.getElementById("aña2").innerHTML = `${b}`),
      (apuesta = b) /*, document.getElementById("ap").disabled = true,*/,
      clear(),
      juego(),
      pene2("white")
    );
  };
  pne();
  pene2("white");
}

function pene2(color) {
  fill(color);
  textFont(myFont);
  textSize(80);
  text("a: " + a1, -500, -20);
  text("b: " + b1, -300, -20);
  text("c: " + c1, -100, -20);
}

function pne() {
  background(0);
  noStroke();
  push();
  translate(300, 10);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  texture(img);
  //normalMaterial();
  box(130);
  pop();
}