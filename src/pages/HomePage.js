import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";

import Movies from "../components/Movies";
import Banner from "../components/Banner";

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    let movie = "fetching";

    if (this.props.movies.length) {
      movie = this.props.movies[0];
    }

    return (
      <div>
        <Banner movies={this.props.movies} movie={movie} />
        <Movies movies={this.props.movies} />
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(HomePage);
