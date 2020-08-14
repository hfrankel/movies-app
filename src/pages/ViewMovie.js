import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import TwoColTable from './../components/TwoColTable';
import CustomAnimatedButton from './../components/CustomAnimatedButton';
import './../assets/styles/pageStyles/ViewMovie.css';

const ViewMovie = () => {
  const [viewedMovie, setViewedMovie] = useState('');
  const [redirectToHome, setRedirectToHome] = useState('');
  let { tmdbid, id } = useParams();
  const { addFavourite, deleteFavourite, storedMovies } = useContext(
    MovieContext
  );
  const { width } = useContext(ViewportContext);

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

  function checkMovie(storedMovies, viewedMovie) {
    return storedMovies.some(function (storedMovie) {
      return storedMovie.title === viewedMovie.title;
    });
  }

  const handleClick = (event, viewedMovie) => {
    if (event.target.innerText === 'add') {
      addFavourite(
        viewedMovie,
        viewedMovie.title,
        viewedMovie.id,
        viewedMovie.poster_path
      );
      if (checkMovie(storedMovies, viewedMovie) === false) {
        setRedirectToHome('/home');
      }
    }

    if (event.target.innerText === 'remove') {
      deleteFavourite(id, viewedMovie);
      if (checkMovie(storedMovies, viewedMovie) === true) {
        setRedirectToHome('/home');
      }
    }
  };

  if (redirectToHome) {
    return <Redirect to={`${redirectToHome}`} />;
  }

  if (width > 1140) {
    return (
      <>
        <div className="view-movie-container">
          <div className="view-movie-left-col">
            <a
              href={`https://imdb.com/title/${viewedMovie.imdb_id}`}
              target="blank"
            >
              <img
                src={`http://image.tmdb.org/t/p/w400/${viewedMovie.poster_path}`}
                alt={`${viewedMovie.title} poster`}
              />
            </a>
            <div style={{ display: 'flex', marginTop: '5px' }}>
              <CustomAnimatedButton
                type="add"
                icon="check circle outline"
                handleClick={handleClick}
                viewedMovie={viewedMovie}
              />
              <CustomAnimatedButton
                type="remove"
                icon="times circle outline"
                handleClick={handleClick}
                viewedMovie={viewedMovie}
              />
            </div>
          </div>
          <TwoColTable info={viewedMovie} className="view-movie-right-col" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="view-movie-container-sm">
          <div className="view-movie-left-col-sm">
            <a
              href={`https://imdb.com/title/${viewedMovie.imdb_id}`}
              target="blank"
            >
              <img
                src={`http://image.tmdb.org/t/p/w400/${viewedMovie.poster_path}`}
                alt={`${viewedMovie.title} poster`}
                style={{ width: '360px' }}
              />
            </a>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <CustomAnimatedButton
                type="add"
                icon="check circle outline"
                handleClick={handleClick}
                viewedMovie={viewedMovie}
              />
              <CustomAnimatedButton
                type="remove"
                icon="times circle outline"
                handleClick={handleClick}
                viewedMovie={viewedMovie}
              />
            </div>
          </div>
          <div className="view-movie-right-col-sm">
            <TwoColTable info={viewedMovie} />
          </div>
        </div>
      </>
    );
  }
};

export default ViewMovie;
