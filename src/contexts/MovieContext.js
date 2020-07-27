import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = React.createContext();

export const MovieStore = (props) => {
  const [externalApiMovies, setExternalApiMovies] = useState([]);
  const [storedMovies, setStoredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const FAVOURITE_MOVIES_API = process.env.REACT_APP_FAVOURITE_MOVIES_API;

  const onSubmit = async (input) => {
    // Get movies from TDMB API
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${input}`
      );
      setExternalApiMovies(response.data.results);
      console.log(response.data.results);
    } catch (e) {}
  };

  // Get all movies from Rails favourite movies API
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_FAVOURITE_MOVIES_API}`
        );
        setStoredMovies(response.data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Make sure that movies just added get rendered to screen
  useEffect(() => {
    setDisplayedMovies(storedMovies);
  }, [storedMovies]);

  // Add new movie to favourites
  const addFavourite = async (movie, movieTitle, tmdbId, posterPath) => {
    try {
      await axios.post(`${FAVOURITE_MOVIES_API}`, {
        title: movieTitle,
        tmdbid: tmdbId,
        poster_path: posterPath,
      });
      setStoredMovies((storedMovies) => [...storedMovies, movie]);
    } catch (e) {
      console.log(e);
    }
  };

  // Remove a movie from favourites
  const deleteFavourite = async (id) => {
    try {
      await axios.delete(`${FAVOURITE_MOVIES_API}/${id}`);
      setStoredMovies(displayedMovies.filter((movies) => movies !== movies.id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        externalApiMovies,
        storedMovies,
        displayedMovies,
        onSubmit,
        addFavourite,
        deleteFavourite,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
