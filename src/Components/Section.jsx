
import { Link } from 'react-router-dom';
import '../Components/Section.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import tenis from '../assets/tenis.png'
import Buttons from './Buttons'

import '/src/assets/Ellipse11.png'

import React from 'react';
import styled from 'styled-components';

let StyledJordan = styled.div`
  .container {
  width: 1340px; 
  background: var(--white);
  display: flex; 
  align-items: center;
  padding: 20px; 
}

.jordan {
  width: 400px;
  margin-top: 20px;
  margin-left: 40px;
}

.text-container {
  flex: 1;
  display: flex; 
  flex-direction: column; 
  margin-left: 50px;
  margin-right: 50px;
}

.section-title {
  font-size: 18px; 
  color: var(--primary); 
  margin-bottom: 10px; 
}

.titleAirJordan {
  font-size: 32px; 
  color: var(--darkgray2);
  margin-top: 0; 
  margin-bottom: 10px; 
}

.sectionDescrption {
  font-size: 16px; 
  line-height: 1.5; 
  color: var(--darkgray2);
  margin-top: 5px; 
}

.imagem {

  margin-top: 100px;
  
  background-image: url('/src/assets/Ellipse11.png');
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: center;
  width: 470px;
  height: 400px;
}




`

export default function Section() {
  return (
    <div class="container">
          <img src={tenis} class='img-fluid' alt='tenis' />
      <div class="text-container">
          <h3 class='section-title'>oferta especial</h3>
          <h2 class='titleAirJordan'>Air Jordan edição de colecionador</h2>
        <p class='sectionDescrption'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </p>
        <br></br>
            <Link to="src\pages\PaginaNaoEncontrada.jsx">
              <Buttons type={'PrimaryButton'} content={'Ver Oferta'}></Buttons>
            </Link>
      </div>
  
    </div>
  )
}


