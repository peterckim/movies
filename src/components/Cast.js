import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const Cast = ({ cast }) => {
  const movieCast = cast.slice(0, 9).map(character => {
    return (
      <Col md={4} key={character.cast_id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${character.profile_path}`}
          alt={character.character}
        />
        <p>{character.name}</p>
        <p>{character.character}</p>
      </Col>
    );
  });

  return (
    <div>
      <h1>Cast</h1>
      <Grid fluid={true}>
        <Row className="show-grid">{movieCast}</Row>
      </Grid>
    </div>
  );
};

export default Cast;
