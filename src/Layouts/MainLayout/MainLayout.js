import React from 'react';
import NavBar from './Navbar/Navbar';
import './MainLayout.css';
import Routes from '../../routes/Routes';
import SimpleBreadcrumbs from './Breadcrumb/Breadcrumb';

const MainLayout = (props) => {
  return <div className="home-container">
    <NavBar />
    <div className="container">
      <SimpleBreadcrumbs/>
      <Routes />
    </div>
  </div>
}

export default MainLayout;