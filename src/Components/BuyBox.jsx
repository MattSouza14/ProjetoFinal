import React, { useState } from 'react';
import styled from 'styled-components';
import { Cores } from './Cores';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import star1 from '../assets/Stars Product Option/Star 01.svg'
import star2 from '../assets/Stars Product Option/Star 01.svg'
import star3 from '../assets/Stars Product Option/Star 01.svg'
import star4 from '../assets/Stars Product Option/Star 01.svg'
import star5 from '../assets/Stars Product Option/Star 02.svg'
import pontos from '../assets/Stars Product Option/pontuacao.svg'


const StyledBuyBox = styled.div`
  .tamanho-opcoes label {
    margin-right: 10px;
  }
  .fas {
    color: ${Cores.warning};
    font-size: 20px;
  }
  .star {
    width: 20px;
    height: 20px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${Cores.lightGray3};
    margin: 0;
    padding: 0;
  }
  .pontuacao {
    margin-right: 10px;
  }

  .buybox {
    width: 750px;
    height:571px;
    margin: 50px auto;
    background-color: ${Cores.white};
    padding: 20px;
    
    
  }

  .descricao-titulo {
    font-size: 32px;
    color: ${Cores.darkGray};
    margin-bottom: 10px;
    font-weight: bold;
  }

  .descricao-referencia {
    font-size: 15px;
    color: ${Cores.darkGray3};
    margin-bottom: 20px;
  }

  .avaliacao-main {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .avaliacao-rating {
    font-size: 14px;
    color: ${Cores.lightGray};
    margin-left: 10px;
  }
  
  .pontuacao {
    font-size: 14px;
    width: 63px;
    height: 23px;
    color: ${Cores.warning};
    font-style: ${Cores.lightGray3};
    margin-left: 15px;
  }
  .price-container {
    font-size: 1.5em;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .price-cifrao {
    color: ${Cores.darkGray2};
    font-weight: bold;
  }
  .price-original {
    font-size: 32px;
    color: ${Cores.darkGray2};
  }
  .price-discount {
    font-size: 16px;
    color: ${Cores.lightGray2};
  }

  .produto-container {
    margin-bottom: 20px;
  }

  .descricao-sub {
    font-size: 14px;
    color: ${Cores.darkGray2};
    margin-top: 10px;
  }

  .texto-descricao {
    font-size: 14px;
    color: ${Cores.darkGray2};
    margin-bottom: 20px;
  }

  .tamanho-opcoes label {
    margin-right: 10px;
  }
  .tamanho {
    border-radius: 4px;
  }

  .botao-comprar {
    background-color: ${Cores.warning};
    color: ${Cores.white};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }
  .tamanho-container {
    margin-top: 20px;
  }

  .tamanho-container .btn-group-toggle .btn {
    margin-right: 10px;
    background-color: ${Cores.white};
    color: ${Cores.darkGray2};
    border: solid ${Cores.darkGray2} 1px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tamanho-container .btn-group-toggle .btn:hover {
    background-color: ${Cores.tertiary};
    color: ${Cores.white};
    border: solid ${Cores.tertiary} 1px;
  }

  .tamanho {
    display: flex;
    justify-content: space-between;
    width: 240px;

    .radio-option {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: solid ${Cores.lightGray} 1px;
      border-radius: 4px;
      cursor: pointer;

      p {
        color: ${Cores.darkGray2};
        font-size: 14px;
        margin-top: 10px;
        font-weight: 700;
      }
    }
    .radio-option.selected {
      background-color: ${Cores.primary};
      border: none;
      p {
        color: white;
      }
    }
  }

  .cores-opcoes {
    display: flex;
    width: 180px;
    justify-content: space-between;

    .cores-option {
      border-radius: 40px;
      display: flex;
      width: 40px;
      margin-bottom: 20px;
      cursor: pointer;

      div {
        border-radius: 50px;
        width: 35px;
        height: 35px;
      }
    }
    .cores-option.selected {
      div {
        border: solid white 2px;
      }
      border: solid ${Cores.primary} 3px;
    }
  }

  .ativo {
    background-color: ${Cores.primary};
    margin-right: 10px;

    color: ${Cores.darkGray2};
    border: solid ${Cores.darkGray2} 1px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default function BuyBox({ name, reference, pontuacao, rating, price, priceDiscount, description }) {
    
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <StyledBuyBox>
      <div className="buybox">
        <div className="descricao-principal">
          <h2 className="descricao-titulo">{name}</h2>
          <p className="descricao-referencia">{reference}</p>

          <div className="avaliacao-main">
            <div className="avaliacao-stars">
              <img className="star" src={star1} alt="Star" />
              <img className="star" src={star2} alt="Star" />
              <img className="star" src={star3} alt="Star" />
              <img className="star" src={star4} alt="Star" />
              <img className="star" src={star5} alt="Star" />
            </div>
            <img className="pontuacao" src={pontos} alt="Pontuacao" />
            <span className="avaliacao-rating">{rating} (avaliações) </span>
          </div>

          <div className="price-container">
            <div>
              <span className="price-cifrao">R$</span>
              <span className="price-original" style={{ textDecoration: 'line-through', marginLeft: '8px' }}>
                {price}
              </span>
              <span className="price-discount" style={{ marginLeft: '16px' }}>
                R$ {priceDiscount}
              </span>
            </div>
          </div>

          <div className="tamanho-container">
            <p className="descricao-sub">Tamanho</p>
            <div className="tamanho">
              {[39, 40, 41, 42, 43].map((size) => (
                <div
                  key={size}
                  className={`radio-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  <p>{size}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="produto-container">
            <p className="descricao-sub">Descrição do produto</p>
            <p className="texto-descricao">{description}</p>
          </div>

          <div className="cores-container">
            <p className="descricao-sub">Cores</p>
            <div className="cores-opcoes">
              {['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'].map((color) => (
                <div
                  key={color}
                  className={`cores-option ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorClick(color)}
                  style={{ backgroundColor: color }}
                >
                  <div></div>
                </div>
              ))}
            </div>
          </div>
            <Link to="src\pages\PaginaNaoEncontrada.jsx">
              <Buttons type={'ShopButton'} content={'COMPRAR'} />
            </Link>
        </div>
      </div>
    </StyledBuyBox>
  );
}
