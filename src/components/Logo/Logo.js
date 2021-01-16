import React from 'react';
import styles from './Logo.module.css';

const Logo = () => (
  <div className={styles.logoContainer}>
    <img
      src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png"
      alt="logo"
      className={styles.instaLogo}
    />
    {/* <img src={InstaText} alt="insta-text" className={styles.instaTextImg} /> */}
  </div>
);

export default Logo;
