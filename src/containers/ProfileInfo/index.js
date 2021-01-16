import React from 'react';
import cls from 'classnames';
import styles from './index.module.css';

const profileInfo = [
  { id: 1, label: 'Posts', value: 46 },
  { id: 2, label: 'Followers', value: 982 },
  { id: 3, label: 'Following', value: 526 },
];

const sideLabel = [
  { id: 1, label: 'Feed', iconName: 'widgets' },
  { id: 2, label: 'Explore', iconName: 'search' },
  { id: 3, label: 'Notifications', iconName: 'notifications' },
  { id: 4, label: 'Direct', iconName: 'send' },
  { id: 5, label: 'IG TV', iconName: 'live_tv' },
  { id: 6, label: 'Stats', iconName: 'bar_chart' },
  { id: 7, label: 'Settings', iconName: 'settings' },
];

const ProfileInfo = () => (
  <div className={styles.profileInfoCont}>
    <p className={styles.profileName}>Michaelle Doe</p>
    <p className={styles.profileAt}>@doemichael</p>
    <div className={styles.infoCont}>
      {profileInfo.map((info) => (
        <div
          key={info.id}
          className={cls(styles.info, {
            [styles.verticalDivider]: info.id !== 3,
          })}
        >
          <p className={styles.infoValue}>{info.value}</p>
          <p className={styles.infoLabel}>{info.label}</p>
        </div>
      ))}
    </div>
    <div className={styles.sideListCont}>
      {sideLabel.map((item) => (
        <div key={item.id} className={styles.labelList}>
          <i className="material-icons white small">{item.iconName}</i>
          <p className={styles.sideListLabel}>{item.label}</p>
        </div>
      ))}
    </div>
    <div className={styles.logoutCont}>
      <i className="material-icons white small">exit_to_app</i>
      <p className={styles.sideListLabel}>Logout</p>
    </div>
  </div>
);

export default ProfileInfo;
