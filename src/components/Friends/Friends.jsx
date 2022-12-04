import friends from '../../components/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import { Title } from './Friends.styled';
import { Box } from '../Box';
import { theme } from '../../theme';

export const Friends = () => {
  return (
    <Box
      width={400}
      p={5}
      bg={theme.colors.wrapper}
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ml="auto"
      mr="auto"
      mb={5}
      as="section"
    >
      <Title>USER'S FRIENDS</Title>
      <FriendsList friends={friends} />
    </Box>
  );
};
