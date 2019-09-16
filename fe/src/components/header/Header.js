import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './Header.scss';

const Header = ({ title }) => (
  <Row className="header__container">
    <Col xs={12}>
      {title}
    </Col>
  </Row>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;