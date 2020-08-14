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
            />
            {/* <Form.Field inline>
              <Input
                placeholder="Email"
                onKeyUp={handleFormInputs}
                id="form-input-email"
                autoFocus
              />
              {emailWarning && (
                <Label pointing="left" color="red" basic>
                  {emailWarning}
                </Label>
              )}
            </Form.Field> */}
            <Form.Input
              error={passwordWarning}
              fluid
              placeholder="Password"
              id="form-input-password"
              onKeyUp={handleFormInputs}
              type="password"
            />
            {/* <Form.Field inline>
              <Input
                placeholder="Password"
                onKeyUp={handleFormInputs}
                id="form-input-password"
                type="password"
              />
              {passwordWarning && (
                <Label pointing="left" color="red" basic>
                  {passwordWarning}
                </Label>
              )}
            </Form.Field> */}
            <Button
              onClick={() => handleLogin(emailInput, passwordInput)}
              type="submit"
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
            />
            <Form.Input
              error={passwordWarning}
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
            />
            <Form.Input
              error={passwordWarning}
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
        </div>
      </>
    );
  }
};

export default LoginView;
