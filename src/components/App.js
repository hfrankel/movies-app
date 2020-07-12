import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import MovieInput from './movieInput';
import MovieList from './MovieList';
import MovieSelector from './MovieSelector';

const App = () => {
  const [retrievedMovies, setRetrievedMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const onSubmit = async (input) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${input}&apikey=${OMDB_API_KEY}`
      );

      setIsFound(true);
      setRetrievedMovies(response.data.Search);
    } catch (e) {
      console.log(e);
    }
  };

  const addFavouriteMovies = (movie) => {
    if (!favouriteMovies.includes(movie)) {
      setFavouriteMovies((favouriteMovies) => [...favouriteMovies, movie]);
    }
  };

  const removeFavouriteMovies = (movie) => {
    setFavouriteMovies((favouriteMovies) =>
      favouriteMovies.filter((favouriteMovie) => favouriteMovie !== movie)
    );
  };

  return (
    <>
      <Header />
      <MovieInput onSubmit={onSubmit} />
      <MovieSelector
        movies={retrievedMovies}
        isFound={isFound}
        addMovie={addFavouriteMovies}
        favouriteMovies={favouriteMovies}
      />
      <MovieList
        favouriteMovies={favouriteMovies}
        removeMovie={removeFavouriteMovies}
      />
    </>
  );
};

export default App;
