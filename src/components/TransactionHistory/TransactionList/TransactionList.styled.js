import styled from '@emotion/styled';

export const TableWrapper = styled.table`
  font-size: 20px;
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.heading};
  color: ${p => p.theme.colors.secondary};
`;

export const TableColumnName = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
`;
