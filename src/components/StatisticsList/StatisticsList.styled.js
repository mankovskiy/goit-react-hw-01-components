import styled from 'styled-components';

export const StatisticsColorList = styled.ul`
  display: flex;
  margin-top: 20px;
`;
export const StatisticsItem = styled.li`
  display: flex;

  background-color: ${getRandomHexColor};
  padding: 20px;

  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
`;
function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(color);

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function changeColor() {
//   refs.body.style.backgroundColor = getRandomHexColor();
// }
