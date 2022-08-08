import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  Chip,
} from '../FriendListItem/FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Chip isOnline={isOnline}>{isOnline}</Chip>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendListItemStyle>{name}</FriendListItemStyle>
    </>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
