import "./style.css";

function greeting() {
  alert("Hello world!");
}

/// Denna funktion sätter texten på knappen Hej hej
/// textToShowInButton är texten som skall sättas
/// textToShowInButton: string
function showGreeting(textToShowInButton) {
  document.getElementById("showGreeting").innerHTML = textToShowInButton;
}

function save() {
  // buttonText är texten som står i textrutan
  const buttonText = document.getElementById("userInput").value;

  // Anropa funktionen showGreeting och skicka med buttonText (texten från textrutan)
  showGreeting(buttonText);
}

const fetchMovies = async () => {
  const response = await fetch("http://omdbapi.com/?apikey=416ed51a&s=star");
  const data = await response.json();

  // data.Search = [{...}, {...}, ...] = movies i createHtml
  createHtml(data.Search);
};

/// movies = [{...}, {...}, ...] = data.Search i fetchMovies
const createHtml = (movies) => {
  const moviesContainer = clearMoviesContainer();

  // for (let i = 0; i < movies.length; i++) {}

  movies.forEach((movie) => {
    const movieContainer = createMovieContainer();
    const title = createTitleTag(movie);
    const imageContainer = createImgTag(movie);

    movieContainer.appendChild(title);
    movieContainer.appendChild(imageContainer);
    moviesContainer.appendChild(movieContainer);
  });
};

const clearMoviesContainer = () => {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = "";

  return moviesContainer;
};

const createTitleTag = (movie) => {
  const title = document.createElement("h2");
  title.innerHTML = movie.Title;

  return title;
};

function createImgTag(movie) {
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  image.src = movie.Poster;
  image.alt = movie.Title;
  imageContainer.appendChild(image);
  return imageContainer;
}

function createMovieContainer() {
  const theDiv = document.createElement("div");
  theDiv.className = "movie";

  theDiv.addEventListener("click", greeting);
  return theDiv;
}

document.getElementById("showGreeting").addEventListener("click", greeting);
document.getElementById("save").addEventListener("click", save);
document.getElementById("getMovies").addEventListener("click", fetchMovies);
