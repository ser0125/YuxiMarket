import React from 'react';
import { getCategories } from '../../../services/api';
import NavBar from './Navbar';
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
      <NavBar />
      </div>
  }
}

export default Home;