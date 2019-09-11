import React, { useEffect, useState } from "react";

import axios from "axios";

import { api } from "../../services/api";

const MovieDetail = props => {
  const [movie, setMovie] = useState({});

  const fetchMovie = async id => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api.token}`
    );
    if (status) {
      setMovie(data);
    }
  };

  useEffect(() => {
    const { id } = props.match.params;

    if (id) {
      fetchMovie(id);
    }
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      {console.log(movie)}
    </div>
  );
};

export default MovieDetail;
