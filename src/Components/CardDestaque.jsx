import Buttons from "./Buttons"
import { styled } from "styled-components"

let  StyledCardDestaque = styled.div`

.tituloCards {
    margin: 40px 0px 0px 95px;
    font-weight: bold;
    color: var(--dark-gray-2);
}
.cards {
    margin: 20px 90px;

    h1 {
    color: var(--dark-gray-2);
    font-size: 25px;
    margin: 20px 0px;
    font-weight: bold;
    }
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

        h3 {
            margin: 10px 0px;
            font-weight: bold;
            font-size: 32px;
        }

        button {
            font-size: 18px;
            
        }
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
    background-image: url('img/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt.png');
}
.card2 {
    background-position: 162px -1px;
    background-repeat: no-repeat;
    background-image: url('img/tenis.png');
}
.card3{
    background-position: 178px -1px;
    background-repeat: no-repeat;
    background-image: url('img/fones.png');
}







`


export default function CardDestaque({produto}){
    return(
    
        <>
            <h1 class="tituloCards">Coleções em destaque</h1>

            <div class="d-flex cards">

                <div class="myCard card1">
                    <div>
                        <p class="descontos">30% OFF</p>

                        <h3>Novo drop Supreme</h3>

                        <button class="button2">Comprar</button>
                    </div>
                </div>
                <div class="myCard card2">
                    <div>
                        <p class="descontos">30% OFF</p>

                        <h3>Coleção Adidas</h3>

                        <button class="button2">Comprar</button>
                    </div>
                </div>
                <div  class="myCard card3">
                    <div>
                        <p class="descontos">30% OFF</p>

                        <h3>Novo Beats Bass</h3>

                        <button class="button2">Comprar</button>
                    </div>
                </div>
            </div>   
        </>
    
    )
}