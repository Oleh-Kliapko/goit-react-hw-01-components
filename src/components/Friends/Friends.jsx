import friends from '../../components/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import { Section, Title } from './Friends.styled';

export const Friends = () => {
  return (
    <Section>
      <Title>USER'S FRIENDS</Title>
      <FriendsList friends={friends} />
    </Section>
  );
};
