import styled from '@emotion/styled';

export const TableValue = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const TableBody = styled.tbody`
  font-size: 16px;

  &:nth-of-type(even) {
    background-color: white;
  }

  &:nth-of-type(odd) {
    background-color: rgb(207, 253, 249);
  }
`;
