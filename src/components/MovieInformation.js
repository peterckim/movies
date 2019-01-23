import React, { Component } from "react";
import { styles } from "../styles";

import Button from "./Button";
import Cast from "./Cast";

class MovieInformation extends Component {
  state = {
    movieHighlighted: null
  };

  render() {
    let genreList = [];

    if (this.props.movie.genre_ids) {
      this.props.movie.genre_ids.forEach(id => {
        genreList.push(
          this.props.genres.find(genre => {
            return genre.id == id;
          })
        );
      });
    }

    const genreElements = genreList.map(genre => {
      return (
        <li key={genre.id} style={styles.Genre}>
          {genre.name}
        </li>
      );
    });

    if (!this.state.movieHighlighted) {
      return null;
    }

    return (
      <div style={styles.MovieInformation}>
        <h1 style={styles.BannerTextHeader}>{this.props.movie.title}</h1>
        <p>{this.props.movie.release_date}</p>
        <p>
          <span style={styles.GreenText}>{this.props.movie.vote_average}</span>
          /10 ({this.props.movie.vote_count}
          votes)
        </p>
        <ul style={styles.GenreList}>{genreElements}</ul>
        <p>{this.props.movie.overview}</p>

        <Button content={"Trailer"} />
        <Button content={"IMDB"} />

        <Cast cast={this.state.movieHighlighted.credits.cast} />
      </div>
    );
  }

  componentDidMount() {
    if (this.props.movie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.movie.id
        }?api_key=c9e315c4b389bc4340657616b8ebb88d&append_to_response=credits`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            movieHighlighted: data
          });
        });
    }
  }
}

export default MovieInformation;
