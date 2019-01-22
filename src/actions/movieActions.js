import { FETCH_MOVIES, FETCH_GENRES } from "./types";

// https://image.tmdb.org/t/p/original

export const fetchMovies = () => dispatch => {
  console.log("fetch movies");
  fetch(
    "http://api.themoviedb.org/3/movie/now_playing?api_key=c9e315c4b389bc4340657616b8ebb88d"
  )
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies.results
      })
    );
};

export const fetchGenres = () => dispatch => {
  console.log("fetch genres");
  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=c9e315c4b389bc4340657616b8ebb88d&language=en-US"
  )
    .then(res => res.json())
    .then(genres =>
      dispatch({
        type: FETCH_GENRES,
        payload: genres.genres
      })
    );
};
