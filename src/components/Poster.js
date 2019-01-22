import React from "react";
import { styles } from "../styles";

const Poster = ({ movie }) => {
  return (
    <div>
      <img
        style={styles.MoviePoster}
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      />
    </div>
  );
};

export default Poster;
