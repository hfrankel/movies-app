import React, { useState, useContext } from 'react';
import Header from './../components/Header';
import MovieInput from './../components/movieInput';
import MovieSelector from './../components/MovieSelector';
import TrendingMovies from './../components/TrendingMovies';
import CustomBreadcrumb from './../components/CustomBreadcrumb';
import MovieContext from './../contexts/MovieContext';

const SearchView = () => {
  const { active, setActive } = useContext(MovieContext);

  return (
    <>
      <Header title={'The Movie Database'} />
      <MovieInput setActive={setActive} />
      <CustomBreadcrumb className="search-view-custombreadcrumb" />
      {!active ? <MovieSelector /> : <TrendingMovies />}
    </>
  );
};

export default SearchView;
