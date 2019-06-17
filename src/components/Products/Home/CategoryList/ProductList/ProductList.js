
import React from 'react';
import Product from './Product/Product';
import './ProductList.css';
import LoaderCircle from '../../../../LoaderCircle/LoaderCircle';
class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.id);

  }
  componentWillUnmount() {
    this.props.clearOldProducts();
  }

  selectProduct(id) {
    this.props.history.push(`/product/${id}`);
  }

  selectPriceFilter = (filter) => {
    this.props.filterPrice(this.props.match.params.id, filter.id);
    this.props.filterSelect(filter.name);
  }

  clearFilter = () => {
    this.props.fetchProducts(this.props.match.params.id);
    this.props.clearFilter();
  }

  render() {
    const { products } = this.props;
    const productsExist = !!products && products.data.results.length
    return productsExist
      ? <React.Fragment>
        <h1 className='title-products'>Publicaciones destacadas</h1>

        <div className='container-products'>
          <aside className="aside-products">
            {products.data.filteredSelected ?
              <p className='filters-selected'> {products.data.filteredSelected}
                <span className='close-icon-container' onClick={this.clearFilter}>X</span>
              </p> : null}
            <h3>{products.data.categoryName.name}</h3>
            <h5>Precio</h5>
            {products.data.filterPrice.map(range => {
              return <p key={range.id} className='filters-price' onClick={() => this.selectPriceFilter(range)}>{range.name}</p>
            })}
          </aside>
          <div className="product-list">
            {products.data.results.map(product => <Product key={product.id}
              product={product} selectProduct={() => this.selectProduct(product.id)}
              addItemCart={this.props.addItemCart}></Product>)}
          </div>
        </div>
      </React.Fragment>
      : <LoaderCircle />

  }
}

export default ProductList;