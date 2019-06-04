import React from 'react';
import './ProductList.css'

const ProductList = (props) => {
  return <div className="container-list">
  <h1>Categorias Populares</h1>
  <div className="category-list">
    {props.categories.map((category) =>
      <div className="card-category" key={category.id}>
        <i className={`icon-list ${category.icon}`}></i>
        <p>{category.name}</p>
      </div>
    )}
  </div>
  </div>
}

export default ProductList;
