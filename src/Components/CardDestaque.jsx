import Buttons from "./Buttons"
import { styled } from "styled-components"


let  StyledCardDestaque = styled.div`

    .tituloCards {
        margin: 40px 0px 0px 95px;
        font-weight: bold;
        color: var(--dark-gray-2);
    }
    .cards {
        
        display: flex;
        width: auto;
        margin: 20px 90px;

    }

    h1 {
        color: var(--dark-gray-2);
        font-size: 25px;
        margin: 20px 0px;
        font-weight: bold;

    } 
    h3 {
        margin: 10px 0px;
        font-weight: bold;
        font-size: 32px;
    }  
    .myCard {
        height: 251px;
        width: 405px;
        margin: 0px 6px;
        border-radius: 8px;
        background-color: #D8E3F2;
        
        div {

                    width: 225px;
                    padding-left: 30px;
                    padding-top: 35px;
        }
    }

    .descontos {
        display: flex;
        width: 100px;
        margin: 0px;
        border-radius: 29px;
        padding: 6px;
        color: var(--dark-gray-2);
        font-size: 14px;
        font-weight: bold;
        background-color: #E7FF86;
        justify-content: center;
    }

    .card1 {
        background-position: 162px 7px;
        background-repeat: no-repeat;
        background-image: url(src/assets/Starwars.png);
    }
    .card2 {
        background-position: 162px -1px;
        background-repeat: no-repeat;
        background-image: url(src/assets/tenisCardUm.png);
    }
    .card3{
        background-position: 178px -1px;
        background-repeat: no-repeat;
        background-image: url(src/assets/fonedest.png);
    }
`


export default function CardDestaque(){
    return(
    
        <StyledCardDestaque>
            <h1 className="tituloCards">Coleções em destaque</h1>

            <div className="cards">

                <div className="myCard card1">
                    <div>
                        <p className="descontos">30% OFF</p>

                        <h3>Novo drop Supreme</h3>

                        <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                    </div>
                </div>
                <div class="myCard card2">
                    <div>
                        <p class="descontos">30% OFF</p>

                        <h3>Coleção Adidas</h3>

                        <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                    </div>
                </div>
                <div  class="myCard card3">
                    <div>
                        <p class="descontos">30% OFF</p>

                        <h3>Novo Beats Bass</h3>

                        <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                    </div>
                </div>
            </div>   
        </StyledCardDestaque>
    
    )
}