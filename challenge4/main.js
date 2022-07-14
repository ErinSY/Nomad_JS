const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];
const button = document.querySelector("button");

function pickColor() {
  const randomC = colors[Math.floor(Math.random() * colors.length)];
  const randomD = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${randomC}, ${randomD})`;

}

button.addEventListener("click", pickColor);
