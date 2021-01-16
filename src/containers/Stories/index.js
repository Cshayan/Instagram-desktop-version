import React from 'react';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import { photosArray } from './images';
import styles from './index.module.css';

const Stories = () => (
  <div className={styles.storiesCont}>
    <div className={styles.storiesHeader}>
      <h2>Stories</h2>
      <div className={styles.watchAllCont}>
        <i className="material-icons white small outline">play_circle</i>
        <p>Watch all</p>
      </div>
    </div>
    <div className={styles.storiesImageCont}>
      {photosArray.map((item) => (
        <ProfileImage image={item.photo} key={item.id} />
      ))}
    </div>
  </div>
);

export default Stories;
