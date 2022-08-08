import styled from 'styled-components';

export const FriendListItemStyle = styled.p`
  margin-left: 5px;
`;

export const Chip = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';

      default:
        return 'orange';
    }
  }};
`;
