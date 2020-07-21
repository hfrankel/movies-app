import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';
import Rating from 'react-rating';

const TrendingMovies = () => {
  const [tmdbTrendingMovies, setTmdbTrendingMovies] = useState([]);
  const { addFavourite, storedMovies } = useContext(MovieContext);

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

  const handleAdd = (movie, event) => {
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

  const renderTrendingMovies = tmdbTrendingMovies.map((movie, index) => {
    return (
      <div key={movie.id} style={{ marginBottom: '40px' }}>
        <img
          src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div>
          <button onClick={() => handleAdd(movie)}>Add</button>
          <Rating />
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
