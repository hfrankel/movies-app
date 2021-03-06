import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = React.createContext();

export const MovieStore = (props) => {
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [externalApiMovies, setExternalApiMovies] = useState([]);
  const [storedMovies, setStoredMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));
  const [userStatus, setUserStatus] = useState('Login');
  const [adminToken, setAdminToken] = useState({});
  const [credentialsWarning, setCredentialsWarning] = useState('');
  const [emailWarning, setEmailWarning] = useState(null);
  const [passwordWarning, setPasswordWarning] = useState(null);

  // Login
  const loginUser = async (userEmail, userPassword) => {
    const config = {
      auth: {
        email: userEmail,
        password: userPassword,
      },
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_AUTH}`,
        config
      );

      if (response !== null) {
        localStorage.setItem('token', response.data);
        setUserToken(response.data);
        setUserStatus('Logout');

        //TEST
        setAdminToken(response.data.jwt);
      }
    } catch (e) {
      if (e.message.includes('404')) {
        setEmailWarning('Must have valid email');
        setPasswordWarning('Must have valid password');
      }
    }
  };

  // Logout
  const logoutUser = () => {
    setUserStatus('Login');
    localStorage.removeItem('token');
    setUserToken(null);
    setEmailWarning(null);
    setPasswordWarning(null);
  };

  // Get movies from TDMB API
  const onSubmit = async (input) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${input}`
      );
      setExternalApiMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  // Get stored movies from fav movies api
  const getStoredMovies = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_FAVOURITE_MOVIES_API}`
    );
    setStoredMovies(response.data);
  };

  useEffect(() => {
    getStoredMovies();
  }, [rerender, userToken]);

  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_FAVOURITE_MOVIES_API}`,
    headers: { Authorization: `Bearer ${adminToken}` },
  });

  const addFavourite = async (movie, movieTitle, tmdbId, posterPath) => {
    if (
      storedMovies.some(
        (favouriteMovie) => favouriteMovie.title === movie.title
      )
    ) {
      // do nothing
    } else {
      try {
        await instance.post('', {
          title: movieTitle,
          tmdbid: tmdbId,
          poster_path: posterPath,
        });
        setRerender(!rerender);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Remove a movie from favourites
  const deleteFavourite = async (id, movie) => {
    if (
      storedMovies.some(
        (favouriteMovie) => favouriteMovie.title === movie.title
      )
    ) {
      try {
        await instance.delete(`/${id}`);
        setRerender(!rerender);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Handle search results tabs
  const [active, setActive] = useState(true);

  const handleCrumbLink = (event) => {
    if (event.target.innerText === 'Results' && active === true) {
      setActive(false);
    }

    if (event.target.innerText === 'Trending' && active === false) {
      setActive(true);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        externalApiMovies,
        storedMovies,
        displayedMovies,
        onSubmit,
        addFavourite,
        deleteFavourite,
        setDisplayedMovies,
        loginUser,
        logoutUser,
        userToken,
        userStatus,
        emailWarning,
        setEmailWarning,
        passwordWarning,
        setPasswordWarning,
        handleCrumbLink,
        active,
        setActive,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
