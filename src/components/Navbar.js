import React, { useState, useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import MovieContext from './../contexts/MovieContext';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const history = useHistory();
  const { logoutUser, userStatus } = useContext(MovieContext);

  return (
    <>
      <Menu>
        <Menu.Item
          name="home"
          onClick={() => history.push('/home')}
          onChange={() => setActiveItem('home')}
          active={activeItem === 'home'}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="search"
          onClick={() => history.push('/movie/search')}
          onChange={() => setActiveItem('search')}
          active={activeItem === 'search'}
        >
          TMDB
        </Menu.Item>
        <Menu.Item
          name="logout"
          onClick={() => logoutUser()}
          onChange={() => setActiveItem('logout')}
          active={activeItem === 'logout'}
        >
          {userStatus}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
