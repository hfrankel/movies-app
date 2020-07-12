import React from 'react';

const MovieList = ({ favouriteMovies, removeMovie }) => {
  const renderedFavouriteMovies = favouriteMovies.map((favouriteMovie) => {
    return (
      <li key={favouriteMovie.imdbID} style={{ listStyle: 'none' }}>
        <a
          href={`https://www.imdb.com/title/${favouriteMovie.imdbID}/`}
          target="blank"
        >
          {favouriteMovie.Title}
        </a>
        <button onClick={() => removeMovie(favouriteMovie)}>Remove</button>
      </li>
    );
  });

  return (
    <>
      <h3>Favourite Movies</h3>
      <ul>{renderedFavouriteMovies}</ul>
    </>
  );
};

export default MovieList;
