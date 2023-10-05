const numbers = [1, 1, 2, 3, 5, 8, 13];

window.onload = () => {
  createHtml();
};

function createHtml() {
  const ul = document.getElementById("theList");
  ul.innerHTML = "";

  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = numbers[i];

    li.addEventListener("click", () => {
      numbers.splice(i, 1);
      console.log(numbers);
      createHtml();
    });

    ul.appendChild(li);
  }
}
