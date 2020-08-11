import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import './../assets/styles/componentStyles/MovieList.css';

const MovieList = ({ filterSearch }) => {
  const { storedMovies } = useContext(MovieContext);
  const { width } = useContext(ViewportContext);

  const filteredMovies = storedMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterSearch.toLowerCase());
  });

  const sortedMovies = filteredMovies.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const renderStoredFilteredMovies = sortedMovies.map((movie) => {
    return (
      <div key={movie.id} className="movie-list-poster-container">
        <Link to={`/movie/${movie.id}/${movie.tmdbid}`}>
          <img
            src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{ width: '360px' }}
            className="movie-list-poster-img"
          />
        </Link>
      </div>
    );
  });

  if (width > 1611) {
    return (
      <div className="movie-list-div-4-posters">
        {renderStoredFilteredMovies}
      </div>
    );
  } else if (width > 1211) {
    return (
      <div className="movie-list-div-3-posters">
        {renderStoredFilteredMovies}
      </div>
    );
  } else if (width > 805) {
    return (
      <div className="movie-list-div-2-posters">
        {renderStoredFilteredMovies}
      </div>
    );
  } else {
    return (
      <div className="movie-list-div-1-poster">
        {renderStoredFilteredMovies}
      </div>
    );
  }
};

export default MovieList;
