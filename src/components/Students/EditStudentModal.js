import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography, Alert, Modal, Backdrop, Fade, } from '@mui/material';
import { SomeIcon } from '@mui/icons-material';
import { updateStudent } from '../../redux/students/studentActions';

const EditStudentModal = ({ open, onClose, student }) => {
  const dispatch = useDispatch();
  const [updatedStudent, setUpdatedStudent] = useState({ ...student });

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(updatedStudent)).then(() => {
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
          <h2>Edit Student</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="normal"
              value={updatedStudent.name}
              onChange={handleChange}
            />
            <TextField
              name="subject"
              label="Subject"
              fullWidth
              margin="normal"
              value={updatedStudent.subject}
              onChange={handleChange}
            />
            <TextField
              name="marks"
              type="number"
              label="Marks"
              fullWidth
              margin="normal"
              value={updatedStudent.marks}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Update</Button>
          </form>
        </Container>
      </Fade>
    </Modal>
  );
};

export default EditStudentModal;
