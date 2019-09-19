import { Container } from '@material-ui/core';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <Container maxWidth='lg'>
      <p>
        <strong>Disclaimer:</strong> Content does not belong to me. It was retrieved from{' '}
        <a href='https://www.thelabradorsite.com/chocolate-labrador/' target='_blank'>
          https://www.thelabradorsite.com/chocolate-labrador/
        </a>
      </p>
      <p>
        All images are full of cuteness and copyrght-free, sourced from{' '}
        <a href='https://unsplash.com/s/photos/labrador' target='_blank'>
          Unslpash
        </a>
        .
      </p>
      <p>
        Built using{' '}
        <a href='https://create-react-app.dev' target='_blank'>
          React
        </a>{' '}
        and{' '}
        <a href='https://material-ui.com' target='_blank'>
          Material UI
        </a>
        . Please feel free to see how this site was built:{' '}
        <a href='https://github.com/pereznieto/chocolab' target='_blank'>
          source code on GitHub
        </a>
        .
      </p>
      <br />
      <p>
        Site built by <strong>Fernando Macias Pereznieto</strong>
      </p>
      <p>
        Contact me: <a href='mailto:m@cias.pro'>m@cias.pro</a>
      </p>
    </Container>
  </div>
);

export default Footer;
