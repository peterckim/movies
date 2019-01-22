import { FETCH_POSTS, NEW_POST, FETCH_MOVIES } from "./types";

export const fetchMovies = () => dispatch => {
  fetch(
    "http://api.themoviedb.org/3/movie/now_playing?api_key=c9e315c4b389bc4340657616b8ebb88d"
  )
    .then(res => res.json().results)
    .then(movies =>
      dispatch({
        type: FETCH_MOVIES,
        payload: movies
      })
    );
};

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

// https://api.themoviedb.org/3/movie/550?api_key=c9e315c4b389bc4340657616b8ebb88d

export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
