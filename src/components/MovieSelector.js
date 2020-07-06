import React from 'react';

const MovieSelector = ({ movie, isFound }) => {
  return <div>{isFound ? movie.Title : 'Find a movie'}</div>;
};

export default MovieSelector;
