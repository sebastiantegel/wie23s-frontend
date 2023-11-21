import "./../css/style.css";
import { getQuote, getWithAxios } from "./getData";
import { Car } from "./models/Car";

const volvo = new Car("Volvo", "245", "Mörkröd");
const saab = new Car("Saab", "9000", "Blå");
const ford = new Car("Ford", "Scorpio", "Silver");

// console.log(volvo);

const cars: Car[] = JSON.parse(
  localStorage.getItem("cars") || JSON.stringify([volvo, saab, ford])
);

const createHtml = () => {
  localStorage.setItem("cars", JSON.stringify(cars));
  const carsContainer = document.getElementById("cars") as HTMLSelectElement;
  carsContainer.innerHTML = "";

  cars.forEach((car: Car) => {
    const container = document.createElement("div");
    const titleTag = document.createElement("h3");
    const mileageTag = document.createElement("span");
    const driveButton = document.createElement("button");

    titleTag.innerHTML = car.brand + " - " + car.model;
    mileageTag.innerHTML = car.mileage + " km";
    if (car.isFavourite) {
      container.className = "favourite";
    }
    titleTag.addEventListener("click", () => {
      car.isFavourite = !car.isFavourite;
      createHtml();
    });
    driveButton.innerHTML = "Kör";
    driveButton.addEventListener("click", () => {
      car.drive(2000);
      createHtml();
    });

    container.appendChild(titleTag);
    container.appendChild(mileageTag);
    container.appendChild(driveButton);
    carsContainer?.appendChild(container);
  });
};

createHtml();

const quote = await getQuote();
const quote2 = await getWithAxios();

const qTag = document.createElement("h2");
qTag.innerHTML = quote.quote;
document.getElementById("app")?.appendChild(qTag);

const qTag2 = document.createElement("h2");
qTag2.innerHTML = quote2.quote;
document.getElementById("app")?.appendChild(qTag2);
