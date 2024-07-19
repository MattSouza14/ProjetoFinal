import React, { Children, useState } from "react";
import { createContext } from "react";


let meuContexto = createContext()

function MeuContextoProvider({children}){

    let [pessoas, setpessoas]= useState(
        [
            {id: 1, nome:"João", idade:30},
            {id: 2, nome:"Maria", idade:23},
            {id: 3, nome:"Cleitinho", idade:54},
            {id: 4, nome:"Eu", idade:34}

        ]
    )

return (

    <MeuContextoProvider.Porvider value={{pessoas, setpessoas}}>
        {children}
    </MeuContextoProvider.Porvider>


)
}

export {meuContexto, MeuContextoProvider}