import axios from "axios";
import "./../scss/style.scss";

document
  .getElementById("form")
  ?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const firstnumber: number = +(
      document.getElementById("firstnumber") as HTMLInputElement
    ).value;

    const secondnumber: number = +(
      document.getElementById("secondnumber") as HTMLInputElement
    ).value;

    const resultTag = document.getElementById("result");
    if (resultTag) {
      resultTag.innerHTML = (firstnumber + secondnumber).toString();
    }
  });

document.getElementById("getapidata")?.addEventListener("click", async () => {
  const response = await fetch("https://swapi.dev/api/people/1");
  response.json().then(
    (data) => {
      console.log(data.name);
    },
    (error) => {
      console.log(error);
    }
  );
});

interface IPeople {
  name: string;
  films: string[];
}

interface IMovie {
  title: string;
}

document.getElementById("getapidata2")?.addEventListener("click", async () => {
  const response = await axios.get<IPeople>("https://swapi.dev/api/people/1");
  console.log(response.data.films);

  const ul = document.createElement("ul");

  const movies: IMovie[] = [];
  for (let i = 0; i < response.data.films.length; i++) {
    const movieResponse = await axios.get<IMovie>(response.data.films[i]);
    movies.push(movieResponse.data);

    const li = document.createElement("li");

    li.innerHTML = movieResponse.data.title;

    li.addEventListener("click", async () => {
      const movies: IMovie[] = JSON.parse(
        localStorage.getItem("movies") || "[]"
      );
      const theMovie = movies.filter(
        (m) => m.title === movieResponse.data.title
      );
      console.log(theMovie[0]);
    });

    ul.appendChild(li);
  }

  localStorage.setItem("movies", JSON.stringify(movies));

  document.body.appendChild(ul);
});
