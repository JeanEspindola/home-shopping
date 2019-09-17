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
    newEntry: PropTypes.bool.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
    onLoadProductList: PropTypes.func.isRequired,
    onDeleteCategory: PropTypes.func.isRequired,
    onUpdateCategory: PropTypes.func.isRequired,
    onCreateCategory: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { name } = this.props;
    this.state = {
      name,
    };
  }

  setCategorySelected = () => {
    const { categoryId, name, onSelectCategory, onLoadProductList } = this.props
    onSelectCategory(categoryId, name);
    onLoadProductList(categoryId);
  }

  onChangeCategoryName = (event) => {
    this.setState({ name: event.target.value });
  }

  onSaveCategoryItem = () => {
    const { onUpdateCategory, categoryId, onCreateCategory, newEntry } = this.props;
    const { name } = this.state;

    const obj = {
      name,
    }
    if (newEntry) {
      onCreateCategory(categoryId, obj);
    } else {
      onUpdateCategory(categoryId, obj);
    }
  }

  onDeleteCategoryItem = () => {
    const { onDeleteCategory, categoryId } = this.props;
    onDeleteCategory(categoryId);
  }

  render() {
    const { editMode } = this.props;
    const { name } = this.state;

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
