import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import './../assets/styles/componentStyles/MovieList.css';

const MovieList = () => {
  const { storedMovies } = useContext(MovieContext);
  const { width } = useContext(ViewportContext);
  const renderStoredMovies = storedMovies.map((movie) => {
    return (
      <div key={movie.id} className="movie-list-poster-container">
        <Link to={`/movie/${movie.id}/${movie.tmdbid}`}>
          <img
            src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </Link>
      </div>
    );
  });

  if (width > 1611) {
    return <div className="movie-list-div-4-posters">{renderStoredMovies}</div>;
  } else if (width > 1211) {
    return <div className="movie-list-div-3-posters">{renderStoredMovies}</div>;
  } else if (width > 805) {
    return <div className="movie-list-div-2-posters">{renderStoredMovies}</div>;
  } else {
    return <div className="movie-list-div-1-poster">{renderStoredMovies}</div>;
  }
};

export default MovieList;
