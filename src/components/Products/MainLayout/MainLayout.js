import React from 'react';
import NavBar from '../Home/Navbar';
import './MainLayout.css';
import Routes from '../../../routes/Routes';

const MainLayout = (props) => {
  return <div className="home-container">
    <NavBar />
    <div className="container">
      <Routes />
    </div>
  </div>
}

export default MainLayout;