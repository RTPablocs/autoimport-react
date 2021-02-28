import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Container = styled.div`
  padding: 10px;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 15px;

`;

export const Card = styled.div`
    width: 280px;
    height: 500px;
    margin: 30px auto;
    border-radius: 25px;
    box-shadow: -8px 8px 1px rgba(0, 0, 0, 0.3);
`;

export const ProductHead = styled(NavLink)`
  text-decoration: none; 
  padding: 20px 20px 5px 20px;
  display: block;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  &:visited{
    color: black;
  }
`;

export const PriceTag = styled.span`
  position: absolute;
  background: #252525;
  padding: 7px 20px;
  text-align: center;
  display: inline-block;
  font-size: 24px;
  font-weight: 200;
  color: #fff;
  border-radius: 7px;
  margin-top: 390px;
`;

export const TextContainer = styled.p`
  text-align: center;
  display: inline-block;
`;