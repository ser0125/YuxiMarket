
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import LogoutButton from '../LogoutButton/LogoutButton';
import CustomizedShoppingCart from './CustomizedShoppingCart/CustomizedShoppingCart';
import yuxiLogo from '../../../assets/YUXI_LOGO_WHITE.svg';
import './Navbar.css';
const useStyles = makeStyles({
  AppNabvar: {
    background: "linear-gradient(60deg,#98288f,#4f7499)",
    display: "flex",
    flexDirection: "row"

  },
  Indicator: {
    backgroundColor: '#00fff7',
  },
  FontTab: {
    fontFamily: "'ZCOOL KuaiLe', cursive !important"
  },
  Tabs: {
    flexGrow: 1
  }
});



function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return <AppBar position="fixed" className={classes.AppNabvar} >
    <img className='navbar-icon' src={yuxiLogo} alt='yuxi Logo'/>
    <Tabs value={value}
      onChange={handleChange}
      indicatorColor="primary"
      className = {classes.Tabs}
      classes={{ indicator: classes.Indicator }}>
      <Tab className={classes.FontTab} label="Inicio" component={Link} to="/home" />
      <Tab className={classes.FontTab} label="Nosotros" component={Link} to="/about" />
      <Tab className={classes.FontTab} label={ <CustomizedShoppingCart /> } aria-label="Shopping-cart" component={Link} to="/shopping" />
      <LogoutButton />
    </Tabs>
  </AppBar>
}

export default Navbar;