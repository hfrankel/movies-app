import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { MovieStore } from './contexts/MovieContext';

ReactDOM.render(
  <MovieStore>
    <Router />,
  </MovieStore>,
  document.getElementById('root')
);
