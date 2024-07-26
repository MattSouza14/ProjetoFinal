
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import tenis from '../assets/tenis.png'
import Buttons from './Buttons'

import Ellipse from '/src/assets/Ellipse11.png'

import React from 'react';
import styled from 'styled-components';
import { Cores } from './Cores';

let StyledJordan = styled.div`

  .container {
    width: 1340px; 
    background: ${Cores.white};
    display: flex; 
    align-items: center;
    padding: 20px; 
  }
  .img-fluid {
    max-width: 30%;
    margin-right: 30px;
    margin-top: 30px;
  }

  .ellipse {
    max-width: 40%;
    margin-right: 20px;
    margin-top: 10px;
  }

  .text-container {
    flex: 1;
    display: flex; 
    flex-direction: column; 
  }

  .section-title {
    font-size: 14px; 
    font-weight: bold;
    color: ${Cores.primary}; 
    margin-bottom: 10px; 
  }

  .titleAirJordan {
    font-size: 48px; 
    color: ${Cores.darkGray2};
    margin-top: 0; 
    margin-bottom: 10px; 
    font-weight: bold;
  }

  .sectionDescrption {
    font-size: 16px; 
    line-height: 1.5; 
    color: ${Cores.darkGray3};
    margin-top: 5px; 
  }

  .botao {
    background-image: ${Ellipse};
    width: 500;
  }


`

export default function Section() {
  return (
  <StyledJordan>
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
</StyledJordan>
  )
}


