import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './components/header/Header';
import './App.scss';

const App = () => (
  <div className="app__container">
    <Header title="Home Shopping Application - Main" />
    <Row>
      <Col xs={12}> Header </Col>
    </Row>
  </div>
)

export default App;
