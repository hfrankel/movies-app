import React from 'react';

const MovieSelector = ({ movies, isFound, addMovie }) => {
  const renderReturnedMovies = movies.map((movie, index) => {
    return (
      <li key={movie.imdbID} style={{ listStyle: 'none' }}>
        <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
          {movie.Title}
        </a>
        <button onClick={() => addMovie(movies[index])}>Add</button>
      </li>
    );
  });

  return (
    <>
      <h3>Movie Library</h3>
      <ul>{renderReturnedMovies}</ul>
    </>
  );
};

export default MovieSelector;
