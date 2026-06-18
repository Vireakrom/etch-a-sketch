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
  let containerChild = document.querySelectorAll(".subContainer");
  console.log(containerChild.length);
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
  for (let element of divs) {
    element.addEventListener("mouseover", () => {
      element.setAttribute("id", "newBg");
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

btn.addEventListener("click", () => {
  newSquare();
});

startFirstScratch();
