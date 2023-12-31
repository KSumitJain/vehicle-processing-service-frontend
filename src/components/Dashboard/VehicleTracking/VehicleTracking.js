import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './VehicleTracking.css';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function VehicleTracking({ inactive }) {
  const [vehicle, setVehicle] = useState('');
  const [vehicleData, setVehicleData] = useState([]);
  const [trackingDate, setTrackingDate] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (vehicle !== '') {
      axios
        .get(
          'http://localhost:8080/vehicle/' +
            vehicle + '?timestamp=' +
		new Date(trackingDate).toISOString().replace('T', ' ').replace('Z', ' ')
        )
        .then((response) => {
          
          setVehicleData(response.data);
console.log(response.data+'hello')
          handleClickOpen();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={`contact-body ${!inactive ? 'contact-inactive' : ''} `}>
      <div class="section-header">
        <div class="contact-container">
          <h2>Track the Vehicle</h2>
          <p>Track your Vehicle by providing the vehicle number.</p>
        </div>
      </div>
      <div class="row">
        <div class="contact-info">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
              <div className="row">
                <div className="column">
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      className="formFieldInput"
                      placeholder="Enter Vehicle Number"
                      name="vehicle"
                      value={vehicle}
                      onChange={(e) => {
                        e.preventDefault();
                        setVehicle(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                      Tracking Date
                    </label>
                    <input
                      type="datetime-local"
                      id="start"
                      className="formFieldInput"
                      name="trip-start"
                      min="2016-01-01"
                      max={new Date()}
                      onChange={(e) => {
                        e.preventDefault();
                        console.log(e.target.value);
                        setTrackingDate(e.target.value);
                      }}
                      placeholder="Enter Tracking Date"
                    />
                  </div>
                </div>
              </div>

              <div className="formField">
                <button className="formFieldButton" onClick={handleSubmit}>
                  GetDetails
                </button>{' '}
              </div>
            </form>
          </div>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Vehicle Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          
          <div className='row'>
                 <Typography gutterBottom><strong> Vehicle Number :</strong></Typography>
                
                  <Typography gutterBottom>
                    {vehicleData[0]?.registrationNumber || ' '}
                  </Typography>
                </div>
<div className='row'>
                  <strong><Typography gutterBottom><strong> Registered Address :</strong></Typography></strong>
                
                  <Typography gutterBottom>
                    {vehicleData[0]?.line +
                      ', ' +
                      vehicleData[0]?.area +
                      ', ' +
                      vehicleData[0]?.city +
                      ', ' +
                      vehicleData[0]?.state +
                      ', ' +
                      vehicleData[0]?.country +
                      ', ' +
                      vehicleData[0]?.pinCode}
                  </Typography>
                </div>
<div className='row'>
                 <Typography gutterBottom><strong> Registered Address :</strong></Typography>
                
                  <Typography gutterBottom>
			{vehicleData[0]?.foundAt}
                    
                  </Typography>
                </div>
     <img src={vehicleData[0]?.imagePath}/>
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Show Map Navigation
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default VehicleTracking;