import React from 'react';
import Button from 'components/Button/Button';
import styles from './index.module.css';

const DashboardHeader = () => (
  <div className={styles.headerContainer}>
    <input type="text" placeholder="Search" className={styles.input} />
    <div>
      <i className="material-icons white small">notifications</i>
      <i className="material-icons white small">send</i>
      <Button />
    </div>
  </div>
);

export default DashboardHeader;
