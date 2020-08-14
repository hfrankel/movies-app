import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import './../assets/styles/componentStyles/MovieSelector.css';

const MovieSelector = () => {
  const { externalApiMovies } = useContext(MovieContext);
  const { width } = useContext(ViewportContext);

  const moviesWithPosters = externalApiMovies.filter(
    (movie) => movie.poster_path !== null
  );

  const renderReturnedMovies = moviesWithPosters.map((movie) => {
    return (
      <div key={movie.id} className="movie-selector-poster-container">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="movie-selector-poster-img"
          />
        </Link>
        <div></div>
      </div>
    );
  });

  if (width > 1611) {
    return (
      <div className="movie-selector-div-4-posters">{renderReturnedMovies}</div>
    );
  } else if (width > 1211) {
    return (
      <div className="movie-selector-div-3-posters">{renderReturnedMovies}</div>
    );
  } else if (width > 805) {
    return (
      <div className="movie-selector-div-2-posters">{renderReturnedMovies}</div>
    );
  } else {
    return (
      <div className="movie-selector-div-1-poster">{renderReturnedMovies}</div>
    );
  }
};

export default MovieSelector;
