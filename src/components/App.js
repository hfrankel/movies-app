import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import MovieInput from './movieInput';
import MovieList from './MovieList';
import MovieSelector from './MovieSelector';

const App = () => {
  const [retrievedMovie, setRetrievedMovie] = useState('');
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const onSubmit = async (input) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${input}&apikey=${OMDB_API_KEY}`
    );
    setRetrievedMovie(response.data);
  };

  return (
    <>
      <Header />
      <MovieInput onSubmit={onSubmit} />
      <MovieSelector movie={retrievedMovie} />
      <MovieList />
    </>
  );
};

export default App;
