import axios from "axios";
import "./../scss/style.scss";
import { IWeather } from "../models/IWeather";

const button = document.createElement("button");

button.innerHTML = "Hämta väder";
button.addEventListener("click", async () => {
  // Hitta position

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      // Hämta väder
      getWeather(pos.coords.latitude, pos.coords.longitude);
    },
    (err) => {
      console.log(err);
      getWeather(23.684994, 90.356331);
    }
  );
});

document.getElementById("app")?.appendChild(button);

async function getWeather(lat: number, lng: number) {
  const response = await axios.get<IWeather>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f33373090626c93c497865cb41e75619&units=metric`
  );

  const app = document.getElementById("app") as HTMLDivElement;

  if (response.status === 200) {
    // Presentera väder
    const weather = document.createElement("section");
    const location = document.createElement("h3");
    const main = document.createElement("p");
    const description = document.createElement("p");
    const temp = document.createElement("h5");
    const feels_like = document.createElement("h6");

    weather.id = "weather";
    location.innerHTML = response.data.name;
    main.id = "main";
    main.innerHTML = response.data.weather[0].main;
    description.id = "description";
    description.innerHTML = response.data.weather[0].description;
    temp.innerHTML = response.data.main.temp.toString();
    feels_like.innerHTML = response.data.main.feels_like.toString();

    weather.appendChild(location);
    weather.appendChild(main);
    weather.appendChild(description);
    weather.appendChild(temp);
    weather.appendChild(feels_like);
    app.appendChild(weather);
  }
}
