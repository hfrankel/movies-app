import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/movie/search">
        <button>Search</button>
      </Link>
    </>
  );
};

export default Navbar;
