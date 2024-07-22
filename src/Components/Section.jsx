
import { NavLink, Link } from 'react-router-dom';
import '../Components/Section.css'; // Ajuste o caminho correto para o arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import tenis from '../assets/tenis.png'
import  Ellipse11  from '../assets/Ellipse11.png';
import Buttons from './Buttons'
import { Cores } from './Cores';

import React from 'react';

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


