import styled from 'styled-components'
import { Cores } from './Cores'


let StyledFilterGroup = styled.div`

:root {
    font-size: 62.5%;
}
.box{
    width: 308px;
    height: 750px;
    background: ${Cores.white};
    padding: 30px;
    border-radius: 4px;
    margin-top: 25px;
}
.box h2{
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: ${Cores.darkGray2};
    margin: 20px auto;
}
.box h3{
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 0.75px;
    color: ${Cores.darkGray2};
    margin-top: 20px;
}
.form-line{
    width: 248px;
    border: 1px solid ${Cores.lightGray2};
}
.form-container{
    margin: 56px 0 auto 0;
}
label{
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.75;
    color: ${Cores.darkGray2};
}
input[type="checkbox"]{
    width: 22px;
    height: 22px;
    padding: 6.5px;
    margin: auto 10px 10px auto;
    border: 1px solid ${Cores.darkGray3};
}
input[type="checkbox"]:checked{
    background-color: ${Cores.primary};
}
input[type="radio"] {
    appearance: none;
    width: 22px;
    height: 22px;
    padding: 6.5px;
    margin: auto 10px 10px auto;
    border: 1px solid ${Cores.darkGray3};
    border-radius: 50%;
    display: inline-block;
    position: relative;
}
input[type="radio"]::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${Cores.primary};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
}
input[type="radio"]:checked::before {
    transform: scale(1.8);
}
input[type="radio"]:checked {
    background-color: ${Cores.white};
    border-color: ${Cores.primary};
}
.form-radio-label {
    margin-right: 16px;
    vertical-align: middle; 
}

`


export default function FilterGroup(){

     return(
          <StyledFilterGroup>
               <div className="form-container">
                    <div className="box">
                         <h2> Filtrar por </h2>
                              <div className="form-line"></div>
                         <form action="">
                              <h3>Marca</h3>    
                              <input className="form-check-input" type="checkbox" value="" id="Adiddas"/>
                              <label className="form-check-label" for="Adiddas">Adiddas </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Calenciaga"/>
                              <label className="form-check-label" for="Calenciaga">Calenciaga </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="K-Swiss"/>
                              <label className="form-check-label" for="K-Swiss">K-Swiss </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Nike"/>
                              <label className="form-check-label" for="Nike">Nike </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Puma"/>
                              <label className="form-check-label" for="Puma">Puma </label>
                         
                         <h3>Categoria</h3> 
                              <input className="form-check-input" type="checkbox" value="" id="Esporte e lazer"/>
                              <label className="form-check-label" for="Esporte e lazer">Esporte e lazer </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Casual"/>
                              <label className="form-check-label" for="Casual">Casual </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Utilitário"/>
                              <label className="form-check-label" for="Utilitário">Utilitário </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Corrida"/>
                              <label className="form-check-label" for="Corrida">Corrida </label>
                    
                         <h3>Gênero</h3>
                              <input className="form-check-input" type="checkbox" value="" id="Masculino"/>
                              <label className="form-check-label" for="Masculino"> Masculino </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Feminino"/>
                              <label className="form-check-label" for="Feminino"> Feminino  </label>
                              <br/>
                              <input className="form-check-input" type="checkbox" value="" id="Unisex"/>
                              <label className="form-check-label" for="Unisex">Unisex </label>
                         
                         
                         
                         <h3> Estado</h3>
                              <input className="form-check-input" type="radio" value="novos" id="novos" name="estado"/>
                              <label className="form-radio-label" for="novos"> Novos</label>
                              <br/>
                              <input className="form-check-input" type="radio" value="usados" id="usados" name="estado"/>
                              <label className="form-radio-label" for="usados">Usados</label>
                         
                         </form>       
            </div>
        </div>
          </StyledFilterGroup>

    
    
)
}