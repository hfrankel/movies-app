import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';
import Rating from 'react-rating';
import ViewportContext from '../contexts/ViewportContext';
import './../assets/styles/componentStyles/TrendingMovies.css';

const TrendingMovies = () => {
  const [tmdbTrendingMovies, setTmdbTrendingMovies] = useState([]);
  const [myRating, setMyRating] = useState(0);
  const { addFavourite, storedMovies } = useContext(MovieContext);
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

  // const handleRating = async (movie, event) => {
  //   setMyRating(event);
  //   console.log(myRating, movie);
  //   const targetedMovie = storedMovies.filter(
  //     (favMovie) => favMovie.title === movie.title
  //   );
  //   console.log(targetedMovie[0]['id']);

  //   if (
  //     storedMovies.some(
  //       (favouriteMovie) => favouriteMovie.title === movie.title
  //     )
  //   ) {
  //     const response = await axios.put(
  //       `${process.env.REACT_APP_FAVOURITE_MOVIES_API}/${targetedMovie[0]['id']}}`,
  //       { rating: myRating }
  //     );
  //     console.log(response);
  //   } else {
  //     console.log('Not got');
  //   }
  // };

  const renderTrendingMovies = tmdbTrendingMovies.map((movie, index) => {
    return (
      <div key={movie.id} className="trending-movies-poster-container">
        <img
          src={`http://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div>
          <button onClick={() => handleAdd(movie)}>Add</button>
          {/* <Rating onChange={(e) => handleRating(movie, e)} /> */}
        </div>
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
