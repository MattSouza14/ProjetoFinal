import styled from "styled-components";
import ProductCard from "./ProductCard";
import { produtosContexto } from "../context/Contexto";
import React, { useContext } from "react";


let StyledProductListining = styled.div`

.products-grid{
    display: grid;
    grid-template-columns: 292px 292px 292px;

    gap: 14px;
    margin-top: 40px;
}
`
export default function ProductListing({produtos}) {


    return (
    
            <StyledProductListining>
              <div className="products-grid">
      
                {produtos.map((produto, index) => (
                  <ProductCard key={index} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} price={produto.price} priceDiscount={produto.priceDiscount} imagem={produto.imagem}/>
                ))}
              </div>
            </StyledProductListining>
      );
    
 
  }

  // nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} price={produto.price} priceDiscount={produto.priceDiscount} imagem={produto.imagem}