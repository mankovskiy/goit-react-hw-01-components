import styled from 'styled-components';

export const UserInfo = styled.div`
  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};
  /* border-radius: ${p => p.theme.radii.normal}; */
  background-color: ${p => p.theme.colors.muted};
  text-align: center;
  padding: 20px 10px;
`;

export const UserPhoto = styled.img`
  border-radius: ${p => p.theme.radii.round};
  margin-left: auto;
  margin-right: auto;
`;
export const UserName = styled.p`
  margin-top: 20px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const UserTag = styled.p`
  margin-top: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const UserLocation = styled.p`
  margin-top: 10px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatsContainer = styled.ul`
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
`;
export const StatsItem = styled.li`
  padding: 5px;
  display: flex;
  /* border: ${p => p.theme.borders.normal}; */
  flex-direction: column;
`;

export const UserFollowers = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
`;
export const UserFollowersStats = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: 4px;
  text-align: center;
`;
