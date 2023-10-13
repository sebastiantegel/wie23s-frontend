import axios from "axios";

export async function getMovies(movieTitleToSearchFor) {
  const response = await axios.get(
    "http://omdbapi.com/?apikey=416ed51a&s=" + movieTitleToSearchFor
  );

  return response.data.Search;
}

export async function getMovieById(id) {
  const response = await axios.get(
    `http://omdbapi.com/?apikey=416ed51a&i=${id}`
  );

  return response.data;
}
