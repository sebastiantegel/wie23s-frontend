// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1, 1, 2, 3, 5, 8, 13]);
//   }, 5000);
// });

// promise.then(
//   (valueFromPromise) => {
//     console.log("Promise ran resolve! Everything is good:", valueFromPromise);

//     const ul = document.createElement("ul");

//     for (let i = 0; i < valueFromPromise.length; i++) {
//       const li = document.createElement("li");
//       li.innerHTML = valueFromPromise[i];

//       ul.appendChild(li);
//     }

//     document.body.appendChild(ul);
//   },
//   () => {
//     console.log("An error occured (reject was called)");
//   }
// );

// console.log("Finished");

fetch("http://omdbapi.com/?apikey=416ed51a&s=harry")
  .then((response) => response.json())
  .then((movies) => {
    console.log(movies.Search);
    createHtml(movies.Search);
  });

function createHtml(movies) {
  const moviesContainer = document.getElementById("movies");
  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");

    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    movieContainer.className = "movie";
    movieContainer.setAttribute("data-bs-toggle", "modal");
    movieContainer.setAttribute("data-bs-target", "#exampleModal");
    imgContainer.className = "img-container";

    movieContainer.addEventListener("click", () => {
      getDetailsForMovie(movies[i].imdbID);
    });

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);

    moviesContainer.appendChild(movieContainer);
  }
}

function getDetailsForMovie(imdbID) {
  fetch(`http://omdbapi.com/?apikey=416ed51a&i=${imdbID}`)
    .then((response) => response.json())
    .then((movie) => {
      console.log(movie);
      createHtmlForMovie(movie);
    });
}

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
