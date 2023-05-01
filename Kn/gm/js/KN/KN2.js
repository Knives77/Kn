class Celda {
	constructor(x, y) {
		this.x = x;
		this.y = y;

		this.visited = false;

		this.west = true;
		this.north = true;
		this.east = true;
		this.south = true;
	}

	draw(pixelSize) {
		let i = this.x * pixelSize;
		let j = this.y * pixelSize;

		noStroke();
		if (this.visited) {
			fill("white");
		} else {
			fill("#6B0000");
		}
		rect(i, j, pixelSize, pixelSize);

		stroke(0);
		strokeWeight(5);
		noFill();
		if (this.west) {
			line(i, j, i, j + pixelSize);
		}

		if (this.north) {
			line(i, j, i + pixelSize, j);
		}

		if (this.east) {
			line(i + pixelSize, j, i + pixelSize, j + pixelSize);
		}

		if (this.south) {
			line(i, j + pixelSize, i + pixelSize, j + pixelSize);
		}
	}
}
