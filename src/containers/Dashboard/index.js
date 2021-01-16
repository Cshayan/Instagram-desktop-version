import React from 'react';
import SideNav from 'containers/SideNavbar';
import DashboardContent from './dashboard-content';
import styles from './index.module.css';

const index = () => (
  <div className={styles.dashboardContainer}>
    <SideNav />
    <DashboardContent />
  </div>
);

export default index;
