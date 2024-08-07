import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Modal, Backdrop, Fade, TextField, Button, Container } from '@material-ui/core';
import { TextField, Button, Container, Typography, Alert, Modal, Backdrop, Fade, } from '@mui/material';
import { SomeIcon } from '@mui/icons-material';
import { addStudent } from '../../redux/students/studentActions';

const AddStudentModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({ name: '', subject: '', marks: 0 });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(student)).then(() => {
      onClose();
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Container maxWidth="sm">
          <h2>Add New Student</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="subject"
              label="Subject"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <TextField
              name="marks"
              type="number"
              label="Marks"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
          </form>
        </Container>
      </Fade>
    </Modal>
  );
};

export default AddStudentModal;
