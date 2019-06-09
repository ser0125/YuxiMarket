
import React from 'react';
import Product from './Product/Product';
import './ProductList.css';
class ProductList extends React.Component {

  componentDidMount() {
    const { products } = this.props;
    console.log(products);
    if(products.data.length === 0) {
      this.props.fetchProducts(this.props.match.params.id);
    }
  }

  selectProduct(id) {
    this.props.history.push(`/product/${id}`);
  }

  render() {
    const { products } = this.props;
    return <React.Fragment>
      <h1 className='title-products'>Publicaciones destacadas</h1>
      <div className='container-products'>
        {products.data.map(product => <Product key={product.id} product={product} selectProduct={()=> this.selectProduct(product.id)}></Product>)}
      </div>
    </React.Fragment>
  }
}

export default ProductList;