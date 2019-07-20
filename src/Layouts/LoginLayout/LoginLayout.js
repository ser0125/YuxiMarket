import React from 'react';
import './LoginLayout.css';
import yuxiLogo from '../../assets/YUXI_LOGO_WHITE.svg';
import Routes from '../../routes/Routes';

const LoginLayout = () => {
  return <div className="wrapper">
    <img src={yuxiLogo} alt='yuxi Logo'/>
    <Routes />
  </div>
    }
  
  export default LoginLayout;