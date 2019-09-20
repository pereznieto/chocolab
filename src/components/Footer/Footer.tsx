import { Container } from '@material-ui/core';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <Container maxWidth='lg' className={styles.container}>
      <div className={styles.text}>
        <p>
          <strong>Disclaimer:</strong> Content does not belong to me. It was retrieved
          from{' '}
          <a
            href='https://www.thelabradorsite.com/chocolate-labrador/'
            target='_blank'
            rel='noopener noreferrer'
          >
            thelabradorsite
          </a>
          , as well as{' '}
          <a
            href='http://mentalfloss.com/article/63891/12-friendly-facts-about-labrador-retrievers'
            target='_blank'
            rel='noopener noreferrer'
          >
            mentalfloss
          </a>
          , and even{' '}
          <a
            href='https://en.wikipedia.org/wiki/Labrador_Retriever'
            target='_blank'
            rel='noopener noreferrer'
          >
            Wikipedia
          </a>
          .
        </p>
        <p>
          All images are full of cuteness and copyrght-free, sourced from the friendly
          people at{' '}
          <a
            href='https://unsplash.com/s/photos/labrador'
            target='_blank'
            rel='noopener noreferrer'
          >
            Unslpash
          </a>
          .
        </p>
        <br />
        <p>
          This site was built using{' '}
          <a
            href='https://create-react-app.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>{' '}
          and{' '}
          <a href='https://material-ui.com' target='_blank' rel='noopener noreferrer'>
            Material UI
          </a>
          . Have a look at the code behind the site! All the source code is{' '}
          <a
            href='https://github.com/pereznieto/chocolab'
            target='_blank'
            rel='noopener noreferrer'
          >
            on GitHub
          </a>
          .
        </p>
        <br />
        <p>
          Site built by <strong>Fernando Macias Pereznieto</strong>. You can drop me a
          line at: <a href='mailto:m@cias.pro'>m@cias.pro</a>
        </p>
      </div>
      <div className={styles.paws} role='img' aria-label='big paw prints'>
        🐾
      </div>
    </Container>
  </div>
);

export default Footer;
