import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { userToken } = useContext(MovieContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        userToken ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
