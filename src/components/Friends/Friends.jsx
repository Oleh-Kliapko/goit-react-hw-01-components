import friends from '../../components/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import { Box } from '../Box';
import { theme } from '../../theme';

export const Friends = () => {
  return (
    <Box
      width={400}
      bg={theme.colors.wrapper}
      borderRadius="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ml="auto"
      mr="auto"
      mb={5}
      p={5}
      as="section"
    >
      <Box
        width="100%"
        pb={4}
        textAlign="center"
        m={0}
        color={theme.colors.heading}
        as="h2"
      >
        USER'S FRIENDS
      </Box>
      <FriendsList friends={friends} />
    </Box>
  );
};
