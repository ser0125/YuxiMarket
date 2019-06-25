
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ProductDetail.css';
import LoaderCircle from '../../../../LoaderCircle/LoaderCircle';
import { showSuccessProduct, showErrorAlert } from '../../../../../utils/showAlerts';
import { formatNumber } from '../../../../../utils/decimalSeparation';


class ProductDetail extends Component {
  state = {
    onHover: false,
    x: 0,
    y: 0
  }
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

  toggleHover = (event, title) => {
    this.setState({
      onHover: !this.state.onHover
    })
  }

  mouseMove = (event, title) => {
    this.setState({
      x: event.clientX - 75,
      y: event.clientY - 75
    })
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
            <div className='img-selected-container' onMouseEnter={(event) => this.toggleHover(event, 'enter')} onMouseOut={(event) => this.toggleHover(event, 'leave')} onMouseMove={(event) => this.mouseMove(event)}>
              <img src={productDetail.activeImage} alt="selected" ></img>
              {this.state.onHover ?
                <div className='img-zoom' style={{ top: this.state.y, left: this.state.x }} >
                </div> : null
              }
            </div>
          </div>
        </div>
        <div className='info-product'>
          {this.state.onHover ?
            <div className='img-zoom-container'>
              <img src={productDetail.activeImage} style={{ top: -this.state.y*2+255, left: -this.state.x*1.6+420 }} alt='product'></img>
            </div> :
            <div>
              <h1>{productDetail.title}</h1>
              <p className="price-product">${formatNumber(productDetail.price)}</p>
            </div>
          }
          <Button
            className="form-button button-label"
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => { this.sendToShoppingCart(productDetail, items) }}>
            Agregar al carrito
      </Button>
        </div>
      </div>
      : <LoaderCircle />
  }
}

export default ProductDetail;