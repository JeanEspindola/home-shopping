import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItemContainer';
import { Row, Col, Button } from 'react-bootstrap';
import './CategoryList.scss';

const CategoryList = ({
  categoryList, editMode, onSelectCategory, onLoadProductList, onAddNewCategory,
 }) => (
  <div className="category-list__container">
    <Row className="category-list__title">
      <Col sm={12}>
        Categories:
      </Col>
    </Row>
    {editMode && (
      <Row>
        <Col sm={12} className="category-list__add-new">
          <Button size="sm" onClick={onAddNewCategory}>Add New Category</Button>
        </Col>
      </Row>
    )}
    <Fragment>
      {categoryList.map(item => (
        <CategoryItem
          key={item.id}
          categoryId={item.id}
          name={item.name}
          newEntry={item.newEntry}
          editMode={editMode}
          onSelectCategory={onSelectCategory}
          onLoadProductList={onLoadProductList}
        />
      ))}
    </Fragment>
  </div>
);

CategoryList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  editMode: PropTypes.bool.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onLoadProductList: PropTypes.func.isRequired,
  onAddNewCategory: PropTypes.func.isRequired,
};

export default CategoryList;