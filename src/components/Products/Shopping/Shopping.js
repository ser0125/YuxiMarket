import React from 'react';
import { formatNumber } from '../../../utils/decimalSeparation';
import './Shopping.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import { showRemoveProduct, showSuccessProduct } from '../../../utils/showAlerts';
import { Button } from '@material-ui/core';

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

const handleChange = (props, id, event) => {
  const quantityItem = {id: id, countItems: parseInt(event.target.value)};
  props.changeQuantityItem(quantityItem);
}


const Shopping = (props) => {
  const options = [];
  for(let i=1; i<20; i++){
    options.push(<option key={i} value={i}>{i}</option>);
  }
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
        <div className='shopping-list'>
          {
            props.shoppingCart.items.map(item => <div key={item.id} className='shopping-item'>
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
                <select name="quantity-list" value={item.countItems} onChange={(event)=>handleChange(props, item.id, event)}>
                 {options}
                </select>
              </div>
              <div className='shopping-item-delete'>
                <DeleteForeverIcon className={classes.deleteIcon} onClick={() => removeItem(props, item.id)} />
              </div>
            </div>
            )}
          <div className='shopping-total'>
            <h2>Total ({props.shoppingCart.countItems} productos) {getTotalPrices(props.shoppingCart.items)} </h2>
          </div>
          <div className='shopping-button'>
          <Button variant="contained"
           color="primary"
            type="submit"
            size="small"
            onClick={() => showSuccessProduct('Se ha realizado la compra de forma exitosa')}>Realizar Compra</Button>
            </div>
        </div>
        : null
    }
  </div>
}

export default Shopping;