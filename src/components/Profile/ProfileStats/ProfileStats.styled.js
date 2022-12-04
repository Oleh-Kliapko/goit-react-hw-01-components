import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgb(217, 213, 213, 0.5);
  list-style: none;
`;

export const StatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 2px solid rgb(255, 255, 255);
  background-color: rgb(195, 216, 218);
  padding-left: 41px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:nth-last-of-type(1) {
    border-right: none;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: rgb(103, 102, 102);
  margin: 0;
`;

export const Quantity = styled.p`
  font-size: 20px;
  font-style: 'Roboto';
  margin: 0;
`;
