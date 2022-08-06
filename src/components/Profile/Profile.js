import { SiMaildotru } from 'react-icons/si';
import PropTypes from 'prop-types';
import {
  StatsContainer,
  StatsItem,
  UserInfo,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  UserFollowers,
  UserFollowersStats,
} from '../Profile/Profile.styled';

export function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <UserInfo>
        <UserPhoto src={avatar} alt="User avatar" width={100} />
        <UserName>{username}</UserName>
        <UserTag>
          <SiMaildotru size={12} />
          {tag}
        </UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>
      <StatsContainer>
        <StatsItem>
          <UserFollowers>Followers</UserFollowers>
          <UserFollowersStats>{followers}</UserFollowersStats>
        </StatsItem>
        <StatsItem>
          <UserFollowers>Views</UserFollowers>
          <UserFollowersStats>{views}</UserFollowersStats>
        </StatsItem>
        <StatsItem>
          <UserFollowers>Likes</UserFollowers>
          <UserFollowersStats>{likes}</UserFollowersStats>
        </StatsItem>
      </StatsContainer>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
