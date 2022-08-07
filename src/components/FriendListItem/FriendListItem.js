import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendListItemChip,
} from '../FriendListItem/FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <FriendListItemChip isOnline={isOnline}>{isOnline}</FriendListItemChip>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendListItemStyle>{name}</FriendListItemStyle>
    </>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
