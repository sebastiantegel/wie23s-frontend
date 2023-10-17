import axios from "axios";
import { Movie } from "../models/Movie";

export async function getMovies(movieTitleToSearchFor) {
  const response = await axios.get(
    "http://omdbapi.com/?apikey=416ed51a&s=" + movieTitleToSearchFor
  );

  console.log(response.data.Search);

  const movies = response.data.Search.map((movie) => {
    return new Movie(movie.Title, movie.imdbID, movie.Poster);
  });

  console.log(movies);

  return movies;
}

export async function getMovieById(id) {
  const response = await axios.get(
    `http://omdbapi.com/?apikey=416ed51a&i=${id}`
  );

  return response.data;
}
