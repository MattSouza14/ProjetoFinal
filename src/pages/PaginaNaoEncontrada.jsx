import React from 'react';
import styled from 'styled-components';

const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`

const Titulo = styled.h1`
  font-weight: bold;
  font-size: 40px; 
`

export default function PaginaNaoEncontrada() {
  return (
    <TituloContainer>
      <Titulo>Página não encontrada</Titulo>
    </TituloContainer>
  );
}



