import axios from "axios";
import "./style.css";

const BASE_URL = "https://swapi.dev/api/";

axios.get(`${BASE_URL}starships/12`).then((response) => {
  console.log(response.data);

  document.getElementById("test").innerHTML = JSON.stringify(response.data);
});
