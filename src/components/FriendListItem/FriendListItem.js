export function FriendListItem({ avatar, name }) {
  return (
    <>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
  );
}
