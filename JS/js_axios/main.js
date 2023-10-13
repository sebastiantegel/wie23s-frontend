import "./style.css";
import axios from "axios";

// fetch("http://omdbapi.com/?apikey=416ed51a&s=harry")
//   .then((response) => response.json())
//   .then((movies) => {
//     console.log(movies.Search);
//   });

axios.get("http://omdbapi.com/?apikey=416ed51a&s=harry").then((response) => {
  console.log(response.data.Search);
});
