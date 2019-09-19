import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styles from './Nav.module.scss';
import cx from 'classnames';

const Nav = ({ location: { pathname } }: RouteComponentProps) => (
  <AppBar position='static' className={styles.nav}>
    <Container maxWidth='lg'>
      <Toolbar disableGutters>
        <Typography variant='h6'>
          <Link
            to='/'
            className={cx(styles.link, { [styles.selected]: pathname === '/' })}
          >
            Home
          </Link>
        </Typography>
        <Typography variant='h6'>
          <Link
            to='/fun-facts'
            className={cx(styles.link, { [styles.selected]: pathname === '/fun-facts' })}
          >
            Fun facts
          </Link>
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Nav;
