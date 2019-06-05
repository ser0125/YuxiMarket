import React from 'react';
import { getCategories } from '../../../services/api';
import CategoryList from '../CategoryList/CategoryList';
import { addIcon } from '../../../utils/addIcon';
import MainLayout from '../MainLayout/MainLayout';

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
    return <MainLayout>
      {categoriesExist ? <CategoryList {...this.props} categories={this.state.categories} /> : null}
    </MainLayout>
  }
}

export default Home;