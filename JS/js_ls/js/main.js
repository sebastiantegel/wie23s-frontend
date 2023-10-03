class Car {
  color;
  brand;
  model;

  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }
}
let carPool = [];

window.onload = () => {
  document.getElementById("printList").addEventListener("click", printList);
  document
    .getElementById("makeObjects")
    .addEventListener("click", createObjects);
  document.getElementById("saveToLs").addEventListener("click", save);
  document.getElementById("loadFromLs").addEventListener("click", load);

  const fromLs = localStorage.getItem("cars");

  if (fromLs) {
    carPool = JSON.parse(fromLs);
    printList();
  }
};

function printList() {
  console.log("Looping list:", carPool);

  for (let i = 0; i < carPool.length; i++) {
    // console.log(carPool[i]);

    const carTag = document.createElement("div");
    const title = document.createElement("h2");
    const colorTag = document.createElement("p");

    title.innerHTML = carPool[i].brand + " - " + carPool[i].model;
    colorTag.innerHTML = carPool[i].color;
    carTag.className = "car";

    carTag.addEventListener("click", () => {
      handleClick(carPool[i]);
    });

    carTag.appendChild(title);
    carTag.appendChild(colorTag);

    document.body.appendChild(carTag);
  }
}

function createObjects() {
  const myCar = new Car("Blue", "Volvo", "V90"); // myCar = { color: , brand: , model: }
  //myCar.color = "Blue";
  //myCar.brand = "Volvo";
  //myCar.model = "V90";

  // myCar = { color: "Blue", brand: "Volvo" , model: "V90"}

  const herCar = new Car("Black", "BMW", "X6");
  carPool.push(myCar);
  carPool.push(herCar);

  console.log("Creating objects. List:", carPool);
}

function save() {
  console.log("Saving to localStorage:", carPool);
  localStorage.setItem("cars", JSON.stringify(carPool));
}

function load() {
  const valueFromLs = localStorage.getItem("cars");
  const valueAsObj = JSON.parse(valueFromLs);
  console.log("Getting data from localStorage:", valueAsObj);
  carPool = valueAsObj;
}

function handleClick(clickedCar) {
  console.log("Du klickade på en bil:", clickedCar);
}
