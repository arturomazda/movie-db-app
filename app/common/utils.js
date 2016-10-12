export function generateRandomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export function randomNumber(min, max) {
  return Math.floor((Math.random() * max) + min);
}
