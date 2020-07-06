import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import MovieInput from './movieInput';
import MovieList from './MovieList';
import MovieSelector from './MovieSelector';

const App = () => {
  const [retrievedMovie, setRetrievedMovie] = useState('');
  const [isFound, setIsFound] = useState(false);
  const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const onSubmit = async (input) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${input}&apikey=${OMDB_API_KEY}`
      );
      if (response.data.Title !== undefined) {
        console.log(response.data);
        setIsFound(true);
        setRetrievedMovie(response.data);
      } else {
        alert('No result found');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <MovieInput onSubmit={onSubmit} />
      <MovieSelector movie={retrievedMovie} isFound={isFound} />
      <MovieList />
    </>
  );
};

export default App;
