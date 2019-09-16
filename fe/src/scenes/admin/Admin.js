import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CategoryList from '../../components/categories/CategoryList/CategoryListContainer';
import ProductList from '../../components/products/ProductsList/ProductsListContainer';
import './Admin.scss';

const Admin = () => (
  <Row className="shopping-page__container">
    <Col sm={4}>
      <CategoryList editMode={true} />
    </Col>
    <Col sm={8}>
      <ProductList editMode={true} />
    </Col>
  </Row>
);

export default Admin;
