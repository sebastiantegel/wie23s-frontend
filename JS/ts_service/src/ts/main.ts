import "./../scss/style.scss";
import { getProducts } from "./services/productService";
import { getMovieById, getMoviesBySearch } from "./services/movieService";

const products = await getProducts();
const movies = await getMoviesBySearch("star");
const movie = await getMovieById("tt0076759");

console.log("From main:", movies, products);
console.log("From main - movie:", movie);
