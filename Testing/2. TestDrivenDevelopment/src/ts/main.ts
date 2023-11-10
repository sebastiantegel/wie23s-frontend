import axios from "axios";
import "./../scss/style.scss";

interface IOmdbResponse {
  Search: IMovie[];
  Response: string;
}

interface IMovie {
  Title: string;
  Poster: string;
}

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

  const searchResult = document.getElementById("search-result");
  if (searchResult) {
    searchResult.innerHTML = "";
  }

  if (searchText.length <= 2) {
    const validationError = document.createElement("p");
    validationError.innerHTML =
      "Write at least three characters before searching";

    document.getElementById("search-result")?.appendChild(validationError);
    return;
  }

  const response = await axios.get<IOmdbResponse>(
    "http://omdbapi.com/?apikey=416ed51a&s=" + searchText
  );

  if (response.data.Response === "False") {
    const noMoviesFound = document.createElement("p");
    noMoviesFound.innerHTML = "No movies found";

    document.getElementById("search-result")?.appendChild(noMoviesFound);
  } else {
    response.data.Search.forEach((movie) => {
      const movieContainer = document.createElement("div");
      const title = document.createElement("h3");
      const image = document.createElement("img");

      title.innerHTML = movie.Title;
      image.src = movie.Poster;

      movieContainer.appendChild(title);
      movieContainer.appendChild(image);
      searchResult?.appendChild(movieContainer);
    });
  }
});
