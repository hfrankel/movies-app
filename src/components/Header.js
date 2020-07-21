import React from 'react';
import './../assets/styles/componentStyles/Header.css';

const Header = ({ title }) => {
  return <h1 className="header-h1">{title}</h1>;
};

export default Header;
