import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './Facts.module.scss';

const Facts = () => (
  <div className={styles.facts}>
    <h2>Facts</h2>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className={styles.item}>[Hero image]</div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={styles.item}>Some facts</div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={styles.item}>Some more facts</div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div className={styles.item}>Even more facts</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>Cool stuff</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>Cool stuff</div>
      </Grid>
    </Grid>
  </div>
);

export default Facts;
