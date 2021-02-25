import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  padding: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
`;

export const Card = styled.div`
    display:box;
    text-align: center; 
`;

export const CardTitle = styled.h2`
    text-align: left;
`;

