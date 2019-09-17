import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CategoryList from '../../components/categories/CategoryList/CategoryListContainer';

const AdminCategory = () => (
  <Row>
      <Col sm={4} >
        <CategoryList editMode={true} />
      </Col>
      <Col sm={8} />
  </Row>
);

export default AdminCategory;