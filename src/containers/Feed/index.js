import React from 'react';
import styles from './index.module.css';
import { feedImageArray } from './images';

const Feed = () => (
  <div className={styles.feedContainer}>
    <div className={styles.feedHeader}>
      <h2>Feed</h2>
      <div className={styles.latestPopular}>
        <p>Latest</p>
        <p>Popular</p>
      </div>
    </div>
    <div className={styles.feedGalleryCont}>
      {feedImageArray.map((item) => (
        <div key={item.id} style={item.columnStyle}>
          <img src={item.photo} alt="feed-pic" className={styles.feedImage} />
          <div className={styles.postCont}>
            <i className="material-icons white small">favorite</i>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Feed;
