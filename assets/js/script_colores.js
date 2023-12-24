color = "#000000";
const div01 = document.querySelector("#div01"),
  div02 = document.querySelector("#div02"),
  div03 = document.querySelector("#div03"),
  div04 = document.querySelector("#div04"),
  currentColor = document.querySelector(".currentColor");

document.addEventListener("keydown", (event) => {
  keyValue = event.key;
  if (keyValue === "a") {
    color = "#FFC0CB";
    swapColor(currentColor);
  } else if (keyValue === "s") {
    color = "#ff6600";
    swapColor(currentColor);
  } else if (keyValue === "d") {
    color = "#00FFFF";
    swapColor(currentColor);
  }
});

const swapColor = function (element) {
  element.style.backgroundColor = color;
};

div01.addEventListener("click", () => {
  swapColor(div01);
});
div02.addEventListener("click", () => {
  swapColor(div02);
});
div03.addEventListener("click", () => {
  swapColor(div03);
});
div04.addEventListener("click", () => {
  swapColor(div04);
});

document.addEventListener("keydown", (event) => {
  keyValue = event.key;
  if (keyValue === "q") {
    color = "#800080";
    swapColor(currentColor);
  } else if (keyValue === "w") {
    color = "#808080";
    swapColor(currentColor);
  } else if (keyValue === "e") {
    color = "#804000";
    swapColor(currentColor);
  }
});
