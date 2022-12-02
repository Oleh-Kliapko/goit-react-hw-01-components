import css from '../ProfileDescription/ProfileDescription.module.css';
import PropTypes from 'prop-types';

export const ProfileDescription = ({
  userAvatar,
  userName,
  userTag,
  userLocation,
}) => {
  return (
    <div className={css.description}>
      <img src={userAvatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{userTag}</p>
      <p className={css.location}>{userLocation}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
};
