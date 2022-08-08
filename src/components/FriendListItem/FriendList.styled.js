import styled from 'styled-components';

export const FriendListItemStyle = styled.li`
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 4px 9px 17px 5px rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px 10px 5px 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
