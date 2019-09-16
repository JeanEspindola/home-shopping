import React from 'react';
import PropTypes from 'prop-types';
import CategoryItemView from './CategoryItem';
import { Row, Col } from 'react-bootstrap';

const CategoryList = ({ categoryList, editMode, onSelectCategory, onLoadProductList }) => (
  <Row className="category-list__container">
    <Col sm={12}>
      {categoryList.map(item => (
        <CategoryItemView
         key={item.id}
         categoryId={item.id}
         name={item.name}
         editMode={editMode}
         onSelectCategory={onSelectCategory}
         onLoadProductList={onLoadProductList}
        />
      ))}
    </Col>
  </Row>
);

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  editMode: PropTypes.bool.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onLoadProductList: PropTypes.func.isRequired,
};

export default CategoryList;