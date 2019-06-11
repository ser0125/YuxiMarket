import React from 'react';
import './CategoryList.css'

class CategoryList extends React.Component {

  selectCategory = (id) => {
    this.props.history.push(`home/${id}`);
  }

  render() {
    return <React.Fragment>
      <h1>Categorias Populares</h1>
      <div className="category-list">
        {this.props.categories.map((category) =>
          <div className="card-category" key={category.id} onClick={() => this.selectCategory(category.id)}>
            <i className={`icon-list ${category.icon}`}></i>
            <p>{category.name}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  }

}

export default CategoryList;
