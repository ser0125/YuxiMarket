
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import LogoutButton from '../LogoutButton/LogoutButton';
import CustomizedShoppingCart from './CustomizedShoppingCart/CustomizedShoppingCart';
import yuxiLogo from '../../../assets/YUXI_LOGO_WHITE.svg';

const useStyles = makeStyles({
  AppNabvar: {
    background: "linear-gradient(60deg,#98288f,#4f7499)"
  },
  Indicator: {
    backgroundColor: '#00fff7',
  },
  FontTab: {
    fontFamily: "'ZCOOL KuaiLe', cursive !important"
  }
});



function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return <AppBar position="fixed" className={classes.AppNabvar} >
    <Tabs value={value}
      onChange={handleChange}
      indicatorColor="primary"
      classes={{ indicator: classes.Indicator }}>
      <img class='navbar-icon' src={yuxiLogo} alt='yuxi Logo'/>
      <Tab className={classes.FontTab} label="Inicio" component={Link} to="/home" />
      <Tab className={classes.FontTab} label="Nosotros" component={Link} to="/about" />
      <Tab className={classes.FontTab} label={ <CustomizedShoppingCart /> } aria-label="Shopping-cart" component={Link} to="/shopping" />
      <LogoutButton />
    </Tabs>
  </AppBar>
}

export default Navbar;