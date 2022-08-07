import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const SectionStat = styled.div`
  text-align: center;
  background-color: ${p => p.theme.colors.background};
`;
