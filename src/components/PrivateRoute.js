import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';

function PrivateRoute({ component: Component, ...rest }) {
  const { userToken } = useContext(MovieContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        userToken ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
