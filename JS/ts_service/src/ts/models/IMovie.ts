export interface IMovie {
  Title: string;
  Poster: string;
  imdbID: string;
}

export interface IMovieExt extends IMovie {
  Actors: string;
  Director: string;
  Language: string;
  Runtime: string;
}
