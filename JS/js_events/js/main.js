function handleClick() {
  console.log("Du klickade");
}

window.onload = () => {
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", handleClick);

  const button = document.createElement("button"); // <button></button>
  button.innerHTML = "Created by js"; // <button>Created by js</button>
  button.addEventListener("click", handleClick); // Nu fungerar det att klicka på den också :)

  document.getElementById("buttons").appendChild(button);

  const moveButton = document.getElementById("move");
  moveButton.addEventListener("click", moveText);
};

function moveText() {
  const theInput = document.getElementById("userInput");
  if (theInput !== null) {
    // console.log(theInput);
    const textFromUser = theInput.value;
    // console.log(textFromUser);

    const pTag = document.getElementById("result");

    if (pTag) {
      pTag.innerHTML = textFromUser;
    }
  }
}
