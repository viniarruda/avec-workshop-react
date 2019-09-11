import React from "react";
import styled from "styled-components";

import MovieCard from "./MovieCard";

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
        />
      ))}
    </List>
  );
};

export default MoviesList;
