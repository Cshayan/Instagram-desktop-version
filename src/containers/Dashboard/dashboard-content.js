import React from 'react';
import DashboardHeader from 'containers/Header';
import Stories from 'containers/Stories';
import Feed from 'containers/Feed';
import styles from './index.module.css';

const DashboardContent = () => (
  <div className={styles.dashboardContent}>
    <DashboardHeader />
    <Stories />
    <Feed />
  </div>
);

export default DashboardContent;
