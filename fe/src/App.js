import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Header from './components/header/Header';
import Admin from './scenes/admin/Admin';
import Shopping from './scenes/shopping/Shopping';
import './App.scss';

const App = () => (
  <div className="app__container">
    <Header title="Home Shopping Application" />
    <div className="app__navigation">
      <Router>
        <Row>
          <Col sm={12}>
            <Link to="/" className="app__navigation__router">Home</Link>
            <Link to="/admin" className="app__navigation__router">Administration</Link>
            <Link to="/shopping" className="app__navigation__router">Shopping</Link>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Route path="/admin" component={Admin} />
            <Route path="/shopping" component={Shopping} />
          </Col>
        </Row>
      </Router>
    </div>
  </div>
)

export default App;
