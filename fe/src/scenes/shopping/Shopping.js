import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CategoryList from '../../components/categories/CategoryList/CategoryListContainer';
import ProductList from '../../components/products/ProductsList/ProductsListContainer';
import './Shopping.scss';

const Shopping = ({ categoryList }) => (
  <Row className="shopping-page__container">
    <Col sm={4}>
      <CategoryList editMode={false} />
    </Col>
    <Col sm={8}>
      <ProductList editMode={false} />
    </Col>
  </Row>
);

export default Shopping;