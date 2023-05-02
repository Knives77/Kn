//Apuesta y presupuesto

let vidas = 3;
let numero = 7;
let money;
let apuesta;

let juego = () => {
  a = parseInt(Math.random() * 10 + 1);
  b = parseInt(Math.random() * 10 + 1);
  c = parseInt(Math.random() * 10 + 1);

  console.log(a, b, c);

   if (money === 0) {
     alert("lose");
    } else {
      if (money >= apuesta) {
        if (a === numero || b === numero || c === numero) {
          alert("Ganaste "+(apuesta + apuesta));
          apuesta += apuesta;
          document.getElementById("aña1").innerHTML = `${(money + apuesta)}`
          console.log(apuesta);
          console.log(vidas);
      } else {
        alert("Perdiste :c "+(apuesta));
        money -= apuesta;
        console.log(money);
        document.getElementById("aña1").innerHTML = `${money}`
        vidas--;
        console.log(vidas);
      }
    } else {
    alert("Fondo insuficiente");
    }
  }
}

document.getElementById("ff").onclick = function fondos() {
	const a = parseInt(document.getElementById("dinero").value);
	return document.getElementById("aña1").innerHTML += ` ${a}`, document.getElementById("ff").disabled = true, money = a, document.getElementById("dinero").value = "";
}

document.getElementById("ap").onclick = function fondos() {
	const b = parseInt(document.getElementById("apuesta").value);
	return document.getElementById("aña2").innerHTML = `${b}`, apuesta = b/*, document.getElementById("ap").disabled = true,*/, juego();
}