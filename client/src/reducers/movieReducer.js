import { FETCH_MOVIES, FETCH_GENRES } from "../actions/types";

const initialState = {
  movies: [],
  genres: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };

    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload
      };

    default:
      return state;
  }
}
