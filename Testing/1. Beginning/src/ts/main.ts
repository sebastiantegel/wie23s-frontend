import "./../scss/style.scss";

const todos: string[] = ["Skriva tester", "Förstå tester", "Testa tester"];

const myList = document.getElementById("theList");

for (let i = 0; i < todos.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = todos[i];
  myList?.appendChild(li);
}
