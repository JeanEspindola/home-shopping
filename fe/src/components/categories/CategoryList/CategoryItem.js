import React, { Component, Fragment } from 'react';
import {
  Row, Col, FormGroup, InputGroup, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './CategoryItem.scss';

class CategoryItem extends Component {
  static propTypes = {
    categoryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
    onLoadProductList: PropTypes.func.isRequired,
    onDeleteCategory: PropTypes.func.isRequired,
  }

  setCategorySelected = () => {
    const { categoryId, name, onSelectCategory, onLoadProductList } = this.props
    onSelectCategory(categoryId, name);
    onLoadProductList(categoryId);
  }

  onChangeCategoryName = () => {

  }

  onSaveCategoryItem = () => {
    console.log('tetetetetet')
  }

  onDeleteCategoryItem = () => {
    const { categoryId, onDeleteCategory } = this.props;
    onDeleteCategory(categoryId);
  }

  render() {
    const { name, editMode } = this.props;

    return (
      <Fragment>
        {!editMode && (
          <Row
            className="category-item__view"
            onClick={this.setCategorySelected}>
              <Col sm={12}>
                {name}  
              </Col>
          </Row>
        )}
        {editMode && (
          <Row className="category-item__edit">
            <Col sm={10}>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={this.onChangeCategoryName}
                    name="name"
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="category-item__save-button"
                onClick={this.onSaveCategoryItem}
                title="Save Category"
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="category-item__delete-button"
                onClick={this.onDeleteCategoryItem}
                title="Delete Category"
              />
            </Col>
          </Row>
        )}
      </Fragment>
    );
  }
}

export default CategoryItem;
