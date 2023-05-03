//Apuesta y presupuesto

let bonus;
let numero = 7;
let money;
let apuesta;
let img;

const juego = () => {
  a = parseInt(Math.random() * 20 + 1);
  b = parseInt(Math.random() * 20 + 1);
  c = parseInt(Math.random() * 20 + 1);

  fill("white");
  textFont(myFont);
  textSize(44);
  text("a: " + a, -450, -150);
  text("b: " + b, -350, -150);
  text("c: " + c, -250, -150);

  if (money === 0) {
    alert("lose");
  } else {
    if (money >= apuesta) {
      if (a === numero || b === numero || c === numero) {
        alert("Ganaste " + (apuesta + apuesta));
        apuesta += apuesta;
        document.getElementById("aña1").innerHTML = `${money + apuesta}`;
        console.log(apuesta);
      } else {
        alert("Perdiste :c " + apuesta);
        money -= apuesta;
        console.log(money);
        document.getElementById("aña1").innerHTML = `${money}`;
      }
    } else {
      alert("Fondo insuficiente");
    }
  }
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
      juego()
    );
  };
  //pne();
}

function pne() {
  background(0)
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