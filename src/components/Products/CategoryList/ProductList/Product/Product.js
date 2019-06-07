import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import './Product.css';
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
    height: '100%'
  }
});

const Product = (props) => {
  const classes = useStyles();
  return <Card className={classes.productCard}>
    <CardActionArea className={classes.cardArea} onClick={props.selectProduct}>
      <CardContent className={classes.cardContent}>
        <div class='image-container'>
          <img class="product-thumbnail" src={props.product.thumbnail} alt="product" />
        </div>
        <p>${props.product.price}</p>
        <p>{props.product.title}</p>
      </CardContent>
    </CardActionArea>
  </Card>
}

export default Product;
