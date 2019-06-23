import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const breadcrumbNameMap = {
  '/home': 'Inicio',
  '/about': 'Nosotros',
  '/shopping': 'Carrito'
};


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
    position: 'absolute',
    zIndex: '21',
    top:'70px'
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const LinkRouter = props => <Link {...props} component={RouterLink} />;

class RouterBreadcrumbs extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Route>
          {({ location, history }) => {
            const pathnames = location.pathname.split('/').filter(x => x);
            return pathnames.length === 2 ?
              pathnames[0] === 'home' ?
                <Breadcrumbs aria-label="Breadcrumb">
                  <LinkRouter color="inherit" to='/home'>
                    Inicio
                </LinkRouter>
                  <Typography color="textPrimary">
                    Productos
                </Typography>
                </Breadcrumbs>
                : <Breadcrumbs aria-label="Breadcrumb">
                  <LinkRouter color="inherit" to='/home'>
                    Inicio
              </LinkRouter>
                  <Typography className={classes.link} color="inherit" onClick={history.goBack}>
                    Productos
              </Typography>
                  <Typography color="textPrimary">
                    Detalle
              </Typography>
                </Breadcrumbs>
              :
              (
                <Breadcrumbs aria-label="Breadcrumb">
                  {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return last ? (
                      <Typography color="textPrimary" key={to}>
                        {breadcrumbNameMap[to]}
                      </Typography>
                    ) : (
                        <LinkRouter color="inherit" to={to} key={to}>
                          {breadcrumbNameMap[to]}
                        </LinkRouter>
                      );
                  })}
                </Breadcrumbs>
              );
          }}
        </Route>
      </div>
    );
  }
}

RouterBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RouterBreadcrumbs)