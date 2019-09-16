import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ productList, categoryTitle }) => (
  <div className="product-list__container">
    <Row>
      <Col sm={12}>
        {categoryTitle}
      </Col>
    </Row>
    <Row>
      {productList.map(item => (
        <div>{item.name}</div>
      ))}
    </Row>
  </div>

);

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  categoryTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default ProductList;
