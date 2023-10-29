import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
  GoogleLoginButton,
  FacebookLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
} from 'react-social-login-buttons';

export default function SignInForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      'The form was submitted with the following data:',
      email,
      password
    );
    if (email === 'admin@gmail.com' && password === 'admin') {
      history.replace('/dashboard');
      history.push({
        pathname: '/dashboard',
      });
      props?.loginState('loggedIn');
    }
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="formField">
          <button className="formFieldButton" onClick={handleSubmit}>
            Sign In
          </button>{' '}
          <NavLink to="/" className="formFieldLink">
            Create an account
          </NavLink>
        </div>

        <div>
          <div className="row homeRowset">
            <div class="column homeRowset">
              {' '}
              <div className="instagramButton">
                <GoogleLoginButton
                  onClick={() => alert('Google Login is currently blocked')}
                />
              </div>
            </div>
            <div class="column homeRowset">
              {' '}
              <div className="facebookButton">
                <LinkedInLoginButton
                  onClick={() => alert('LinkedIn Login is currently blocked')}
                />
              </div>
            </div>
          </div>
          <div className="row homeRowset">
            <div class="column homeRowset">
              {' '}
              <div className="facebookButton">
                <FacebookLoginButton
                  onClick={() => alert('Facebook Login is currently blocked')}
                />
              </div>
            </div>
            <div class="column homeRowset">
              {' '}
              <div className="facebookButton">
                <div className="instagramButton">
                  <InstagramLoginButton
                    onClick={() =>
                      alert('Instagram Login is currently blocked')
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
