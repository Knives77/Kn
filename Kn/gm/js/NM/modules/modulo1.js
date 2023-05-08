export const max = 10;
export let lives = 3;
export const random1 = Math.floor(Math.random() * max + 1);
console.log(random1);

export function sub() {
  const value = parseInt(document.getElementById("valorInput").value);
  console.log(value);
  if (value < random1) {
    alert("El numero que ingresaste es menor");
    lives--;
    if (lives < 0) {
      document.getElementById("c").disabled = true;
      document.getElementById("d").disabled = false;
    }
  } else if (value > random1) {
    alert("El numero que ingresaste es mayor");
    lives--;
    if (lives == 0) {
      document.getElementById("c").disabled = true;
      document.getElementById("d").disabled = false;
    }
  } else if (value == random1) {
    alert("Le atinaste");
    location.reload();
  }
}

export function retry() {
  lives = 3;
  if (lives > 0) {
    document.getElementById("d").disabled = true;
    document.getElementById("c").disabled = false;
  }
  console.log(lives);
}