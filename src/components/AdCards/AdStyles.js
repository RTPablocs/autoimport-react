import styled from 'styled-components'

export const Container = styled.div`
display: grid;
width: max-available;
grid-template-columns: repeat(6, 1fr);
grid-gap: 15px;

`;

export const Card = styled.div`
    width: 280px;
    height: 500px;
    margin: 30px auto;
    border-radius: 25px;
    box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
`;

export const ProductHead = styled.span`
  padding: 20px 20px 5px 20px;
  display: block;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const PriceTag = styled.span`
  position: absolute;
  background: #11e95b;
  padding: 7px 20px;
  text-align: center;
  display: inline-block;
  font-size: 24px;
  font-weight: 200;
  color: #fff;
  border-radius: 7px;
  margin-top: -13px;
  margin-left: -5px;
  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
`;
