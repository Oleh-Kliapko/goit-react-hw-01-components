import PropTypes from 'prop-types';
import { Stats, StatsInfo, Label, Quantity } from './ProfileStats.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <Stats>
      <StatsInfo>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsInfo>
      <StatsInfo>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsInfo>
      <StatsInfo>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsInfo>
    </Stats>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
