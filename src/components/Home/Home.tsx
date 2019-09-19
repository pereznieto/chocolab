import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <h2>Home</h2>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={styles.item}>[Hero image]</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>Some info</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>Some more info</div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.item}>[Cute picture]</div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.item}>[Cute picture]</div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.item}>[Cute picture]</div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.item}>[Cute picture]</div>
      </Grid>
    </Grid>
  </div>
);

export default Home;
