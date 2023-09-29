window.onload = () => {
  const button = document.getElementById("runLoop");
  button.addEventListener("click", handleClick);
};

function handleClick() {
  const theInput = document.getElementById("numberOfLoops");
  const nol = +theInput.value;

  let sum = 0;
  for (let i = 0; i < nol; i++) {
    sum += i;
  }

  document.getElementById("result").innerHTML = sum;
}

function printList() {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

function listStuff() {
  //               0  1  2  3  4  5   6
  const numbers = [1, 1, 2, 3, 5, 8, 13];
  console.log("Listan är:", numbers.length, "lång");

  console.log("Värdet på position 5:", numbers[5]);

  printList();

  numbers.push(21);

  printList();

  numbers.pop();

  printList();

  numbers.splice(1, 1);

  printList();
}

class Person {
  firstname;
  age;
  isMarried;

  constructor(firstname, age, isMarried) {
    this.firstname = firstname;
    this.age = age;
    this.isMarried = isMarried;
  }
}

const me = new Person("Sebastian", 43, true);
const wife = new Person("Hanna", 43, true);
// me.age = 43;
// me.firstname = "Sebastian";
// me.isMarried = true;

// const me = {
//   firstname: "Sebastian",
//   age: 43,
//   isMarried: true,
// };
// const wife = {
//   firstname: "Hanna",
//   age: 43,
//   isMarried: true,
// };

console.log(me);
console.log(me.firstname);

function createHtmlForPerson(person) {
  const personElement = document.createElement("div");

  const firstName = document.createElement("h2");
  firstName.innerHTML = person.firstname;

  const ageElement = document.createElement("p");
  ageElement.innerHTML = person.age;

  const isMarriedLabel = document.createElement("label");
  isMarriedLabel.innerHTML = "Gift:";

  const isMarriedElement = document.createElement("input");
  isMarriedElement.type = "checkbox";
  isMarriedElement.checked = person.isMarried;
  isMarriedElement.disabled = true;

  const theDiv = document.getElementById("persons");
  personElement.appendChild(firstName);
  personElement.appendChild(ageElement);
  personElement.appendChild(isMarriedLabel);
  personElement.appendChild(isMarriedElement);

  theDiv.appendChild(personElement);
}

const family = [me, wife];

for (let i = 0; i < family.length; i++) {
  createHtmlForPerson(family[i]);
}

// createHtmlForPerson(me);
// createHtmlForPerson(wife);
