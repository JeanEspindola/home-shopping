import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItemContainer';
import { Row, Col, Button } from 'react-bootstrap';
import { SUPPORTED_CURRENCIES } from '../../../utils/constants';
import './ProductsList.scss';

const ProductList = ({ productList, categoryTitle, editMode, onAddNewProduct, categoryId }) => {
  const title = categoryTitle !== '' ? `Showing products for: ${categoryTitle}` : '';
  return (
    <div className="products-list__container">
      <Row className="products-list__title">
        <Col sm={12}>
          {title}
        </Col>
      </Row>
      {editMode && categoryId !== 0 &&(
        <Row>
          <Col sm={12} className="products-list__add-new">
            <Button size="sm" onClick={onAddNewProduct}>Add New Product</Button>
            <span className="products-list__currencies">Supported Currencies: {SUPPORTED_CURRENCIES}</span>
          </Col>
        </Row>
      )}
      <Fragment>
        {productList.map(item => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            currency={item.currency}
            editMode={editMode}
            newEntry={item.newEntry}
            productId={item.id}
            categoryId={categoryId}
          />
        ))}
      </Fragment>
    </div>
  )
};

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.any).isRequired,
  categoryTitle: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  editMode: PropTypes.bool.isRequired,
  onAddNewProduct: PropTypes.func.isRequired,
};

export default ProductList;
