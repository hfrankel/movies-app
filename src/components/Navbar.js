import React, { useState, useContext } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const history = useHistory();
  const {
    logoutUser,
    userStatus,
    setEmailWarning,
    setPasswordWarning,
  } = useContext(MovieContext);

  const checkUserStatus = () => {
    if (userStatus === 'Logout' || localStorage.getItem('token')) {
      return <Icon name="sign out" />;
    }

    return <Icon name="sign in" />;
  };

  const handleClick = (path) => {
    history.push(`${path}`);
    setEmailWarning('Must have valid email');
    setPasswordWarning('Must have valid password');
  };

  return (
    <>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          // onClick={() => history.push('/home')}
          onClick={() => handleClick('/home')}
          onChange={() => setActiveItem('home')}
          active={activeItem === 'home'}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="search"
          // onClick={() => history.push('/movie/search')}
          onClick={() => handleClick('/movie/search')}
          onChange={() => setActiveItem('search')}
          active={activeItem === 'search'}
        >
          TMDB
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={() => logoutUser()}
            onChange={() => setActiveItem('logout')}
            active={activeItem === 'logout'}
          >
            {checkUserStatus()}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;
