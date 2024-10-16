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
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
    <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
      <div className="flex-1 bg-blue-900 text-center hidden md:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
          }}
        ></div>
      </div>
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
              Login
            </h1>
          </div>
          <div className="w-full flex-1 mt-8">
            <form className="mx-auto max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type="submit"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Login</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Don't have an account?{' '}
                <Link to="/register">
                  <span className="text-blue-900 font-semibold">Register here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
  );
};

export default Login;
