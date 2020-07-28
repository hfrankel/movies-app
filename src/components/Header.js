import React from 'react';
import { Header as MyHeader } from 'semantic-ui-react';
import './../assets/styles/componentStyles/Header.css';

const Header = ({ title }) => {
  return (
    <MyHeader as="h1" className="header-title">
      {title}
    </MyHeader>
  );
};

export default Header;
