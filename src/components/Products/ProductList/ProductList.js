import React from 'react';
import caricon from '../../../assets/icons/car.svg';


const ProductList = (props) => {
  return <div className='pokemon-list'>
    {props.categories.map((category) =>
      <div key={category.id}>
        <i className={category.icon}></i>
      </div>
      )}
  </div>
}

export default ProductList;
