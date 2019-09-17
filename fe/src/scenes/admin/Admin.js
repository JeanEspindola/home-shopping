import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import AdminCategory from './AdminCategory';
import AdminProduct from './AdminProduct';
import './Admin.scss';

const Admin = ({ match }) => (
  <div className="admin__container">
    <Router>
      <Row>
        <Col sm={12}>
          <Link to={`${match.url}/categories`}>Manage Categories</Link>
          {' '}
          <Link to={`${match.url}/products`}>Manage Products</Link>
        </Col>
      </Row>
      <Row className="admin__navigation__routes">
        <Col sm={12}>
          <Route path={`${match.path}/categories`} component={AdminCategory} />
          <Route path={`${match.path}/products`} component={AdminProduct} />
        </Col>
      </Row>
    </Router>
  </div>
);

export default Admin;
