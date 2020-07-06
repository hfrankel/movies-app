import React, { useState } from 'react';

const MovieInput = () => {
  const [movieSearch, setMovieSearch] = useState('');

  const handleSearch = (event) => {
    setMovieSearch(event.target.value);
  };

  return <input type="text" placeholder="Add Movie" onKeyUp={handleSearch} />;
};

export default MovieInput;
