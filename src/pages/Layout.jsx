import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Rotas from "../routes/Rotas";
import { BrowserRouter } from "react-router-dom";
import { MeuContextoProvider } from "../context/Contexto";


export default function Layout(){

    return(
<>
<BrowserRouter>
    {/* <MeuContextoProvider> */}
        <Header/>
            <Rotas/>
        <Footer/>
    {/* </MeuContextoProvider> */}
</BrowserRouter>
</>
   

    )
}