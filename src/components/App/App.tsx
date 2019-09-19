import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from '../../Theme';
import Facts from '../Facts/Facts';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import styles from './App.module.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path='/' component={Nav} />
      <Container maxWidth='lg' className={styles.app}>
        <h1 className={styles.title}>Chocolate Labradors 🐾</h1>
        <Route exact path='/' component={Home} />
        <Route path='/fun-facts' component={Facts} />
      </Container>
    </Router>
  </ThemeProvider>
);

export default App;
