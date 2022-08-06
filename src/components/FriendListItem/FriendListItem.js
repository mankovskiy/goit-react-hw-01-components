import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name }) {
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
