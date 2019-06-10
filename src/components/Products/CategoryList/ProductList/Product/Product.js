import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Product.css';
import { formatNumber } from '../../../../../utils/decimalSeparation';
import { Button, CardActions } from '@material-ui/core';
const useStyles = makeStyles({
  productCard: {
    flex: '0 0 15%',
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

const Product = (props) => {
  const classes = useStyles();
  return <Card className={classes.productCard}>
    <CardActionArea className={classes.cardArea} onClick={props.selectProduct}>
      <CardContent className={classes.cardContent}>
        <div className='image-container'>
          <img className="product-thumbnail" src={props.product.thumbnail} alt="product" />
        </div>
        <p>${formatNumber(props.product.price)}</p>
        <p>{props.product.title}</p>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button className="product-button"
        variant="contained"
        fullWidth={true}
        color="primary"
        type="submit"
        size="small" >
        Agregar al carrito
        </Button>
    </CardActions>
  </Card>
}

export default Product;
