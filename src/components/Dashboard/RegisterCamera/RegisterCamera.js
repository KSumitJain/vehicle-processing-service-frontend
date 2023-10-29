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
import './RegisterCamera.css';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function RegisterCamera({ inactive }) {
  const [vehicle, setVehicle] = useState('');
  const [otype, setOtype] = useState('');
  const [vehicleData, setVehicleData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setOtype(e.target.value);
  };

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
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          setVehicleData(response.data);
          handleClickOpen();
        })
        .catch((error) => {
          console.error(error);
        });

      console.log('hello');
    }
  };

  return (
    <div className={`contact-body ${!inactive ? 'contact-inactive' : ''} `}>
      <div class="section-header">
        <div class="contact-container">
          <h1 className="navbar-heading">Register Camera</h1>
          <p>Register your camera with exact location.</p>
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
                      Sector Type
                    </label>
                    <select
                      id="camera"
                      className="formFieldInput"
                      placeholder="Enter Pincode"
                      onChange={(e) => {
                        e.preventDefault();
                        var e = document.getElementById('camera');
                        console.log(e);
                        setVehicle(e.value);
                      }}
                    >
                      <option style={{color:"black"}} value="public" selected>
                        Public
                      </option>
                      <option style={{color:"black"}} value="private">Private</option>
                      <option style={{color:"black"}} value="goverment">Goverment</option>
                      <option style={{color:"black"}} value="individual">Individual</option>
                    </select>
                  </div>
                  <div className="column">
                    <label className="formFieldLabel" htmlFor="email">
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      className="formFieldInput"
                      placeholder="Enter the pincode"
                      name="vehicle"
                      value={vehicle}
                      onChange={(e) => {
                        e.preventDefault();
                        setVehicle(e.target.value);
                      }}
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
          {vehicleData?.map((element) => {
            <table>
              <tr>
                <th>
                  <Typography gutterBottom>Vehicle Number</Typography>
                </th>
                <td>
                  <Typography gutterBottom>
                    {element?.vehicleNumber || ' '}
                  </Typography>
                </td>
              </tr>
              <tr>
                <th>
                  <Typography gutterBottom>Registered Address</Typography>
                </th>
                <td>
                  <Typography gutterBottom>
                    {element?.addressLine1 || ' '}
                  </Typography>
                </td>
              </tr>
              <tr>
                <th>
                  <Typography gutterBottom>Found At</Typography>
                </th>
                <td>
                  <Typography gutterBottom>
                    {element?.line +
                      ', ' +
                      element?.area +
                      ', ' +
                      element?.city +
                      ', ' +
                      element?.state +
                      ', ' +
                      element?.country +
                      ', ' +
                      element?.pinCode}
                  </Typography>
                </td>
              </tr>
            </table>;
          })}
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

export default RegisterCamera;
