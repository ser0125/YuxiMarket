
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ProductDetail.css';
import LoaderCircle from '../../../../LoaderCircle/LoaderCircle';
import { showSuccessProduct, showErrorAlert } from '../../../../../utils/showAlerts';
import { formatNumber } from '../../../../../utils/decimalSeparation';


class ProductDetail extends Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearOldProduct();
  }

  massageShopping = (productDetail) => ({
    id: productDetail.id,
    title: productDetail.title,
    price: productDetail.price,
    thumbnail: productDetail.activeImage
  })

 

  sendToShoppingCart(productDetail, items) {

    const transformProduct = this.massageShopping(productDetail);
    const existProduct = items.find(item => item.id === transformProduct.id);
    if (existProduct) {
      if (existProduct.countItems > 18) {
        showErrorAlert('Son 19 productos maximo');
        return; 
      }
    }
    showSuccessProduct('El producto se ha agregado con exito');
    this.props.addItemCart(transformProduct);
  }

  render() {
    const { productDetail, items } = this.props
    const productDetailExist = !!productDetail.pictures.length;
    return productDetailExist
      ? <div className='container-detail'>
        <div className='gallery-container'>
          <div className='gallery-content'>
            {
              Object.keys(productDetail).length ?
                productDetail.pictures.map(pic => {
                  return <div className='img-container' key={pic.id} onClick={() => this.props.selectImage(pic.url)}>
                    <img className='product-detail-thumbnail' src={pic.url} alt='product'></img>
                  </div>
                })
                : null
            }
          </div>
          <div className='img-selected'>
            <div className='img-selected-container'>
              <img src={productDetail.activeImage} alt="selected"></img>
            </div>
          </div>
        </div>
        <div className='info-product'>
          <h1>{productDetail.title}</h1>
          <p className="price-product">${formatNumber(productDetail.price)}</p>
          <Button
            className="form-button button-label"
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => { this.sendToShoppingCart(productDetail, items)}}>
            Agregar al carrito
      </Button>
        </div>
      </div>
      : <LoaderCircle />
  }
}

export default ProductDetail;