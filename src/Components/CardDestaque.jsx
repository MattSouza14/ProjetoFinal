import { Link } from "react-router-dom"
import Buttons from "./Buttons"
import { styled } from "styled-components"
// import star from '../assets/Starwars.png'
// import tenis from '../assets/tenispreto.png'
// import fone from '../assets/fonedest.png'




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
        flex-wrap: wrap

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
        margin: 5px 6px;
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
        background-image: url('/images/Starwars.png');
    }
    .card2 {
        background-position: 162px -1px;
        background-repeat: no-repeat;
        background-image: url('/images/tenispreto.png');
    }
    .card3{
        background-position: 178px -1px;
        background-repeat: no-repeat;
        background-image: url('/images/fonedest.png');
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
                        <Link to="/ProductView">
                            <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                        </Link>
                    </div>
                </div>
                <div className="myCard card2">
                    <div>
                        <p className="descontos">30% OFF</p>

                        <h3>Coleção Adidas</h3>
                        <Link to="/ProductView">
                            <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                        </Link>
                    </div>
                </div>
                <div  className="myCard card3">
                    <div>
                        <p className="descontos">30% OFF</p>

                        <h3>Novo Beats Bass</h3>

                        <Link to="/ProductView">
                            <Buttons type={'SecondaryButton'} content={'Comprar'}></Buttons>
                        </Link>
                    </div>
                </div>
            </div>   
        </StyledCardDestaque>
    
    )
}