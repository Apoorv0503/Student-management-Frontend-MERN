import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { logoutUser } from '../../redux/auth/authActions';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Teacher Portal
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
