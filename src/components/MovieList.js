import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';

const MovieList = () => {
  const { displayedMovies } = useContext(MovieContext);
  const renderStoredMovies = displayedMovies.map((movie) => {
    return (
      <div key={movie.id}>
        <Link to={`/movie/${movie.id}/${movie.tmdbid}`}>
          <img
            src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </Link>
      </div>
    );
  });

  return (
    <>
      <ul>{renderStoredMovies}</ul>
    </>
  );
};

export default MovieList;
