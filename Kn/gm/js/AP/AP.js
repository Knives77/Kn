//Apuesta y presupuesto

let bonus;
let numero = 7;
let money;
let apuesta;

const juego = () => {
  a = parseInt(Math.random() * 20 + 1);
  b = parseInt(Math.random() * 20 + 1);
  c = parseInt(Math.random() * 20 + 1);


  fill("#d9c3f7");
  textSize(44);
  text("a: " + a, 30, 50);
  text("b: " + b, 150, 50);
  text("c: " + c, 270, 50);


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
  const canvas = createCanvas(1000, 300);
  canvas.parent("#cont");
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
      (apuesta = b) /*, document.getElementById("ap").disabled = true,*/, clear(),
      juego()
    );
  };
}
