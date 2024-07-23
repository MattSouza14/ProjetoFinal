import ProductCard from "./ProductCard";
import './ProductCard.css'
import { produtosContexto } from "../context/Contexto";
import React, { useContext } from "react";


    
export default function ProductListing({produtos}) {


    return (
     
            <div className="products-grid">
      
            {produtos.map((produto, index) => (
              <ProductCard key={index} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} price={produto.price} priceDiscount={produto.priceDiscount} imagem={produto.imagem}/>
            ))}
            
            </div>
      );
    
 
  }

  // nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} price={produto.price} priceDiscount={produto.priceDiscount} imagem={produto.imagem}