import { IMovie, IMovieExt } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

// const BASE_URL = "http://omdbapi.com?apikey=416ed51a&i=";
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const getMoviesBySearch = async (
  userInput: string
): Promise<IMovie[]> => {
  const response = await get<IOmdbResponse>(`${BASE_URL}s=${userInput}`);
  return response.Search;
};

export const getMovieById = async (userInput: string): Promise<IMovieExt> => {
  return await get<IMovieExt>(`${BASE_URL}i=${userInput}`);
};
