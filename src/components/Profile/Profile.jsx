import user from '../../components/user.json';
import css from './ProfileWrapper.module.css';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';
import { ProfileStats } from './ProfileStats/ProfileStats';

export const Profile = () => {
  const {
    username,
    avatar,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.profile}>
      <ProfileDescription
        userName={username}
        userAvatar={avatar}
        userTag={tag}
        userLocation={location}
      />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </div>
  );
};
