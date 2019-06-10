
import React from 'react';
import Product from './Product/Product';
import './ProductList.css';
import LoaderCircle from '../../../LoaderCircle/LoaderCircle';
class ProductList extends React.Component {

  componentDidMount() {
      this.props.fetchProducts(this.props.match.params.id);
    
  }
  componentWillUnmount(){
    this.props.clearOldProducts();
  }

  selectProduct(id) {
    this.props.history.push(`/product/${id}`);
  }

  render() {
    const { products } = this.props;
    
    const productsExist = !!products && (products.data.length > 0)
    return productsExist
    ? <React.Fragment>
      <h1 className='title-products'>Publicaciones destacadas</h1>
      <div className='container-products'>
        {products.data.map(product => <Product key={product.id} product={product} selectProduct={()=> this.selectProduct(product.id)}></Product>)}
      </div>
    </React.Fragment>
    : <LoaderCircle />
   
  }
}

export default ProductList;