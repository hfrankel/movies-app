import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
  const ids = [583083, 547016, 587792];
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    for (let i = 0; i < ids.length; i++) {
      (async (i) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${ids[i]}`
        );
        // console.log(response.data);
        setMovies((movies) => [response.data, ...movies]);
      })();
    }
  }, []);

  console.log(movies);

  return (
    <div>
      <div>Hello World</div>
    </div>
  );
};

export default Test;
