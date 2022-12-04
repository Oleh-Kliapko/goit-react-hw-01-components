import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './ProfileDescription.styled';

export const ProfileDescription = ({
  userAvatar,
  userName,
  userTag,
  userLocation,
}) => {
  return (
    <Description>
      <Avatar src={userAvatar} alt="User avatar" />
      <Name>{userName}</Name>
      <Tag>@{userTag}</Tag>
      <Location>{userLocation}</Location>
    </Description>
  );
};

ProfileDescription.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
};
