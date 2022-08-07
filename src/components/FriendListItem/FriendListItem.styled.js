import styled from 'styled-components';

export const FriendListItemStyle = styled.p`
  margin-left: 5px;
`;

export const FriendListItemChip = styled.span`
  justify-content: start;
  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  /* background-color: red; */
  ${p => {
    console.log(p.isOnline);
  }}
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';

      default:
        return 'orange';
    }
  }};
`;
