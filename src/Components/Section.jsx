
import { NavLink, Link } from 'react-router-dom';
import '../Components/Section.css'; // Ajuste o caminho correto para o arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import Laye1 from '../assets/Laye1.png'; // Exemplo de caminho relativo
import { Cores } from './Cores';

import React from 'react';

export default function Section() {
  return (
    <div class="container">
      <img src={Laye1} class='img-fluid' alt='Logo' />
  <div class="text-container">
    <h3 class='section-title'>oferta especial</h3>
    <h1 class='titleAirJordan'>Air Jordan edição de colecionador</h1>
    <p class='sectionDescrption'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip
    </p>
    <Link to="src\pages\PaginaNaoEncontrada.jsx">
      <button className='btn'>Ver Oferta</button>
    </Link>
  </div>
  
</div>
  )
}


