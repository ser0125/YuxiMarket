
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ProductDetail.css';

class ProductDetail extends Component {

  componentDidMount() {
    const { productDetail } = this.props;
      this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const { productDetail } = this.props
    return <div className='container-detail'>
        <div className='gallery-container'>
          <div className='gallery-content'>
            {
              Object.keys(productDetail).length ?
              productDetail.pictures.map(pic => {
                  return <div className='img-container' key={pic.id} onClick={this.props.selectImage}>
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
          <p className="price-product">${productDetail.price}</p>
          <Button
            className="form-button"
            variant="contained"
            color="primary"
            type="submit">
            Agregar al carrito
      </Button>
        </div>
      </div>
  }
}

export default ProductDetail;