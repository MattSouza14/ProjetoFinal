import styled from "styled-components"
import { Cores } from "./Cores"

let StyledDiv = styled.div`

   background-color: #F9F8FE;
   display: flex;
   flex-direction: column;
   align-items: center;
   .tituloIcones {
      align-self: center;
      margin-top: 80px;
      margin-bottom: 20px;
      font-weight: 700;
      color: ${Cores.darkGray2};
   }
   .icones {
      display: flex;
      justify-content: space-between;
      align-self: center;
      width: 700px;
      margin-bottom: 100px;
      /* o sombreamento da camiseta esta dentro da tag no html */
      
      div {

         display: flex;
         flex-direction: column;
         align-items: center;

         .sombra {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07); 
            padding: 20px;
         }
         div {
            width: 100px;
            height: 100px;
            background-color: white;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
               width: 64px;
               height: 64px;
            }
         }

         p {
            font-weight: 700;
            font-size: 14px;
            color: ${Cores.darkGray2};
            margin-top: 15px;
         }
      }
   }

`

export default function ColecoesDestaque2 () {

   return (
   <StyledDiv>
      <h1 className="tituloIcones">Coleções em destaque</h1>
      <div className="icones">
         
         <div>
            <div className="sombra">
               <img src="./src/assets/tshirtIcon.png" alt="tshirtIcon"/>
            </div>
            <p>Camisetas</p>
         </div>
         <div>
            <div>
               <img src="./src/assets/calcaIcon.png" alt="calcaIcon"/>
            </div>
            <p>Calças</p>
         </div>
         <div>
            <div>
               <img src="./src/assets/calcaIcon.png" alt="calcaIcon"/>
            </div>
            <p>Bonés</p>
         </div>
         <div>
            <div>
               <img src="./src/assets/fonesIcon.png" alt="fonesIcon"/>
            </div>
            <p>Headphones</p>
         </div>
         <div>
            <div>
               <img src="./src/assets/sneakersIcon.png" alt="sneakersIcon"/>
            </div>
            <p>Tênis</p>
         </div>
      </div>
      
   </StyledDiv>

   )
}