import React from 'react';
import { getCategories } from '../../../services/api';
import NavBar from './Navbar';
import ProductList from '../ProductList/ProductList';
import { addIcon } from '../../../utils/addIcon';
class Home extends React.Component {
  state = {
    categories: []
  }
  componentDidMount() {
    getCategories().then((res => {
      const resFilter = res.filter((value, index) => index % 2);
      resFilter.forEach(elem => addIcon(elem));
      this.setState({
        categories: resFilter
      });
    }))
  }


  render() {
    const categoriesExist = this.state.categories.length > 0;
    return <div className="home-container">
      <NavBar />
        {categoriesExist ? <ProductList categories={this.state.categories} /> : null}
    </div>
  }
}

export default Home;