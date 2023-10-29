import React from 'react';
import './Dashboard.css';
// import { Box, Container, Grid, Typography } from '@mui/material';
import BannerImage from '../../assets/vehicle.jpg';

function Dashboard({ inactive }) {
  return (
    <div className={`dashboard-body ${!inactive ? 'dashboard-inactive' : ''} `}>
      <div class="division0">
        <h2> Finding the Vehicle through camera recordings </h2>
        <i>
          {' '}
          The application that helps in monitoring millions of vehicle daily{' '}
        </i>

        <div class="division1">
          <img
            src={BannerImage}
            alt="vehicle tracking"
            className="dashboardImage"
          />
          <p style={{ padding: '0.9%' }}>
            Vehicle tracking systems with CCTV cameras utilize a network of
            strategically placed cameras to monitor and record vehicle
            movements.
          </p>
        </div>

        <div class="division2">
          <b style={{ fontSize: '164%' }}>
            Here's a some highlights of the application:
          </b>
          <ol>
            <li>
              {' '}
              These systems capture real-time video footage of vehicles in their
              operational environment, offering a visual record of traffic
              conditions and vehicle behavior.
            </li>
            <li>
              {' '}
              CCTV cameras can be integrated with license plate recognition
              technology to identify and track specific vehicles automatically.
            </li>
            <li>
              {' '}
              This technology is commonly used for security and law enforcement
              purposes, as it can assist in identifying and locating suspect
              vehicles.
            </li>
            <li>
              {' '}
              Vehicle tracking through CCTV can also enhance traffic management
              by providing valuable insights into congestion, road conditions,
              and accidents.
            </li>
          </ol>

          <ul>
            <p style={{ fontSize: '142%' }}>
              By providing the Registered mobile number the vehicle would be
              found.
            </p>
          </ul>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>
        Written and coded by
        <a href="">Tech Geeks Chennai.</a>
      </p>
    </div>
  );
}

export default Dashboard;
