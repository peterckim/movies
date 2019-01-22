import React, { Component } from "react";
import { styles } from "../styles";

import Button from "./Button";

const MovieInformation = ({ movie }) => {
  return (
    <div style={styles.MovieInformation}>
      <h1 style={styles.BannerTextHeader}>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <p>
        <span style={styles.GreenText}>{movie.vote_average}</span>
        /10 ({movie.vote_count}
        votes)
      </p>
      <p>{movie.overview}</p>

      <Button content={"Trailer"} />
      <Button content={"IMDB"} />
    </div>
  );
};

export default MovieInformation;
