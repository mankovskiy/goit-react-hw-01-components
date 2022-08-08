import PropTypes from 'prop-types';
import { FriendListItemStyle } from '../FriendListItem/FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItemStyle key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </FriendListItemStyle>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
