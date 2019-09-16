import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {
  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
    onLoadProductList: PropTypes.func.isRequired,
  }

  setCategorySelected = () => {
    const { categoryId, name, onSelectCategory, onLoadProductList } = this.props
    onSelectCategory(categoryId, name);
    onLoadProductList(categoryId);
  }

  render() {
    const { categoryId, name } = this.props;

    return (
      <div
        className="category-item__view"
        onClick={this.setCategorySelected}>
          {name}  
      </div>
    );
  }
}

export default CategoryItem;
