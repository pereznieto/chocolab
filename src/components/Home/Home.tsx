import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <div className={styles.hero}>
          <h2 className={styles.title}>Home</h2>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>
          <h3>Labrador Retrievers</h3>
          <p>
            Labrador Retrievers were recognised by the UK Kennel Club in 1903 and by the
            AKC in 1917. But they had been around for some years before that. The Labrador
            breed was developed mainly by a couple of English aristocrats in the 1800s,
            from dogs they had imported from North America. Although our early Labrador
            Retrievers were predominantly black, some of these original dogs carried the
            genetic information required to produce chocolate puppies. Just as some also
            carried the information required to produce yellow puppies.
          </p>
          <p>
            Sadly, a hundred or more years ago, it was commonplace to ‘cull’ puppies that
            were not a desirable color. Black was the ‘in’ color for labs, so this meant
            that mainly black dogs survived to adulthood and mainly black dogs were bred
            from. If mainly black dogs were bred from, you may wonder how a brown puppy
            was ever born! To understand that, we need to take a peep at the genes that
            carry the code for coat color in the Labrador retriever.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.item}>
          <h3>How is the Chocolate Color Inherited in Labradors?</h3>
          <p>
            The instructions that tell your dog what to look like, and what color to be,
            come packed in genes. And genes come in pairs. This is true for the gene that
            determines whether or not the Labrador will be brown or black. The color black
            in Labradors is dominant. That means that if a Labrador has one gene for the
            color brown, and one gene for the color black, the dog will be black. The
            brown gene just sits hidden inside him doing nothing in particular, while the
            black gene takes control of his coat.
          </p>
          <p>
            It wasn’t until the 1960s that brown Labs began to really grow in popularity.
            The demand for these beautiful dogs came from ordinary home owners and they
            much preferred the word ‘chocolate’ to describe their new companions. That
            preference continues today, and we still often name our brown Labs after
            favorite snack bars and chocolate flavored drinks!
          </p>
        </div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.puppy1} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.puppy2} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.puppy3} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <div className={styles.puppy4} />
      </Grid>
    </Grid>
  </div>
);

export default Home;
