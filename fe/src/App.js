import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Header from './components/header/Header';
import './App.scss';

const App = () => (
  <div className="app__container">
    <Header title="Home Shopping Application - Main" />
    <div className="app__navigation">
      <Row>
        <Col sm={12}> Header </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Button>Administration</Button>
        </Col>
        <Col sm={6}>
          <Button>Shopping</Button>
        </Col>
      </Row>
    </div>
  </div>
)

export default App;
