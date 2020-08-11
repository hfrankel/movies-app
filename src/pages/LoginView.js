import React, { useState, useContext } from 'react';
import { Form, Button } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import './../assets/styles/pageStyles/LoginView.css';

const LoginView = () => {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { loginUser, credentialsWarning, setCredentialsWarning } = useContext(
    MovieContext
  );
  const { width } = useContext(ViewportContext);

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

    setCredentialsWarning('Must have valid credentials');
  };

  if (width > 1200) {
    return (
      <>
        <div className="login-view-container-lg">
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
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p className="login-view-credentials-warning">{credentialsWarning}</p>
        </div>
      </>
    );
  }

  if (width > 800 && width <= 1200) {
    return (
      <>
        <div className="login-view-container-md">
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
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p className="login-view-credentials-warning">{credentialsWarning}</p>
        </div>
      </>
    );
  }

  if (width <= 800) {
    return (
      <>
        <div className="login-view-container-sm">
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
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p className="login-view-credentials-warning">{credentialsWarning}</p>
        </div>
      </>
    );
  }
};

export default LoginView;
