import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    try {
      const response = await api.post('/auth/login', formData);
      toast.success('Login successful');
      sessionStorage.setItem('token', response.data.accessToken);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
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
      <Typography variant="h4">Login</Typography>
      <TextField name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
      <TextField name="password" label="Password" type="password" value={formData.password} onChange={handleChange} required />
      <Button type="submit">Login</Button>
      <Typography variant="body2">
        Don't have an account? <Link to="/register" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>Register here</Link>
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default Login;
