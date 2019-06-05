
import React from 'react';
import { getProducts } from '../../../../services/api';
import MainLayout from '../../MainLayout/MainLayout';
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

  render() {
    return <MainLayout>
      <h1 className='title-products'>Publicaciones destacadas</h1>
      <div className='container-products'>
        {this.state.products.map(product => <Product key={product.id} product={product}></Product>)}
      </div>
    </MainLayout>
  }
}

export default ProductList;