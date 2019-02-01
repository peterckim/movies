import React from "react";

import { styles } from "../styles";

const MovieJumbotron = ({ movie }) => {
  const style = {
    width: "100vw",
    height: "70vh",
    background: `url(https://image.tmdb.org/t/p/original${
      movie.backdrop_path
    }) no-repeat center`,
    backgroundSize: "cover",
    color: "white"
  };

  return (
    <div style={styles.Banner}>
      <div style={style} />
      <div style={styles.BannerOverlay} />
    </div>
  );
};

export default MovieJumbotron;
