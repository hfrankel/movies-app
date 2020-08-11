import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const CustomAnimatedButton = ({ type, icon, handleClick, viewedMovie }) => {
  return (
    <>
      <Button
        animated="fade"
        onClick={(event) => handleClick(event, viewedMovie)}
        style={{ cursor: 'pointer' }}
      >
        <Button.Content visible style={{ cursor: 'pointer' }}>
          <Icon name={`${icon}`} style={{ cursor: 'pointer' }} />
        </Button.Content>
        <Button.Content hidden>{type}</Button.Content>
      </Button>
    </>
  );
};

export default CustomAnimatedButton;
