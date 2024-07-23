import React, { Children, useState } from "react";
import { createContext } from "react";
import tenisCardUm from'../assets/tenisCardUm.png'


export let produtosContexto = createContext()

export function MeuContextoProvider({children}){
    let Produtos = [{
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    price: '$200',
    priceDiscount:'$149.9',
    desconto:'30% OFF',
    imagem: tenisCardUm,
    
  },
  {
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    price: '$200',
    priceDiscount:'$149.9',
    desconto:'30% OFF',
    imagem: tenisCardUm,
    

  },
  {
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    price: '$200',
    imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',

  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
},
{
  nome: 'Tênis',
  descricao:'K-Swiss V8 - Masculino',
  price: '$200',
  
  imagem: tenisCardUm
}
  
]
    const [produtos, setProdutos] = useState(Produtos) 
    
    return (

    <produtosContexto.Provider value={{produtos, setProdutos}}>
        {children}
    </produtosContexto.Provider>


)
}

