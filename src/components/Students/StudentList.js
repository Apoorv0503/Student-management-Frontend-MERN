import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../redux/students/studentActions';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { TextField, Button, Container, Typography, Alert, Modal, Backdrop, Fade,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { SomeIcon } from '@mui/icons-material';
import EditStudentModal from './EditStudentModal';
import AddStudentModal from './AddStudentModal';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setShowAddModal(true)}>Add Student</Button>
      <AddStudentModal open={showAddModal} onClose={() => setShowAddModal(false)} />
      <EditStudentModal open={showEditModal} onClose={() => setShowEditModal(false)} student={selectedStudent} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.list.map(student => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.subject}</TableCell>
                <TableCell>{student.marks}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(student)}>Edit</Button>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentList;
