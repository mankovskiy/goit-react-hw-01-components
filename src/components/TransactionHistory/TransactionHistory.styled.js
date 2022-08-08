import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
`;

export const TableDescrString = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const TableItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;
