import React, { useState } from 'react';
import SideMenu from '../SideMenu';
import Navbar from '../Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import VehicleTracking from './VehicleTracking/VehicleTracking';
import Dashboard from './Dashboard';
import RegisterCamera from './RegisterCamera/RegisterCamera';


function LandingPage() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <div className="main-app">
        <Router>
          <SideMenu
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          />
          <Navbar inactive={inactive} />
          <div className={`container ${inactive ? 'inactive' : ''} `}>
            <Switch>
              <Route path={'/contact'}>
                {' '}
                <Contact inactive={inactive} />
              </Route>
              <Route path={'/services/vehicle'}>
                {' '}
                <VehicleTracking inactive={inactive} />
              </Route>
              <Route path={'/register'}>
                {' '}
                <RegisterCamera inactive={inactive} />
              </Route>
                            
                            <Route path={'/dashboard'}> <Dashboard inactive={inactive} /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default LandingPage;
