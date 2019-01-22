import React, { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

// Import the styles
import { styles } from "../styles";

const Banner = ({ movie }) => {
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
    <div style={styles.BannerContainer}>
      <div style={styles.Banner}>
        <div style={styles.BannerText}>
          <h1 style={styles.BannerTextHeader}>{movie.title}</h1>
          <p style={styles.BannerTextParagraph}>{movie.overview}</p>

          <Link to={`/movies/${movie.id}`}>
            <Button content={"Check It Out"} />
          </Link>
        </div>

        <div style={style} />
        <div style={styles.BannerOverlay} />
      </div>
    </div>
  );
};

export default Banner;
