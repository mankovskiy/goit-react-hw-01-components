import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendListStyle,
} from '../FriendListItem/FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItemStyle key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </FriendListItemStyle>
      ))}
    </FriendListStyle>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
