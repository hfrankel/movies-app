import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';
import './../assets/styles/pageStyles/LoginView.css';

const LoginView = ({ handleToken }) => {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { loginUser } = useContext(MovieContext);
  const [redirectPath, setRedirectPath] = useState('');

  const handleFormInputs = (event) => {
    if (event.target.id === 'form-input-email') {
      setEmailInput(event.target.value);
    }

    if (event.target.id === 'form-input-password') {
      setPasswordInput(event.target.value);
    }
  };

  const handleLogin = (emailInput, passwordInput) => {
    loginUser(emailInput, passwordInput);
  };

  return (
    <>
      <div className="login-view-container">
        <h3 className="login-view-title">Login</h3>
        <Form className="login-view-form">
          <Form.Input
            // error={emailVal}
            fluid
            placeholder="Email"
            id="form-input-email"
            autoFocus
            onKeyUp={handleFormInputs}
          />
          <Form.Input
            // error={passwordVal}
            fluid
            placeholder="Password"
            id="form-input-password"
            onKeyUp={handleFormInputs}
            type="password"
          />
          <Button
            //  type="submit"
            onClick={() => handleLogin(emailInput, passwordInput)}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginView;