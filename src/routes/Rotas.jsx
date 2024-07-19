import {Route,Routes} from "react-router-dom"

import HomePage from "../pages/HomePage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductViewPage from "../pages/ProductViewPage"
import PaginaNaoEncotrada from "../pages/PaginaNaoEncontrada"


export default function Rotas(){

    return(
        <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/ProductListing" element={<ProductListingPage/>}/>
            <Route path="/ProductView" element={<ProductViewPage/>}/>
            <Route path="*" element={<PaginaNaoEncotrada/>}/>
            



        </Routes>
    )
}