import React from 'react';
import styled from 'styled-components'; // Importe correto do styled-components

let StyledTitle = styled.div`

display: flex;
justify-content: center;
padding: 50px;
background-color: #F9F8FE;

`

export default function PaginaNaoEncontrada() {
  return (
    <StyledTitle>
      <h1>Página não encontrada : (</h1>
    </StyledTitle>
  );
}



