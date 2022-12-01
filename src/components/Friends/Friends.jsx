import friends from '../../components/friends.json';
import css from './Friends.module.css';
import { FriendsList } from '../FriendsList/FriendsList';

export const Friends = () => {
  return (
    <section className={css.friends}>
      <h2 className={css.title}>USER'S FRIENDS</h2>
      <FriendsList friends={friends} />
    </section>
  );
};
