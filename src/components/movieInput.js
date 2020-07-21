import React, { useState, useContext } from 'react';
import MovieContext from './../contexts/MovieContext';

const MovieInput = ({ searchedYet }) => {
  const [movieSearch, setMovieSearch] = useState('');
  const { onSubmit, handleTrendingOrSearchResults } = useContext(MovieContext);

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
    if (event.keyCode === 13) {
      onSubmit(movieSearch);
      searchedYet();
    }
  };

  return (
    <>
      <input type="text" placeholder="Search" onKeyUp={handleSearch} />
    </>
  );
};

export default MovieInput;
