import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
  
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

const CustomizedShoppingCart = ({...rest}) => {
  const { countItems } = rest.shoppingCart;
  return  countItems ? (
    <Badge badgeContent={countItems} color="secondary">
      <ShoppingCartIcon />
    </Badge>
  ): null;
}

export default connect(mapStateToProps)(CustomizedShoppingCart);