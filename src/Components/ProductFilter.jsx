import seta from '../assets/setaProdutos.png'
import styled from 'styled-components'
import { Cores } from './Cores'

let StyledProductFilter = styled.div`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: "Inter", sans-serif;
  }

  :root {
      font-size: 62.5%;
  }

  .containerFilter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 40px;
      margin: 0 100px;
      width: 1241px;

  }

  .results {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.75px;
      color: ${Cores.darkGray2};
  }

  .text {
      font-weight: bold;
      color: ${Cores.darkGray2};
  }

  .containerSelect {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 332px;
      height: 61px;
      border: 1px solid ${Cores.darkGray2};
      border-radius: 4px;
      font-size: 16px;
      letter-spacing: 0.75px;
      line-height: 28px;
  }

  .containerSelect p {
      color: ${Cores.darkGray2};
      margin-bottom: 0;
      display: flex;
      align-items: center;
  }

  .imgSeta {
      margin-left: 40px;
  }

`
export default function ProductFilter(){
return(
  <StyledProductFilter>
    <div className="containerFilter">
        <div className="results">
            <p><span className="text">Resultados para “Tênis” -</span> 389 produtos</p>
        </div>
        <div className="containerSelect">
          <p><span className="text">Ordernar por: </span>mais relevantes <span><img src={seta} alt=""  className='imgSeta'/></span></p>
        </div>
    </div>
  </StyledProductFilter>
)
}