import styled from '@emotion/styled';

export const TransactionWrapper = styled.section`
  width: 400px;
  padding: 60px;
  background-color: ${p => p.theme.colors.wrapper};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  width: 100%;
  padding-bottom: 30px;
  text-align: center;
  margin: 0;
  color: rgb(110, 110, 110);
`;
