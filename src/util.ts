function getRandomRGBInt() {
  return Math.floor(Math.random() * 256)
}

export function makeRandomColor() {
  return `rgb(${getRandomRGBInt()},${getRandomRGBInt()},${getRandomRGBInt()})`;
};