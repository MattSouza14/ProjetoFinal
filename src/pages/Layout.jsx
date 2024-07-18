import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Rotas from "../routes/Rotas";
import { BrowserRouter } from "react-router-dom";


export default function Layout(){

    return(
<>
<BrowserRouter>
    <Header/>

        <Rotas/>

    <Footer/>
</BrowserRouter>
</>
   

    )
}