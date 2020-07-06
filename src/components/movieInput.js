import React, { useState } from 'react';
import axios from 'axios';

const MovieInput = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [retrievedMovie, setRetrievedMovie] = useState('');
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const getMovie = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${movieSearch}&apikey=${OMDB_API_KEY}`
    );
    setRetrievedMovie(response.data);
  };

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
    if (event.keyCode === 13) {
      getMovie();
    }
  };

  return (
    <>
      <input type="text" placeholder="Add Movie" onKeyUp={handleSearch} />
      <div>{JSON.stringify(retrievedMovie)}</div>
    </>
  );
};

export default MovieInput;
