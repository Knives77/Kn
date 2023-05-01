const W = 900;
const H = 900;

const celdas  = [];
const celdas2 = [];

const labW = 15;
const labH = 15;

const pixelSize = 60;
const pixelSizeGlass = 30;

const rx = Math.round(Math.random() * labW);
const ry = Math.round(Math.random() * labH);

const rx2 = Math.round(Math.random() * labW);
const ry2 = Math.round(Math.random() * labH);


let ant = {
	x: rx2,
	y: ry2,
} 

let glass = {
	x: rx,
	y: ry,
	posCeldaX : (pixelSizeGlass / 2),
	posCeldaY:  (pixelSizeGlass / 2),
	color: "red",
}

var antX = ant.x * pixelSize + pixelSize - (pixelSize / 2);
var antY = ant.y * pixelSize + pixelSize - (pixelSize / 2);

const pila = [];
let terreno = [];

var game_over = false;

var derechaPressed = false;
var izquierdaPressed = false;
var arribaPressed = false;
var abajoPressed = false;

console.log("rx = "+rx);
console.log("ry = "+ry);

function preload() {
	img = loadImage('img/hoja.png');
	img2 = loadImage('img/ant.png');
}

function setup() {
	const canvas = createCanvas(W, H);
	canvas.parent("#canvasHolder");

	for (let y = 0; y < labH; y++) {
		const fila = [];
		for (let x = 0; x < labW; x++) {
			fila.push(new Celda(x, y));
			terreno.push(new Celda(x, y));
			terreno.push("")
		}
		celdas.push(fila);
		celdas2.push(fila);
	}

	for (let y = 0; y < labH; y++) {
		const fila = [];
		for (let x = 0; x < labW; x++) {
			fila.push(new Celda(x, y));
			terreno.push(new Celda(x, y));
		}
		celdas.push(fila);
		celdas2.push(fila);
	}

	const primero = celdas[ry][rx];
	primero.visited = true;
	pila.push(primero);
	frameRate(60);
}


const presionandoTecla = (e) => {
	if (e.key == "d") {
		derechaPressed = true;
		if (derechaPressed && antX < W - pixelSize) {
			if (celdas2[ant.y][ant.x].east) {
				//console.log("No puedes ir derecha");
				derechaPressed = false;
			} else {
				antX += pixelSize;
				ant.x += 1;
			}
		} else {
			derechaPressed = false;
		}
	} else if (e.key == "a") {
		izquierdaPressed = true;
		if (izquierdaPressed && antX > 0 + pixelSize) {
			if (celdas2[ant.y][ant.x].west) {
				//console.log("No puedes ir izquierda");
				izquierdaPressed = false;
			} else {
				antX -= pixelSize;
				ant.x -= 1;
			}
			//console.log("izquierda: "+celdas2[ant.x][ant.y].west+ "  derecha: " + celdas2[ant.x][ant.y].east);
		} else {
			izquierdaPressed = false;
		}
	} else if (e.key == "w") {
		arribaPressed = true;
		if (arribaPressed && antY > 0 + pixelSize) {
			if (celdas2[ant.y][ant.x].north) {
				//console.log("No puedes ir arriba");
				arribaPressed = false;
			} else {
				antY -= pixelSize;
				ant.y -= 1;
			}
		} else {
			arribaPressed = false;
		}
	} else if (e.key == "s") {
		abajoPressed = true;
		if (abajoPressed && antY < H - pixelSize) {
			if (celdas2[ant.y][ant.x].south) {
				//console.log("No puedes ir abajo");
				abajoPressed = false;
			} else {
				antY += pixelSize;
				ant.y += 1;
			}
		} else {
			abajoPressed = false;
		}
	}
};

const sinPresionarTecla = (e) => {
	if (e.key == "d") {
		derechaPressed = false;
	} else if (e.key == "a") {
		izquierdaPressed = false;
	} else if (e.key == "w") {
		arribaPressed = false;
	} else if (e.key == "s") {
		abajoPressed = false;
	}
};

document.addEventListener("keydown", presionandoTecla, false);
document.addEventListener("keyup", sinPresionarTecla, false);

var collisionTab = () => {
	if (derechaPressed && antX < canvas.width - pixelSizeAnt) {
		derechaPressed = false;
	} else if (izquierdaPressed && antX > 0) {
		izquierdaPressed = false;
	} else if (abajoPressed && antY < canvas.height - pixelSizeAnt) {
		abajoPressed = false;
	} else if (arribaPressed && antY > 0) {
		arribaPressed = false;
	}
};

function draw() {
	background(0);

    if (pila.length > 0) {
		let current = pila[pila.length - 1];
		//console.log(current);
		let valido = false;
		let cheques = 0;

		//Si valido es falso y cheques es menor, ejecutar.
		while (!valido && cheques < 10) {
			cheques++;
			let direccion = Math.round(Math.random() * 4);

			switch (direccion) {
				// WEST
				case 0:
					if (current.x > 0) {
						let next = celdas[current.y][current.x - 1];

						if (!next.visited) {
							current.west = false;
							next.east = false;

							next.visited = true;
							pila.push(next);
							valido = true;
						}
					}
					break;

				// NORTH
				case 1:
					if (current.y > 0) {
						let next = celdas[current.y - 1][current.x];

						if (!next.visited) {
							current.north = false;
							next.south = false;

							next.visited = true;
							pila.push(next);
							valido = true;
						}
					}
					break;

				case 2: // EAST
					if (current.x < labW - 1) {
						let next = celdas[current.y][current.x + 1];

						if (!next.visited) {
							current.east = false;
							next.west = false;

							next.visited = true;
							pila.push(next);
							valido = true;
						}
					}
					break;

				case 3: // SOUTH
					if (current.y < labH - 1) {
						let next = celdas[current.y + 1][current.x];

						if (!next.visited) {
							current.south = false;
							next.north = false;

							next.visited = true;
							pila.push(next);
							valido = true;
						}
					}
					break;
			}
		}
		if (!valido) {
			pila.pop();
			terreno.pop();
		}
	}

	for (let y = 0; y < labH; y++) {
		for (let x = 0; x < labW; x++) {
			celdas[y][x].draw(pixelSize);
		}
	}
	for (let s = 0; s < pila.length; s++) {
		const elemento = pila[s];

		noStroke();
		fill("#066100");

		ellipse(
			elemento.x * pixelSize + pixelSize / 2,
			elemento.y * pixelSize + pixelSize / 2,
			pixelSize / 3,
			pixelSize / 3
		);
		//document.getElementById("xy").innerHTML = "elementoX: " + (elemento.x * pixelSize + pixelSize / 2) + "<br>" +"elementoY: " + (elemento.y * pixelSize + pixelSize / 2);
	}
	noStroke();
	fill("brown");
	//ellipse(antX, antY, pixelSize / 2, pixelSize / 2);
	image(img2, antX -  (pixelSize / 2) + 3, antY -  (pixelSize / 2) + 3, pixelSize - 6, pixelSize - 6);
	noStroke();
	fill(glass.color);
	//console.log("posY : "+ celdas2[glass.posCeldaX][glass.posCeldaY].x + "  posX: "+ celdas2[glass.posCeldaX][glass.posCeldaY].y );
	//rect(/*16.5*/glass.x * pixelSize + glass.posCeldaX , glass.y * pixelSize + glass.posCeldaY, pixelSizeGlass, pixelSizeGlass);
	image(img, /*16.5*/glass.x * pixelSize + 5, glass.y * pixelSize + 5, pixelSize - 10, pixelSize - 10);
	//document.getElementById("xy").innerHTML = "X: " + antX + "  Y: " + antY + "<br>" + "x: " + ant.x + "   y : " + ant.y;
	//console.log("ant.x: " + ant.x +" ant.y: "+ ant.y + " glass.x: " + glass.x + " glass.y: "+glass.y);
	if(ant.x == glass.x && ant.y == glass.y) {
		//document.location.reload();
		alert("pene")
	}
}
