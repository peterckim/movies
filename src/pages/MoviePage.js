import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchGenres, fetchMovies } from "../actions/movieActions";

import MovieInformation from "../components/MovieInformation";
import MovieJumbotron from "../components/MovieJumbotron";
import Poster from "../components/Poster";

class MoviePage extends Component {
  componentWillMount() {
    this.props.fetchGenres();
    this.props.fetchMovies();
  }
  render() {
    if (!this.props.movies.length || !this.props.genres.length) {
      return null;
    }

    const movie = this.props.movies.find(movie => {
      return movie.id == this.props.match.params.movieId;
    });

    return (
      <div>
        <Poster movie={movie} />
        <MovieJumbotron movie={movie} />
        <MovieInformation movie={movie} genres={this.props.genres} />
      </div>
    );
  }
}

MoviePage.propTypes = {
  fetchGenres: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  genres: state.movies.genres,
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchGenres, fetchMovies }
)(MoviePage);
