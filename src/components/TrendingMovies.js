import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';

const TrendingMovies = () => {
  const [tmdbTrendingMovies, setTmdbTrendingMovies] = useState([]);

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
      <div key={movie.id} style={{ marginBottom: '40px' }}>
        <img
          src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div>
          <button>Add</button>
          <button>Trailer</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{renderTrendingMovies}</div>
    </>
  );
};

export default TrendingMovies;
