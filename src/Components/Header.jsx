import '../assets/logoHeader.png'
import '../assets/carrinhoHeader.png'
import styled from 'styled-components'
import Buttons from './Buttons'
import{NavLink, Link, useLocation} from 'react-router-dom'

export let a = 'a1'

const HeaderStyled = styled.div`
    
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    
    .header1{
        display: flex;
        align-items: center;

        .logo{
            margin-left: 100px;
        }

        input[type=text] {
            font-weight: 400;
            font-size: 16px;
            width: 559px;
            height: 60px;
            padding: 20px;
            margin-left: 30px;
            border: none;
            border-radius: 8px;
            background-color: var(--light-gray-3);
        }
        input[type="text"]:focus {
                outline: none;
            }
        
        a{
            color: var(--dark-gray);
            margin-left: 50px;
        }
        button {
            margin-left: 30px;
        }
        .carrinho {
            margin-left: 80px;
        }
    }
    
    .cadastre-se {
        font-weight: 400;
        font-size: 16px;
        color: var(--dark-gray-2);
        text-underline-offset: 5px;
    }

    nav {
        background-color: white;
        margin-left: 95px;
        width: 500px;
        margin-top: 40px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }
    .a-focus{
        color: var(--primary);
        font-weight: 700;
        font-size: 16px;
        font-weight: bold;
        
        text-underline-offset: 7px;
    }
    
    .a1{
        color: var(--dark-gray-2);
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
    }
`


export default function Header() {

    return (
        
        <HeaderStyled>
            <div className="header1">

                <div className="logo">
                    <img src="src\assets\logoHeader.png" alt="Digital College logo" width="253px" height="44px"/>
                </div>
            
                <div className="">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Pesquisar produto..."/>
                    </form>
                </div>
                
                <div className="">
                    <a href="#" className="cadastre-se">Cadastre-se</a>
                    <Buttons type={'PrimaryButton'} content={'Entrar'}></Buttons>
                </div>
        
                <div className="carrinho">
                    <img src="src\assets\carrinhoHeader.png" alt="Carrinho" width="33px" height="29px"/>
                </div>
            </div>

            <nav>
            <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "a-focus" : "a1"
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/ProductListing"
            className={({ isActive }) =>
                isActive ? "a-focus" : "a1"
            }
            >
            Produtos
            </NavLink>
                {/* <a href="#" className="a1">Produtos</a> */}
                <a href="#" className="a1">Categorias</a>
                <a href="#" className="a1">Meus Pedidos</a>
            </nav>
        </HeaderStyled>
    )
}