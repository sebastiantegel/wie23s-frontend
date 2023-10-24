import axios from "axios";
import { Address } from "./models/Address";
import { Person } from "./models/Person";
import "./style.css";
import { IOmdbResponse } from "./models/IOmdbResponse";
import { IMovie } from "./models/IMovie";

const p: Person = new Person("Sebastian", 44, [
  new Address("Agatvägen 18", "168 60", "Bromma"),
  new Address("Stopvägen 64", "165 60", "Bromma"),
]);

console.log(p);

const getMovies = async () => {
  const response = await axios.get<IOmdbResponse>(
    "http://omdbapi.com?apikey=416ed51a&s=star"
  );
  console.log(response.data);
  console.log(response.data.Search);

  const appDiv: HTMLDivElement = document.getElementById(
    "app"
  ) as HTMLDivElement;

  response.data.Search.forEach((movie: IMovie) => {
    const title: HTMLHeadingElement = document.createElement("h3");
    title.innerHTML = movie.Title;

    appDiv?.appendChild(title);
  });
};

document.getElementById("getMovies")?.addEventListener("click", getMovies);
