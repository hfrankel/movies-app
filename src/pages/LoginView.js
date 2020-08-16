import React, { useState, useContext } from 'react';
import { Form, Button, Input, Label } from 'semantic-ui-react';
import MovieContext from './../contexts/MovieContext';
import ViewportContext from './../contexts/ViewportContext';
import './../assets/styles/pageStyles/LoginView.css';

const LoginView = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const {
    loginUser,
    emailWarning,
    passwordWarning,
    setEmailWarning,
    setPasswordWarning,
  } = useContext(MovieContext);
  const { width } = useContext(ViewportContext);

  const handleFormInputs = (event) => {
    if (event.target.id === 'form-input-email') {
      setEmailWarning(null);
      setEmailInput(event.target.value);
    }

    if (event.target.id === 'form-input-password') {
      setPasswordWarning(null);
      setPasswordInput(event.target.value);
    }
  };

  const handleLogin = (emailInput, passwordInput) => {
    loginUser(emailInput, passwordInput);
  };

  if (width > 1200) {
    return (
      <>
        <div className="login-view-container-lg">
          <h3 className="login-view-title">Login</h3>

          <Form className="login-view-form">
            <Form.Input
              error={
                emailWarning && { content: emailWarning, pointing: 'below' }
              }
              fluid
              placeholder="Email"
              id="form-input-email"
              autoFocus
              onKeyUp={handleFormInputs}
              style={{ fontSize: '16px' }}
            />
            <Form.Input
              error={passwordWarning}
              fluid
              placeholder="Password"
              id="form-input-password"
              onKeyUp={handleFormInputs}
              type="password"
              style={{ fontSize: '16px' }}
            />
            <Button
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
              style={{ fontSize: '16px' }}
            >
              Submit
            </Button>
          </Form>
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
              error={emailWarning}
              fluid
              placeholder="Email"
              id="form-input-email"
              autoFocus
              onKeyUp={handleFormInputs}
              style={{ fontSize: '16px' }}
            />
            <Form.Input
              error={passwordWarning}
              fluid
              placeholder="Password"
              id="form-input-password"
              onKeyUp={handleFormInputs}
              type="password"
              style={{ fontSize: '16px' }}
            />
            <Button
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
              style={{ fontSize: '16px' }}
            >
              Submit
            </Button>
          </Form>
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
              error={emailWarning}
              fluid
              placeholder="Email"
              id="form-input-email"
              autoFocus
              onKeyUp={handleFormInputs}
              style={{ fontSize: '16px' }}
            />
            <Form.Input
              error={passwordWarning}
              fluid
              placeholder="Password"
              id="form-input-password"
              onKeyUp={handleFormInputs}
              type="password"
              style={{ fontSize: '16px' }}
            />
            <Button
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
              style={{ fontSize: '16px' }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </>
    );
  }
};

export default LoginView;
