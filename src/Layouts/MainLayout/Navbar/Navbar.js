import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import LogoutButton from '../LogoutButton/LogoutButton';

const useStyles = makeStyles({
  AppNabvar: {
    background: "linear-gradient(60deg,#98288f,#4f7499)",
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
      <Tab className={classes.FontTabo} label="Home" component={Link} to="/home" />
      <Tab className={classes.FontTab} label="About" component={Link} to="/about" />
      <Tab className={classes.FontTab} icon={<ShoppingCart />} aria-label="Shopping-cart" />
      <LogoutButton />
    </Tabs>
  </AppBar>
}

export default Navbar;