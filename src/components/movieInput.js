import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';

const MovieInput = ({ setHasSearched, setActive }) => {
  const [movieSearch, setMovieSearch] = useState('');
  const { onSubmit } = useContext(MovieContext);

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
    if (event.keyCode === 13) {
      onSubmit(movieSearch);
      setActive(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Input
          placeholder="Search"
          onKeyUp={handleSearch}
          style={{
            width: '250px',
            marginBottom: '20px',
            fontSize: '16px',
          }}
        />
      </div>
    </>
  );
};

export default MovieInput;
