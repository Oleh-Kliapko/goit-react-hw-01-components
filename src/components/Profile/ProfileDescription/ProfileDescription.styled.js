import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 40px;
  padding-bottom: 20px;
  gap: 10px;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgb(217, 213, 213, 0.5);
`;

export const Avatar = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin: 0;
  background-color: rgb(217, 213, 213, 0.5);
`;

export const Name = styled.p`
  font-size: 32px;
  letter-spacing: 1.2;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 18px;
  letter-spacing: 1.1;
  color: rgb(103, 102, 102);
  margin: 0;
`;

export const Location = Tag;
