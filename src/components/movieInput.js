import React, { useState } from 'react';

const MovieInput = ({ onSubmit }) => {
  const [movieSearch, setMovieSearch] = useState('');

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
    if (event.keyCode === 13) {
      onSubmit(movieSearch);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search" onKeyUp={handleSearch} />
    </>
  );
};

export default MovieInput;
