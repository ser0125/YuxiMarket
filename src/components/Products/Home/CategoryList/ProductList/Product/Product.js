import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Product.css';
import { formatNumber } from '../../../../../../utils/decimalSeparation';
import { Button, CardActions } from '@material-ui/core';
import { showSuccessProduct, showErrorAlert } from '../../../../../../utils/showAlerts';

const useStyles = makeStyles({
  productCard: {
    flex: '0 0 18%',
    margin: '10px'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  cardArea: {
    height: '85%'
  }
});
const sendToShoppingCart = (props) => {
  const existProduct = props.items.find(item => item.id === props.product.id);
  if (existProduct) {
    if (existProduct.countItems > 18) {
      showErrorAlert('Son 19 productos maximo');
      return; 
    }
  }
  showSuccessProduct('El producto se ha agregado con exito');
  props.addItemCart(props.product);
}

const Product = (props) => {
  const classes = useStyles();
  return <Card className={classes.productCard}>
    <CardActionArea className={classes.cardArea} onClick={props.selectProduct}>
      <CardContent className={classes.cardContent}>
        <div className='image-container'>
          <img className="product-thumbnail" src={props.product.thumbnail} alt="product" />
        </div>
        <p>${formatNumber(props.product.price)}</p>
        <p className='label-title'>{props.product.title}</p>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button className="product-button button-label"
        variant="contained"
        fullWidth={true}
        color="primary"
        type="submit"
        size="small"
        onClick={() => sendToShoppingCart(props)}
      >
        Agregar al carrito
        </Button>
    </CardActions>
  </Card>
}


export default Product;
