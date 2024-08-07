import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authActions';
// import { TextField, Button, Container, Typography, Alert } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { SomeIcon } from '@mui/icons-material';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  if (auth.token) {
    history.push('/students');
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {auth.error && <Alert severity="error">{auth.error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
