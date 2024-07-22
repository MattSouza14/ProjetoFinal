{/* Como chamar os botôes
   
<Buttons type={'PrimaryButton'} content={'TesteTeste'}></Buttons>
<Buttons type={'SecondaryButton'} content={'Testesss'}></Buttons>
<Buttons type={'ShopButton'} content={'Testesss'}></Buttons> */}

import styled from "styled-components";
import { Cores } from "./Cores";
import '../assets/White-Sneakers-PNG-Clipart2.png';


let PrimaryButton = styled.button`

   background-color: ${Cores.primary};
   color: ${Cores.lightGray3};
   line-height: 22px;
   letter-spacing: 0.75px;
   padding: 0px 55px;
   border: none;
   height: 48px;
   border-radius: 10px;
   font-weight: 700;
   font-size: 14px;

   &:hover {
      background-color: #991956;
      /* animation: ease-out;
      animation-duration: 300ms; */
   }
   
`
let SecondaryButton = styled.button`

   background-color: ${Cores.lightGray3};
   color: ${Cores.primary};
   line-height: 22px;
   letter-spacing: 0.75px;
   width: 158px;
   border: none;
   height: 48px;
   border-radius: 10px;
   font-weight: 700;
   font-size: 14px;

   &:hover {
      background-color: #B5B6F2;
      color: #F7F7FC;
      /* animation: ease-out;
      animation-duration: 300ms; */
   }
`
let ShopButton = styled.button`

   background-color: #FFB31F;
   color: ${Cores.lightGray3};
   line-height: 22px;
   letter-spacing: 0.75px;
   width: 158px;
   border: none;
   height: 48px;
   border-radius: 10px;
   font-weight: 700;
   font-size: 14px;

   &:hover {
      background-color: #CF8900;
      /* animation: ease-out;
      animation-duration: 300ms; */
   }
`

let BannerButton= styled.button`
width: 117.81px;
height: 96px;
border: 2px;
border-color: ${Cores.primary};
border-radius: 4px;
`

''
export default function Buttons ({type, content, color}) {

   if (type == 'PrimaryButton') {
      return (
         <PrimaryButton >{content}</PrimaryButton>
   )}
   else if (type == 'SecondaryButton') {
         return (
         <SecondaryButton>{content}</SecondaryButton>
      )}
   else if (type == 'ShopButton') {
      return (
         <ShopButton>{content}</ShopButton>
      )}
   else if(type == 'BannerButton'){
      return(
         <BannerButton style={{backgroundColor: color}}>{<img src='/src/assets/White-Sneakers-PNG-Clipart2.png' className="imagem" alt=""/>}</ BannerButton>
      )
   }
}