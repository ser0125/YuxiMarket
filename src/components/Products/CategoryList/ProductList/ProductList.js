
import React from 'react';
import { getProducts } from '../../../../services/api';
import Product from './Product/Product';
import './ProductList.css';
class ProductList extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    getProducts(this.props.match.params.id).then((res => {
      const resFilter = res.results.slice(0, 18);
      this.setState({
        products: resFilter
      });
    }))
  }

  selectProduct(id) {
    this.props.history.push(`/product/${id}`);
  }

  render() {
    return <React.Fragment>
      <h1 className='title-products'>Publicaciones destacadas</h1>
      <div className='container-products'>
        {this.state.products.map(product => <Product key={product.id} product={product} selectProduct={()=> this.selectProduct(product.id)}></Product>)}
      </div>
    </React.Fragment>
  }
}

export default ProductList;