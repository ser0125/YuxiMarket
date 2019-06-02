import React from 'react';
import './LoginLayout.css';
import yuxiLogo from '../../assets/YUXI_LOGO_WHITE.svg';

const loginLayout = (props) => {
  return <div className="wrapper">
    <img src={yuxiLogo} alt='yuxi Logo'/>
    {props.children}
  </div>
    }
  
  export default loginLayout;