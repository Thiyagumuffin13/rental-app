import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      await api.post('/auth/register', formData);
      toast.success('Registration successful');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      console.error(error);
      toast.error('Registration failed');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}  sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        gap: 2
      }}>
      <Typography variant="h4">Register</Typography>
      <TextField name="name" label="Name" value={formData.name} onChange={handleChange} required />
      <TextField name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
      <TextField name="mobile" label="Mobile" value={formData.mobile} onChange={handleChange} required />
      <TextField name="password" label="Password" type="password" value={formData.password} onChange={handleChange} required />
      <TextField name="confirmPassword" label="Confirm Password" type="password" value={formData.confirmPassword} onChange={handleChange} required />
      <Button type="submit">Register</Button>
      <Typography variant="body2">
        Already have an account? <Link to="/login">Login here</Link>
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default Register;
