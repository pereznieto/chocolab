import { Container } from '@material-ui/core';
import React from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Facts from '../Facts/Facts';

const App = () => (
  <Router>
    <Nav />
    <Container maxWidth='lg' className={styles.app}>
      <h1>Chocolate Labradors</h1>
      <Route exact path='/' component={Home} />
      <Route path='/fun-facts' component={Facts} />
    </Container>
  </Router>
);

export default App;
