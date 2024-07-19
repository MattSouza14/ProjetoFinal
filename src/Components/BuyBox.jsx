import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/BuyBox.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

export default function BuyBox({ name, reference, pontuacao, rating, price , priceDiscount, description }){
   
    return (
        
            <div className="buybox">
                <div className="descricao-principal">
                    <h2 className="descricao-titulo">{name}</h2>
                    <p className="descricao-referencia">{reference}</p>

                    <div className="avaliacao-main">
                        <div className="avaliacao-stars">
                            <img className='star' src='src\assets\Stars Product Option\Star 01.svg'></img>
                            <img className='star' src='src\assets\Stars Product Option\Star 01.svg'></img>
                            <img className='star' src='src\assets\Stars Product Option\Star 01.svg'></img>
                            <img className='star' src='src\assets\Stars Product Option\Star 01.svg'></img>
                            <img className='star' src='src\assets\Stars Product Option\Star 02.svg'></img>
                            
                        </div>
                        <img className='pontuacao' src="src\assets\Stars Product Option\pontuacao.svg"></img>
                        
                        <span className="avaliacao-rating">{rating} (avaliações) </span>


                        
                    </div>

                    <div className="price-container">
                       
                        <div>
                             <span className="price-cifrao">R$</span> 
                            <span className="price-original" style={{ textDecoration: 'line-through', marginLeft: '8px' }}> {price}</span>
                            <span className="price-discount" style={{ marginLeft: '16px' }}>R$ {priceDiscount}</span>
                        </div>
                          
                            {/* <span className="price-cifrao">R$ {price}</span> */}
                        
                    </div>
                    <div className="tamanho-container">
                <p className="descricao-sub">Tamanho</p>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button className="btn btn-secondary  tamanho" name="options" id="option1" autocomplete="off"> 39 </button>
                   
                        <button className="btn btn-secondary  tamanho" name="options" id="option2" autocomplete="off"> 40 </button>
                    
                        <button className="btn btn-secondary  tamanho" name="options" id="option3" autocomplete="off" checked> 41 </button>
                  
                        <button className="ativo" name="options" id="option4" autocomplete="off"> 42 </button>
                
                        <button className="btn btn-secondary tamanho" name="options" id="option5" autocomplete="off"> 43 </button>
                    
                </div>
            </div>

                    <div className="produto-container">
                        <p className="descricao-sub">Descrição do produto</p>
                        <p className="texto-descricao">{description}</p>
                    </div>
                    <div className="cores-container">
                        <p className="descricao-sub">Cores</p>
                        <div className="cores-opcoes">
                            <button className="cor-opcao" style={{ backgroundColor: '#6FEEFF' }}></button>
                            <button className="cor-opcao"  style={{ backgroundColor: '#FF6969' }}></button>
                            <button className="cor-opcao" style={{ backgroundColor: '#5E5E5E' }}></button>
                            <button className="cor-opcao" style={{ backgroundColor: '#6D70B7' }}></button>
                        </div>
                    </div>

                    <button class="botao-comprar">COMPRAR</button>
                </div>
            </div>


            )
    
}



