import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
  AppNabvar: {
    background: "linear-gradient(60deg,#98288f,#4f7499)"
  },
  TabSignOut: {
    marginLeft: "auto",
    borderBottomColor: "blue"
  },
  Indicator: {
    backgroundColor: '#00fff7'
  }
});

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <AppBar position="fixed" className={classes.AppNabvar} >
        <Tabs value={value}
          onChange={handleChange}
          indicatorColor="primary"
          classes={{ indicator: classes.Indicator }}>
          <Tab label="Home" component={Link} to="/home" />
          <Tab label="About" component={Link} to="/about" />
          <Tab icon={<ShoppingCart />} aria-label="Shopping-cart" />
          <Tab label="Sign Out"
            className={classes.TabSignOut}
            component={Link} to="/" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Navbar;