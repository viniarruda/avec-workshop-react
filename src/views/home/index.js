import React, { useState, useEffect } from "react";
import axios from "axios";

import { api } from "../../services/api";

import Button from "../../components/common/Button";
import Spinner from "../../components/common/Spinner";

import MovieList from "./components/List";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        api.token
      }&language=en-US&page=${page}`
    );
    console.log(data);
    if (status) {
      setMovies(data.results);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <Spinner show={isLoading} />
      {!isLoading && (
        <>
          <Button onClick={() => setPage(page + 1)}>Próxima Pagina</Button>
          {movies.length && <MovieList movies={movies} />}
        </>
      )}
    </div>
  );
};

export default Home;
