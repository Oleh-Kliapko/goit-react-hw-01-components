import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  margin: 0;
  width: 100%;
  gap: 30px;
  background-color: white;
  box-shadow: 2px 3px 5px gray;
`;

export const Stats = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Name = styled.p`
  font-size: 20px;
`;
