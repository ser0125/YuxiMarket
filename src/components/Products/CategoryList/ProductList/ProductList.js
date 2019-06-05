import React from 'react';
import { getProducts } from '../../../../services/api';

class ProductList extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    getProducts(this.props.match.params.id).then((res => {
      const resFilter = res.results.slice(0,15);
      this.setState({
        products: resFilter
      });
    }))
  }

  render() {
    return <div>
      HOLA
  </div>
  }
}

export default ProductList;