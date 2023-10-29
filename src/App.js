import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/Dashboard/LandingPage';
import Login from './components/login/Login';
import Contact from './components/Dashboard/Contact/Contact';
import VehicleTracking from './components/Dashboard/VehicleTracking/VehicleTracking';

function App() {
  const [inactive] = useState(false);
  return (
    <div className="App">
      <div className="main-app">
        <Router>
          <div
            className={`container ${inactive ? 'inactive' : ''} `}
            style={{ marginBottom: 'inherit' }}
          >
            <Switch>
              <Route path={'/dashboard'}>
                {' '}
                <LandingPage />
              </Route>
              <Route exact path={'/'}>
                {' '}
                <Login />
              </Route>
              <Route exact path={'/contact'}>
                {' '}
                <Contact />
              </Route>
              <Route path={'/services/vehicle'}>
                {' '}
                <VehicleTracking inactive={inactive} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
