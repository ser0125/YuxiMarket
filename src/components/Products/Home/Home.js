import React from 'react';
import { getCategories } from '../../../services/api';
import CategoryList from '../CategoryList/CategoryList';
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
    return <React.Fragment>
      {categoriesExist ? <CategoryList {...this.props} categories={this.state.categories} /> : null}
      </React.Fragment>
  }
}

export default Home;