import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieStore } from './contexts/MovieContext';
import { ViewportProvider } from './../src/contexts/ViewportContext';
import HomeView from './pages/HomeView';
import ViewMovie from './pages/ViewMovie';
import SearchView from './pages/SearchView';
import Navbar from './components/Navbar';
import './assets/styles/Reset.css';

const Router = () => {
  return (
    <ViewportProvider>
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
    </ViewportProvider>
  );
};

export default Router;
