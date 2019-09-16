import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ProductItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    editMode: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }

  render() {
    const { name, price, currency } = this.props;
    const value = `${price} ${currency}`;

    return (
      <Row className="product-item__view">
        <Col sm={6}>          
          {name}  
        </Col>
        <Col sm={6}>
          {value}
        </Col>
      </Row>
    );
  }
}

export default ProductItem;
