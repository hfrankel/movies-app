import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import TwoColTable from './../components/TwoColTable';
import './../assets/styles/pageStyles/ViewMovie.css';

const ViewMovie = () => {
  const [viewedMovie, setViewedMovie] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  let { tmdbid, id } = useParams();
  const { deleteFavourite } = useContext(MovieContext);
  const { width } = useContext(ViewportContext);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${tmdbid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setViewedMovie(response.data);
        console.log(response.data);
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
            <button onClick={handleClick}>Remove</button>
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
              />
            </a>
            <button onClick={handleClick}>Remove</button>
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
