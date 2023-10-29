import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import './Login.css';
import LandingPage from '../Dashboard/LandingPage';
import BannerImage from '../../assets/banner.jpeg';

export default function Login() {
  const [loginState, setLoginState] = useState('');

  return (
    <Router>
      <div className="App">
        <Route exact path={'/dashboard'}>
          {' '}
          <LandingPage />
        </Route>
        {loginState !== 'loggedIn' ? (
          <>
            <div className="row homeRowset">
              <div class="column homeRowset">
                <div className="appAside">
                  <h1 className="navbar-heading homeRowset">Eye Watch</h1>
                  <img
                    src={BannerImage}
                    alt="vehicle tracking"
                    className="dashboardImage"
                  />{' '}
                </div>
              </div>
              <div class="column homeRowset">
                <div className="appForm">
                  <div className="pageSwitcher">
                    <NavLink
                      to="/"
                      exact
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      to="/sign-up"
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                  <Route exact path={'/sign-up'}>
                    {' '}
                    <SignUpForm loginState={setLoginState} />
                  </Route>
                  <Route exact path={'/'}>
                    {' '}
                    <SignInForm loginState={setLoginState} />
                  </Route>
                </div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </Router>
  );
}
