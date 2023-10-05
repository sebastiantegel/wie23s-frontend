window.onload = () => {
  document.getElementById("startwatch").addEventListener("click", startClock);
  document.getElementById("stopwatch").addEventListener("click", stopClock);

  document
    .getElementById("startgeolocation")
    .addEventListener("click", startPosition);
  document
    .getElementById("stopgeolocation")
    .addEventListener("click", stopPosition);
};

let myInterval = 0;
let clock = 0;

function startClock() {
  myInterval = setInterval(() => {
    console.log("ping");
    clock++;

    document.getElementById("watch").innerHTML = clock;
  }, 1000);
}

function stopClock() {
  clearInterval(myInterval);
}

let watchId = 0;
function startPosition() {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(success, error);
  } else {
    alert("Du behöver uppdatera din webbläsare");
  }
}

function stopPosition() {
  navigator.geolocation.clearWatch(watchId);

  console.log(coords);
}

const coords = [];

function success(position) {
  console.log(
    "Lat:",
    position.coords.latitude,
    "Lng:",
    position.coords.longitude
  );

  coords.push({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  });
}

function error(message) {
  console.log(message);
}
