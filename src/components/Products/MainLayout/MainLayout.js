import React from 'react';
import NavBar from '../Home/Navbar';
import './MainLayout.css';

const MainLayout = (props) => {
  return <div className="home-container">
    <NavBar />
    <div className="container">
      {props.children}
    </div>
  </div>
}

export default MainLayout;