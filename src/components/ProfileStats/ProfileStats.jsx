import css from 'components/ProfileStats/ProfileStats.module.css';
import PropTypes from 'prop-types';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css['stats-info']}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css['stats-info']}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css['stats-info']}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};