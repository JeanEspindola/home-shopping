import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ productList, categoryTitle, editMode }) => {
  const title = categoryTitle !== '' ? `Showing products for: ${categoryTitle}` : '';
  return (
    <div className="product-list__container">
      <Row>
        <Col sm={12}>
          {title}
        </Col>
      </Row>
      <Fragment>
        {productList.map(item => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            currency={item.currency}
            editMode={editMode}
          />
        ))}
      </Fragment>
    </div>
  )
};

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  categoryTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default ProductList;
