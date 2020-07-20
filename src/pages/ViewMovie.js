import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';

const ViewMovie = () => {
  const [viewedMovie, setViewedMovie] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  let { tmdbid, id } = useParams();
  const { deleteFavourite } = useContext(MovieContext);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${tmdbid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setViewedMovie(response.data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleClick = () => {
    deleteFavourite(id);
    setIsDeleted(true);
  };

  if (isDeleted === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>{viewedMovie.title}</div>
      <a href={`https://imdb.com/title/${viewedMovie.imdb_id}`} target="blank">
        <img
          src={`http://image.tmdb.org/t/p/w400/${viewedMovie.poster_path}`}
          alt={`${viewedMovie.title} poster`}
        />
      </a>
      <button onClick={handleClick}>Remove</button>
    </>
  );
};

export default ViewMovie;
