import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: auto;
  color: ${p => p.theme.colors.secondary};
`;

export const Label = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 22px;
  font-weight: bold;
`;
