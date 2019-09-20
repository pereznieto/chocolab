import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './Facts.module.scss';
import cx from 'classnames';

const Facts = () => (
  <div className={styles.facts}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <div className={cx(styles.item, styles.hero)}>
          <h2 className={styles.title}>Fun facts</h2>
        </div>
      </Grid>
      <Grid item xs={12}>
        <h3>Here are some fun facts about Labradors for your enjoyment!</h3>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div>
          <h4>Interesting facts</h4>
          <ul>
            <li>They’re America’s favorite breed</li>

            <li>
              Their name is a little misleading (Labrador retrievers actually come from
              Newfoundland, not Labrador!)
            </li>
            <li>The Earl of Malmesbury might have named them</li>
            <li>Canadian tax laws helped labs become a distinct breed</li>
            <li>They’re fast! They can hit 12 miles an hour in just three seconds</li>
            <li>You can get all three colors in one litter</li>
            <li>A nameless black Lab wandered his way into a Led Zeppelin song</li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div>
          <h4>Popular jobs</h4>
          <p>
            A favourite disability assistance breed in many countries, Labradors are
            frequently trained to aid those with blindness or autism, act as a therapy
            dog, or perform screening and detection work for law enforcement and other
            official agencies.
          </p>
          <ul>
            <li>Labs are the most commonly-used breed for guide dogs</li>
            <li>Labs were originally used for fishing</li>
            <li>A lab went to jail</li>
            <li>And another became a mayor!</li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <div>
          <h4>All about colour</h4>
          <p>
            Jack Vanderwyk traces the origins of all Chocolate Labradors listed on the
            LabradorNet database to eight original bloodlines. However, the shade was not
            seen as a distinct colour until the 20th century. Chocolate Labradors were
            also well established in the early 20th century at the kennels of the Earl of
            Feversham, and Lady Ward of Chiltonfoliat.
          </p>
          <p>
            In addition to Chocolate labradors, you can also find <strong>yellow</strong>{' '}
            and <strong>black</strong> labradors, which are perhaps as adorable! What do
            you think? Have a look at the pictures below and decide if they're as
            beautiful as <strong>chocolate</strong> labs!
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.dog1} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.dog2} />
      </Grid>
    </Grid>
  </div>
);

export default Facts;
