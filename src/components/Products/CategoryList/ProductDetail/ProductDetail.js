
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import MainLayout from '../../MainLayout/MainLayout';
import { getProductDetail } from '../../../../services/api';
import './ProductDetail.css';

class ProductDetail extends Component {
  state = {
    productDetail: {},
    pictures: [],
    activeImage: ''
  }

  componentDidMount() {
    getProductDetail(this.props.match.params.id)
      .then(res => this.setState({
        productDetail: res,
        pictures: res.pictures.slice(0, 6),
        activeImage: res.pictures[0].url
      }))
  }

  
   selectImage = (event) => {
    this.setState({
      activeImage: event.target.src
    })
  }

  render() {

    return <MainLayout>
      <div className='container-detail'>
        <div className='gallery-container'>
          <div className='gallery-content'>
            {
              Object.keys(this.state.productDetail).length ?
                this.state.pictures.map(pic => {
                  return <div className='img-container' key={pic.id} onClick={this.selectImage}>
                    <img className='product-detail-thumbnail' src={pic.url} alt='product'></img>
                  </div>
                })
                : null
            }
          </div>
          <div className='img-selected'>
            <img src={this.state.activeImage}></img>
          </div>
        </div>
        <div className='info-product'>
          <h1>{this.state.productDetail.title}</h1>
          <p>${this.state.productDetail.price}</p>
          <Button
            className="form-button"
            variant="contained"
            color="primary"
            type="submit">
            Agregar al carrito
      </Button>
        </div>
      </div>
    </MainLayout>
  }
}

export default ProductDetail;