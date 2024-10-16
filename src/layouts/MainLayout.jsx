import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div style={{marginLeft: '85px'}}>
      <Header />
      <Sidenav />
      <ToastContainer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
