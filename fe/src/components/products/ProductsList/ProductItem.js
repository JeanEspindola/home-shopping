import React, { Component, Fragment } from 'react';
import {
  Row, Col, FormGroup, InputGroup, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CURRENCY_SYMBOLS } from '../../../utils/constants';
import PropTypes from 'prop-types';
import './ProductItem.scss';

class ProductItem extends Component {
  static propTypes = {
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    newEntry: PropTypes.bool.isRequired,
    onDeleteProduct: PropTypes.func.isRequired,
    onUpdateProduct: PropTypes.func.isRequired,
    onCreateProduct: PropTypes.func.isRequired,
    categoryId: PropTypes.number.isRequired,
    currencyList: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  constructor(props) {
    super(props);

    const { name, price, currency } = this.props;
    this.state = {
      name,
      price,
      currency,
    };
  }

  onChangeProductName = (event) => {
    this.setState({ name: event.target.value });
  }

  onChangeProductPrice = (event) => {
    this.setState({ price: event.target.value });
  }

  onChangeProductCurrency = (event) => {
    this.setState({ currency: event.target.value });
  }

  onSaveProduct = () => {
    const { onUpdateProduct, productId, onCreateProduct, newEntry, categoryId } = this.props;
    const { name, price, currency } = this.state;

    if (name === '' && price === '' && currency === ''){
      return;
    }

    const obj = {
      name,
      price,
      currency,
    }
    if (newEntry) {
      obj.category = {
        id: categoryId,
      };
      onCreateProduct(productId, obj);
    } else {
      onUpdateProduct(productId, obj);
    }
  }

  onDeleteProduct = () => {
    const { onDeleteProduct, productId } = this.props;
    onDeleteProduct(productId);
  }

  render() {
    const { name, price, currency } = this.state;
    const symbol = CURRENCY_SYMBOLS[currency] || currency;
    const { editMode, currencyList } = this.props;
    const originalValue = `${symbol}${price}`;
    let convertedValue = originalValue;
    const rate = currencyList[currency]

    if (currency !== 'EUR' && rate !== undefined) {
      convertedValue = `${CURRENCY_SYMBOLS['EUR']}${(price / rate).toFixed(2)}`;
    }

    return (
      <Fragment>
      {!editMode && (
        <Row className="product-item__view">
          <Col sm={6} className="product-item__text">          
            {name}  
          </Col>
          <Col sm={3}>
            {convertedValue}
          </Col>
          <Col sm={3}>
            {currency !== 'EUR' && (
              <span>Original price: {originalValue}</span>
            )}
          </Col>
        </Row>
      )}
      {editMode && (
        <Row className="product-item__edit">
          <Col sm={5} className="align__middle">
            <FormGroup>
              <InputGroup size="sm">
                <FormControl
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={this.onChangeProductName}
                  name="name"
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm={3} className="align__middle">
            <FormGroup>
              <InputGroup size="sm">
                <FormControl
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={this.onChangeProductPrice}
                  name="price"
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm={2} className="align__middle">
            <FormGroup>
              <InputGroup size="sm">
                <FormControl
                  type="text"
                  placeholder="Currency"
                  value={currency}
                  onChange={this.onChangeProductCurrency}
                  name="currency"
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm={2} className="align__middle">
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="product-item__save-button"
              onClick={this.onSaveProduct}
              title="Save Product"
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="product-item__delete-button"
              onClick={this.onDeleteProduct}
              title="Delete Product"
            />
          </Col>
        </Row>
      )}
    </Fragment>
    );
  }
}

export default ProductItem;
