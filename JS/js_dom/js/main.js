// Ändra HTML

const pTag = document.getElementById("pTag");

console.log(pTag);

pTag.innerHTML = "dolor sit <b>amet</b>";
pTag.className = "red";

// Skapa HTML
const aNewSpanTag = document.createElement("span"); // <span></span>
aNewSpanTag.className = "green"; // <span class="green"></span>
aNewSpanTag.innerHTML = "Sebastian tycker detta är kul :)"; // <span class="green">Sebastian tycker detta är kul :)</span>

document.body.appendChild(aNewSpanTag);
// pTag.appendChild(aNewSpanTag);

const ul = document.getElementById("theList");

for (let i = 0; i < 10; i++) {
  console.log(i + 1);

  const li = document.createElement("li"); // <li></li>
  li.innerHTML = i; // <li>0</li>
  ul.appendChild(li);
}
