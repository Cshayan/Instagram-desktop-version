import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileImage.module.css';

const ProfileImage = (props) => {
  const { image } = props;
  return (
    <div className={styles.profileImgCont}>
      <img src={image} alt="avatar" className={styles.profileImg} />
    </div>
  );
};

ProfileImage.propTypes = {
  image: PropTypes.any.isRequired,
};

export default ProfileImage;
