import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Import the styles
import { styles } from "../styles";
import MovieCard from "./MovieCard";

class Movies extends Component {
  render() {
    const headerStyle = {
      color: "white",
      marginBottom: "50px"
    };

    const movieItems = this.props.movies.map(movie => (
      <Col style={styles.ColumnStyle} md={4}>
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      </Col>
    ));

    return (
      <div style={styles.MoviesContainer}>
        <h1 style={headerStyle}>
          <img src="/video-camera.svg" alt="film-image" style={styles.Icon} />
          In Cinemas
        </h1>
        <Grid fluid={true}>
          <Row className="show-grid">{movieItems}</Row>
        </Grid>
      </div>
    );
  }
}

export default Movies;
