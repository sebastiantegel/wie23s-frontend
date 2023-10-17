import "./../scss/style.scss";
import { getMovieById, getMovies } from "../services/movieService";

const searchMovies = async (e) => {
  e.preventDefault();

  const movieTitleToSearchFor = document.querySelector("#userInput").value;

  if (movieTitleToSearchFor === "") {
    return;
  }

  const movies = await getMovies(movieTitleToSearchFor);

  localStorage.setItem("movies", JSON.stringify(movies));

  createHtml(movies);

  document.querySelector("#userInput").value = "";
};

const createHtml = (movies) => {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");

    title.innerHTML = movie.name;
    img.src = movie.imageUrl;
    movieContainer.className = "movie";
    movieContainer.setAttribute("data-bs-toggle", "modal");
    movieContainer.setAttribute("data-bs-target", "#exampleModal");
    imgContainer.className = "img-container";

    movieContainer.addEventListener("click", async () => {
      const movieDetails = await getMovieById(movie.imdbID);
      createHtmlForMovie(movieDetails);
    });

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);

    moviesContainer.appendChild(movieContainer);
  });
};

function createHtmlForMovie(movie) {
  document.getElementById("modal-body").innerHTML = "";

  document.getElementById("exampleModalLabel").innerHTML = movie.Title;

  const description = document.createElement("p");
  description.innerHTML = movie.Plot;

  const director = document.createElement("p");
  director.innerHTML = movie.Director;

  const actors = document.createElement("p");
  actors.innerHTML = movie.Actors;

  document.getElementById("modal-body").appendChild(description);
  document.getElementById("modal-body").appendChild(director);
  document.getElementById("modal-body").appendChild(actors);
}

document.querySelector("#search").addEventListener("submit", searchMovies);

const moviesFromLocalStorage = JSON.parse(
  localStorage.getItem("movies") || "[]"
);
createHtml(moviesFromLocalStorage);
