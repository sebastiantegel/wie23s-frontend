class Animal {
  type;
  name;
  color;
  age;
  isClicked;

  constructor(type, name, color, age) {
    this.type = type;
    this.name = name;
    this.color = color;
    this.age = age;
    this.isClicked = false;
  }
}

const a1 = new Animal("Hund", "Douglas", "Vit/Brun", 5);
const a2 = new Animal("Katt", "Majsan", "Vit", 11);
const a3 = new Animal("Papegoja", "Tor", "Röd/Gul/Vit/Grön", 2);

const animals = [a1, a2, a3];

const animalContainer = document.createElement("div");
animalContainer.className = "animals";
document.body.appendChild(animalContainer);

const animalDetailsContainer = document.createElement("div");
animalDetailsContainer.className = "animal-detail";
document.body.appendChild(animalDetailsContainer);

function createHtml() {
  animalContainer.innerHTML = "";

  for (let i = 0; i < animals.length; i++) {
    const nameTag = document.createElement("h2");
    nameTag.innerHTML = animals[i].name;

    const animalTag = document.createElement("div");
    animalTag.className = "animal";

    if (animals[i].isClicked) {
      animalTag.classList.add("selected");
    }

    animalTag.addEventListener("click", () => {
      for (let j = 0; j < animals.length; j++) {
        animals[j].isClicked = false;
      }
      animals[i].isClicked = true;
      createHtml();
      createDetailsHtml(animals[i]);
    });

    animalTag.appendChild(nameTag);
    animalContainer.appendChild(animalTag);
  }
}

function createDetailsHtml(animalToPresentDetailsFor) {
  animalDetailsContainer.innerHTML = "";

  const typeTag = document.createElement("p");
  const colorTag = document.createElement("p");
  const ageTag = document.createElement("p");

  typeTag.innerHTML = "Typ: " + animalToPresentDetailsFor.type;
  colorTag.innerHTML = "Färg: " + animalToPresentDetailsFor.color;
  ageTag.innerHTML = "Ålder: " + animalToPresentDetailsFor.age;

  animalDetailsContainer.appendChild(typeTag);
  animalDetailsContainer.appendChild(colorTag);
  animalDetailsContainer.appendChild(ageTag);
}

createHtml();
