import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieStore } from './contexts/MovieContext';
import HomeView from './pages/HomeView';
import ViewMovie from './pages/ViewMovie';
import SearchView from './pages/SearchView';
import Navbar from './components/Navbar';

const Router = () => {
  return (
    <MovieStore>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/search" component={SearchView} />
          <Route
            exact
            path="/movie/:id/:tmdbid"
            component={ViewMovie}
            children={<ViewMovie />}
          />
        </Switch>
      </BrowserRouter>
    </MovieStore>
  );
};

export default Router;
