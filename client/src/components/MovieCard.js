import React from "react";

// Import the styles
import { styles } from "../styles";

const MovieCard = ({ movie }) => {
  return (
    <div key={movie.id} style={styles.Movie}>
      <div style={styles.MovieOverlay} />
      <div div style={styles.MovieCaption}>
        <h3>{movie.title}</h3>
        <p style={styles.MovieYear}>{movie.release_date.substring(0, 4)}</p>
        <p style={styles.MovieRating}>&#9733; {movie.vote_average}</p>
      </div>

      <img
        style={styles.MovieImage}
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieCard;
