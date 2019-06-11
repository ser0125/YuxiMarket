import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
  
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

const CustomizedShoppingCart = ({...rest}) => {
  const { countItems } = rest.shoppingCart;
  return  <Badge badgeContent={countItems} showZero color="secondary">
      <ShoppingCartIcon />
    </Badge>
}

export default connect(mapStateToProps)(CustomizedShoppingCart);