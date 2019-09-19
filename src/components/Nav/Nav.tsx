import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => (
  <AppBar position='static' className={styles.nav}>
    <Container maxWidth='lg'>
      <Toolbar disableGutters>
        <Typography variant='h6' className={styles.title}>
          <Link to='/'>Home</Link>
        </Typography>
        <Typography variant='h6' className={styles.title}>
          <Link to='/fun-facts'>Fun facts</Link>
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Nav;
