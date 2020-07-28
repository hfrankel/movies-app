import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const history = useHistory();

  return (
    <>
      <Menu>
        <Menu.Item
          name="home"
          onClick={() => history.push('/')}
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
          Search
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
