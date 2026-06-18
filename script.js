let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let squareNumber = 16;
const CONTAINER_WH = 576;
let subContainerWH = 36;

function generateSquare(squareNumber) {
  removeContainerChild();

  for (let row = 0; row < squareNumber; row++) {
    for (let column = 0; column < squareNumber; column++) {
      let div = document.createElement("div");
      div.setAttribute("class", "subContainer");
      const subContainerWH = CONTAINER_WH / squareNumber;
      div.setAttribute(
        "style",
        `width: ${subContainerWH}px; height: ${subContainerWH}px; `,
      );
      container.appendChild(div);
    }
  }
}

function removeContainerChild() {
  container.style.opacity = 1;

  let containerChild = document.querySelectorAll(".subContainer");
  if (containerChild.length > 0) {
    for (const element of containerChild) {
      container.removeChild(element);
    }
  }
}

function askUserSquare() {
  squareNumber = +prompt(
    "Enter square number per side(<=100 and >0): ",
    squareNumber,
  );

  while (
    squareNumber > 100 ||
    !Number.isInteger(squareNumber) ||
    squareNumber < 1
  ) {
    squareNumber = +prompt(
      "Enter square number per side(<100): ",
      squareNumber,
    );
  }
  btn.textContent = `Square Number: ${squareNumber}`;
  generateSquare(squareNumber);
}

function setNewBg() {
  let divs = document.querySelectorAll(".subContainer");

  let opacity = 1;
  for (let element of divs) {
    const red = randomNum();
    const green = randomNum();
    const blue = randomNum();
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = `rgb(${red},${green},${blue})`;
      if (opacity > 0) {
        container.style.opacity = opacity;
        opacity -= 0.1;
        console.log(opacity);
      }
    });
  }
}

function startFirstScratch() {
  generateSquare(squareNumber);
  setNewBg();
}

function newSquare() {
  askUserSquare();
  startFirstScratch();
}

let randomNum = () => Math.floor(Math.random() * 256);

btn.addEventListener("click", () => {
  newSquare();
});

startFirstScratch();
