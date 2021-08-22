import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//=========================================== component ===========================================
const Card = ({property}) => {
  const {picture} = property;
  return (
      <DivWrapper>
          <img src={picture} draggable="false" alt='card' />
      </DivWrapper>
  )
}

export default Card;