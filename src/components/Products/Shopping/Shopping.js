import React from 'react';
import { formatNumber } from '../../../utils/decimalSeparation';
import './Shopping.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import { showRemoveProduct } from '../../../utils/showAlerts';

const useStyles = makeStyles(() => ({
  deleteIcon: {
    color: '#b5b5b5',
    cursor: 'pointer',
    "&:hover": {
      color: 'red'
    }
  },
}));

const removeItem = (props, id) => {
  showRemoveProduct();
  props.removeItemCart(id)
}

const getTotalPrices = (items) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.countItems, 0);
  return formatNumber(totalPrice);
}

const Shopping = (props) => {
  const classes = useStyles();
  return <div className='shopping-list'>
    <div className='shopping-header'>
      <div className='shopping-header-item'>
        <h2>Cesta</h2>
      </div>
      <div className='shopping-header-price'>
        <span>Precio</span>
      </div>
      <div className='shopping-header-quantity'>
        <span>Cantidad</span>
      </div>
      <div className='shopping-header-delete'>
        <span>Eliminar/unidad</span>
      </div>
    </div>
    {
      props.shoppingCart.items.length > 0 ?
        <div className= 'shopping-list'>
          {
            props.shoppingCart.items.map(item => <div className='shopping-item'>
              <div className='shopping-item-container'>
                <div className='shopping-thumbnail-container'>
                  <img className="shopping-product-thumbnail" src={item.thumbnail} alt="product" />
                </div>
                <p className='label-title'>{item.title}</p>
              </div>
              <div className='shopping-item-price'>
                <p>${formatNumber(item.price)}</p>
              </div>
              <div className='shopping-item-quantity'>
                <p>{item.countItems}</p>
              </div>
              <div className='shopping-item-delete'>
                <DeleteForeverIcon className={classes.deleteIcon} onClick={() => removeItem(props, item.id)} />
              </div>
            </div>
            )}
          <div className='shopping-total'>
            <h2>Total ({props.shoppingCart.countItems} productos) {getTotalPrices(props.shoppingCart.items)} </h2>
          </div>
        </div>
        : null
    }
  </div>
}

export default Shopping;