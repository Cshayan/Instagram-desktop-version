import React from 'react';
import Logo from 'components/Logo/Logo';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import ProfilePic1 from 'assets/profile-pic-1.jpg';
import ProfileInfo from 'containers/ProfileInfo';
import styles from './index.module.css';

const index = () => (
  <div className={styles.navbarContainer}>
    <Logo />
    <ProfileImage image={ProfilePic1} />
    <ProfileInfo />
  </div>
);

export default index;
