import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const CustomAnimatedButton = ({ type, icon, handleClick, viewedMovie }) => {
  return (
    <>
      <Button
        animated="fade"
        onClick={(event) => handleClick(event, viewedMovie)}
      >
        <Button.Content visible>
          <Icon name={`${icon}`} />
        </Button.Content>
        <Button.Content hidden>{type}</Button.Content>
      </Button>
    </>
  );
};

export default CustomAnimatedButton;
