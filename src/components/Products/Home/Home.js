import React from 'react';
import { getCategories } from '../../../services/api';
class Home extends React.Component {
  state = {
    categories: []
  }
  componentDidMount () {
    getCategories().then((res => {
      this.setState({
        categories: res
      });
    }))
  }
  render () {
    return <div className="wrapper">
     {this.state.categories.map(category => <div>{category.name}</div>)}
      </div>
  }
}

export default Home;