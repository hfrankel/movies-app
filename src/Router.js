import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ViewportProvider } from './../src/contexts/ViewportContext';
import HomeView from './pages/HomeView';
import ViewMovie from './pages/ViewMovie';
import SearchView from './pages/SearchView';
import LoginView from './pages/LoginView';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './assets/styles/Reset.css';
import 'semantic-ui-css/semantic.min.css';

const Router = () => {
  return (
    <ViewportProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <PublicRoute exact path="/login" component={LoginView} />
          <PrivateRoute exact path="/home" component={HomeView} />
          <PrivateRoute exact path="/movie/search" component={SearchView} />
          <PrivateRoute exact path="/movie/:id/:tmdbid" component={ViewMovie} />
          <PrivateRoute exact path="/movie/:tmdbid" component={ViewMovie} />
        </Switch>
      </BrowserRouter>
    </ViewportProvider>
  );
};

export default Router;
