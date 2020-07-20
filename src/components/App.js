import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
  return (
    <>
      <Header title={'Favourite Movies'} />
      <MovieList />
    </>
  );
};

export default App;
