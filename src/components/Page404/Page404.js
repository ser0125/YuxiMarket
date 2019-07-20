import  React  from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';
import Button from '@material-ui/core/Button';

const Page404 = () => {
  return <React.Fragment>
    <div className='container-404'>
      <div>
        <h1>404</h1>
      </div>
      <div>
        <h2>Lo sentimos</h2>
        <h4>La página que estas intentando buscar no existe</h4>
      </div>
    </div>
    <div>
      <Button
        className="form-button button-label"
        variant="contained"
        color="primary"
        type="button"
        component={Link}
        to='/'>
        Ir al Yuxi Market
    </Button>
    </div>
  </React.Fragment>
}

export default Page404;