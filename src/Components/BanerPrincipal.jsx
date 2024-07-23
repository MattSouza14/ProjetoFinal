import tenis from '../assets/Tenispag1.png'
import ornament from '../assets/Ornament11.png'
import Buttons from './Buttons'
import styled from 'styled-components'


let StyledBanerPrincipal = styled.div`
    .carrosel1 {
    background-color: var(--light-gray-3);
    padding-bottom: 140px;

    .carroselTexto{
        width: 480px;
        margin-top: 120px;
        margin-left: 80px;

        .p1{
            font-weight: bold;
            color: var(--warning);
            font-size: 20px;
        }

        h1{
            font-weight: bold;
            font-size: 65px;
        } 
        
        .p2{
            margin-top: 20px;
            color: var(--dark-gray-2);
            font-size:20px;
        }
    }

    .White-Sneakers1 {
        margin-top: 120px;
        margin-left: 100px;
    }

    .Ornament11 {
        margin-top: 70px;
        padding-left: 40px;
    }
}
`

export default function BanerPrincipal(){

    return(
    <StyledBanerPrincipal>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className=" carrosel1 d-flex">
                        <div className="carroselTexto">
                            <div>
                                <p className="p1">Melhores ofertas personalizadas</p>
                            </div>
                            <div>
                                <h1>Queima de stoque Nike🔥</h1>
                            </div>
                            <div>
                                <p className="p2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                            </div>
                            <div>
                                <Buttons type={'PrimaryButton'} content={'Ver Ofertas'}></Buttons>
                            </div>
                        </div>

                        <div className="White-Sneakers1">
                            <img src={tenis} alt="White-Sneakers" width={"600px"}/>
                        </div>

                        <div>
                            <img src={ornament} alt="Ornament_11" className="Ornament11"/>
                        </div>
                    </div>                    
                </div>
                <div className="carousel-item ">
                    <div className= {" carrosel1 d-flex"}>
                        <div className="carroselTexto">
                            <div>
                                <p className="p1">Melhores ofertas personalizadas</p>
                            </div>
                            <div>
                                <h1>Queima de stoque Nike🔥</h1>
                            </div>
                            <div>
                                <p className="p2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                            </div>
                            <div>
                                <Buttons type={'PrimaryButton'} content={'Ver Ofertas'}></Buttons>
                            </div>
                        </div>

                        <div className="White-Sneakers1">
                            <img src={tenis} alt="White-Sneakers" width={"600px"}/>
                        </div>

                        <div>
                            <img src={ornament} alt="Ornament_11" className="Ornament11"/>
                        </div>
                    </div>                    
                </div>
                <div className="carousel-item ">
                    <div className=" carrosel1 d-flex">
                        <div className="carroselTexto">
                            <div>
                                <p className="p1">Melhores ofertas personalizadas</p>
                            </div>
                            <div>
                                <h1>Queima de stoque Nike🔥</h1>
                            </div>
                            <div>
                                <p className="p2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                            </div>
                            <div>
                                <Buttons type={'PrimaryButton'} content={'Ver Ofertas'}></Buttons>
                            </div>
                        </div>

                        <div className="White-Sneakers1">
                            <img src={tenis} alt="White-Sneakers" width={"600px"}/>
                        </div>

                        <div>
                            <img src={ornament} alt="Ornament_11" className="Ornament11"/>
                        </div>
                    </div>                    
                </div>
            </div>


        </div>
    </StyledBanerPrincipal>
    

    )

}
    