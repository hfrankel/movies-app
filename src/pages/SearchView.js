import React, { useState } from 'react';
import Header from './../components/Header';
import MovieInput from './../components/movieInput';
import MovieSelector from './../components/MovieSelector';
import TrendingMovies from './../components/TrendingMovies';

const SearchView = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const searchedYet = () => {
    setHasSearched(!hasSearched);
  };

  return (
    <>
      <Header title={'Search'} />
      <MovieInput searchedYet={searchedYet} />
      {hasSearched ? <MovieSelector /> : <TrendingMovies />}
    </>
  );
};

export default SearchView;
