import React, { useContext } from 'react';
import MovieContext from './../contexts/MovieContext';
import Rating from 'react-rating';

const MovieSelector = () => {
  const { externalApiMovies, storedMovies, addFavourite } = useContext(
    MovieContext
  );

  const handleAdd = (movie) => {
    if (
      storedMovies.some(
        (favouriteMovie) => favouriteMovie.title === movie.title
      )
    ) {
      // do nothing
    } else {
      addFavourite(movie, movie.title, movie.id, movie.poster_path);
    }
  };

  const moviesWithPosters = externalApiMovies.filter(
    (movie) => movie.poster_path !== null
  );

  const renderReturnedMovies = moviesWithPosters.map((movie, index) => {
    return (
      <div key={movie.id} style={{ marginBottom: '40px' }}>
        <img
          src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div>
          <button onClick={() => handleAdd(movie)}>Add</button>
          <button>Trailer</button>
        </div>
        <Rating />
      </div>
    );
  });

  return (
    <>
      <>{renderReturnedMovies}</>
    </>
  );
};

export default MovieSelector;
