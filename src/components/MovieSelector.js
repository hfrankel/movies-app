import React, { useContext } from 'react';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import Rating from 'react-rating';
import './../assets/styles/componentStyles/MovieSelector.css';

const MovieSelector = () => {
  const { externalApiMovies, storedMovies, addFavourite } = useContext(
    MovieContext
  );
  const { width } = useContext(ViewportContext);

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
      <div key={movie.id} className="movie-selector-poster-container">
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
