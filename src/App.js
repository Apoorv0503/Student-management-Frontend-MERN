import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import StudentList from './components/Students/StudentList';
import Navbar from './components/Layout/Navbar';
import {Container } from '@mui/material';
// import { SomeIcon } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
