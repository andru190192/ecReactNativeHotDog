import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 100%;
  height: 60%;
  margin: 5px;
`;

export const InfoContainer = styled.View`
flex-direction: row;
  background-color: ${props => props.isHotDog ? 'green' : 'red'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;