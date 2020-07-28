import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';

const MovieInput = ({ searchedYet }) => {
  const [movieSearch, setMovieSearch] = useState('');
  const { onSubmit } = useContext(MovieContext);

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
    if (event.keyCode === 13) {
      onSubmit(movieSearch);
      searchedYet();
    }
  };

  return (
    <>
      <Input
        placeholder="Search"
        onKeyUp={handleSearch}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      />
    </>
  );
};

export default MovieInput;
