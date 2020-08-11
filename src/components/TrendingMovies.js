import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ViewportContext from '../contexts/ViewportContext';
import './../assets/styles/componentStyles/TrendingMovies.css';

const TrendingMovies = () => {
  const [tmdbTrendingMovies, setTmdbTrendingMovies] = useState([]);
  const { width } = useContext(ViewportContext);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setTmdbTrendingMovies(response.data.results);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const renderTrendingMovies = tmdbTrendingMovies.map((movie, index) => {
    return (
      <div key={movie.id} className="trending-movies-poster-container">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{ width: '360px' }}
            className="trending-movies-poster-img"
          />
        </Link>
      </div>
    );
  });

  if (width > 1611) {
    return (
      <div className="trending-movies-div-4-posters">
        {renderTrendingMovies}
      </div>
    );
  } else if (width > 1211) {
    return (
      <div className="trending-movies-div-3-posters">
        {renderTrendingMovies}
      </div>
    );
  } else if (width > 805) {
    return (
      <div className="trending-movies-div-2-posters">
        {renderTrendingMovies}
      </div>
    );
  } else {
    return (
      <div className="trending-movies-div-1-poster">{renderTrendingMovies}</div>
    );
  }
};

export default TrendingMovies;
