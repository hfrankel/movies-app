import React from 'react';

const MovieSelector = ({ movie, isFound }) => {
  return (
    <div>
      {isFound ? (
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="blank">
          {movie.Title}
        </a>
      ) : (
        'Find a movie'
      )}
    </div>
  );
};

export default MovieSelector;
