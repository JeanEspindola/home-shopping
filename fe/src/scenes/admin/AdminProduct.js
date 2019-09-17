import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CategoryList from '../../components/categories/CategoryList/CategoryListContainer';
import ProductList from '../../components/products/ProductsList/ProductsListContainer';

const AdminProduct = () => (
  <Row>
    <Col sm={4} >
      <CategoryList editMode={false} />
    </Col>
    <Col sm={8}>
      <ProductList editMode={true} />
    </Col>
  </Row>
);

export default AdminProduct;